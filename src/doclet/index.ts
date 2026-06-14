import JSZip from "jszip"
import { degrees, PDFDocument } from "pdf-lib"

interface DocletIntent {
  action: string
  params?: Record<string, unknown>
  outputName?: string
}

interface DocletCapability {
  action: string
  description: string
  kinds: string[]
  supported: boolean
}

interface DocletInspection {
  file: {
    name: string
    mimeType: string
    size: number
    extension: string
  }
  kind: string
  metadata: Record<string, unknown>
  supportedActions: string[]
}

interface FormInput {
  file?: File
  files?: File[]
  intent?: DocletIntent
  url?: string
}

type FormValue = string | File | null | undefined

const DOCLET_BASE = "/doclet/v1"

const CAPABILITIES: DocletCapability[] = [
  { action: "inspect", description: "Detect file type and return metadata", kinds: ["pdf", "docx", "image", "text", "html", "xml", "csv", "markdown", "zip"], supported: true },
  { action: "split", description: "Extract selected PDF pages into a new PDF", kinds: ["pdf"], supported: true },
  { action: "merge", description: "Merge multiple PDFs into one PDF", kinds: ["pdf"], supported: true },
  { action: "rotate", description: "Rotate selected PDF pages", kinds: ["pdf"], supported: true },
  { action: "crop", description: "Set the crop box for selected PDF pages", kinds: ["pdf"], supported: true },
  { action: "trim", description: "Set the trim box for selected PDF pages", kinds: ["pdf"], supported: true },
  { action: "add", description: "Add blank PDF pages", kinds: ["pdf"], supported: true },
  { action: "layout", description: "Reflow PDF pages onto a new page size", kinds: ["pdf"], supported: true },
  { action: "extract-text", description: "Extract text from text-like documents and DOCX files", kinds: ["text", "html", "xml", "csv", "markdown", "docx"], supported: true },
  { action: "ocr", description: "OCR a raster image or scanned PDF", kinds: ["image", "pdf"], supported: false },
]

