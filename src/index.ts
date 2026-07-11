import { handleTicTacToe } from "./games/tic-tac-toe"
import { handleChess } from "./games/chess"
import { handleRockPaperScissors } from "./games/rock-paper-scissors"
import { handleHandyCricket } from "./games/handy-cricket"
import { handleVirtualFight } from "./games/virtual-fight"
import { handleLlamaline } from "./llamaline"
import { handleDoclet } from "./doclet"
import { handleQuiz } from "./quiz"
import { handleFlights } from "./flights"
import { scalarHtml } from "./openapi/docs"

const RSS_URL = "https://www.meetgor.com/type/newsletter/rss.xml"
const MEETGOR_RSS_URL = "https://www.meetgor.com/rss.xml"
const GOODREADS_RSS_URL = "https://www.goodreads.com/review/list_rss/82596574"

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

interface ListParams {
  limit: number
  offset: number
  search: string | null
}

interface GoodreadsItem {
  title: string
  link: string
  book_id: string
  book_image_url: string
  book_small_image_url: string
  book_medium_image_url: string
  book_large_image_url: string
  book_description: string
  author_name: string
  isbn: string
  user_name: string
  user_rating: string
  user_read_at: string
  user_date_added: string
  user_date_created: string
  user_shelves: string
  user_review: string
  average_rating: string
  book_published: string
  num_pages: string
  review: string
  shelves: string[]
}

interface BlogItem {
  title: string
  link: string
  content: string
  description: string
  pub_date: string
  slug: string
  section: "thoughts" | "links" | "posts" | "other"
}

interface BlogQuery {
  search?: string | {
    query: string
    mode?: "all" | "any"
    fields?: ("title" | "description" | "content")[]
  }
  section?: "thoughts" | "links" | "posts" | "other"
  date?: {
    from?: string
    to?: string
  }
  sort?: {
    field: "pub_date" | "title"
    order?: "asc" | "desc"
  }
  limit?: number
  offset?: number
  fields?: ("title" | "link" | "content" | "description" | "pub_date" | "slug" | "section")[]
}

interface SocialLink {
  name: string
  handle: string
  url: string
}

interface BlogrollLink {
  name: string
  site: string
  feed: string
  source: string
  note: string
}

interface Env {
  DB: D1Database
}

