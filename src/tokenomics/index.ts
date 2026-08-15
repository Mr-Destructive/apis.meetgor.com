import { providers, models, type TokenomicsModel, type PricingTier } from "./seed"
import { orModels } from "./or-models"
import { newsModels } from "./news-models"

interface Env {
  DB?: D1Database
  OPENROUTER_API_KEY?: string
}

async function getAllModels(env: Env): Promise<TokenomicsModel[]> {
  // Merge curated models with the statically scraped OpenRouter catalogue and
  // any pricing facts mined from recent news/feeds by scripts/scrape-news.mjs.
  return [...models, ...orModels, ...newsModels]
}

// ─── Helpers ────────────────────────────────────────────────────────────────


function problem(status: number, title: string, detail: string, instance?: string) {
  return Response.json(
    {
      type: `https://apis.meetgor.com/problems/${title.toLowerCase().replace(/\s+/g, "-")}`,
      title,
      status,
      detail,
      instance,
    },
    { status, headers: { "Content-Type": "application/problem+json" } }
  )
}

function ok(body: unknown) {
  return Response.json(body)
}

function urlFor(path: string): string {
  return `/tokenomics/v1${path}`
}

function links(spec: Record<string, string>): Record<string, string> {
  const result: Record<string, string> = {}
  for (const [key, path] of Object.entries(spec)) {
    result[key] = urlFor(path)
  }
  return result
}

function parseListParams(url: URL) {
  const limit = Math.min(Math.max(parseInt(url.searchParams.get("limit") || "20") || 20, 1), 100)
  const offset = Math.max(parseInt(url.searchParams.get("offset") || "0") || 0, 0)
  const search = url.searchParams.get("search") || undefined
  return { limit, offset, search }
}

function paginate<T>(items: T[], limit: number, offset: number) {
  return items.slice(offset, offset + limit)
}

// ─── Serializers ─────────────────────────────────────────────────────────────

function serializeProvider(p: typeof providers[0]) {
  const modelCount = models.filter(m => m.providerId === p.id).length
  return {
    id: p.id,
    name: p.name,
    description: p.description,
    website: p.website,
    pricingUrl: p.pricingUrl,
    countryCode: p.countryCode,
    status: p.status,
    modelCount,
    links: links({
      self: `/providers/${p.id}`,
      models: `/models?providerId=${p.id}`,
    }),
  }
}

function serializeModelSummary(m: TokenomicsModel) {
  const current = m.pricing[0]
  return {
    id: m.id,
    name: m.name,
    providerId: m.providerId,
    family: m.family,
    status: m.status,
    contextWindow: m.contextWindow,
    maxOutputTokens: m.maxOutputTokens,
    modalities: m.modalities,
    tags: m.tags,
    // Convenience: current pricing snapshot
    currentPricing: {
      inputPricePer1M: current.inputPricePer1M,
      outputPricePer1M: current.outputPricePer1M,
      cacheReadPricePer1M: current.cacheReadPricePer1M,
      cacheWritePricePer1M: current.cacheWritePricePer1M,
      batchInputPricePer1M: current.batchInputPricePer1M,
      batchOutputPricePer1M: current.batchOutputPricePer1M,
      reasoningPricePer1M: current.reasoningPricePer1M,
      currency: current.currency,
      effectiveDate: current.effectiveDate,
      source: current.source,
    },
    links: links({
      self: `/models/${m.id}`,
      pricing: `/models/${m.id}/pricing`,
      provider: `/providers/${m.providerId}`,
    }),
  }
}

function serializeModelFull(m: TokenomicsModel) {
  return {
    id: m.id,
    name: m.name,
    providerId: m.providerId,
    family: m.family,
    description: m.description,
    status: m.status,
    contextWindow: m.contextWindow,
    maxOutputTokens: m.maxOutputTokens,
    modalities: m.modalities,
    knowledgeCutoff: m.knowledgeCutoff,
    releaseDate: m.releaseDate,
    deprecationDate: m.deprecationDate,
    tags: m.tags,
    openWeightsUrl: m.openWeightsUrl,
    pricing: m.pricing,
    links: links({
      self: `/models/${m.id}`,
      pricing: `/models/${m.id}/pricing`,
      provider: `/providers/${m.providerId}`,
    }),
  }
}

