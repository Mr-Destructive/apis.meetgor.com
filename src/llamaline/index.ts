import { providers, models, events } from "./seed"

interface Env {
  DB?: D1Database
}

interface CollectionParams {
  limit: number
  offset: number
  sort?: string | null
  search?: string | null
}

function problem(status: number, title: string, detail: string, instance?: string) {
  return Response.json({
    type: `https://apis.meetgor.com/problems/${title.toLowerCase().replace(/\s+/g, "-")}`,
    title,
    status,
    detail,
    instance,
  }, { status, headers: { "Content-Type": "application/problem+json" } })
}

function ok(body: unknown) {
  return Response.json(body)
}

function urlFor(versionPath: string): string {
  return `/llamaline/v1${versionPath}`
}

function links(spec: Record<string, string>): Record<string, string> {
  const result: Record<string, string> = {}
  for (const [key, path] of Object.entries(spec)) {
    result[key] = urlFor(path)
  }
  return result
}

function parseParams(url: URL): CollectionParams {
  const limit = Math.min(Math.max(parseInt(url.searchParams.get("limit") || "20") || 20, 1), 100)
  const offset = Math.max(parseInt(url.searchParams.get("offset") || "0") || 0, 0)
  const sort = url.searchParams.get("sort") || undefined
  const search = url.searchParams.get("search") || undefined
  return { limit, offset, sort, search }
}

function filterBySearch<T extends Record<string, unknown>>(items: T[], search?: string | null, fields: (keyof T)[] = []): T[] {
  if (!search) return items
  const q = search.toLowerCase()
  return items.filter(item =>
    fields.some(f => {
      const v = item[f]
      return typeof v === "string" && v.toLowerCase().includes(q)
    })
  )
}

function paginate<T>(items: T[], limit: number, offset: number) {
  return items.slice(offset, offset + limit)
}

async function handleListProviders(url: URL): Promise<Response> {
  const { limit, offset, search } = parseParams(url)
  let items = providers.map(p => ({
    id: p.id,
    name: p.name,
    description: p.description,
    website: p.website,
    countryCode: p.country_code,
    foundedDate: p.founded_date,
    status: p.status,
    links: links({ self: `/providers/${p.id}`, timeline: `/providers/${p.id}/timeline`, models: `/models?providerId=${p.id}` }),
  }))
  items = filterBySearch(items, search, ["name", "description"])
  const total = items.length
  return ok({ items: paginate(items, limit, offset), total, limit, offset })
}

async function handleGetProvider(providerId: string): Promise<Response> {
  const p = providers.find(x => x.id === providerId)
  if (!p) return problem(404, "Resource Not Found", "The requested provider does not exist.", urlFor(`/providers/${providerId}`))
  return ok({
    id: p.id,
    name: p.name,
    description: p.description,
    website: p.website,
    countryCode: p.country_code,
    foundedDate: p.founded_date,
    status: p.status,
    links: links({ self: `/providers/${p.id}`, timeline: `/providers/${p.id}/timeline`, models: `/models?providerId=${p.id}` }),
  })
}

async function handleListModels(url: URL): Promise<Response> {
  const { limit, offset, search } = parseParams(url)
  let items = models.map(m => ({
    id: m.id,
    name: m.name,
    family: m.family,
    providerId: m.provider_id,
    description: m.description,
    modelType: m.model_type,
    releaseDate: m.release_date,
    status: m.status,
    predecessorIds: JSON.parse(m.predecessor_ids || "[]"),
    successorIds: JSON.parse(m.successor_ids || "[]"),
    tags: JSON.parse(m.tags || "[]"),
    links: links({ self: `/models/${m.id}`, timeline: `/models/${m.id}/timeline`, provider: `/providers/${m.provider_id}` }),
  }))

  const urlObj = new URL(url)
  const providerFilter = urlObj.searchParams.get("providerId")
  const familyFilter = urlObj.searchParams.get("family")
  const statusFilter = urlObj.searchParams.get("status")
  const typeFilter = urlObj.searchParams.get("modelType")

  if (providerFilter) items = items.filter(m => m.providerId === providerFilter)
  if (familyFilter) items = items.filter(m => m.family === familyFilter)
  if (statusFilter) items = items.filter(m => m.status === statusFilter)
  if (typeFilter) items = items.filter(m => m.modelType === typeFilter)
  items = filterBySearch(items, search, ["name", "description"])

  const total = items.length
  return ok({ items: paginate(items, limit, offset), total, limit, offset })
}