const PAGE_SIZES: Record<string, [number, number]> = {
  a4: [595.28, 841.89],
  letter: [612, 792],
  legal: [612, 1008],
  tabloid: [792, 1224],
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

function ok(body: unknown, init?: ResponseInit) {
  return Response.json(body, init)
}

function isFile(value: FormValue): value is File {
  return typeof File !== "undefined" && value instanceof File
}

function normalizeAction(action: string): string {
  return action.trim().toLowerCase().replace(/_/g, "-")
}

function getExtension(name: string): string {
  const parts = name.toLowerCase().split(".")
  return parts.length > 1 ? parts[parts.length - 1] : ""
}

function parseJsonField<T>(value: FormValue): T | undefined {
  if (typeof value !== "string" || value.trim() === "") return undefined
  try {
    return JSON.parse(value) as T
  } catch {
    return undefined
  }
}

function parsePageList(value: unknown, pageCount: number): number[] {
  if (value == null) {
    return Array.from({ length: pageCount }, (_, index) => index)
  }

  const raw = Array.isArray(value) ? value.join(",") : String(value)
  const indices = new Set<number>()

  for (const token of raw.split(",")) {
    const trimmed = token.trim()
    if (!trimmed) continue
    const range = trimmed.match(/^(\d+)\s*-\s*(\d+)$/)
    if (range) {
      const start = Math.max(parseInt(range[1], 10), 1)
      const end = Math.max(parseInt(range[2], 10), 1)
      const [from, to] = start <= end ? [start, end] : [end, start]
      for (let n = from; n <= to; n++) {
        if (n <= pageCount) indices.add(n - 1)
      }
      continue
    }
    const single = parseInt(trimmed, 10)
    if (!Number.isNaN(single) && single >= 1 && single <= pageCount) {
      indices.add(single - 1)
    }
  }

  return [...indices]
}

function parseBox(value: unknown): { x: number; y: number; width: number; height: number } | null {
  if (!value || typeof value !== "object") return null
  const box = value as Record<string, unknown>
  const x = Number(box.x)
  const y = Number(box.y)
  const width = Number(box.width)
  const height = Number(box.height)
  if ([x, y, width, height].some(v => Number.isNaN(v))) return null
  return { x, y, width, height }
}

function parsePageSize(value: unknown): [number, number] | null {
  if (typeof value === "string") {
    const preset = PAGE_SIZES[value.toLowerCase()]
    return preset || null
  }
  if (value && typeof value === "object") {
    const obj = value as Record<string, unknown>
    const width = Number(obj.width)
    const height = Number(obj.height)
    if (Number.isFinite(width) && Number.isFinite(height)) {
      return [width, height]
    }
  }
  return null
}

function inferMimeType(file: File, bytes: Uint8Array): string {
  if (file.type) return file.type
  if (bytes.length >= 4 && bytes[0] === 0x25 && bytes[1] === 0x50 && bytes[2] === 0x44 && bytes[3] === 0x46) return "application/pdf"
  if (bytes.length >= 8 && bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47) return "image/png"
  if (bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return "image/jpeg"
  if (bytes.length >= 6 && bytes[0] === 0x47 && bytes[1] === 0x49 && bytes[2] === 0x46) return "image/gif"
  if (bytes.length >= 12 && bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[8] === 0x57 && bytes[9] === 0x45 && bytes[10] === 0x42 && bytes[11] === 0x50) return "image/webp"
  const ext = getExtension(file.name)
  if (ext === "pdf") return "application/pdf"
  if (ext === "docx") return "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  if (ext === "doc") return "application/msword"
  if (ext === "png") return "image/png"
  if (ext === "jpg" || ext === "jpeg") return "image/jpeg"
  if (ext === "gif") return "image/gif"
  if (ext === "webp") return "image/webp"
  if (ext === "svg") return "image/svg+xml"
  if (ext === "html" || ext === "htm") return "text/html"
  if (ext === "xml") return "application/xml"
  if (ext === "csv") return "text/csv"
  if (ext === "md" || ext === "markdown") return "text/markdown"
  if (ext === "txt") return "text/plain"
  return "application/octet-stream"
}

function detectKind(file: File, mimeType: string, bytes: Uint8Array): string {
  const name = file.name.toLowerCase()
  const ext = getExtension(name)
  if (mimeType === "application/pdf" || name.endsWith(".pdf")) return "pdf"
  if (mimeType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || ext === "docx") return "docx"
  if (mimeType.startsWith("image/") || ["png", "jpg", "jpeg", "gif", "webp", "svg"].includes(ext)) return "image"
  if (mimeType.includes("html") || ext === "html" || ext === "htm") return "html"
  if (mimeType.includes("xml") || ext === "xml") return "xml"
  if (mimeType.includes("csv") || ext === "csv") return "csv"
  if (mimeType.includes("markdown") || ext === "md" || ext === "markdown") return "markdown"
  if (mimeType.startsWith("text/") || ["txt", "log", "rtf"].includes(ext)) return "text"
  if (bytes.length > 4 && bytes[0] === 0x50 && bytes[1] === 0x4b) return "zip"
  return "unknown"
}

function decodeXmlEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&apos;/g, "'")
}