// ─── Route Handlers ──────────────────────────────────────────────────────────

async function handleListProviders(url: URL): Promise<Response> {
  const { limit, offset, search } = parseListParams(url)
  let items = providers.map(serializeProvider)
  if (search) {
    const q = search.toLowerCase()
    items = items.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    )
  }
  return ok({ items: paginate(items, limit, offset), total: items.length, limit, offset })
}

async function handleGetProvider(providerId: string): Promise<Response> {
  const p = providers.find(x => x.id === providerId)
  if (!p) return problem(404, "Resource Not Found", "The requested provider does not exist.", urlFor(`/providers/${providerId}`))
  return ok(serializeProvider(p))
}

async function handleListModels(request: Request, url: URL, env: Env): Promise<Response> {
  const isQuery = request.method === "QUERY"
  let body: any = {}
  if (isQuery) {
    try {
      body = await request.json()
    } catch {
      return problem(400, "Bad Request", "Request body must be valid JSON for QUERY method.")
    }
  }

  const { limit, offset, search } = isQuery ? 
    { 
      limit: Math.min(Math.max(body.limit || parseInt(url.searchParams.get("limit") || "20") || 20, 1), 100),
      offset: Math.max(body.offset || parseInt(url.searchParams.get("offset") || "0") || 0, 0),
      search: body.search || url.searchParams.get("search") || undefined 
    } : parseListParams(url)

  let items = (await getAllModels(env)).map(serializeModelSummary)

  const providerId = body.providerId || url.searchParams.get("providerId")
  const family = body.family || url.searchParams.get("family")
  const status = body.status || url.searchParams.get("status")
  const modality = body.modality || url.searchParams.get("modality")
  const maxInput = body.maxInputPrice || url.searchParams.get("maxInputPrice")
  const maxOutput = body.maxOutputPrice || url.searchParams.get("maxOutputPrice")
  
  let sortBy = url.searchParams.get("sort") || "providerId"
  let order = url.searchParams.get("order") || "asc"
  if (isQuery && body.sort) {
    sortBy = body.sort.field || sortBy
    order = body.sort.order || order
  }
  
  let tags = url.searchParams.get("tags")?.split(",").map(t => t.trim())
  if (isQuery && body.tags && Array.isArray(body.tags)) tags = body.tags

  if (providerId) items = items.filter(m => m.providerId === providerId)
  if (family) items = items.filter(m => m.family.toLowerCase() === family.toLowerCase())
  if (status) items = items.filter(m => m.status === status)
  if (modality) {
    items = items.filter(m =>
      m.modalities.input.includes(modality as any) ||
      m.modalities.output.includes(modality as any)
    )
  }
  if (maxInput) {
    const max = parseFloat(maxInput)
    if (!isNaN(max)) items = items.filter(m => m.currentPricing.inputPricePer1M <= max)
  }
  if (maxOutput) {
    const max = parseFloat(maxOutput)
    if (!isNaN(max)) items = items.filter(m => m.currentPricing.outputPricePer1M <= max)
  }
  if (tags && tags.length > 0) {
    items = items.filter(m => tags.some(tag => m.tags.includes(tag)))
  }
  if (search) {
    const q = search.toLowerCase()
    items = items.filter(m =>
      m.name.toLowerCase().includes(q) ||
      m.family.toLowerCase().includes(q) ||
      m.providerId.toLowerCase().includes(q)
    )
  }

  // Sorting
  const validSorts: Record<string, (a: typeof items[0], b: typeof items[0]) => number> = {
    providerId: (a, b) => a.providerId.localeCompare(b.providerId),
    name: (a, b) => a.name.localeCompare(b.name),
    inputPrice: (a, b) => a.currentPricing.inputPricePer1M - b.currentPricing.inputPricePer1M,
    outputPrice: (a, b) => a.currentPricing.outputPricePer1M - b.currentPricing.outputPricePer1M,
    contextWindow: (a, b) => a.contextWindow - b.contextWindow,
  }
  const sorter = validSorts[sortBy] || validSorts.providerId
  items.sort((a, b) => order === "desc" ? sorter(b, a) : sorter(a, b))

  return ok({ items: paginate(items, limit, offset), total: items.length, limit, offset })
}

