/**
 * Tokenomics Pricing Scraper
 * 
 * This script runs daily via GitHub Actions. It fetches the latest pricing data
 * from OpenRouter's API and writes ALL available models into a JSON file for the
 * API to use statically, avoiding live API calls and keeping the key secure.
 */

import { writeFileSync } from "fs"
import { resolve, dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const OR_MODELS_FILE = resolve(__dirname, "../src/tokenomics/or-models.ts")

async function fetchOpenRouterModels() {
  try {
    const headers = {}
    if (process.env.OPENROUTER_API_KEY) {
      headers["Authorization"] = `Bearer ${process.env.OPENROUTER_API_KEY}`
    }
    
    const res = await fetch("https://openrouter.ai/api/v1/models", { headers })
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
    const data = await res.json()
    return data.data
  } catch (error) {
    console.error("Error fetching from OpenRouter:", error)
    return []
  }
}

async function main() {
  console.log("Fetching latest LLM pricing from OpenRouter...")
  const orModels = await fetchOpenRouterModels()
  
  if (!orModels.length) {
    console.error("No models fetched. Aborting.")
    process.exit(1)
  }

  const mappedModels = orModels.map((m) => {
    const input = parseFloat(m.pricing?.prompt || "0") * 1000000
    const output = parseFloat(m.pricing?.completion || "0") * 1000000
    
    const parts = m.id.split("/")
    const providerId = parts[0]
    const name = m.name || m.id
    
    return {
      id: `or-${m.id.replace(/\//g, "-")}`,
      name: `[OR] ${name}`,
      providerId: providerId,
      family: providerId,
      description: m.description || "",
      status: "active",
      contextWindow: m.context_length || 0,
      maxOutputTokens: m.top_provider?.max_completion_tokens || 0,
      modalities: {
        input: m.architecture?.input_modalities || ["text"],
        output: m.architecture?.output_modalities || ["text"]
      },
      tags: ["openrouter"],
      pricing: [{
        inputPricePer1M: input,
        outputPricePer1M: output,
        currency: "USD",
        effectiveDate: new Date().toISOString().split("T")[0],
        source: "https://openrouter.ai/models"
      }]
    }
  })

  const tsContent = `import { type TokenomicsModel } from "./seed"\n\nexport const orModels: TokenomicsModel[] = ${JSON.stringify(mappedModels, null, 2)}`
  writeFileSync(OR_MODELS_FILE, tsContent)
  console.log(`Successfully scraped ${mappedModels.length} models and wrote to or-models.ts.`)
}

main().catch(console.error)
