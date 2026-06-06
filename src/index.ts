import { handleTicTacToe } from "./games/tic-tac-toe"

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

interface Env {
  DB: D1Database
}

const apis: ApiEntry[] = [
  {
    name: "My API",
    description: "Personal info, books, blog, newsletter",
    path: "/my",
    endpoints: ["/my", "/my/newsletter"],
  },
  {
    name: "Games API",
    description: "Game-related endpoints",
    path: "/games",
    endpoints: ["/games", "/games/tic-tac-toe"],
  },
]

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

async function getNewslettersFromDb(db: D1Database): Promise<NewsletterItem[]> {
  const { results } = await db.prepare(
    "SELECT * FROM newsletter_items ORDER BY pub_date DESC"
  ).all<NewsletterItem>()

  return results
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
    ],
    info: {
      name: "Meet Gor",
      handle: "@meetgor",
      website: "https://meetgor.com",
    },
  })
}

async function handleNewsletter(url: URL, db: D1Database): Promise<Response> {
  const refresh = url.searchParams.get("refresh") === "true"

  if (refresh) {
    const items = await fetchAndStoreRss(db)
    return Response.json({ count: items.length, items })
  }

  let items = await getNewslettersFromDb(db)

  if (items.length === 0) {
    items = await fetchAndStoreRss(db)
  }

  return Response.json({
    name: "Newsletter",
    description: "Techstructive Weekly newsletters from meetgor.com",
    source: RSS_URL,
    count: items.length,
    items,
  })
}

function handleGames(): Response {
  return Response.json({
    name: "Games API",
    description: "Game-related endpoints",
    games: [
      {
        name: "Tic Tac Toe",
        path: "/games/tic-tac-toe",
        description: "Play tic-tac-toe via API",
      },
    ],
  })
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)

    switch (url.pathname) {
      case "/":
        return handleRoot()
      case "/my":
        return handleMy()
      case "/my/newsletter":
        return handleNewsletter(url, env.DB)
      case "/games":
        return handleGames()
      case "/games/tic-tac-toe":
        return handleTicTacToe(request)
      default:
        return Response.json({ error: "Not found" }, { status: 404 })
    }
  },
}