function stripTags(text: string): string {
  return decodeXmlEntities(text.replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim()
}

async function readFileBytes(file: File): Promise<Uint8Array> {
  return new Uint8Array(await file.arrayBuffer())
}

async function loadInputFromJson(request: Request): Promise<FormInput> {
  const body = await request.json() as { url?: string; intent?: DocletIntent }
  if (!body.url) return { intent: body.intent }
  const response = await fetch(body.url)
  if (!response.ok) {
    throw new Error(`Unable to fetch input URL: ${response.status}`)
  }
  const name = new URL(body.url).pathname.split("/").filter(Boolean).pop() || "document"
  const bytes = new Uint8Array(await response.arrayBuffer())
  const mimeType = response.headers.get("content-type") || "application/octet-stream"
  const file = new File([bytes], name, { type: mimeType })
  return { file, intent: body.intent, url: body.url }
}

async function loadInputFromForm(request: Request): Promise<FormInput> {
  const form = await request.formData()
  const fileValue = form.get("file")
  const rawFiles = form.getAll("files") as Array<string | File>
  const files = rawFiles.filter(isFile)
  const intent = parseJsonField<DocletIntent>(form.get("intent")) || parseJsonField<DocletIntent>(form.get("params"))
  const action = typeof form.get("action") === "string" ? String(form.get("action")) : undefined
  const outputName = typeof form.get("outputName") === "string" ? form.get("outputName") as string : undefined

  if (intent) {
    if (!intent.outputName && outputName) intent.outputName = outputName
  }

  if (files.length > 0) {
    return { files, intent: intent || (action ? { action } : undefined) }
  }

  return { file: isFile(fileValue) ? fileValue : undefined, intent: intent || (action ? { action } : undefined) }
}

async function loadInput(request: Request): Promise<FormInput> {
  const contentType = request.headers.get("content-type") || ""
  if (contentType.includes("application/json")) return loadInputFromJson(request)
  if (contentType.includes("multipart/form-data")) return loadInputFromForm(request)
  throw new Error("Unsupported content type. Use multipart/form-data or application/json.")
}

async function inspectDocx(bytes: Uint8Array): Promise<Record<string, unknown>> {
  const zip = await JSZip.loadAsync(bytes)
  const documentXml = zip.file("word/document.xml")
  const coreXml = zip.file("docProps/core.xml")
  const text = documentXml ? await documentXml.async("string") : ""
  const paragraphs = text.match(/<w:p[\s\S]*?<\/w:p>/g) || []
  const lines = paragraphs
    .map(paragraph => {
      const runs = paragraph.match(/<w:t[^>]*>([\s\S]*?)<\/w:t>/g) || []
      return runs.map(run => stripTags(run)).join(" ").trim()
    })
    .filter(Boolean)
  const core = coreXml ? await coreXml.async("string") : ""
  const title = (core.match(/<dc:title>([\s\S]*?)<\/dc:title>/)?.[1] || "").trim()
  return {
    pageCount: undefined,
    paragraphCount: paragraphs.length,
    title: title || undefined,
    preview: lines.slice(0, 3),
  }
}

function parsePngSize(bytes: Uint8Array): { width: number; height: number } | null {
  if (bytes.length < 24) return null
  if (!(bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47)) return null
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)
  return { width: view.getUint32(16), height: view.getUint32(20) }
}

function parseGifSize(bytes: Uint8Array): { width: number; height: number } | null {
  if (bytes.length < 10) return null
  if (!(bytes[0] === 0x47 && bytes[1] === 0x49 && bytes[2] === 0x46)) return null
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)
  return { width: view.getUint16(6, true), height: view.getUint16(8, true) }
}

function parseJpegSize(bytes: Uint8Array): { width: number; height: number } | null {
  if (bytes.length < 4 || bytes[0] !== 0xff || bytes[1] !== 0xd8) return null
  let offset = 2
  while (offset < bytes.length) {
    if (bytes[offset] !== 0xff) {
      offset++
      continue
    }
    const marker = bytes[offset + 1]
    if (marker === 0xc0 || marker === 0xc1 || marker === 0xc2 || marker === 0xc3 || marker === 0xc5 || marker === 0xc6 || marker === 0xc7 || marker === 0xc9 || marker === 0xca || marker === 0xcb || marker === 0xcd || marker === 0xce || marker === 0xcf) {
      const view = new DataView(bytes.buffer, bytes.byteOffset + offset + 5, 4)
      return { height: view.getUint16(0), width: view.getUint16(2) }
    }
    const len = (bytes[offset + 2] << 8) + bytes[offset + 3]
    offset += 2 + len
  }
  return null
}

function getUint24(view: DataView, byteOffset: number, littleEndian = false): number {
  if (littleEndian) {
    return view.getUint8(byteOffset) | (view.getUint8(byteOffset + 1) << 8) | (view.getUint8(byteOffset + 2) << 16)
  }
  return (view.getUint8(byteOffset) << 16) | (view.getUint8(byteOffset + 1) << 8) | view.getUint8(byteOffset + 2)
}