const apis: ApiEntry[] = [
  {
    name: "My API",
    description: "Personal info, books, blog, newsletter, socials, and blogroll",
    path: "/my",
    endpoints: [
      "/my",
      "/my/books",
      "/my/books/reviews",
      "/my/thoughts",
      "/my/links",
      "/my/blogs",
      "/my/blogroll",
      "/my/socials",
      "/my/newsletter",
      "/my/docs",
    ],
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
  {
    name: "Doclet API",
    description: "Document toolkit for files",
    path: "/doclet/v1",
    endpoints: [
      "/doclet",
      "/doclet/v1/capabilities",
      "/doclet/v1/inspect",
      "/doclet/v1/operate",
      "/doclet/v1/merge",
      "/doclet/docs",
    ],
  },
  {
    name: "Flight Observatory",
    description: "Live flight data from OpenSky Network queried via the HTTP QUERY method (RFC 10008)",
    path: "/flights",
    endpoints: [
      "/flights",
      "/flights/docs",
    ],
  },
]

const ALLOWED_SORTS = ["pub_date", "title", "id"]
const ALLOWED_ORDERS = ["asc", "desc"]
const BLOG_SORT_FIELDS = ["pub_date", "title"]
const BLOG_QUERY_FIELDS = ["title", "link", "content", "description", "pub_date", "slug", "section"]
const BLOG_SEARCH_FIELDS = ["title", "description", "content"]

function extractTag(text: string, tag: string): string {
  const match = text.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\/${tag}>`))
  return match ? match[1].trim() : ""
}

function extractCdata(text: string): string {
  const match = text.match(/<!\[CDATA\[([\s\S]*?)\]\]>/)
  return match ? match[1].trim() : ""
}

function getPathnameFromLink(link: string): string {
  try {
    return new URL(link).pathname.replace(/\/$/, "")
  } catch {
    return link
  }
}

function normalizeSlugFromLink(link: string): string {
  const pathname = getPathnameFromLink(link)
  const parts = pathname.split("/").filter(Boolean)
  return parts[parts.length - 1] || ""
}

function normalizeSearchText(text: string): string {
  return text.toLowerCase().replace(/\s+/g, " ").trim()
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

function parseMeetGorItems(xml: string): BlogItem[] {
  const items: BlogItem[] = []
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
    const pubDate = extractTag(raw, "pubDate")
    const pathname = getPathnameFromLink(link)
    const section = pathname.includes("/thoughts/")
      ? "thoughts"
      : pathname.includes("/links/")
        ? "links"
        : pathname.includes("/posts/")
          ? "posts"
          : "other"

    items.push({
      title,
      link,
      content,
      description,
      pub_date: pubDate,
      slug: normalizeSlugFromLink(link),
      section,
    })
  }

  return items
}

function parseGoodreadsItems(xml: string): GoodreadsItem[] {
  const items: GoodreadsItem[] = []
  const itemRegex = /<item>([\s\S]*?)<\/item>/g
  let itemMatch

  while ((itemMatch = itemRegex.exec(xml)) !== null) {
    const raw = itemMatch[1]
    const title = extractCdata(extractTag(raw, "title")) || extractTag(raw, "title")
    const link = extractCdata(extractTag(raw, "link")) || extractTag(raw, "link")
    if (!title || !link) continue

    const review = extractCdata(extractTag(raw, "user_review")) || extractTag(raw, "user_review")
    const userShelves = extractCdata(extractTag(raw, "user_shelves")) || extractTag(raw, "user_shelves")

    items.push({
      title,
      link,
      book_id: extractTag(raw, "book_id"),
      book_image_url: extractCdata(extractTag(raw, "book_image_url")) || extractTag(raw, "book_image_url"),
      book_small_image_url: extractCdata(extractTag(raw, "book_small_image_url")) || extractTag(raw, "book_small_image_url"),
      book_medium_image_url: extractCdata(extractTag(raw, "book_medium_image_url")) || extractTag(raw, "book_medium_image_url"),
      book_large_image_url: extractCdata(extractTag(raw, "book_large_image_url")) || extractTag(raw, "book_large_image_url"),
      book_description: extractCdata(extractTag(raw, "book_description")) || extractTag(raw, "book_description"),
      author_name: extractTag(raw, "author_name"),
      isbn: extractTag(raw, "isbn"),
      user_name: extractTag(raw, "user_name"),
      user_rating: extractTag(raw, "user_rating"),
      user_read_at: extractCdata(extractTag(raw, "user_read_at")) || extractTag(raw, "user_read_at"),
      user_date_added: extractCdata(extractTag(raw, "user_date_added")) || extractTag(raw, "user_date_added"),
      user_date_created: extractCdata(extractTag(raw, "user_date_created")) || extractTag(raw, "user_date_created"),
      user_shelves: userShelves,
      user_review: review,
      average_rating: extractTag(raw, "average_rating"),
      book_published: extractTag(raw, "book_published"),
      num_pages: extractTag(raw, "num_pages"),
      review,
      shelves: userShelves
        .split(",")
        .map(shelf => shelf.trim())
        .filter(Boolean),
    })
  }

  return items
}

async function fetchXml(url: string, init?: RequestInit): Promise<string> {
  const headers = new Headers(init?.headers)
  headers.set("user-agent", "Mozilla/5.0 (apis.meetgor.com)")
  const response = await fetch(url, {
    ...init,
    headers,
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`)
  }

  return response.text()
}

function parseListQuery(url: URL): ListParams {
  const limit = Math.min(Math.max(parseInt(url.searchParams.get("limit") || "10") || 10, 1), 50)
  const offset = Math.max(parseInt(url.searchParams.get("offset") || "0") || 0, 0)
  const search = url.searchParams.get("search")
  return { limit, offset, search }
}

function normalizeShelfName(shelf: string | null): string {
  const value = (shelf || "all").toLowerCase().trim()
  if (value === "tbr") return "to-read"
  if (value === "reading") return "currently-reading"
  return value
}

