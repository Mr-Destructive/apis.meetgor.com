const RSS_URL = "https://www.meetgor.com/type/newsletter/rss.xml"

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

export const onRequest: PagesFunction<Env> = async (context) => {
  const url = new URL(context.request.url)
  const refresh = url.searchParams.get("refresh") === "true"

  if (refresh) {
    const items = await fetchAndStoreRss(context.env.DB)
    return Response.json({ count: items.length, items })
  }

  let items = await getNewslettersFromDb(context.env.DB)

  if (items.length === 0) {
    items = await fetchAndStoreRss(context.env.DB)
  }

  const body = {
    name: "Newsletter",
    description: "Techstructive Weekly newsletters from meetgor.com",
    source: RSS_URL,
    count: items.length,
    items,
  }

  return Response.json(body)
}
