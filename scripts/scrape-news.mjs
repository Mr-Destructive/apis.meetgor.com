/**
 * Tokenomics News Scraper
 *
 * Runs daily in the tokenomics refresh workflow alongside scrape-pricing.mjs.
 * It pulls pricing announcements from Hacker News (Algolia API) and official
 * lab RSS feeds, runs every title + body through the deterministic pricing
 * parser (scripts/lib/pricing-parser.mjs), and writes the extracted facts to
 * src/tokenomics/news-models.ts as TokenomicsModel entries tagged "news".
 *
 * The parser is intentionally an always-on rules engine (no LLM, no keys):
 * models, prices, units, directions and context windows are classified from
 * plain sentences. Low-confidence and non-model matches are discarded here.
 */

import { writeFileSync, readFileSync, existsSync } from "fs"
import { resolve, dirname } from "path"
import { fileURLToPath } from "url"
import { extractPricingFacts, stripHtml } from "./lib/pricing-parser.mjs"

const __dirname = dirname(fileURLToPath(import.meta.url))
const NEWS_MODELS_FILE = resolve(__dirname, "../src/tokenomics/news-models.ts")

const HN_QUERIES = ["per million tokens", "LLM pricing"]
const RSS_FEEDS = [
  "https://openai.com/news/rss.xml",
  "https://blog.google/technology/ai/rss/",
  "https://developers.googleblog.com/feeds/posts/default",
  "https://blog.research.google/feeds/posts/default",
  "https://huggingface.co/blog/feed.xml",
]

// Only entries newer than this are fetched/parsed. The cron runs daily, so 48h
// covers yesterday's announcements while giving a buffer for missed runs — and
// keeps us from re-parsing the entire feed archive every day.
const SINCE_HOURS = parseInt(process.env.SINCE_HOURS || "48", 10)

function withinWindow(dateStr, hours) {
  if (!dateStr) return false
  const t = new Date(dateStr).getTime()
  if (Number.isNaN(t)) return false
  return Date.now() - t <= hours * 3600 * 1000
}

// Facts below these confidence scores are too speculative for the public API.
// Known-family facts only need input+output (2) + family (1). Brand-new
// families (general fallback) need the extra boost from a context window or
// cache price so "Brand 2.5" noise is filtered out.
const MIN_CONFIDENCE_KNOWN = 2.5
const MIN_CONFIDENCE_UNKNOWN = 3.0

// A single announcement is only trusted when it comes straight from an official
// provider/blog domain; otherwise the same fact must be corroborated by a
// second, distinct domain. This keeps a random blog's bad numbers out of the API.
const AUTHORITATIVE_DOMAINS = new Set([
  "openai.com", "anthropic.com", "blog.google", "googleblog.com", "google.dev", "ai.google.dev",
  "mistral.ai", "x.ai", "deepseek.com", "cohere.com", "huggingface.co",
  "z.ai", "bigmodel.cn", "qwenlm.github.io", "kimi.moonshot.cn", "moonshot.cn",
  "microsoft.com", "azure.com", "ai.meta.com", "meta.ai", "github.com",
  "groq.com", "together.ai", "perplexity.ai", "liquid.ai", "cerebras.ai",
  "replicate.com", "databricks.com", "ibm.com", "nvidia.com", "ai21.com", "ai21labs.com",
])

function isAuthoritative(url) {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "")
    return [...AUTHORITATIVE_DOMAINS].some((d) => host === d || host.endsWith("." + d))
  } catch {
    return false
  }
}

// Model names without any version digit ("Claude Sonnet", "Mistral Large") are
// too ambiguous to publish as a priced entry.
function isVersioned(name) {
  return /\d/.test(name)
}

// ─── Linked-page fetching ────────────────────────────────────────────────────
// HN pricing stories are link posts (story_text is empty), so the actual
// numbers live on the linked announcement page. Fetch those pages — but only
// from authoritative domains, with a hard budget, and strip page chrome
// (scripts, nav, buttons) before parsing so marketing/UI text can't leak in.

const UA = "Mozilla/5.0 (compatible; apis.meetgor.com-tokenomics/1.0)"
const MAX_PAGES = 30
const MAX_PAGE_BYTES = 3_000_000

function stripPageChrome(html) {
  return stripHtml(
    String(html).replace(/<(script|style|svg|nav|footer|header|aside|form|noscript|iframe|button)[\s\S]*?<\/\1>/gi, " ")
  )
}

async function fetchPage(url) {
  try {
    const res = await fetch(url, { headers: { "User-Agent": UA }, redirect: "follow", signal: AbortSignal.timeout(15_000) })
    if (!res.ok) return null
    const html = await res.text()
    if (html.length > MAX_PAGE_BYTES) return null
    const text = stripPageChrome(html)
    return text.length > 20 ? text : null
  } catch {
    return null
  }
}