function matchesShelf(item: GoodreadsItem, shelf: string): boolean {
  if (shelf === "all") return true
  const explicitShelves = item.shelves.length > 0
    ? item.shelves
    : item.user_shelves.split(",").map(s => s.trim()).filter(Boolean)

  if (shelf === "read") {
    const hasReadSignal = Number(item.user_rating || "0") > 0 || item.user_review.trim().length > 0 || item.user_read_at.trim().length > 0
    return explicitShelves.includes("read") || hasReadSignal
  }

  return explicitShelves.includes(shelf)
}

function matchesText(fields: string[], search: string | null): boolean {
  if (!search) return true
  const needle = normalizeSearchText(search)
  return fields.some(field => normalizeSearchText(field).includes(needle))
}

function matchesBlogQuery(item: BlogItem, q: BlogQuery): boolean {
  if (q.search) {
    const searchFields = typeof q.search === "object" && q.search.fields
      ? q.search.fields
      : BLOG_SEARCH_FIELDS
    const rawQuery = typeof q.search === "string" ? q.search : q.search.query
    const mode = typeof q.search === "object" && q.search.mode
      ? q.search.mode
      : "all"
    const terms = rawQuery
      .split(/\s+/)
      .filter(Boolean)
      .map(normalizeSearchText)

    if (terms.length === 0) return false

    const match = mode === "all"
      ? terms.every(term => searchFields.some(field => normalizeSearchText(item[field as keyof BlogItem]).includes(term)))
      : terms.some(term => searchFields.some(field => normalizeSearchText(item[field as keyof BlogItem]).includes(term)))

    if (!match) return false
  }

  if (q.section && item.section !== q.section) return false

  if (q.date) {
    const itemDate = new Date(item.pub_date)
    if (q.date.from && itemDate < new Date(q.date.from)) return false
    if (q.date.to && itemDate > new Date(q.date.to)) return false
  }

  return true
}

function paginate<T>(items: T[], limit: number, offset: number): T[] {
  return items.slice(offset, offset + limit)
}

function getGoodreadsBookSummary(item: GoodreadsItem) {
  return {
    title: item.title,
    link: item.link,
    slug: normalizeSlugFromLink(item.link),
    book_id: item.book_id,
    author_name: item.author_name,
    book_image_url: item.book_image_url,
    average_rating: item.average_rating,
    user_rating: item.user_rating,
    user_read_at: item.user_read_at,
    user_date_added: item.user_date_added,
    user_shelves: item.user_shelves,
    shelves: item.shelves,
  }
}

function getGoodreadsBookReview(item: GoodreadsItem) {
  return {
    ...getGoodreadsBookSummary(item),
    book_description: item.book_description,
    isbn: item.isbn,
    user_review: item.user_review,
    review: item.review,
    book_published: item.book_published,
    num_pages: item.num_pages,
    user_name: item.user_name,
    user_date_created: item.user_date_created,
    book_small_image_url: item.book_small_image_url,
    book_medium_image_url: item.book_medium_image_url,
    book_large_image_url: item.book_large_image_url,
    link: item.link,
  }
}

async function fetchMeetGorPosts(): Promise<BlogItem[]> {
  const xml = await fetchXml(MEETGOR_RSS_URL)
  return parseMeetGorItems(xml)
}

async function fetchGoodreadsBooks(): Promise<GoodreadsItem[]> {
  const allItems: GoodreadsItem[] = []
  const PER_PAGE = 200

  for (let page = 1; page <= 10; page++) {
    const url = `${GOODREADS_RSS_URL}?per_page=${PER_PAGE}&page=${page}`
    const xml = await fetchXml(url)
    const items = parseGoodreadsItems(xml)
    if (items.length === 0) break
    allItems.push(...items)
  }

  return allItems
}

async function handleGoodreadsBooks(url: URL): Promise<Response> {
  const { limit, offset, search } = parseListQuery(url)
  const shelf = normalizeShelfName(url.searchParams.get("shelf"))
  const books = await fetchGoodreadsBooks()

  const filtered = books.filter(item => matchesShelf(item, shelf) && matchesText([item.title, item.author_name, item.user_review], search))
  const items = paginate(filtered, limit, offset).map(getGoodreadsBookSummary)

  return Response.json({
    shelf,
    total: filtered.length,
    limit,
    offset,
    items,
  })
}