function parseWebpSize(bytes: Uint8Array): { width: number; height: number } | null {
  if (bytes.length < 30) return null
  if (!(bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[8] === 0x57 && bytes[9] === 0x45 && bytes[10] === 0x42 && bytes[11] === 0x50)) return null
  const chunkType = String.fromCharCode(bytes[12], bytes[13], bytes[14], bytes[15])
  if (chunkType === "VP8X") {
    const view = new DataView(bytes.buffer, bytes.byteOffset)
    const width = 1 + getUint24(view, 24, true)
    const height = 1 + getUint24(view, 27, true)
    return { width, height }
  }
  if (chunkType === "VP8 ") {
    const view = new DataView(bytes.buffer, bytes.byteOffset)
    const width = view.getUint16(26, true) & 0x3fff
    const height = view.getUint16(28, true) & 0x3fff
    return { width, height }
  }
  return null
}

function parseImageSize(bytes: Uint8Array): { width: number; height: number } | null {
  return parsePngSize(bytes) || parseGifSize(bytes) || parseJpegSize(bytes) || parseWebpSize(bytes)
}

async function inspectPdf(bytes: Uint8Array): Promise<Record<string, unknown>> {
  const pdf = await PDFDocument.load(bytes, { ignoreEncryption: true })
  const pages = pdf.getPages().map((page, index) => {
    const size = page.getSize()
    return {
      index: index + 1,
      width: size.width,
      height: size.height,
      rotation: page.getRotation().angle,
      cropBox: page.getCropBox(),
      trimBox: page.getTrimBox(),
    }
  })
  return {
    pageCount: pdf.getPageCount(),
    title: pdf.getTitle() || undefined,
    author: pdf.getAuthor() || undefined,
    subject: pdf.getSubject() || undefined,
    creator: pdf.getCreator() || undefined,
    producer: pdf.getProducer() || undefined,
    pages,
  }
}

function countLines(text: string): number {
  return text ? text.split(/\r\n|\r|\n/).length : 0
}

async function inspectDocument(file: File): Promise<DocletInspection> {
  const bytes = await readFileBytes(file)
  const mimeType = inferMimeType(file, bytes)
  const kind = detectKind(file, mimeType, bytes)
  const extension = getExtension(file.name)
  const metadata: Record<string, unknown> = {
    fileType: mimeType,
  }

  if (kind === "pdf") {
    Object.assign(metadata, await inspectPdf(bytes))
  } else if (kind === "docx") {
    Object.assign(metadata, await inspectDocx(bytes))
  } else if (kind === "image") {
    const size = parseImageSize(bytes)
    if (size) Object.assign(metadata, size)
  } else if (kind === "text" || kind === "html" || kind === "xml" || kind === "csv" || kind === "markdown") {
    const text = await file.text()
    Object.assign(metadata, {
      lineCount: countLines(text),
      characterCount: text.length,
      preview: text.slice(0, 500),
    })
  }

  return {
    file: { name: file.name, mimeType, size: file.size, extension },
    kind,
    metadata,
    supportedActions: CAPABILITIES.filter(cap => cap.supported && cap.kinds.includes(kind)).map(cap => cap.action),
  }
}

async function loadPdf(file: File): Promise<{ pdf: PDFDocument; bytes: Uint8Array; fileName: string }> {
  const bytes = await readFileBytes(file)
  const pdf = await PDFDocument.load(bytes, { ignoreEncryption: true })
  return { pdf, bytes, fileName: file.name }
}

function pdfOutputName(inputName: string, suffix: string): string {
  const base = inputName.replace(/\.[^.]+$/, "")
  return `${base}${suffix}.pdf`
}

function makePdfResponse(bytes: Uint8Array, filename: string): Response {
  return new Response(bytes, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  })
}

