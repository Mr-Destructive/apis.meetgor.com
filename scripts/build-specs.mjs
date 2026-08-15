import { readFileSync, writeFileSync, mkdirSync, rmSync, copyFileSync, existsSync } from "fs"
import { resolve, dirname } from "path"
import { fileURLToPath } from "url"
import yaml from "js-yaml"

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, "..")
const SPECS_DIR = resolve(ROOT, "specs")
const OUT_DIR = resolve(ROOT, "assets")

const allSpecs = [
  { file: "root.yaml", tag: "Root" },
  { file: "my.yaml", tag: "My Profile", group: "My Profile" },
  { file: "newsletter.yaml", tag: "Newsletter", group: "My Profile" },
  { file: "games.yaml", tag: "Games", group: "Games" },
  { file: "tic-tac-toe.yaml", tag: "Tic Tac Toe", group: "Games" },
  { file: "chess.yaml", tag: "Chess", group: "Games" },
  { file: "rock-paper-scissors.yaml", tag: "Rock Paper Scissors", group: "Games" },
  { file: "handy-cricket.yaml", tag: "Handy Cricket", group: "Games" },
  { file: "virtual-fight.yaml", tag: "Virtual Fight", group: "Games" },
  { file: "quiz.yaml", tag: "Quiz", group: "Quiz" },
  { file: "llamaline.yaml", tag: null, group: "Llamaline API", tagsFromSpec: true },
  { file: "doclet.yaml", tag: "Doclet", group: "Doclet API" },
  { file: "flights.yaml", tag: "Flights", group: "Flight Observatory" },
  { file: "tokenomics.yaml", tag: null, group: "Tokenomics API", tagsFromSpec: true },
]

const tagGroups = [
  { name: "My Profile", tags: ["My Profile", "Newsletter"] },
  { name: "Games", tags: ["Games", "Tic Tac Toe", "Chess", "Rock Paper Scissors", "Handy Cricket", "Virtual Fight"] },
  { name: "Quiz", tags: ["Quiz"] },
  { name: "Llamaline API", tags: ["Providers", "Models", "Timeline"] },
  { name: "Doclet API", tags: ["Doclet"] },
  { name: "Flight Observatory", tags: ["Flights"] },
  { name: "Tokenomics API", tags: ["Pricing Providers", "Pricing Models", "Cost Estimation"] },
]

const perApiSpecs = [
  { file: "my.yaml", out: "my/docs/openapi.yaml" },
  { file: "newsletter.yaml", out: "my/newsletter/docs/openapi.yaml" },
  { file: "games.yaml", out: "games/docs/openapi.yaml" },
  { file: "tic-tac-toe.yaml", out: "games/tic-tac-toe/docs/openapi.yaml" },
  { file: "chess.yaml", out: "games/chess/docs/openapi.yaml" },
  { file: "rock-paper-scissors.yaml", out: "games/rock-paper-scissors/docs/openapi.yaml" },
  { file: "handy-cricket.yaml", out: "games/handy-cricket/docs/openapi.yaml" },
  { file: "virtual-fight.yaml", out: "games/virtual-fight/docs/openapi.yaml" },
  { file: "quiz.yaml", out: "quiz/docs/openapi.yaml" },
  { file: "llamaline.yaml", out: "llamaline/docs/openapi.yaml" },
  { file: "doclet.yaml", out: "doclet/docs/openapi.yaml" },
  { file: "flights.yaml", out: "flights/docs/openapi.yaml" },
  { file: "tokenomics.yaml", out: "tokenomics/docs/openapi.yaml" },
]