async function handleGoodreadsReviews(url: URL): Promise<Response> {
  const { limit, offset, search } = parseListQuery(url)
  const shelf = normalizeShelfName(url.searchParams.get("shelf"))
  const books = await fetchGoodreadsBooks()

  const reviewed = books.filter(item => {
    const hasReview = item.user_review.trim().length > 0
    const hasRating = Number(item.user_rating || "0") > 0
    return hasReview || hasRating
  })

  const filtered = reviewed.filter(item => matchesShelf(item, shelf) && matchesText([item.title, item.author_name, item.user_review], search))
  const items = paginate(filtered, limit, offset).map(getGoodreadsBookReview)

  return Response.json({
    shelf,
    total: filtered.length,
    limit,
    offset,
    items,
  })
}

async function handleMeetGorSection(url: URL, section: "thoughts" | "links"): Promise<Response> {
  const { limit, offset, search } = parseListQuery(url)
  const posts = await fetchMeetGorPosts()
  const filtered = posts.filter(item => item.section === section && matchesText([item.title, item.description, item.content], search))
  const items = paginate(filtered, limit, offset)

  return Response.json({
    section,
    total: filtered.length,
    limit,
    offset,
    items,
  })
}

async function handleAllBlogPosts(url: URL): Promise<Response> {
  const { limit, offset, search } = parseListQuery(url)
  const posts = await fetchMeetGorPosts()
  const filtered = posts.filter(item => matchesText([item.title, item.description, item.content], search))
  const items = paginate(filtered, limit, offset)

  return Response.json({
    total: filtered.length,
    limit,
    offset,
    items,
  })
}

async function handleBlogQuery(request: Request): Promise<Response> {
  const contentType = request.headers.get("Content-Type") || ""

  if (!contentType.includes("application/json")) {
    return Response.json(
      { error: "Content-Type must be application/json" },
      {
        status: 415,
        headers: { "Accept-Query": "application/json" },
      }
    )
  }

  let query: BlogQuery
  try {
    query = await request.json()
  } catch {
    return Response.json(
      { error: "Request body must be valid JSON" },
      { status: 400 }
    )
  }

  if (typeof query !== "object" || query === null || Object.keys(query).length === 0) {
    return Response.json(
      { error: "Query body must be a non-empty JSON object" },
      { status: 422 }
    )
  }

  if (query.limit !== undefined) {
    if (!Number.isInteger(query.limit) || query.limit < 1 || query.limit > 100) {
      return Response.json(
        { error: "limit must be an integer between 1 and 100" },
        { status: 422 }
      )
    }
  }

  if (query.offset !== undefined) {
    if (!Number.isInteger(query.offset) || query.offset < 0) {
      return Response.json(
        { error: "offset must be a non-negative integer" },
        { status: 422 }
      )
    }
  }

  if (query.sort) {
    const { field, order } = query.sort
    if (!BLOG_SORT_FIELDS.includes(field)) {
      return Response.json(
        { error: `sort.field must be one of: ${BLOG_SORT_FIELDS.join(", ")}` },
        { status: 422 }
      )
    }
    if (order && !ALLOWED_ORDERS.includes(order)) {
      return Response.json(
        { error: `sort.order must be one of: ${ALLOWED_ORDERS.join(", ")}` },
        { status: 422 }
      )
    }
  }

  if (query.fields) {
    const invalid = query.fields.filter(f => !BLOG_QUERY_FIELDS.includes(f))
    if (invalid.length > 0) {
      return Response.json(
        { error: `Invalid fields: ${invalid.join(", ")}. Allowed: ${BLOG_QUERY_FIELDS.join(", ")}` },
        { status: 422 }
      )
    }
  }

  if (query.date) {
    const { from, to } = query.date
    if (from && isNaN(Date.parse(from))) {
      return Response.json({ error: "date.from is not a valid date string" }, { status: 422 })
    }
    if (to && isNaN(Date.parse(to))) {
      return Response.json({ error: "date.to is not a valid date string" }, { status: 422 })
    }
    if (from && to && new Date(from) > new Date(to)) {
      return Response.json({ error: "date.from must be before date.to" }, { status: 422 })
    }
  }

  const posts = await fetchMeetGorPosts()
  let filtered = posts.filter(item => matchesBlogQuery(item, query))

  if (query.sort) {
    const { field, order = "desc" } = query.sort
    const multiplier = order === "asc" ? 1 : -1
    filtered = [...filtered].sort((a, b) => {
      const aVal = a[field as keyof BlogItem]
      const bVal = b[field as keyof BlogItem]
      return String(aVal).localeCompare(String(bVal)) * multiplier
    })
  }

  const limit = query.limit ?? 10
  const offset = query.offset ?? 0
  const paginated = paginate(filtered, limit, offset)

  const selectedFields = query.fields
  const items = selectedFields
    ? paginated.map(item => {
        const projected: Record<string, unknown> = {}
        for (const field of selectedFields) {
          projected[field] = (item as unknown as Record<string, unknown>)[field]
        }
        return projected
      })
    : paginated

  return Response.json(
    {
      total: filtered.length,
      limit,
      offset,
      items,
    },
    {
      headers: {
        "Accept-Query": "application/json",
        "Content-Type": "application/json",
      },
    }
  )
}