async function fetchText(url, headers = {}) {
  const res = await fetch(url, { headers, signal: AbortSignal.timeout(15_000) })
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`)
  return res.text()
}

// ─── Feed parsing (lightweight; no XML deps) ─────────────────────────────────

function parseFeed(xml) {
  const items = []
  const blockRe = /<(item|entry)\b[^>]*>([\s\S]*?)<\/(?:item|entry)>/gi
  const tag = (name) => new RegExp(`<${name}\\b[^>]*>([\\s\\S]*?)<\\/${name}>`, "i")
  const attrLink = /<link\b[^>]*href="([^"]+)"/i

  let m
  while ((m = blockRe.exec(xml)) !== null) {
    const block = m[2]
    const pick = (name) => {
      const t = block.match(tag(name))
      return t ? stripHtml(t[1]).trim() : ""
    }
    let link = ""
    const linkMatch = block.match(tag("link"))
    link = linkMatch ? stripHtml(linkMatch[1]).trim() : ""
    const href = block.match(attrLink)
    if (!link && href) link = href[1]

    items.push({
      title: pick("title"),
      link,
      description: pick("description"),
      content: pick("content") || pick("encoded") || pick("summary"),
      date: pick("pubDate") || pick("published") || pick("updated"),
    })
  }
  return items
}

async function fetchRssItems(feed) {
  try {
    const xml = await fetchText(feed, { "User-Agent": "apis.meetgor.com-tokenomics/1.0" })
    return parseFeed(xml).filter((it) => it.title && withinWindow(it.date, SINCE_HOURS))
  } catch (e) {
    console.warn(`  ⚠ skip feed ${feed}: ${e.message}`)
    return []
  }
}

async function fetchHnItems(query) {
  const since = Math.floor(Date.now() / 1000) - SINCE_HOURS * 3600
  const url = `https://hn.algolia.com/api/v1/search_by_date?query=${encodeURIComponent(query)}&tags=story&hitsPerPage=50&numericFilters=created_at_i%3E${since}`
  try {
    const xml = await fetchText(url, { "User-Agent": "apis.meetgor.com-tokenomics/1.0" })
    const data = JSON.parse(xml)
    return (data.hits || []).map((h) => ({
      title: h.title || "",
      link: h.url || `https://news.ycombinator.com/item?id=${h.objectID}`,
      description: h.story_text || "",
      content: "",
      date: h.created_at || "",
    }))
  } catch (e) {
    console.warn(`  ⚠ skip HN query "${query}": ${e.message}`)
    return []
  }
}

// ─── Fact collection & merging ────────────────────────────────────────────────

function mergeFacts(a, b) {
  return {
    modelId: a.modelId,
    name: a.name,
    family: a.family,
    providerId: a.providerId,
    knownFamily: a.knownFamily || b.knownFamily,
    contextWindow: Math.max(a.contextWindow || 0, b.contextWindow || 0),
    confidence: Math.max(a.confidence, b.confidence),
    sources: [...new Set([...a.sources, ...b.sources])],
    inputPricePer1M: a.inputPricePer1M,
    outputPricePer1M: a.outputPricePer1M,
    cacheReadPricePer1M: a.cacheReadPricePer1M ?? b.cacheReadPricePer1M,
    cacheWritePricePer1M: a.cacheWritePricePer1M ?? b.cacheWritePricePer1M,
    note: [...new Set([...a.note, ...b.note])],
  }
}

function factToTier(fact, date) {
  return {
    inputPricePer1M: fact.inputPricePer1M,
    outputPricePer1M: fact.outputPricePer1M,
    ...(fact.cacheReadPricePer1M != null ? { cacheReadPricePer1M: fact.cacheReadPricePer1M } : {}),
    ...(fact.cacheWritePricePer1M != null ? { cacheWritePricePer1M: fact.cacheWritePricePer1M } : {}),
    currency: "USD",
    effectiveDate: date,
    source: fact.sources[0],
    ...(fact.sources.length > 1 ? { notes: `Cross-checked across: ${fact.sources.join(", ")}` } : {}),
  }
}

function factToModel(fact, date) {
  return {
    id: `news-${fact.modelId}`,
    name: fact.name,
    providerId: fact.providerId,
    family: fact.family,
    description: "",
    status: "active",
    contextWindow: fact.contextWindow || 0,
    maxOutputTokens: 0,
    modalities: { input: ["text"], output: ["text"] },
    pricing: [factToTier(fact, date)],
    tags: ["news"],
  }
}

// Load the previously generated file so we can merge instead of stomping on
// it. Keeps multi-day accumulation free of duplicates and avoids re-stamping
// today's date on facts the cron already captured.
function loadExisting() {
  if (!existsSync(NEWS_MODELS_FILE)) return new Map()
  const src = readFileSync(NEWS_MODELS_FILE, "utf8")
  const m = src.match(/export const newsModels: TokenomicsModel\[\] = (\[[\s\S]*\])\s*$/)
  if (!m) return new Map()
  try {
    const models = JSON.parse(m[1])
    return new Map(models.map((x) => [x.id, x]))
  } catch {
    return new Map()
  }
}