async function splitPdf(file: File, params: Record<string, unknown>, outputName?: string): Promise<Response> {
  const { pdf } = await loadPdf(file)
  const pages = parsePageList(params.pages, pdf.getPageCount())
  if (pages.length === 0) return problem(400, "Bad Request", "No valid page numbers were provided.")
  const out = await PDFDocument.create()
  const copied = await out.copyPages(pdf, pages)
  for (const page of copied) out.addPage(page)
  const bytes = await out.save()
  return makePdfResponse(bytes, outputName || pdfOutputName(file.name, "-split"))
}

async function mergePdfs(files: File[], outputName?: string): Promise<Response> {
  if (files.length < 2) return problem(400, "Bad Request", "Provide at least two PDF files to merge.")
  const out = await PDFDocument.create()
  for (const file of files) {
    const bytes = await readFileBytes(file)
    const pdf = await PDFDocument.load(bytes, { ignoreEncryption: true })
    const copied = await out.copyPages(pdf, pdf.getPageIndices())
    for (const page of copied) out.addPage(page)
  }
  const bytes = await out.save()
  return makePdfResponse(bytes, outputName || "doclet-merged.pdf")
}

async function rotatePdf(file: File, params: Record<string, unknown>, outputName?: string): Promise<Response> {
  const { pdf } = await loadPdf(file)
  const angle = Number(params.angle ?? 90)
  const normalized = ((angle % 360) + 360) % 360
  if (![0, 90, 180, 270].includes(normalized)) {
    return problem(400, "Bad Request", "Rotate angle must be one of 0, 90, 180, or 270 degrees.")
  }
  const pages = parsePageList(params.pages, pdf.getPageCount())
  const targets = pages.length > 0 ? pages : pdf.getPageIndices()
  for (const index of targets) {
    pdf.getPage(index).setRotation(degrees(normalized))
  }
  const bytes = await pdf.save()
  return makePdfResponse(bytes, outputName || pdfOutputName(file.name, "-rotated"))
}

async function cropPdf(file: File, params: Record<string, unknown>, outputName?: string): Promise<Response> {
  const { pdf } = await loadPdf(file)
  const box = parseBox(params.box || params.crop || params.trim)
  if (!box) return problem(400, "Bad Request", "Provide a crop box with x, y, width, and height.")
  const pages = parsePageList(params.pages, pdf.getPageCount())
  const targets = pages.length > 0 ? pages : pdf.getPageIndices()
  for (const index of targets) {
    pdf.getPage(index).setCropBox(box.x, box.y, box.width, box.height)
  }
  const bytes = await pdf.save()
  return makePdfResponse(bytes, outputName || pdfOutputName(file.name, "-cropped"))
}

async function trimPdf(file: File, params: Record<string, unknown>, outputName?: string): Promise<Response> {
  const { pdf } = await loadPdf(file)
  const box = parseBox(params.box || params.trim)
  if (!box) return problem(400, "Bad Request", "Provide a trim box with x, y, width, and height.")
  const pages = parsePageList(params.pages, pdf.getPageCount())
  const targets = pages.length > 0 ? pages : pdf.getPageIndices()
  for (const index of targets) {
    pdf.getPage(index).setTrimBox(box.x, box.y, box.width, box.height)
  }
  const bytes = await pdf.save()
  return makePdfResponse(bytes, outputName || pdfOutputName(file.name, "-trimmed"))
}

async function addBlankPages(file: File, params: Record<string, unknown>, outputName?: string): Promise<Response> {
  const { pdf } = await loadPdf(file)
  const count = Math.max(Number(params.count ?? 1), 1)
  const positionRaw = params.position
  const firstPageSize = pdf.getPageCount() > 0 ? pdf.getPage(0).getSize() : null
  const pageSize = parsePageSize(params.pageSize) || (firstPageSize ? [firstPageSize.width, firstPageSize.height] : PAGE_SIZES.a4)
  const insertAt = positionRaw === "start" ? 0 : Number(positionRaw)

  for (let i = 0; i < count; i++) {
    if (Number.isFinite(insertAt) && insertAt >= 0 && insertAt <= pdf.getPageCount()) {
      pdf.insertPage(insertAt + i, pageSize)
    } else {
      pdf.addPage(pageSize)
    }
  }

  const bytes = await pdf.save()
  return makePdfResponse(bytes, outputName || pdfOutputName(file.name, "-added"))
}