function getSocialLinks(): SocialLink[] {
  return [
    { name: "Email", handle: "gormeet711@gmail.com", url: "mailto:gormeet711@gmail.com" },
    { name: "GitHub", handle: "Mr-Destructive", url: "https://github.com/Mr-Destructive" },
    { name: "X", handle: "@MeetGor21", url: "https://twitter.com/MeetGor21" },
    { name: "LinkedIn", handle: "meetgor", url: "https://www.linkedin.com/in/meetgor/" },
    { name: "Bluesky", handle: "meetgor.bsky.social", url: "https://bsky.app/profile/meetgor.bsky.social" },
    { name: "YouTube", handle: "Meet-Technically", url: "https://www.youtube.com/@Meet-Technically" },
    { name: "Twitch", handle: "Meet_Gor", url: "https://www.twitch.tv/Meet_Gor" },
    { name: "dev.to", handle: "mr_destructive", url: "https://dev.to/mr_destructive" },
  ]
}

function getBlogrollLinks(): BlogrollLink[] {
  return [
    {
      name: "Zed",
      site: "https://zed.dev/blog",
      feed: "https://zed.dev/blog.rss",
      source: "https://www.meetgor.com/links/zed-blog-software-is-made-between-commits",
      note: "High-signal product and engineering writing around the editor and agent workflows.",
    },
    {
      name: "Sean Goedecke",
      site: "https://www.seangoedecke.com",
      feed: "https://www.seangoedecke.com/rss.xml",
      source: "https://www.meetgor.com/links/sean-goedecke-wired-projects-i-shipped-with-ai",
      note: "Clear, skeptical writing on software teams, product work, and AI.",
    },
    {
      name: "API Evangelist",
      site: "https://apievangelist.com",
      feed: "https://apievangelist.com/feed.xml",
      source: "https://www.meetgor.com/links/api-evangelist-replacing-the-petstore-openapi-with-the-train-travel-openapi-specs",
      note: "Useful if you care about OpenAPI, API governance, and practical API design.",
    },
    {
      name: "Lorna Jane Mitchell",
      site: "https://lornajane.net/blog",
      feed: "https://lornajane.net/feed",
      source: "https://www.meetgor.com/links/lorna-jane-s-blog",
      note: "Consistently strong API and developer-experience posts.",
    },
    {
      name: "Bob Belderbos",
      site: "https://belderbos.dev/blog",
      feed: "https://belderbos.dev/atom.xml",
      source: "https://www.meetgor.com/links/belderbos-dev-rust-is-for-people-who-want-to-be-punished-now-jochen-trusts-it-more-than-python",
      note: "Python, Rust, and AI with a practical coaching angle.",
    },
    {
      name: "Kevin Kelly",
      site: "https://kk.org/thetechnium",
      feed: "https://feedpress.me/thetechnium",
      source: "https://www.meetgor.com/links/kevin-kelly-substack-your-most-improbable-life",
      note: "Long-form thinking about tech, culture, and improbable futures.",
    },
    {
      name: "Waylon Walker",
      site: "https://waylonwalker.com",
      feed: "https://waylonwalker.com/rss.xml",
      source: "https://www.meetgor.com/links/why-building-my-blog-is-more-fun-than-filling-it",
      note: "Thoughtful personal writing about RSS, self-hosting, and building his own web stack.",
    },
    {
      name: "Dave Rupert",
      site: "https://daverupert.com",
      feed: "https://daverupert.com/atom.xml",
      source: "https://daverupert.com/2025/03/tag-you-re-it/",
      note: "Web craft, tooling, and browser-era writing with a strong RSS culture.",
    },
    {
      name: "Chris Coyier",
      site: "https://chriscoyier.net",
      feed: "https://chriscoyier.net/feed/",
      source: "https://chriscoyier.net/2026/06/01/social-rss-2/",
      note: "Practical web publishing and RSS-adjacent notes from a long-time web author.",
    },
  ]
}

