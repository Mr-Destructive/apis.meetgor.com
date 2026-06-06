import { handleTicTacToe } from "./games/tic-tac-toe"
import { handleChess } from "./games/chess"
import { handleRockPaperScissors } from "./games/rock-paper-scissors"
import { handleHandyCricket } from "./games/handy-cricket"
import { handleVirtualFight } from "./games/virtual-fight"
import { handleLlamaline } from "./llamaline"
import { handleQuiz } from "./quiz"
import { scalarHtml } from "./openapi/docs"

const RSS_URL = "https://www.meetgor.com/type/newsletter/rss.xml"

interface ApiEntry {
  name: string
  description: string
  path: string
  endpoints: string[]
}

interface NewsletterItem {
  id?: number
  title: string
  link: string
  description: string
  content: string
  type: string
  pub_date: string
}

interface NewsletterListParams {
  limit: number
  offset: number
  search: string | null
  sort: string
  order: string
}

interface Env {
  DB: D1Database
}

const apis: ApiEntry[] = [
  {
    name: "My API",
    description: "Personal info, books, blog, newsletter",
    path: "/my",
    endpoints: ["/my", "/my/newsletter", "/my/docs"],
  },
  {
    name: "Games API",
    description: "Game-related endpoints",
    path: "/games",
    endpoints: ["/games", "/games/tic-tac-toe", "/games/chess", "/games/rock-paper-scissors", "/games/handy-cricket", "/games/virtual-fight", "/games/docs"],
  },
  {
    name: "Quiz API",
    description: "Quiz with predefined topics",
    path: "/quiz",
    endpoints: ["/quiz", "/quiz/{topic}", "/quiz/{topic}/submit", "/quiz/docs"],
  },
  {
    name: "Llamaline API",
    description: "AI model timeline and observatory",
    path: "/llamaline/v1",
    endpoints: [
      "/llamaline/v1/providers",
      "/llamaline/v1/models",
      "/llamaline/v1/timeline",
      "/llamaline/docs",
    ],
  },
]

const ALLOWED_SORTS = ["pub_date", "title", "id"]
const ALLOWED_ORDERS = ["asc", "desc"]