function resolveJsonPointer(obj, pointer) {
  const parts = pointer.replace(/^\//, "").split("/")
  let current = obj
  for (const part of parts) {
    if (current == null || typeof current !== "object") return undefined
    const key = part.replace(/~1/g, "/").replace(/~0/g, "~")
    current = current[key]
  }
  return current
}

function derefNode(node, componentsObj, selfObj) {
  if (Array.isArray(node)) {
    return node.map(item => derefNode(item, componentsObj, selfObj))
  }
  if (node && typeof node === "object") {
    if (node.$ref && typeof node.$ref === "string") {
      const ref = node.$ref
      let resolved
      if (ref.startsWith("./components.yaml#")) {
        const pointer = ref.slice("./components.yaml#".length)
        resolved = resolveJsonPointer(componentsObj, pointer)
      } else if (ref.startsWith("#/") && selfObj) {
        resolved = resolveJsonPointer(selfObj, ref.slice(1))
      }
      if (resolved !== undefined) {
        const nextSelfObj = ref.startsWith("./components.yaml#") ? componentsObj : selfObj
        return derefNode(structuredClone(resolved), componentsObj, nextSelfObj)
      }
      if (ref.startsWith("./components.yaml#") || ref.startsWith("#/")) {
        console.warn(`  Warning: Could not resolve ${ref}`)
      }
      return node
    }
    const result = {}
    for (const key of Object.keys(node)) {
      result[key] = derefNode(node[key], componentsObj, selfObj)
    }
    return result
  }
  return node
}

function loadAndResolve(filename, componentsObj, skipDeref) {
  const filePath = resolve(SPECS_DIR, filename)
  const raw = readFileSync(filePath, "utf-8")
  const parsed = yaml.load(raw)
  if (skipDeref) return parsed
  return derefNode(parsed, componentsObj, parsed)
}

function writeYaml(obj, outPath) {
  mkdirSync(dirname(outPath), { recursive: true })
  const yamlStr = yaml.dump(obj, {
    indent: 2,
    lineWidth: -1,
    quotingType: '"',
    forceQuotes: false,
    noRefs: true,
  })
  writeFileSync(outPath, yamlStr)
}

function build() {
  console.log("Building self-contained OpenAPI specs...\n")

  const componentsRaw = readFileSync(resolve(SPECS_DIR, "components.yaml"), "utf-8")
  const componentsObj = yaml.load(componentsRaw)
  console.log(`  Loaded shared components\n`)

  rmSync(OUT_DIR, { recursive: true, force: true })
  mkdirSync(OUT_DIR, { recursive: true })

  // Copy Scalar standalone with QUERY method support (built from forked repo)
  const scalarBundleSource = resolve(SPECS_DIR, "../scalar/packages/api-reference/dist/browser/standalone.js")
  const scalarBundleDest = resolve(OUT_DIR, "scalar-standalone.js")
  if (existsSync(scalarBundleSource)) {
    copyFileSync(scalarBundleSource, scalarBundleDest)
    console.log(`  scalar-standalone.js -> assets/scalar-standalone.js`)
  } else {
    console.warn(`  WARNING: scalar standalone bundle not found at ${scalarBundleSource}`)
  }

  // Build combined spec for /docs (all APIs in one Scalar UI)
  const combined = {
    openapi: "3.1.0",
    info: {
      title: "apis.meetgor.com",
      version: "1.0.0",
      description: "Combined API documentation for all services.",
    },
    servers: [{ url: "https://apis.meetgor.com" }],
    paths: {},
    components: { schemas: {} },
    tags: allSpecs.flatMap(s => s.tag ? [{ name: s.tag }] : []),
    "x-tagGroups": tagGroups,
  }

  const allTagNames = new Set()

  for (const entry of allSpecs) {
    const { file, tag, tagsFromSpec } = entry
    const spec = loadAndResolve(file, componentsObj)
    for (const [path, methods] of Object.entries(spec.paths || {})) {
      if (!combined.paths[path]) combined.paths[path] = {}
      for (const [method, operation] of Object.entries(methods)) {
        if (tagsFromSpec) {
          const op = { ...operation }
          if (op.tags) {
            for (const t of op.tags) allTagNames.add(t)
          }
          combined.paths[path][method] = op
        } else {
          const op = { ...operation, tags: [tag] }
          combined.paths[path][method] = op
        }
      }
    }
    if (spec.components?.schemas) {
      Object.assign(combined.components.schemas, spec.components.schemas)
    }
  }

  // Add any tags from the preserved-tag specs that aren't already listed
  for (const name of allTagNames) {
    if (!combined.tags.find(t => t.name === name)) {
      combined.tags.push({ name })
    }
  }

  if (componentsObj?.schemas) {
    Object.assign(combined.components.schemas, componentsObj.schemas)
  }

  writeYaml(combined, resolve(OUT_DIR, "docs/openapi.yaml"))
  console.log(`  combined -> assets/docs/openapi.yaml`)

  // Write individual per-API specs (for /my/docs, /games/docs, etc.)
  for (const { file, out } of perApiSpecs) {
    const spec = loadAndResolve(file, componentsObj)
    writeYaml(spec, resolve(OUT_DIR, out))
    console.log(`  ${file} -> assets/${out}`)
  }

  console.log(`\nDone.`)
  console.log(`Written ${1 + perApiSpecs.length} spec files to assets/`)
}

build()