async function handleBlogroll(url: URL): Promise<Response> {
  const { limit, offset, search } = parseListQuery(url)
  const entries = getBlogrollLinks()
  const filtered = entries.filter(item => matchesText([item.name, item.site, item.feed, item.note], search))
  const items = paginate(filtered, limit, offset)

  return Response.json({
    name: "Blogroll",
    description: "Curated RSS feeds selected from the links I actually read and like",
    total: filtered.length,
    limit,
    offset,
    items,
  })
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
  const blogroll = getBlogrollLinks()
  return Response.json({
    name: "My API",
    description: "Personal information, reading lists, blog feeds, social links, and a blogroll",
    endpoints: [
      { path: "/my", description: "This info" },
      { path: "/my/books", description: "Goodreads shelf data" },
      { path: "/my/books/reviews", description: "Goodreads reviews" },
      { path: "/my/thoughts", description: "Thought posts from RSS" },
      { path: "/my/links", description: "Link posts from RSS" },
      { path: "/my/blogs", description: "All blog posts from RSS (GET for simple, QUERY for rich filters)" },
      { path: "QUERY /my/blogs", description: "Rich blog search with QUERY method (RFC 10008)" },
      { path: "/my/blogroll", description: "Curated RSS blogroll" },
      { path: "/my/socials", description: "Social link tree" },
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
    blogroll: {
      total: blogroll.length,
      items: blogroll,
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
    if (pathname === "/my/books") {
      return handleGoodreadsBooks(url)
    }
    if (pathname === "/my/books/reviews") {
      return handleGoodreadsReviews(url)
    }
    if (pathname === "/my/thoughts") {
      return handleMeetGorSection(url, "thoughts")
    }
    if (pathname === "/my/links") {
      return handleMeetGorSection(url, "links")
    }
    if (pathname === "/my/blogs") {
      if (request.method === "GET") return handleAllBlogPosts(url)
      if (request.method === "QUERY") return handleBlogQuery(request)
      return Response.json({ error: "Method not allowed. Use GET or QUERY." }, { status: 405 })
    }
    if (pathname === "/my/blogroll") {
      return handleBlogroll(url)
    }
    if (pathname === "/my/socials") {
      return Response.json({
        name: "Meet Gor",
        tree: getSocialLinks(),
      })
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

    if (pathname === "/doclet/docs") return serveDocs("Doclet API", "/doclet/docs/openapi.yaml")
    if (pathname.startsWith("/doclet")) {
      return handleDoclet(request)
    }

    if (pathname === "/flights") {
      if (request.method === "QUERY") return handleFlights(request)
      if (request.method === "GET") return Response.json({
        name: "Flight Observatory API",
        description: "Query live global flight data from the OpenSky Network via the HTTP QUERY method (RFC 10008). Supports rich multi-dimensional filters on altitude, speed, heading, airline, country, bounding box, and more.",
        usage: "Send a QUERY request with Content-Type: application/json and a JSON body of filters.",
        methods: ["QUERY"],
        docs: "/flights/docs",
      })
      return Response.json({ error: "Method not allowed. Use QUERY." }, { status: 405 })
    }
    if (pathname === "/flights/docs") return serveDocs("Flight Observatory", "/flights/docs/openapi.yaml")

    return Response.json({ error: "Not found" }, { status: 404 })
  },
}