function extractTag(text: string, tag: string): string {
  const match = text.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\/${tag}>`))
  return match ? match[1].trim() : ""
}

function extractCdata(text: string): string {
  const match = text.match(/<!\[CDATA\[([\s\S]*?)\]\]>/)
  return match ? match[1].trim() : ""
}

function parseRssItems(xml: string): NewsletterItem[] {
  const items: NewsletterItem[] = []
  const itemRegex = /<item>([\s\S]*?)<\/item>/g
  let itemMatch

  while ((itemMatch = itemRegex.exec(xml)) !== null) {
    const raw = itemMatch[1]
    const title = extractTag(raw, "title")
    const link = extractTag(raw, "link")

    if (!title || !link) continue

    const rawDescription = extractTag(raw, "description")
    const description = extractCdata(rawDescription) || rawDescription
    const rawContent = extractTag(raw, "content")
    const content = extractCdata(rawContent) || rawContent
    const rawType = extractTag(raw, "type")
    const type = extractCdata(rawType) || rawType || "newsletter"
    const pubDate = extractTag(raw, "pubDate")

    items.push({ title, link, description, content, type, pub_date: pubDate })
  }

  return items
}

async function fetchAndStoreRss(db: D1Database): Promise<NewsletterItem[]> {
  const response = await fetch(RSS_URL)
  const xml = await response.text()
  const items = parseRssItems(xml)

  const stmt = db.prepare(
    `INSERT OR IGNORE INTO newsletter_items (title, link, description, content, type, pub_date)
     VALUES (?, ?, ?, ?, ?, ?)`
  )

  const batch = items.map(item =>
    stmt.bind(item.title, item.link, item.description, item.content, item.type, item.pub_date)
  )

  if (batch.length > 0) {
    await db.batch(batch)
  }

  return items
}

function parseListParams(url: URL): NewsletterListParams {
  const limit = Math.min(Math.max(parseInt(url.searchParams.get("limit") || "10") || 10, 1), 50)
  const offset = Math.max(parseInt(url.searchParams.get("offset") || "0") || 0, 0)
  const search = url.searchParams.get("search")
  let sort = url.searchParams.get("sort") || "pub_date"
  let order = url.searchParams.get("order") || "desc"

  if (!ALLOWED_SORTS.includes(sort)) sort = "pub_date"
  if (!ALLOWED_ORDERS.includes(order.toLowerCase())) order = "desc"

  return { limit, offset, search, sort, order }
}

function getSlugFromLink(link: string): string {
  const parts = link.replace(/\/$/, "").split("/")
  return parts[parts.length - 1]
}

async function handleNewsletterList(url: URL, db: D1Database): Promise<Response> {
  const { limit, offset, search, sort, order } = parseListParams(url)
  const conditions: string[] = []
  const bindParams: (string | number)[] = []

  if (search) {
    conditions.push("(title LIKE ? OR description LIKE ?)")
    const pattern = `%${search}%`
    bindParams.push(pattern, pattern)
  }

  const where = conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : ""
  const orderClause = `${sort} ${order.toUpperCase()}`

  const [{ total }] = (await db.prepare(
    `SELECT COUNT(*) as total FROM newsletter_items ${where}`
  ).bind(...bindParams).all<{ total: number }>()).results

  const { results: items } = await db.prepare(
    `SELECT id, title, link, description, type, pub_date FROM newsletter_items ${where} ORDER BY ${orderClause} LIMIT ? OFFSET ?`
  ).bind(...bindParams, limit, offset).all<NewsletterItem>()

  if (items.length === 0 && !search && offset === 0) {
    const rssItems = await fetchAndStoreRss(db)

    const { results: fresh } = await db.prepare(
      `SELECT id, title, link, description, type, pub_date FROM newsletter_items ORDER BY ${orderClause} LIMIT ? OFFSET ?`
    ).bind(limit, offset).all<NewsletterItem>()

    return Response.json({
      total: fresh.length,
      limit,
      offset,
      items: fresh.map(item => ({ ...item, slug: getSlugFromLink(item.link) })),
    })
  }

  return Response.json({
    total,
    limit,
    offset,
    items: items.map(item => ({ ...item, slug: getSlugFromLink(item.link) })),
  })
}

async function handleNewsletterSingle(pathSegments: string[], db: D1Database): Promise<Response> {
  const slug = pathSegments.join("/")

  const linkPattern = `%/${slug}`
  const { results } = await db.prepare(
    `SELECT * FROM newsletter_items WHERE link LIKE ? LIMIT 1`
  ).bind(linkPattern).all<NewsletterItem>()

  if (results.length === 0) {
    return Response.json({ error: "Newsletter not found" }, { status: 404 })
  }

  const item = results[0]
  return Response.json({ item: { ...item, slug: getSlugFromLink(item.link) } })
}

async function handleNewsletterRefresh(db: D1Database): Promise<Response> {
  const items = await fetchAndStoreRss(db)
  return Response.json({ message: "Newsletter refreshed", count: items.length })
}

async function handleNewsletterStats(db: D1Database): Promise<Response> {
  const stats = await db.prepare(
    `SELECT 
       COUNT(*) as total,
       MIN(pub_date) as earliest,
       MAX(pub_date) as latest
     FROM newsletter_items`
  ).first()

  return Response.json({ stats })
}

async function handleNewsletter(request: Request, url: URL, db: D1Database): Promise<Response> {
  const path = url.pathname.replace(/\/$/, "")
  const basePath = "/my/newsletter"

  if (path === basePath) {
    return handleNewsletterList(url, db)
  }

  const rest = path.slice(basePath.length + 1)
  const segments = rest.split("/")

  if (rest === "refresh") {
    if (request.method !== "POST") {
      return Response.json({ error: "Method not allowed. Use POST." }, { status: 405 })
    }
    return handleNewsletterRefresh(db)
  }

  if (rest === "stats") {
    return handleNewsletterStats(db)
  }

  return handleNewsletterSingle(segments, db)
}

function handleRoot(): Response {
  return Response.json({
    name: "apis.meetgor.com",
    version: "1.0.0",
    apis,
  })
}

function handleMy(): Response {
  return Response.json({
    name: "My API",
    description: "Personal information and content APIs",
    endpoints: [
      { path: "/my", description: "This info" },
      { path: "/my/newsletter", description: "Newsletter archive from RSS" },
      { path: "/my/newsletter/<slug>", description: "Get single newsletter by slug" },
      { path: "/my/newsletter/stats", description: "Newsletter stats" },
      { path: "POST /my/newsletter/refresh", description: "Re-fetch RSS feed" },
      { path: "/my/docs", description: "API documentation" },
    ],
    info: {
      name: "Meet Gor",
      handle: "@meetgor",
      website: "https://meetgor.com",
    },
  })
}

function handleGames(): Response {
  return Response.json({
    name: "Games API",
    description: "Game-related endpoints",
    endpoints: [
      { path: "/games", description: "List games" },
      { path: "/games/tic-tac-toe", description: "Play tic-tac-toe" },
      { path: "/games/chess", description: "Play chess" },
      { path: "/games/rock-paper-scissors", description: "Play rock paper scissors" },
      { path: "/games/handy-cricket", description: "Play hand cricket" },
      { path: "/games/virtual-fight", description: "Fight robot AI" },
      { path: "/games/docs", description: "API documentation" },
    ],
    games: [
      { name: "Tic Tac Toe", path: "/games/tic-tac-toe", description: "Play tic-tac-toe via API" },
      { name: "Chess", path: "/games/chess", description: "Play chess with FEN notation" },
      { name: "Rock Paper Scissors", path: "/games/rock-paper-scissors", description: "Play rock paper scissors against computer" },
      { name: "Handy Cricket", path: "/games/handy-cricket", description: "Play hand cricket against computer" },
      { name: "Virtual Fight", path: "/games/virtual-fight", description: "Fight robot AI with diverse characters" },
    ],
  })
}

function serveDocs(title: string, specUrl: string): Response {
  return new Response(scalarHtml(title, specUrl), {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  })
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)
    const pathname = url.pathname

    if (pathname === "/") return handleRoot()
    if (pathname === "/docs") return serveDocs("apis.meetgor.com", "/docs/openapi.yaml")

    if (pathname === "/my") return handleMy()
    if (pathname === "/my/docs") return serveDocs("My API", "/my/docs/openapi.yaml")
    if (pathname.startsWith("/my/newsletter")) {
      if (pathname === "/my/newsletter/docs") return serveDocs("Newsletter API", "/my/newsletter/docs/openapi.yaml")
      return handleNewsletter(request, url, env.DB)
    }

    if (pathname === "/games") return handleGames()
    if (pathname === "/games/docs") return serveDocs("Games API", "/games/docs/openapi.yaml")
    if (pathname.startsWith("/games/tic-tac-toe")) {
      if (pathname === "/games/tic-tac-toe") return handleTicTacToe(request)
      if (pathname === "/games/tic-tac-toe/docs") return serveDocs("Tic Tac Toe", "/games/tic-tac-toe/docs/openapi.yaml")
    }
    if (pathname === "/games/chess" || pathname === "/games/chess/docs") {
      if (pathname === "/games/chess/docs") return serveDocs("Chess", "/games/chess/docs/openapi.yaml")
      return handleChess(request)
    }
    if (pathname === "/games/rock-paper-scissors" || pathname === "/games/rock-paper-scissors/docs") {
      if (pathname === "/games/rock-paper-scissors/docs") return serveDocs("Rock Paper Scissors", "/games/rock-paper-scissors/docs/openapi.yaml")
      return handleRockPaperScissors(request)
    }
    if (pathname === "/games/handy-cricket" || pathname === "/games/handy-cricket/docs") {
      if (pathname === "/games/handy-cricket/docs") return serveDocs("Handy Cricket", "/games/handy-cricket/docs/openapi.yaml")
      return handleHandyCricket(request)
    }
    if (pathname === "/games/virtual-fight" || pathname === "/games/virtual-fight/docs") {
      if (pathname === "/games/virtual-fight/docs") return serveDocs("Virtual Fight", "/games/virtual-fight/docs/openapi.yaml")
      return handleVirtualFight(request)
    }

    if (pathname === "/quiz" || pathname.startsWith("/quiz/")) {
      if (pathname === "/quiz/docs") return serveDocs("Quiz API", "/quiz/docs/openapi.yaml")
      return handleQuiz(request)
    }

    if (pathname === "/llamaline/docs") return serveDocs("Llamaline API", "/llamaline/docs/openapi.yaml")
    if (pathname.startsWith("/llamaline")) {
      return handleLlamaline(request, env)
    }

    return Response.json({ error: "Not found" }, { status: 404 })
  },
}