async function handleGetModel(modelId: string, env: Env): Promise<Response> {
  const m = (await getAllModels(env)).find(x => x.id === modelId)
  if (!m) return problem(404, "Resource Not Found", "The requested model does not exist.", urlFor(`/models/${modelId}`))
  return ok(serializeModelFull(m))
}

async function handleGetModelPricing(modelId: string, env: Env): Promise<Response> {
  const m = (await getAllModels(env)).find(x => x.id === modelId)
  if (!m) return problem(404, "Resource Not Found", "The requested model does not exist.", urlFor(`/models/${modelId}`))
  const current = m.pricing[0]
  return ok({
    modelId: m.id,
    modelName: m.name,
    providerId: m.providerId,
    current,
    history: m.pricing,
    capabilities: {
      supportsCaching: !!(current.cacheReadPricePer1M),
      supportsBatch: !!(current.batchInputPricePer1M),
      supportsReasoning: !!(current.reasoningPricePer1M),
      supportsAudioInput: !!(current.audioPricePer1M),
      supportsImageInput: !!(current.imagePrice),
    },
    links: links({
      self: `/models/${m.id}/pricing`,
      model: `/models/${m.id}`,
      provider: `/providers/${m.providerId}`,
    }),
  })
}

// ─── Cost Estimate ────────────────────────────────────────────────────────────

interface EstimateRequest {
  modelId: string
  inputTokens: number
  outputTokens: number
  cacheReadTokens?: number
  cacheWriteTokens?: number
  reasoningTokens?: number
  audioTokens?: number
  useBatchPricing?: boolean
}

interface BreakdownItem {
  component: string
  tokens: number
  pricePerM: number
  cost: number
}

function computeEstimate(m: TokenomicsModel, req: EstimateRequest): {
  breakdown: BreakdownItem[]
  totalCost: number
  pricing: PricingTier
} {
  const pricing = m.pricing[0]
  const breakdown: BreakdownItem[] = []

  const inputPrice = req.useBatchPricing && pricing.batchInputPricePer1M
    ? pricing.batchInputPricePer1M
    : pricing.inputPricePer1M
  const outputPrice = req.useBatchPricing && pricing.batchOutputPricePer1M
    ? pricing.batchOutputPricePer1M
    : pricing.outputPricePer1M

  const inputCost = (req.inputTokens / 1_000_000) * inputPrice
  breakdown.push({ component: "input", tokens: req.inputTokens, pricePerM: inputPrice, cost: inputCost })

  const outputCost = (req.outputTokens / 1_000_000) * outputPrice
  breakdown.push({ component: "output", tokens: req.outputTokens, pricePerM: outputPrice, cost: outputCost })

  if (req.cacheReadTokens && pricing.cacheReadPricePer1M) {
    const cost = (req.cacheReadTokens / 1_000_000) * pricing.cacheReadPricePer1M
    breakdown.push({ component: "cache_read", tokens: req.cacheReadTokens, pricePerM: pricing.cacheReadPricePer1M, cost })
  }

  if (req.cacheWriteTokens && pricing.cacheWritePricePer1M) {
    const cost = (req.cacheWriteTokens / 1_000_000) * pricing.cacheWritePricePer1M
    breakdown.push({ component: "cache_write", tokens: req.cacheWriteTokens, pricePerM: pricing.cacheWritePricePer1M, cost })
  }

  if (req.reasoningTokens) {
    const reasoningPrice = pricing.reasoningPricePer1M || pricing.outputPricePer1M
    const cost = (req.reasoningTokens / 1_000_000) * reasoningPrice
    breakdown.push({ component: "reasoning", tokens: req.reasoningTokens, pricePerM: reasoningPrice, cost })
  }

  if (req.audioTokens && pricing.audioPricePer1M) {
    const cost = (req.audioTokens / 1_000_000) * pricing.audioPricePer1M
    breakdown.push({ component: "audio_input", tokens: req.audioTokens, pricePerM: pricing.audioPricePer1M, cost })
  }

  const totalCost = breakdown.reduce((sum, item) => sum + item.cost, 0)
  return { breakdown, totalCost, pricing }
}

