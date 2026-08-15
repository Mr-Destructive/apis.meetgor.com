/**
 * pricing-parser.mjs — deterministic, general-purpose LLM pricing extractor.
 *
 * Extracts pricing facts ("$3 per 1M input tokens") from unstructured text
 * WITHOUT any model or provider-specific regexes and WITHOUT an LLM. It is a
 * small rules engine: text → sentences → keyword/unit/currency/direction
 * classification → validation → confidence score.
 *
 * Intended to run as the always-on backbone of the daily tokenomics scraper,
 * with an optional LLM tier filling the ambiguous ~10% (see llm-extractor.mjs).
 *
 * Fully self-contained: Node >= 18 (global fetch not needed here), zero deps.
 * Run `node scripts/lib/pricing-parser.mjs --test` for the self-test suite.
 */

// ─── Currency → USD (approx, static; used only for reporting, never for
// ─── exact billing). Kept deliberately tiny; most LLM pricing is USD already.
const FX_TO_USD = {
  USD: 1, $: 1, US: 1,
  EUR: 1.09, "€": 1.09,
  GBP: 1.27, "£": 1.27,
  INR: 0.012, "₹": 0.012,
  JPY: 0.0067, "¥": 0.0067,
  CNY: 0.14, "¥": 0.14,
  CAD: 0.73, "CA$": 0.73,
  AUD: 0.65, "A$": 0.65,
}

const CURRENCY_RE = /\b(?:USD|EUR|GBP|INR|JPY|CNY|CAD|AUD|CA\$|A\$)\b|\$|€|£|₹|¥/i

// Direction keyword sets (the "small classifier"). Nearness-weighted so a
// sentence like "input tokens $1.25, output $10" resolves each price to the
// correct category even when both keywords appear in one sentence.
const DIRECTION_SETS = {
  input: ["input", "prompt", "ingest", "context in"],
  output: ["output", "completion", "generation", "generated", "response", "answer"],
  cache_read: ["cache read", "cached input", "cache hit", "read from cache", "prompt cache"],
  cache_write: ["cache write", "cache storage", "write to cache", "cache creation", "cache insert"],
  reasoning: ["reasoning", "thinking", "thought tokens", "hidden tokens"],
  audio: ["audio input", "speech input", "voice input"],
  image: ["image input", "vision input", "image tokens", "vision tokens"],
}

const CACHE_WORD_RE = /\bcache(?:d)?\b/i
const READ_WORD_RE = /\b(?:read|hit|input)\b/i
const WRITE_WORD_RE = /\b(?:write|storage|creation|insert)\b/i

// ─── Text normalisation ────────────────────────────────────────────────────────

/**
 * Normalise text for matching: Unicode → ASCII forms (fixes U+2011 hyphen,
 * smart quotes, etc.), lowercased, whitespace collapsed.
 */