async function layoutPdf(file: File, params: Record<string, unknown>, outputName?: string): Promise<Response> {
  const bytes = await readFileBytes(file)
  const src = await PDFDocument.load(bytes, { ignoreEncryption: true })
  const out = await PDFDocument.create()
  const target = parsePageSize(params.pageSize) || PAGE_SIZES.a4
  const orientation = typeof params.orientation === "string" ? params.orientation.toLowerCase() : "portrait"
  const [targetWidth, targetHeight] = orientation === "landscape" ? [target[1], target[0]] : target
  const scaleMode = typeof params.mode === "string" ? params.mode.toLowerCase() : "fit"

  for (const page of src.getPages()) {
    const embedded = await out.embedPage(page)
    const source = page.getSize()
    const scale = scaleMode === "fill"
      ? Math.max(targetWidth / source.width, targetHeight / source.height)
      : Math.min(targetWidth / source.width, targetHeight / source.height)
    const width = source.width * scale
    const height = source.height * scale
    const x = (targetWidth - width) / 2
    const y = (targetHeight - height) / 2
    const next = out.addPage([targetWidth, targetHeight])
    next.drawPage(embedded, { x, y, width, height })
  }

  const outBytes = await out.save()
  return makePdfResponse(outBytes, outputName || pdfOutputName(file.name, "-layout"))
}

async function extractText(file: File): Promise<Response> {
  const bytes = await readFileBytes(file)
  const mimeType = inferMimeType(file, bytes)
  const kind = detectKind(file, mimeType, bytes)

  if (kind === "text" || kind === "html" || kind === "xml" || kind === "csv" || kind === "markdown") {
    const text = await file.text()
    const content = kind === "html" || kind === "xml" ? stripTags(text) : text
    return ok({ kind, text: content, length: content.length })
  }

  if (kind === "docx") {
    const zip = await JSZip.loadAsync(bytes)
    const xml = await zip.file("word/document.xml")?.async("string") || ""
    const paragraphs = xml.match(/<w:p[\s\S]*?<\/w:p>/g) || []
    const lines = paragraphs.map(paragraph => {
      const runs = paragraph.match(/<w:t[^>]*>([\s\S]*?)<\/w:t>/g) || []
      return runs.map(run => stripTags(run)).join(" ").trim()
    }).filter(Boolean)
    const text = lines.join("\n")
    return ok({ kind, text, length: text.length, paragraphs: lines.length })
  }

  if (kind === "pdf") {
    return problem(501, "Not Implemented", "PDF text extraction is not enabled yet in Doclet.")
  }

  return problem(415, "Unsupported Media Type", `Text extraction is not supported for ${kind || "this file"} files.`)
}

async function inspectInput(file: File): Promise<Response> {
  const inspection = await inspectDocument(file)
  return ok({
    name: "Doclet inspect",
    inspection,
    capabilities: CAPABILITIES,
  })
}

async function operateSingle(file: File, intent: DocletIntent): Promise<Response> {
  const action = normalizeAction(intent.action)
  const params = intent.params || {}
  const outputName = intent.outputName
  const bytes = await readFileBytes(file)
  const mimeType = inferMimeType(file, bytes)
  const kind = detectKind(file, mimeType, bytes)

  if (action === "ocr") {
    return problem(501, "Not Implemented", "OCR is declared by Doclet but no OCR engine is configured yet.")
  }

  if (action === "extract-text") {
    return extractText(file)
  }

  if (kind !== "pdf") {
    return problem(415, "Unsupported Media Type", `Action "${action}" currently works on PDF files only. Detected kind: ${kind}.`)
  }

  if (action === "split") return splitPdf(file, params, outputName)
  if (action === "rotate") return rotatePdf(file, params, outputName)
  if (action === "crop") return cropPdf(file, params, outputName)
  if (action === "trim") return trimPdf(file, params, outputName)
  if (action === "add") return addBlankPages(file, params, outputName)
  if (action === "layout") return layoutPdf(file, params, outputName)

  return problem(400, "Bad Request", `Unknown action "${intent.action}".`)
}