async function handleEstimate(request: Request, env: Env): Promise<Response> {
  let body: EstimateRequest
  try {
    body = await request.json() as EstimateRequest
  } catch {
    return problem(400, "Bad Request", "Request body must be valid JSON.")
  }

  if (!body.modelId) return problem(400, "Bad Request", "Field 'modelId' is required.")
  if (typeof body.inputTokens !== "number" || body.inputTokens < 0)
    return problem(400, "Bad Request", "Field 'inputTokens' must be a non-negative number.")
  if (typeof body.outputTokens !== "number" || body.outputTokens < 0)
    return problem(400, "Bad Request", "Field 'outputTokens' must be a non-negative number.")

  const m = (await getAllModels(env)).find(x => x.id === body.modelId)
  if (!m) return problem(404, "Resource Not Found", `Model '${body.modelId}' not found.`, urlFor(`/models/${body.modelId}`))

  const { breakdown, totalCost, pricing } = computeEstimate(m, body)

  return ok({
    modelId: m.id,
    modelName: m.name,
    providerId: m.providerId,
    inputTokens: body.inputTokens,
    outputTokens: body.outputTokens,
    cacheReadTokens: body.cacheReadTokens,
    cacheWriteTokens: body.cacheWriteTokens,
    reasoningTokens: body.reasoningTokens,
    audioTokens: body.audioTokens,
    useBatchPricing: body.useBatchPricing ?? false,
    totalCost: Math.round(totalCost * 1_000_000) / 1_000_000,
    currency: "USD",
    breakdown: breakdown.map(b => ({
      ...b,
      cost: Math.round(b.cost * 1_000_000) / 1_000_000,
    })),
    pricingSnapshot: pricing,
  })
}

// ─── Compare ──────────────────────────────────────────────────────────────────

interface CompareRequest {
  modelIds: string[]
  inputTokens: number
  outputTokens: number
  cacheReadTokens?: number
  cacheWriteTokens?: number
  reasoningTokens?: number
  audioTokens?: number
  useBatchPricing?: boolean
}

async function handleCompare(request: Request, env: Env): Promise<Response> {
  let body: CompareRequest
  try {
    body = await request.json() as CompareRequest
  } catch {
    return problem(400, "Bad Request", "Request body must be valid JSON.")
  }

  if (!Array.isArray(body.modelIds) || body.modelIds.length < 2)
    return problem(400, "Bad Request", "Field 'modelIds' must be an array with at least 2 model IDs.")
  if (body.modelIds.length > 20)
    return problem(400, "Bad Request", "Maximum 20 models can be compared at once.")
  if (typeof body.inputTokens !== "number" || body.inputTokens < 0)
    return problem(400, "Bad Request", "Field 'inputTokens' must be a non-negative number.")
  if (typeof body.outputTokens !== "number" || body.outputTokens < 0)
    return problem(400, "Bad Request", "Field 'outputTokens' must be a non-negative number.")

  const estimates = []
  const notFound: string[] = []

  const allModels = await getAllModels(env);
  for (const modelId of body.modelIds) {
    const m = allModels.find(x => x.id === modelId)
    if (!m) { notFound.push(modelId); continue }
    const { breakdown, totalCost, pricing } = computeEstimate(m, { ...body, modelId })
    estimates.push({
      modelId: m.id,
      modelName: m.name,
      providerId: m.providerId,
      totalCost: Math.round(totalCost * 1_000_000) / 1_000_000,
      currency: "USD",
      breakdown: breakdown.map(b => ({ ...b, cost: Math.round(b.cost * 1_000_000) / 1_000_000 })),
      pricingSnapshot: pricing,
    })
  }

  if (estimates.length === 0)
    return problem(404, "Resource Not Found", `None of the requested models were found. Not found: ${notFound.join(", ")}`)

  estimates.sort((a, b) => a.totalCost - b.totalCost)

  return ok({
    inputTokens: body.inputTokens,
    outputTokens: body.outputTokens,
    estimates,
    cheapest: estimates[0]?.modelId,
    mostExpensive: estimates[estimates.length - 1]?.modelId,
    notFound: notFound.length > 0 ? notFound : undefined,
  })
}

// ─── Cheapest ────────────────────────────────────────────────────────────────