async function handleGetModel(modelId: string): Promise<Response> {
  const m = models.find(x => x.id === modelId)
  if (!m) return problem(404, "Resource Not Found", "The requested model does not exist.", urlFor(`/models/${modelId}`))
  return ok({
    id: m.id,
    name: m.name,
    family: m.family,
    providerId: m.provider_id,
    description: m.description,
    modelType: m.model_type,
    releaseDate: m.release_date,
    status: m.status,
    predecessorIds: JSON.parse(m.predecessor_ids || "[]"),
    successorIds: JSON.parse(m.successor_ids || "[]"),
    tags: JSON.parse(m.tags || "[]"),
    links: links({ self: `/models/${m.id}`, timeline: `/models/${m.id}/timeline`, provider: `/providers/${m.provider_id}` }),
  })
}

async function handleListTimeline(url: URL): Promise<Response> {
  const { limit, offset } = parseParams(url)
  let items = events.map(e => ({
    id: e.id,
    eventType: e.event_type,
    eventDate: e.event_date,
    title: e.title,
    description: e.description,
    providerId: e.provider_id,
    modelId: e.model_id,
    sourceUrl: e.source_url,
    sourceType: e.source_type,
    metadata: e.metadata ? JSON.parse(e.metadata) : undefined,
    tags: e.tags ? JSON.parse(e.tags) : undefined,
    links: links({ self: `/timeline/${e.id}` }),
  }))

  const urlObj = new URL(url)
  const eventType = urlObj.searchParams.get("eventType")
  const providerFilter = urlObj.searchParams.get("providerId")
  const modelFilter = urlObj.searchParams.get("modelId")
  const fromDate = urlObj.searchParams.get("from")
  const toDate = urlObj.searchParams.get("to")

  if (eventType) items = items.filter(e => e.eventType === eventType)
  if (providerFilter) items = items.filter(e => e.providerId === providerFilter)
  if (modelFilter) items = items.filter(e => e.modelId === modelFilter)
  if (fromDate) items = items.filter(e => e.eventDate >= fromDate!)
  if (toDate) items = items.filter(e => e.eventDate <= toDate!)

  items.sort((a, b) => b.eventDate.localeCompare(a.eventDate))
  const total = items.length
  return ok({ items: paginate(items, limit, offset), total, limit, offset })
}

async function handleGetTimelineEvent(eventId: string): Promise<Response> {
  const e = events.find(x => x.id === eventId)
  if (!e) return problem(404, "Resource Not Found", "The requested timeline event does not exist.", urlFor(`/timeline/${eventId}`))
  const l: Record<string, string> = { self: `/timeline/${e.id}` }
  if (e.provider_id) l.provider = `/providers/${e.provider_id}`
  if (e.model_id) l.model = `/models/${e.model_id}`
  return ok({
    id: e.id,
    eventType: e.event_type,
    eventDate: e.event_date,
    title: e.title,
    description: e.description,
    providerId: e.provider_id,
    modelId: e.model_id,
    sourceUrl: e.source_url,
    sourceType: e.source_type,
    metadata: e.metadata ? JSON.parse(e.metadata) : undefined,
    tags: e.tags ? JSON.parse(e.tags) : undefined,
    links: links(l),
  })
}

export async function handleLlamaline(request: Request, _env: Env): Promise<Response> {
  const url = new URL(request.url)
  const path = url.pathname.replace(/\/$/, "")

  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204 })
  }

  if (request.method !== "GET") {
    return problem(405, "Method Not Allowed", `HTTP method ${request.method} is not supported. Only GET requests are allowed.`, path)
  }

  const base = "/llamaline/v1"

  if (path === `${base}/providers`) return handleListProviders(url)
  const pMatch = path.match(`^${base}/providers/([^/]+)$`)
  if (pMatch) return handleGetProvider(pMatch[1])
  const ptMatch = path.match(`^${base}/providers/([^/]+)/timeline$`)
  if (ptMatch) return handleListTimeline(url)

  if (path === `${base}/models`) return handleListModels(url)
  const mMatch = path.match(`^${base}/models/([^/]+)$`)
  if (mMatch) return handleGetModel(mMatch[1])
  const mtMatch = path.match(`^${base}/models/([^/]+)/timeline$`)
  if (mtMatch) return handleListTimeline(url)

  if (path === `${base}/timeline`) return handleListTimeline(url)
  const eMatch = path.match(`^${base}/timeline/([^/]+)$`)
  if (eMatch) return handleGetTimelineEvent(eMatch[1])

  return problem(404, "Resource Not Found", "The requested endpoint does not exist.", path)
}