function tierEquals(a, b) {
  return a.inputPricePer1M === b.inputPricePer1M &&
    a.outputPricePer1M === b.outputPricePer1M &&
    (a.cacheReadPricePer1M ?? 0) === (b.cacheReadPricePer1M ?? 0) &&
    (a.cacheWritePricePer1M ?? 0) === (b.cacheWritePricePer1M ?? 0)
}

async function main() {
  const date = new Date().toISOString().split("T")[0]

  console.log("Fetching pricing announcements from Hacker News...")
  const hnSeen = new Set()
  const hnItems = []
  for (const q of HN_QUERIES) {
    for (const it of await fetchHnItems(q)) {
      if (it.title && !hnSeen.has(it.title)) {
        hnSeen.add(it.title)
        hnItems.push(it)
      }
    }
  }
  console.log(`  ${hnItems.length} HN stories`)

  console.log("Fetching lab RSS feeds...")
  const rssItems = []
  for (const feed of RSS_FEEDS) {
    const items = await fetchRssItems(feed)
    console.log(`  ${feed}: ${items.length} items`)
    rssItems.push(...items)
  }

  const allItems = [
    ...rssItems.map((it) => ({ ...it, source: "rss" })),
    ...hnItems.map((it) => ({ ...it, source: "hackernews" })),
  ]
  console.log(`Total items: ${allItems.length}`)

  console.log("Fetching linked announcement pages (authoritative domains only)...")
  const pageTexts = new Map()
  const seenLinks = new Set()
  for (const it of allItems) {
    if (pageTexts.size >= MAX_PAGES) break
    if (!it.link || seenLinks.has(it.link) || !isAuthoritative(it.link)) continue
    seenLinks.add(it.link)
    const page = await fetchPage(it.link)
    if (page) pageTexts.set(it.link, page)
  }
  console.log(`  fetched ${pageTexts.size} pages`)

  const byId = new Map()
  let processed = 0
  for (const it of allItems) {
    const text = [it.description, it.content, pageTexts.get(it.link)].filter(Boolean).join(" ")
    if (!it.title && !text) continue
    const facts = extractPricingFacts({ title: it.title, text, url: it.link || "", source: it.source })
    processed++
    for (const fact of facts) {
      const existing = byId.get(fact.modelId)
      byId.set(fact.modelId, existing ? mergeFacts(existing, fact) : fact)
    }
  }
  console.log(`Parsed ${processed} items → ${byId.size} candidate facts`)

  const kept = []
  for (const fact of byId.values()) {
    const min = fact.knownFamily ? MIN_CONFIDENCE_KNOWN : MIN_CONFIDENCE_UNKNOWN
    if (fact.confidence < min) continue
    if (!isVersioned(fact.name)) continue
    const domains = new Set(fact.sources.map((s) => {
      try { return new URL(s).hostname } catch { return s }
    }))
    const corroborated = fact.sources.some(isAuthoritative) || domains.size >= 2
    if (!corroborated) continue
    kept.push(fact)
  }
  kept.sort((a, b) => b.confidence - a.confidence || b.sources.length - a.sources.length)
  console.log(`${kept.length} facts pass confidence + authority gates`)

  // Merge into the existing file: same model → update the current tier only
  // when the price actually changed (and push the old one to history);
  // otherwise keep the record as-is so the daily run is a no-op.
  const merged = loadExisting()
  const tier = (fact) => factToTier(fact, date)
  for (const fact of kept) {
    const id = `news-${fact.modelId}`
    const existing = merged.get(id)
    if (!existing) {
      merged.set(id, factToModel(fact, date))
      continue
    }
    const fresh = tier(fact)
    if (!tierEquals(existing.pricing[0], fresh)) {
      existing.pricing = [fresh, ...existing.pricing.filter((t) => t.effectiveDate !== date)].slice(0, 3)
    }
    existing.contextWindow = Math.max(existing.contextWindow, fact.contextWindow || 0)
  }

  const models = [...merged.values()].sort((a, b) => a.id.localeCompare(b.id))

  if (models.length === 0) {
    console.warn("No news-derived facts; leaving news-models.ts empty/untouched.")
  }

  const tsContent = `// Generated by scripts/scrape-news.mjs on ${date} — do not edit by hand.
import { type TokenomicsModel } from "./seed"

export const newsModels: TokenomicsModel[] = ${JSON.stringify(models, null, 2)}
`
  if (existsSync(NEWS_MODELS_FILE) && readFileSync(NEWS_MODELS_FILE, "utf8") === tsContent) {
    console.log("news-models.ts unchanged — no new facts.")
    return
  }
  writeFileSync(NEWS_MODELS_FILE, tsContent)
  console.log(`Wrote ${models.length} news-derived models to news-models.ts`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