function manifest(): Record<string, unknown> {
  return {
    name: "Doclet API",
    description: "A document toolkit for inspect, split, merge, rotate, crop, trim, add, layout, and text extraction.",
    path: DOCLET_BASE,
    endpoints: [
      "/doclet",
      "/doclet/v1/capabilities",
      "/doclet/v1/inspect",
      "/doclet/v1/operate",
      "/doclet/v1/merge",
      "/doclet/docs",
    ],
    formats: ["pdf", "docx", "png", "jpeg", "gif", "webp", "svg", "txt", "md", "html", "xml", "csv"],
    notes: [
      "OCR is part of the contract but requires an OCR engine to be attached later.",
      "PDF editing is implemented natively; image editing is currently inspect-first.",
    ],
  }
}

function capabilitiesResponse(): Record<string, unknown> {
  return {
    name: "Doclet capabilities",
    actions: CAPABILITIES,
    pageSizePresets: Object.keys(PAGE_SIZES),
  }
}

export async function handleDoclet(request: Request): Promise<Response> {
  const url = new URL(request.url)
  const path = url.pathname.replace(/\/$/, "")

  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204 })
  }

  if (path === DOCLET_BASE) {
    if (request.method !== "GET") {
      return problem(405, "Method Not Allowed", `HTTP method ${request.method} is not supported. Use GET.`, path)
    }
    return ok(manifest())
  }

  if (path === `${DOCLET_BASE}/capabilities`) {
    if (request.method !== "GET") {
      return problem(405, "Method Not Allowed", `HTTP method ${request.method} is not supported. Use GET.`, path)
    }
    return ok(capabilitiesResponse())
  }

  if (path === `${DOCLET_BASE}/inspect`) {
    if (request.method !== "POST") {
      return problem(405, "Method Not Allowed", `HTTP method ${request.method} is not supported. Use POST.`, path)
    }
    try {
      const input = await loadInput(request)
      if (!input.file) return problem(400, "Bad Request", "Provide a file upload or a JSON body with a URL.")
      return inspectInput(input.file)
    } catch (error) {
      return problem(400, "Bad Request", error instanceof Error ? error.message : "Unable to inspect input.")
    }
  }

  if (path === `${DOCLET_BASE}/merge`) {
    if (request.method !== "POST") {
      return problem(405, "Method Not Allowed", `HTTP method ${request.method} is not supported. Use POST.`, path)
    }
    try {
      const input = await loadInput(request)
      const files = input.files && input.files.length > 0 ? input.files : input.file ? [input.file] : []
      return mergePdfs(files, input.intent?.outputName)
    } catch (error) {
      return problem(400, "Bad Request", error instanceof Error ? error.message : "Unable to merge files.")
    }
  }

  if (path === `${DOCLET_BASE}/operate`) {
    if (request.method !== "POST") {
      return problem(405, "Method Not Allowed", `HTTP method ${request.method} is not supported. Use POST.`, path)
    }
    try {
      const input = await loadInput(request)
      const intent = input.intent
      if (!intent?.action) return problem(400, "Bad Request", "Provide an intent with action and params.")
      if (normalizeAction(intent.action) === "merge") {
        const files = input.files && input.files.length > 0 ? input.files : input.file ? [input.file] : []
        return mergePdfs(files, intent.outputName)
      }
      if (!input.file) return problem(400, "Bad Request", "Provide a file upload or a JSON URL input.")
      return operateSingle(input.file, intent)
    } catch (error) {
      return problem(400, "Bad Request", error instanceof Error ? error.message : "Unable to process the document.")
    }
  }

  return problem(404, "Not Found", "The requested Doclet endpoint does not exist.", path)
}