export function normalizeText(text) {
  return String(text || "")
    .normalize("NFKC")
    .replace(/[“”"']/g, '"')
    .replace(/\s+/g, " ")
    .trim()
}

export function splitSentences(text) {
  const t = normalizeText(text)
  if (!t) return []
  return t
    .split(/(?<=[.!?])\s+(?=[A-Z0-9$"€£₹¥(])/)
    .map((s) => s.trim())
    .filter(Boolean)
}

function stripHtml(raw) {
  return String(raw || "")
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#x27;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim()
}

// ─── Number parsing ────────────────────────────────────────────────────────────

function parseNumber(raw) {
  const t = String(raw || "").replace(/,/g, "").trim()
  if (!/^\d+(?:\.\d+)?$/.test(t)) return null
  const n = parseFloat(t)
  return Number.isFinite(n) ? n : null
}

// ─── Unit parsing (normalise everything to USD per 1M tokens) ─────────────────

// Multiplier to apply to a raw per-1M token price.
// "per token" → ×1,000,000 · "per 1K" → ×1,000 · "per 1M/million" → ×1 · "per 100K" → ×10
const UNIT_PATTERNS = [
  {
    // "per token(s)"
    re: /\bper\s+(?:1\s+)?token\b/i,
    toPer1M: (val) => val * 1_000_000,
  },
  {
    // "per 1M" / "per 1m" / "per 1,000,000" / "per million" / "per M"
    re: /\bper\s+(?:1[,_ ]?000[,_ ]?000|1\s?m|million|m)\b/i,
    toPer1M: (val) => val,
  },
  {
    // "per 1K" / "per 1,000" / "per 1000 tokens"
    re: /\bper\s+(?:1[,_ ]?000|1k|k)\b/i,
    toPer1M: (val) => val * 1_000,
  },
  {
    // "per 100K" / "per 100k tokens" → value × (1M / count)
    re: /\bper\s+(\d+(?:\.\d+)?)\s*(k|m|b)?\b/i,
    toPer1M: (val, count, scale) => {
      const n = parseNumber(count) || 1
      const mult = scale === "k" ? 1_000 : scale === "m" ? 1_000_000 : scale === "b" ? 1_000_000_000 : 1
      return (val / (n * mult)) * 1_000_000
    },
  },
  {
    // OpenRouter-style "/1M", "$3/1M input"
    re: /\/\s*(?:1[,_ ]?000[,_ ]?000|1\s?m|m)\b/i,
    toPer1M: (val) => val,
  },
  {
    // "/1K"
    re: /\/\s*(?:1[,_ ]?000|1k|k)\b/i,
    toPer1M: (val) => val * 1_000,
  },
  {
    // "/100K" → × (1M / count)
    re: /\/\s*(\d+(?:\.\d+)?)\s*(k|m|b)?/i,
    toPer1M: (val, count, scale) => {
      const n = parseNumber(count) || 1
      const mult = scale === "k" ? 1_000 : scale === "m" ? 1_000_000 : scale === "b" ? 1_000_000_000 : 1
      return (val / (n * mult)) * 1_000_000
    },
  },
]

// Unit nouns that are NOT tokens — "per 1,000 pages", "per image", "per API
// call". Token-adjacent unit patterns would otherwise mis-scale these (e.g.
// "$4 per 1,000 pages" → $4000 per 1M tokens). When detected the price is
// rejected, not guessed.
const NON_TOKEN_UNIT_RE = /\b(?:pages?|images?|photos?|chars?|characters?|requests?|api\s*calls?|documents?|files?|vectors?|rows?|seconds?|minutes?|hours?|gb|mb|kb)\b/i

function findUnit(sentence, start, end, windowSize = 24) {
  // Search the window starting at the price for an explicit unit.
  const window = sentence.slice(start, Math.min(sentence.length, end + windowSize))
  for (const u of UNIT_PATTERNS) {
    const m = window.match(u.re)
    if (m) {
      const after = window.slice(m.index + m[0].length, m.index + m[0].length + 12)
      return { toPer1M: u.toPer1M, raw: m[0], count: m[1], scale: m[2], nonToken: NON_TOKEN_UNIT_RE.test(after) }
    }
  }
  return null
}

function detectUnit(matchText, priceStart, priceEnd, sentence) {
  return findUnit(sentence, priceStart, priceEnd)
}

// Sentence-wide unit (used to fill in units for labeled prices like
// "input: $0.30" when the "per million" phrase appears elsewhere in the sentence).
function sentenceUnit(sentence) {
  return findUnit(sentence, 0, 0, sentence.length)
}

// ─── Currency parsing ──────────────────────────────────────────────────────────

function detectCurrency(text, priceStart, priceEnd) {
  const before = text.slice(Math.max(0, priceStart - 6), priceStart)
  const after = text.slice(priceEnd, Math.min(text.length, priceEnd + 6))
  const context = before + text.slice(priceStart, priceEnd) + after
  const m = context.match(CURRENCY_RE)
  if (!m) return { code: "USD", explicit: false }
  const raw = m[0].toUpperCase()
  const code = raw === "$" ? "USD" : raw === "€" ? "EUR" : raw === "£" ? "GBP" : raw === "₹" ? "INR" : raw === "¥" ? "JPY" : raw
  return { code: code in FX_TO_USD ? code : "USD", explicit: true }
}

// ─── Price extraction ──────────────────────────────────────────────────────────

const PRICE_PATTERN = /\$?\s*(\d+(?:\.\d+)?)\s*(?:cents?|¢)?\s*(?:per|\/)\s*(?:1[,_ ]?000[,_ ]?000|1\s?m|1\s?million|million|m\s+tokens?|1[,_ ]?000|1k|k|\d+(?:\.\d+)?\s*(?:k|m)?\s+tokens?)/gi

// Direction keyword → canonical direction for labeled prices.
const LABEL_DIR = {
  input: "input", prompt: "input", ingest: "input",
  output: "output", completion: "output", generation: "output",
  "cache read": "cache_read", "cached input": "cache_read", "cache hit": "cache_read",
  "cache write": "cache_write", "cache storage": "cache_write",
  reasoning: "reasoning", thinking: "reasoning",
}

// Label BEFORE price: "input: $0.30", "cache read $0.50", "output $10".
const LABELED_PRICE_RE = /\b(input|prompt|ingest|output|completion|generation|cache read|cache storage|cache hit|cache write|cached input|reasoning|thinking)\s*[:=]?\s*\$?\s*(\d+(?:\.\d+)?)\b/gi
// Label AFTER price: "$0.50 output", "$3.20 completion". Requires the $ sign to
// avoid matching things like "1K input tokens".
const PRICE_LABELED_RE = /\$(\d+(?:\.\d+)?)\s*(input|output|prompt|completion|cache read|cache write|reasoning|thinking)\b/gi

/**
 * Extract prices that carry their own direction label but no adjacent unit
 * (e.g. "input: $0.30", "cache write $2.00"). Unit falls back to the sentence's
 * explicit unit, then to per-1M (the de-facto LLM pricing base).
 */
function extractLabeledPrices(sentence) {
  const s = normalizeText(sentence)
  const seen = new Map()
  const push = (dir, val, index, end) => {
    if (val === null || !Number.isFinite(val)) return
    const key = index + ":" + end
    if (seen.has(key)) return
    const local = findUnit(s, index, end, 40)
    const unit = local || sentenceUnit(s)
    if (unit && unit.nonToken) return
    const currency = detectCurrency(s, index, end)
    seen.set(key, {
      valuePer1M: round(unit ? unit.toPer1M(val) : val, 6),
      currency: currency.code,
      currencyExplicit: currency.explicit,
      direction: dir,
      unitRaw: unit ? unit.raw : null,
      cents: false,
      index,
      end,
      labeled: true,
    })
  }
  let m
  while ((m = LABELED_PRICE_RE.exec(s)) !== null) {
    push(LABEL_DIR[m[1].toLowerCase()], parseNumber(m[2]), m.index, m.index + m[0].length)
  }
  while ((m = PRICE_LABELED_RE.exec(s)) !== null) {
    push(LABEL_DIR[m[2].toLowerCase()], parseNumber(m[1]), m.index, m.index + m[0].length)
  }
  return [...seen.values()].sort((a, b) => a.index - b.index)
}

/**
 * Extract raw price candidates from a sentence.
 * Returns [{ value (per-1M USD), currency, direction, confidence, index, end, explicitUnit }]
 */
export function extractPrices(sentence) {
  const s = normalizeText(sentence)
  const labeled = extractLabeledPrices(s)
  const out = []
  let m
  while ((m = PRICE_PATTERN.exec(s)) !== null) {
    const start = m.index
    const end = m.index + m[0].length
    // A labeled price already captured this span with an explicit direction.
    if (labeled.some((l) => start < l.end && end > l.index)) continue
    const cents = /cents?|¢/i.test(m[0])
    let rawVal = parseNumber(m[1])
    if (rawVal === null) continue

    const unit = detectUnit(m[0], start, end, s)
    if (!unit) continue // no explicit token unit → not a token price, skip
    if (unit.nonToken) continue // "per 1,000 pages"/"per image" → not tokens

    // Handle "X cents per million tokens"
    const valuePer1M = cents ? (rawVal / 100) * 1 : unit.toPer1M(rawVal)
    if (!Number.isFinite(valuePer1M)) continue

    const currency = detectCurrency(s, start, end)
    const direction = classifyDirection(s, start, end)

    out.push({
      valuePer1M: round(valuePer1M, 6),
      currency: currency.code,
      currencyExplicit: currency.explicit,
      direction,
      unitRaw: unit.raw,
      cents,
      index: start,
      end,
    })
  }
  return [...labeled, ...out].sort((a, b) => a.index - b.index)
}

function classifyDirection(sentence, priceStart, priceEnd) {
  const pre = sentence.slice(Math.max(0, priceStart - 45), priceStart)
  const post = sentence.slice(priceEnd, Math.min(sentence.length, priceEnd + 45))
  const scores = {}

  // Cache read/write need the word "cache" present nearby, then resolve read vs write.
  const nearCache = /cache/i.test(pre) || /cache/i.test(post)
  const nearRead = READ_WORD_RE.test(pre + " " + post)
  const nearWrite = WRITE_WORD_RE.test(pre + " " + post)

  for (const [dir, kws] of Object.entries(DIRECTION_SETS)) {
    let score = 0
    for (const kw of kws) {
      const preIdx = pre.indexOf(kw)
      const postIdx = post.indexOf(kw)
      const dist = (i) => (i === -1 ? Infinity : i)
      const d = Math.min(dist(preIdx === -1 ? -1 : preIdx), dist(postIdx === -1 ? -1 : postIdx))
      if (d !== Infinity) {
        // Closer keyword → higher score. Longer keywords → slightly stronger.
        score += Math.max(0, 8 - Math.floor(d / 8)) + (kw.split(" ").length > 1 ? 1 : 0)
      }
    }
    if (score > 0) scores[dir] = score
  }

  if (scores.cache_read && !scores.cache_write) return "cache_read"
  if (scores.cache_write && !scores.cache_read) return "cache_write"
  if (scores.input && scores.output) {
    // Both present — pick the nearer one. Exact tie → unknown.
    const a = scores.input > scores.output ? "input" : scores.output > scores.input ? "output" : "unknown"
    if (a !== "unknown") return a
  }

  // Pick the single best non-cache direction, ties → unknown.
  const best = Object.entries(scores)
    .filter(([d]) => !d.startsWith("cache"))
    .sort((x, y) => y[1] - x[1])
  if (best.length && best[0][1] > (best[1] ? best[1][1] : 0)) return best[0][0]

  // Nothing explicit → cache word hints? else unknown.
  if (nearCache) return nearWrite ? "cache_write" : nearRead ? "cache_read" : "cache_read"
  return "unknown"
}

// ─── Model name extraction ─────────────────────────────────────────────────────

// Family list is intentionally large and order matters: longer/more specific
// patterns first so "claude-3.7-sonnet" isn't swallowed by "claude". This list
// only drives *naming*; a general fallback handles brand-new families.
const FAMILY_PATTERNS = [
  { re: /\bgpt[- ]?oss[- ]?[-\w]*/i, family: "gpt-oss", provider: "openai" },
  { re: /\bgpt[- ]?5(?:\.\d+)?(?:[- ](?:mini|nano|pro|high|max|sol|ultra|omni))?/i, family: "gpt", provider: "openai" },
  { re: /\bgpt[- ]?4(?:\.\d+)?(?:[- ](?:o|omni|mini|nano|turbo|max))?/i, family: "gpt", provider: "openai" },
  { re: /\bgpt[- ]?3(?:\.\d+)?[- ]?(?:turbo)?/i, family: "gpt", provider: "openai" },
  { re: /\bo\d(?:[- ](?:mini|pro|preview|high|low))?/i, family: "o-series", provider: "openai" },
  { re: /\bclaude[- ]?(?:(?:opus|sonnet|haiku)[- ]?\d(?:\.\d+)?|\d(?:\.\d+)?[- ]?(?:opus|sonnet|haiku)|opus|sonnet|haiku|\d(?:\.\d+)?)/i, family: "claude", provider: "anthropic" },
  { re: /\bgemini[- ]?\d(?:\.\d+)?(?:[- ](?:flash[- ]lite|flash|pro|nano|ultra))?/i, family: "gemini", provider: "google" },
  { re: /\bgemma[- ]?\d(?:\.\d+)?/i, family: "gemma", provider: "google" },
  { re: /\bqwen(?:[- ]?\d(?:\.\d+)?)?(?:[- ]?(?:vl|omni|math|coder|reasoner|instruct|plus|max))?\b/i, family: "qwen", provider: "alibaba" },
  { re: /\bdeepseek[- ]?(?:v\d|r\d|reasoner|coder|chat)?(?:[- ]?(?:\d+(?:\.\d+)?b?))?/i, family: "deepseek", provider: "deepseek" },
  { re: /\bllama[- ]?\d(?:\.\d+)?[- ]?(?:scout|maverick|behemoth|[\d.]+b|instruct|vision|text)?/i, family: "llama", provider: "meta" },
  { re: /\bmistral[- ]?(?:large|small|medium|nemo|codestral|moderation)?[- ]?\d?(?:\.\d+)?/i, family: "mistral", provider: "mistral" },
  { re: /\bmixtral[- ]?[\d.]+b?/i, family: "mixtral", provider: "mistral" },
  { re: /\bcodestral(?:[- ]?\d+)?/i, family: "codestral", provider: "mistral" },
  { re: /\bgrok[- ]?\d(?:\.\d+)?(?:[- ](?:mini|fast|thinking|image|reasoning|compact))?/i, family: "grok", provider: "xai" },
  { re: /\bcommand[- ]r(?:[+]| plus)?(?:[- ]?\d(?:\.\d+)?)?/i, family: "command-r", provider: "cohere" },
  { re: /\bphi[- ]?\d(?:\.\d+)?/i, family: "phi", provider: "microsoft" },
  { re: /\bglm[- ]?\d(?:\.\d+)?/i, family: "glm", provider: "zhipu" },
  { re: /\bminimax[- ]?[-\w]*/i, family: "minimax", provider: "minimax" },
  { re: /\bmoonshot[- ]?[-\w]*/i, family: "moonshot", provider: "moonshot" },
  { re: /\bkimi[- ]?[-\w]*/i, family: "moonshot", provider: "moonshot" },
  { re: /\bnemotron[- ]?[-\w]*/i, family: "nemotron", provider: "nvidia" },
  { re: /\bfalcon[- ]?\d(?:\.\d+)?/i, family: "falcon", provider: "tii" },
  { re: /\bgranite[- ]?[-\w]*/i, family: "granite", provider: "ibm" },
  { re: /\baya[- ]?\d(?:\.\d+)?/i, family: "aya", provider: "cohere" },
  { re: /\bjamba[- ]?\d?[-\w]*/i, family: "jamba", provider: "ai21" },
  { re: /\bolmo[- ]?\d(?:\.\d+)?/i, family: "olmo", provider: "ai2" },
  { re: /\bdbrx[- ]?[-\w]*/i, family: "dbrx", provider: "databricks" },
  { re: /\bern[e]?ie[- ]?[-\w]*/i, family: "ernie", provider: "baidu" },
  { re: /\byi(?:[- ]?[\w.\d]+)?\b/i, family: "yi", provider: "01ai" },
  { re: /\bgpt[- ]?[-\w]*/i, family: "gpt", provider: "openai" },
  { re: /\bmistral\b/i, family: "mistral", provider: "mistral" },
  { re: /\bllama\b/i, family: "llama", provider: "meta" },
]

// General fallback: "Brand 1.5", "Brand-3.1" — requires a version number so it
// never matches arbitrary prose. Only accepted when it appears near pricing
// context (checked by the caller) and never when it overlaps a known family.
const GENERAL_MODEL_RE = /\b[A-Z][A-Za-z0-9]*(?:[-. ]\d+(?:\.\d+)?)+\b/g
const YEAR_RE = /\b(?:19|20)\d{2}\b/

/**
 * Extract candidate model names from a sentence.
 * Returns [{ name, id, family, provider, known, index, end }]
 */
export function extractModelNames(sentence) {
  const s = normalizeText(sentence)
  const found = []
  for (const { re, family, provider } of FAMILY_PATTERNS) {
    // Fresh global regex per call so lastIndex never leaks between sentences.
    const reGlobal = new RegExp(re.source, "gi")
    let m
    while ((m = reGlobal.exec(s)) !== null) {
      const name = cleanModelName(m[0])
      if (!name) continue
      found.push({ name, id: slug(name), family, provider, known: true, index: m.index, end: m.index + m[0].length })
    }
  }

  // General fallback for brand-new families.
  const general = []
  let m
  while ((m = GENERAL_MODEL_RE.exec(s)) !== null) {
    const tok = m[0].trim()
    if (YEAR_RE.test(tok)) continue
    if (!/\d/.test(tok)) continue
    const name = cleanModelName(tok)
    if (!name) continue
    general.push({ name, id: slug(name), family: name, provider: "unknown", known: false, index: m.index, end: m.index + m[0].length })
  }
  // Drop general-fallback matches that overlap a known-family match (e.g.
  // "Sonnet 4" inside "Claude Sonnet 4", "Grok 4" inside "Grok 4 mini").
  for (const g of general) {
    const overlaps = found.some((f) => g.index < f.end && g.end > f.index)
    if (!overlaps) found.push(g)
  }

  // Drop known-family matches fully contained within another known-family match
  // (e.g. "GPT-4" inside "GPT-4.1", "Mistral" inside "Mistral Nemo").
  const kept = found.filter(
    (f) => !found.some(
      (g) => g !== f && g.index <= f.index && g.end >= f.end && (g.index < f.index || g.end > f.end)
    )
  )

  // Dedupe by id (first occurrence wins — earlier = more specific).
  const seen = new Map()
  for (const f of kept) {
    if (!seen.has(f.id)) seen.set(f.id, f)
  }
  return [...seen.values()].sort((a, b) => a.index - b.index)
}

function cleanModelName(raw) {
  const t = String(raw).trim().replace(/\s+/g, " ").replace(/\b(\w)/g, (c) => c.toUpperCase())
  return t
}

function slug(name) {
  return String(name).toLowerCase().replace(/\s+/g, "-")
}

// ─── Context window extraction (whole text) ────────────────────────────────────

export function extractContextWindow(text) {
  const s = normalizeText(text)
  const patterns = [
    // "1M context", "128k context window"
    /(\d+(?:\.\d+)?)\s*(k|m|b)\b[^.]{0,40}\bcontext\b/gi,
    // "context window of 128k tokens", "context of 2M"
    /\bcontext\s*(?:window|length)?\s*(?:of|:|\bis)?\s*(\d+(?:[,_ ]?\d+){0,3})\s*(k|m|b)?\s*(?:tokens?)?/gi,
    // "supports up to 4M tokens"
    /(?:up\s*to|as\s*many\s*as|of|:)\s*(\d+(?:\.\d+)?)\s*(k|m|b)\s*tokens?/gi,
  ]
  let best = 0
  for (const re of patterns) {
    let m
    while ((m = re.exec(s)) !== null) {
      let tokens = 0
      if (m[2]) {
        const n = parseNumber(m[1])
        const mult = m[2].toLowerCase() === "k" ? 1_000 : m[2].toLowerCase() === "m" ? 1_000_000 : 1_000_000_000
        tokens = (n || 0) * mult
      } else {
        // Handle glued suffixes like "128k" captured whole by the number group.
        const n = parseNumber(m[1])
        const suffix = /(k|m|b)\s*$/.exec(m[1])
        const mult = !suffix ? 1 : suffix[1].toLowerCase() === "k" ? 1_000 : suffix[1].toLowerCase() === "m" ? 1_000_000 : 1_000_000_000
        tokens = (n || 0) * mult
      }
      if (tokens > best && tokens < 100_000_000_000) best = tokens
    }
  }
  return best
}

// ─── Pricing facts (combine model + prices within a sentence) ─────────────────

export function extractPricingFacts(item) {
  const { title, text, url } = item
  const contextWindow = extractContextWindow(text || title)
  const sentences = [...splitSentences(title), ...splitSentences(text)]

  // modelId -> accumulated record
  const records = new Map()

  for (const sentence of sentences) {
    const prices = extractPrices(sentence)
    if (!prices.length) continue
    const models = extractModelNames(sentence)
    if (!models.length) continue

    // Associate each price with the nearest model in the sentence.
    const perModel = new Map()
    for (const p of prices) {
      let best = null
      let bestDist = Infinity
      for (const mdl of models) {
        const d = Math.min(Math.abs(p.index - mdl.index), Math.abs(p.end - mdl.index))
        if (d < bestDist) {
          bestDist = d
          best = mdl
        }
      }
      // Window is generous: sentences are already split, and longest ones
      // (with context-window clauses) run ~130 chars, so 200 keeps prices
      // attached to the model named at the start of a long sentence.
      if (!best || bestDist > 200) continue
      if (!perModel.has(best.id)) perModel.set(best.id, { model: best, prices: [] })
      perModel.get(best.id).prices.push(p)
    }

    for (const { model, prices: ps } of perModel.values()) {
      ps.sort((a, b) => a.index - b.index)
      const resolved = resolveDirections(ps)
      if (!resolved || !resolved.input || !resolved.output) continue

      const rec = records.get(model.id) || {
        modelId: model.id,
        name: model.name,
        family: model.family,
        providerId: model.provider,
        knownFamily: model.known,
        inputPricePer1M: null,
        outputPricePer1M: null,
        cacheReadPricePer1M: null,
        cacheWritePricePer1M: null,
        contextWindow: contextWindow || 0,
        confidence: 0,
        note: [],
        sources: [],
      }
      // First (most complete) price wins per slot.
      if (rec.inputPricePer1M === null) {
        rec.inputPricePer1M = toUSD(resolved.input)
        rec.note.push(...resolved.inputNote)
      }
      if (rec.outputPricePer1M === null) {
        rec.outputPricePer1M = toUSD(resolved.output)
        rec.note.push(...resolved.outputNote)
      }
      if (rec.cacheReadPricePer1M === null && resolved.cacheRead) rec.cacheReadPricePer1M = toUSD(resolved.cacheRead)
      if (rec.cacheWritePricePer1M === null && resolved.cacheWrite) rec.cacheWritePricePer1M = toUSD(resolved.cacheWrite)
      if (rec.contextWindow === 0 && contextWindow) rec.contextWindow = contextWindow
      if (url && !rec.sources.includes(url)) rec.sources.push(url)
      records.set(model.id, rec)
    }
  }

  const out = []
  for (const rec of records.values()) {
    if (rec.inputPricePer1M === null || rec.outputPricePer1M === null) continue
    rec.confidence = scoreConfidence(rec)
    if (validate(rec)) out.push(rec)
  }
  return out
}

/**
 * Turn an ordered list of prices (for one model, one sentence) into
 * input/output/cache slots. Handles the two dominant phrasings:
 *   "input $3 / output $15"            → explicit directions
 *   "input: $3, output: $15"           → listing order fallback
 *   "$3 and $15 per million tokens"    → listing order fallback
 */
function resolveDirections(prices) {
  const input = prices.find((p) => p.direction === "input")
  const output = prices.find((p) => p.direction === "output")
  const cacheRead = prices.find((p) => p.direction === "cache_read")
  const cacheWrite = prices.find((p) => p.direction === "cache_write")

  if (input && output) {
    return { input, output, cacheRead, cacheWrite, inputNote: [], outputNote: [] }
  }

  // Listing-order fallback: first two input/output/unknown prices → input, output.
  const candid = prices.filter((p) => ["input", "output", "unknown"].includes(p.direction))
  if (candid.length >= 2) {
    const a = input || candid[0]
    const b = output || (candid[1] === input ? candid[2] : candid[1])
    if (a && b && a !== b) {
      return { input: a, output: b, cacheRead, cacheWrite, inputNote: ["price direction inferred from listing order"], outputNote: [] }
    }
  }
  if (input && !output && candid.length >= 2) {
    const b = candid.find((c) => c !== input)
    if (b) return { input, output: b, cacheRead, cacheWrite, inputNote: [], outputNote: ["output price inferred from second listed price"] }
  }
  if (!input && output && candid.length >= 2) {
    const a = candid.find((c) => c !== output)
    if (a) return { input: a, output, cacheRead, cacheWrite, inputNote: ["input price inferred from first listed price"], outputNote: [] }
  }
  return null
}

function toUSD(p) {
  const fx = FX_TO_USD[p.currency] || 1
  return p.currency === "USD" ? p.valuePer1M : round(p.valuePer1M * fx, 6)
}

function scoreConfidence(rec) {
  let score = 0
  if (rec.inputPricePer1M !== null && rec.outputPricePer1M !== null) score += 2
  if (rec.knownFamily) score += 1
  else score += 0.5
  if (rec.contextWindow) score += 0.5
  if (rec.cacheReadPricePer1M !== null || rec.cacheWritePricePer1M !== null) score += 0.5
  return round(score, 1)
}

function validate(rec) {
  if (rec.inputPricePer1M === null || rec.outputPricePer1M === null) return false
  if (rec.inputPricePer1M < 0 || rec.outputPricePer1M < 0) return false
  if (rec.inputPricePer1M > 10_000 || rec.outputPricePer1M > 10_000) return false
  if (rec.contextWindow < 0) return false
  return true
}

function round(n, dp) {
  const f = 10 ** dp
  return Math.round(n * f) / f
}

// ─── Module runner: `node pricing-parser.mjs --test` ──────────────────────────

const TESTS = [
  {
    label: "classic two-line pricing",
    text: "Claude Sonnet 4 costs $3 per million input tokens and $15 per million output tokens.",
    want: { id: "claude-sonnet-4", input: 3, output: 15 },
  },
  {
    label: "slash + 1M + multi-word model",
    text: "Gemini 2.5 Pro is now priced at $1.25/1M input tokens and $10/1M output tokens.",
    want: { id: "gemini-2.5-pro", input: 1.25, output: 10 },
  },
  {
    label: "OpenRouter /1M style",
    text: "Qwen 3.8 27B: $0.45/1M prompt, $3.20/1M completion.",
    want: { id: "qwen-3.8", input: 0.45, output: 3.2 },
  },
  {
    label: "cents",
    text: "GPT-5.6 preview: 25 cents per million input tokens and 60 cents per million output tokens.",
    want: { id: "gpt-5.6", input: 0.25, output: 0.6 },
  },
  {
    label: "per 1K tokens",
    text: "DeepSeek R1 costs $0.55 per 1K input tokens and $2.19 per 1K output tokens.",
    want: { id: "deepseek-r1", input: 550, output: 2190 },
  },
  {
    label: "input:/output: listing",
    text: "Grok 4 mini pricing — input: $0.30, output: $0.50 per million tokens.",
    want: { id: "grok-4-mini", input: 0.3, output: 0.5 },
  },
  {
    label: "general fallback new family",
    text: "Starforge 2.5 launched at $0.80 per 1M input and $2.40 per 1M output tokens.",
    want: { id: "starforge-2.5", input: 0.8, output: 2.4 },
  },
  {
    label: "context window",
    text: "Mistral Nemo has a context window of 128k tokens and costs $0.15 per million input tokens and $0.60 per million output tokens.",
    want: { id: "mistral-nemo", input: 0.15, output: 0.6, context: 128_000 },
  },
  {
    label: "per-page pricing is not emitted (non-token unit)",
    text: "Mistral OCR 4 is priced at $4 per 1,000 pages and $2 per 1,000 pages for batch.",
    want: { id: "ocr-4", none: true },
  },
  {
    label: "cache-only prices are not emitted (need input+output)",
    text: "GPT-4.1 cache read is $0.50 per 1M tokens; cache write $2.00 per 1M.",
    want: { id: "gpt-4.1", none: true },
  },
  {
    label: "cache alongside full pricing",
    text: "GPT-4.1 costs $2 per 1M input tokens, $8 per 1M output tokens; cache read $0.50, cache write $2.00.",
    want: { id: "gpt-4.1", input: 2, output: 8, cacheRead: 0.5, cacheWrite: 2 },
  },
]

function runTests() {
  let pass = 0
  for (const t of TESTS) {
    const item = { title: "", text: t.text, url: "test://case", source: "test" }
    const facts = extractPricingFacts(item)
    const f = facts.find((x) => x.modelId === t.want.id)
    const ok = t.want.none
      ? !f
      : f &&
        (t.want.input === undefined || f.inputPricePer1M === t.want.input) &&
        (t.want.output === undefined || f.outputPricePer1M === t.want.output) &&
        (t.want.context === undefined || f.contextWindow === t.want.context) &&
        (t.want.cacheRead === undefined || f.cacheReadPricePer1M === t.want.cacheRead) &&
        (t.want.cacheWrite === undefined || f.cacheWritePricePer1M === t.want.cacheWrite)
    if (ok) {
      pass++
      console.log(`  ✓ ${t.label}`)
    } else {
      console.log(`  ✗ ${t.label}`)
      console.log(`    wanted: ${JSON.stringify(t.want)}`)
      console.log(`    got:    ${JSON.stringify(f || null)}`)
    }
  }
  console.log(`\n${pass}/${TESTS.length} parser tests passed.`)
  process.exit(pass === TESTS.length ? 0 : 1)
}

if (process.argv.includes("--test")) runTests()

export { stripHtml, parseNumber, round }