async function handleCheapest(request: Request, url: URL, env: Env): Promise<Response> {
  const isQuery = request.method === "QUERY"
  let body: any = {}
  if (isQuery) {
    try {
      body = await request.json()
    } catch {
      return problem(400, "Bad Request", "Request body must be valid JSON for QUERY method.")
    }
  }

  const inputTokens = isQuery && body.inputTokens !== undefined ? body.inputTokens : parseInt(url.searchParams.get("inputTokens") || "1000000")
  const outputTokens = isQuery && body.outputTokens !== undefined ? body.outputTokens : parseInt(url.searchParams.get("outputTokens") || "100000")
  const providerId = (isQuery && body.providerId) || url.searchParams.get("providerId")
  const modality = (isQuery && body.modality) || url.searchParams.get("modality")
  const status = (isQuery && body.status) || url.searchParams.get("status") || "active"
  const limit = Math.min(Math.max(isQuery && body.limit !== undefined ? body.limit : parseInt(url.searchParams.get("limit") || "10"), 1), 50)

  if (isNaN(inputTokens) || inputTokens < 0)
    return problem(400, "Bad Request", "Query param 'inputTokens' must be a non-negative integer.")
  if (isNaN(outputTokens) || outputTokens < 0)
    return problem(400, "Bad Request", "Query param 'outputTokens' must be a non-negative integer.")

  let filtered = await getAllModels(env)
  if (providerId) filtered = filtered.filter(m => m.providerId === providerId)
  if (status) filtered = filtered.filter(m => m.status === status)
  if (modality) filtered = filtered.filter(m =>
    m.modalities.input.includes(modality as any) ||
    m.modalities.output.includes(modality as any)
  )

  const results = filtered.map(m => {
    const p = m.pricing[0]
    const totalCost = (inputTokens / 1_000_000) * p.inputPricePer1M + (outputTokens / 1_000_000) * p.outputPricePer1M
    return {
      modelId: m.id,
      modelName: m.name,
      providerId: m.providerId,
      family: m.family,
      status: m.status,
      contextWindow: m.contextWindow,
      modalities: m.modalities,
      tags: m.tags,
      totalCost: Math.round(totalCost * 1_000_000) / 1_000_000,
      inputPricePer1M: p.inputPricePer1M,
      outputPricePer1M: p.outputPricePer1M,
      currency: "USD",
      links: links({ self: `/models/${m.id}`, pricing: `/models/${m.id}/pricing` }),
    }
  })

  results.sort((a, b) => a.totalCost - b.totalCost)

  return ok({
    inputTokens,
    outputTokens,
    currency: "USD",
    results: results.slice(0, limit),
    total: results.length,
  })
}

// ─── Main Router ──────────────────────────────────────────────────────────────

export async function handleTokenomics(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url)
  const path = url.pathname.replace(/\/$/, "")
  const method = request.method

  if (method === "OPTIONS") return new Response(null, { status: 204 })

  const base = "/tokenomics/v1"

  // ── GET routes ──────────────────────────────────────────────────────────

  if (method === "GET") {
    if (path === `${base}/providers`) return handleListProviders(url)

    const pMatch = path.match(`^${base}/providers/([^/]+)$`)
    if (pMatch) return handleGetProvider(pMatch[1])

    if (path === `${base}/models`) return handleListModels(request, url, env)

    const mMatch = path.match(`^${base}/models/([^/]+)$`)
    if (mMatch) return handleGetModel(mMatch[1], env)

    const mpMatch = path.match(`^${base}/models/([^/]+)/pricing$`)
    if (mpMatch) return handleGetModelPricing(mpMatch[1], env)

    if (path === `${base}/cheapest`) return handleCheapest(request, url, env)

    return problem(404, "Resource Not Found", "The requested endpoint does not exist.", path)
  }

  // ── POST / QUERY routes ────────────────────────────────────────────────────────

  if (method === "POST" || method === "QUERY") {
    if (path === `${base}/estimate`) return handleEstimate(request, env)
    if (path === `${base}/compare`) return handleCompare(request, env)
    if (path === `${base}/models`) return handleListModels(request, url, env)
    if (path === `${base}/cheapest`) return handleCheapest(request, url, env)

    return problem(404, "Resource Not Found", "The requested endpoint does not exist.", path)
  }

  return problem(405, "Method Not Allowed", `HTTP method ${method} is not supported on this endpoint.`, path)
}
