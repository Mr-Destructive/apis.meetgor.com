import { readFileSync, writeFileSync, mkdirSync, rmSync } from "fs"
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
]

const tagGroups = [
  { name: "My Profile", tags: ["My Profile", "Newsletter"] },
  { name: "Games", tags: ["Games", "Tic Tac Toe"] },
]

const perApiSpecs = [
  { file: "my.yaml", out: "my/docs/openapi.yaml" },
  { file: "newsletter.yaml", out: "my/newsletter/docs/openapi.yaml" },
  { file: "games.yaml", out: "games/docs/openapi.yaml" },
  { file: "tic-tac-toe.yaml", out: "games/tic-tac-toe/docs/openapi.yaml" },
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

function derefNode(node, componentsObj) {
  if (Array.isArray(node)) {
    return node.map(item => derefNode(item, componentsObj))
  }
  if (node && typeof node === "object") {
    if (node.$ref && typeof node.$ref === "string") {
      const ref = node.$ref
      let resolved
      if (ref.startsWith("./components.yaml#")) {
        const pointer = ref.slice("./components.yaml#".length)
        resolved = resolveJsonPointer(componentsObj, pointer)
      } else if (ref.startsWith("#/")) {
        resolved = resolveJsonPointer(componentsObj, ref.slice(1))
      }
      if (resolved !== undefined) {
        return derefNode(structuredClone(resolved), componentsObj)
      }
      if (ref.startsWith("./components.yaml#") || ref.startsWith("#/")) {
        console.warn(`  Warning: Could not resolve ${ref}`)
      }
      return node
    }
    const result = {}
    for (const key of Object.keys(node)) {
      result[key] = derefNode(node[key], componentsObj)
    }
    return result
  }
  return node
}

function loadAndResolve(filename, componentsObj) {
  const filePath = resolve(SPECS_DIR, filename)
  const raw = readFileSync(filePath, "utf-8")
  const parsed = yaml.load(raw)
  return derefNode(parsed, componentsObj)
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
    tags: allSpecs.map(s => ({ name: s.tag })),
    "x-tagGroups": tagGroups,
  }

  for (const { file, tag } of allSpecs) {
    const spec = loadAndResolve(file, componentsObj)
    for (const [path, methods] of Object.entries(spec.paths || {})) {
      if (!combined.paths[path]) combined.paths[path] = {}
      for (const [method, operation] of Object.entries(methods)) {
        const op = { ...operation, tags: [tag] }
        combined.paths[path][method] = op
      }
    }
    if (spec.components?.schemas) {
      Object.assign(combined.components.schemas, spec.components.schemas)
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
