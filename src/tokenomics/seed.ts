// ─── Tokenomics Seed Data ──────────────────────────────────────────────────
// Manually curated pricing data sourced from official provider pricing pages.
// Sources: OpenAI, Anthropic, Google AI, Mistral, DeepSeek, xAI, Cohere.
// Last updated: 2026-08-15
// ───────────────────────────────────────────────────────────────────────────

export type ModelStatus = "active" | "deprecated" | "preview" | "legacy" | "retired"
export type ModalityInput = "text" | "image" | "audio" | "video" | "file" | "pdf"
export type ModalityOutput = "text" | "image" | "audio"

export interface PricingTier {
  // Core per-token prices (USD per 1,000,000 tokens)
  inputPricePer1M: number
  outputPricePer1M: number

  // Prompt caching (where supported)
  cacheReadPricePer1M?: number
  cacheWritePricePer1M?: number

  // Reasoning/thinking tokens (o1, o3, claude-3.7, gemini-2.5)
  reasoningPricePer1M?: number

  // Batch API discounted pricing
  batchInputPricePer1M?: number
  batchOutputPricePer1M?: number

  // Multimodal input pricing
  audioPricePer1M?: number         // per 1M audio tokens
  imagePrice?: {
    perTile?: number               // OpenAI tile-based
    perImage?: number              // flat per-image
    per1MPixelTokens?: number      // Gemini pixel-token model
  }

  currency: "USD"
  effectiveDate: string            // ISO 8601 date
  source: string                   // Official pricing page URL
  notes?: string
}

export interface TokenomicsProvider {
  id: string
  name: string
  description: string
  website: string
  pricingUrl: string
  countryCode: string
  status: "active" | "inactive" | "acquired"
}

export interface TokenomicsModel {
  id: string
  name: string
  providerId: string
  family: string
  description: string
  status: ModelStatus

  // Context
  contextWindow: number            // max input context in tokens
  maxOutputTokens: number

  // Capabilities
  modalities: {
    input: ModalityInput[]
    output: ModalityOutput[]
  }

  // Pricing history (index 0 = current/latest)
  pricing: PricingTier[]

  // Metadata
  knowledgeCutoff?: string         // ISO date
  releaseDate?: string             // ISO date
  deprecationDate?: string
  tags: string[]
  openWeightsUrl?: string          // for open-weight models
}

// ─── Providers ─────────────────────────────────────────────────────────────

export const providers: TokenomicsProvider[] = [
  {
    id: "openai",
    name: "OpenAI",
    description: "AI research and deployment company. Creator of the GPT series and o-series reasoning models.",
    website: "https://openai.com",
    pricingUrl: "https://openai.com/api/pricing/",
    countryCode: "US",
    status: "active",
  },
  {
    id: "anthropic",
    name: "Anthropic",
    description: "AI safety company building Claude models focused on reliability and interpretability.",
    website: "https://anthropic.com",
    pricingUrl: "https://anthropic.com/pricing",
    countryCode: "US",
    status: "active",
  },
  {
    id: "google",
    name: "Google DeepMind",
    description: "AI research division of Alphabet. Creators of the Gemini model family.",
    website: "https://deepmind.google",
    pricingUrl: "https://ai.google.dev/gemini-api/docs/pricing",
    countryCode: "US",
    status: "active",
  },
  {
    id: "meta",
    name: "Meta AI",
    description: "Meta's open-weight Llama model family, widely used through third-party inference providers.",
    website: "https://ai.meta.com",
    pricingUrl: "https://ai.meta.com/llama/",
    countryCode: "US",
    status: "active",
  },
  {
    id: "mistral",
    name: "Mistral AI",
    description: "French AI company producing efficient open-weight and commercial models.",
    website: "https://mistral.ai",
    pricingUrl: "https://mistral.ai/technology/#pricing",
    countryCode: "FR",
    status: "active",
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    description: "Chinese AI lab known for highly cost-efficient frontier models with strong reasoning.",
    website: "https://deepseek.com",
    pricingUrl: "https://api-docs.deepseek.com/quick_start/pricing",
    countryCode: "CN",
    status: "active",
  },
  {
    id: "xai",
    name: "xAI",
    description: "Elon Musk's AI company developing the Grok model family.",
    website: "https://x.ai",
    pricingUrl: "https://docs.x.ai/docs/models",
    countryCode: "US",
    status: "active",
  },
  {
    id: "cohere",
    name: "Cohere",
    description: "Enterprise AI company focused on Command models for business applications.",
    website: "https://cohere.com",
    pricingUrl: "https://cohere.com/pricing",
    countryCode: "CA",
    status: "active",
  },
]

// ─── Models ────────────────────────────────────────────────────────────────

export const models: TokenomicsModel[] = [

  // ── OpenAI ──────────────────────────────────────────────────────────────

  {
    id: "gpt-4.1",
    name: "GPT-4.1",
    providerId: "openai",
    family: "GPT-4.1",
    description: "OpenAI's flagship model optimised for coding, instruction-following, and long-context tasks.",
    status: "active",
    contextWindow: 1_047_576,
    maxOutputTokens: 32_768,
    modalities: { input: ["text", "image"], output: ["text"] },
    knowledgeCutoff: "2025-05-31",
    releaseDate: "2025-04-14",
    tags: ["flagship", "coding", "long-context"],
    pricing: [
      {
        inputPricePer1M: 2.00,
        outputPricePer1M: 8.00,
        cacheReadPricePer1M: 0.50,
        cacheWritePricePer1M: 2.00,
        batchInputPricePer1M: 1.00,
        batchOutputPricePer1M: 4.00,
        currency: "USD",
        effectiveDate: "2025-04-14",
        source: "https://openai.com/api/pricing/",
      },
    ],
  },

  {
    id: "gpt-4.1-mini",
    name: "GPT-4.1 Mini",
    providerId: "openai",
    family: "GPT-4.1",
    description: "Smaller, faster, and cheaper GPT-4.1 for high-throughput tasks.",
    status: "active",
    contextWindow: 1_047_576,
    maxOutputTokens: 32_768,
    modalities: { input: ["text", "image"], output: ["text"] },
    knowledgeCutoff: "2025-05-31",
    releaseDate: "2025-04-14",
    tags: ["efficient", "coding"],
    pricing: [
      {
        inputPricePer1M: 0.40,
        outputPricePer1M: 1.60,
        cacheReadPricePer1M: 0.10,
        cacheWritePricePer1M: 0.40,
        batchInputPricePer1M: 0.20,
        batchOutputPricePer1M: 0.80,
        currency: "USD",
        effectiveDate: "2025-04-14",
        source: "https://openai.com/api/pricing/",
      },
    ],
  },

  {
    id: "gpt-4.1-nano",
    name: "GPT-4.1 Nano",
    providerId: "openai",
    family: "GPT-4.1",
    description: "Ultra-fast, ultra-cheap model for classification, extraction, and latency-sensitive tasks.",
    status: "active",
    contextWindow: 1_047_576,
    maxOutputTokens: 32_768,
    modalities: { input: ["text", "image"], output: ["text"] },
    knowledgeCutoff: "2025-05-31",
    releaseDate: "2025-04-14",
    tags: ["nano", "fast", "cheap"],
    pricing: [
      {
        inputPricePer1M: 0.10,
        outputPricePer1M: 0.40,
        cacheReadPricePer1M: 0.025,
        cacheWritePricePer1M: 0.10,
        batchInputPricePer1M: 0.05,
        batchOutputPricePer1M: 0.20,
        currency: "USD",
        effectiveDate: "2025-04-14",
        source: "https://openai.com/api/pricing/",
      },
    ],
  },

  {
    id: "gpt-4o",
    name: "GPT-4o",
    providerId: "openai",
    family: "GPT-4o",
    description: "Multimodal omni model with native text, image, and audio understanding.",
    status: "active",
    contextWindow: 128_000,
    maxOutputTokens: 16_384,
    modalities: { input: ["text", "image", "audio"], output: ["text", "audio"] },
    knowledgeCutoff: "2024-10-01",
    releaseDate: "2024-05-13",
    tags: ["multimodal", "audio", "vision"],
    pricing: [
      {
        inputPricePer1M: 2.50,
        outputPricePer1M: 10.00,
        cacheReadPricePer1M: 1.25,
        cacheWritePricePer1M: 2.50,
        batchInputPricePer1M: 1.25,
        batchOutputPricePer1M: 5.00,
        audioPricePer1M: 40.00,
        imagePrice: { perTile: 0.001913 },
        currency: "USD",
        effectiveDate: "2024-11-01",
        source: "https://openai.com/api/pricing/",
      },
    ],
  },

  {
    id: "gpt-4o-mini",
    name: "GPT-4o Mini",
    providerId: "openai",
    family: "GPT-4o",
    description: "Affordable and capable small model for lightweight tasks.",
    status: "active",
    contextWindow: 128_000,
    maxOutputTokens: 16_384,
    modalities: { input: ["text", "image"], output: ["text"] },
    knowledgeCutoff: "2024-10-01",
    releaseDate: "2024-07-18",
    tags: ["efficient", "vision"],
    pricing: [
      {
        inputPricePer1M: 0.15,
        outputPricePer1M: 0.60,
        cacheReadPricePer1M: 0.075,
        cacheWritePricePer1M: 0.15,
        batchInputPricePer1M: 0.075,
        batchOutputPricePer1M: 0.30,
        currency: "USD",
        effectiveDate: "2024-07-18",
        source: "https://openai.com/api/pricing/",
      },
    ],
  },

  {
    id: "o1",
    name: "o1",
    providerId: "openai",
    family: "o-series",
    description: "Advanced reasoning model with extended think time and chain-of-thought.",
    status: "active",
    contextWindow: 200_000,
    maxOutputTokens: 100_000,
    modalities: { input: ["text", "image"], output: ["text"] },
    knowledgeCutoff: "2024-10-01",
    releaseDate: "2024-12-05",
    tags: ["reasoning", "chain-of-thought"],
    pricing: [
      {
        inputPricePer1M: 15.00,
        outputPricePer1M: 60.00,
        cacheReadPricePer1M: 7.50,
        batchInputPricePer1M: 7.50,
        batchOutputPricePer1M: 30.00,
        currency: "USD",
        effectiveDate: "2024-12-05",
        source: "https://openai.com/api/pricing/",
        notes: "Output tokens include reasoning tokens.",
      },
    ],
  },

  {
    id: "o3",
    name: "o3",
    providerId: "openai",
    family: "o-series",
    description: "Most capable reasoning model with breakthrough performance on hard tasks.",
    status: "active",
    contextWindow: 200_000,
    maxOutputTokens: 100_000,
    modalities: { input: ["text", "image"], output: ["text"] },
    knowledgeCutoff: "2024-10-01",
    releaseDate: "2025-04-16",
    tags: ["reasoning", "frontier", "coding"],
    pricing: [
      {
        inputPricePer1M: 10.00,
        outputPricePer1M: 40.00,
        cacheReadPricePer1M: 2.50,
        batchInputPricePer1M: 5.00,
        batchOutputPricePer1M: 20.00,
        currency: "USD",
        effectiveDate: "2025-04-16",
        source: "https://openai.com/api/pricing/",
      },
    ],
  },

  {
    id: "o3-mini",
    name: "o3-mini",
    providerId: "openai",
    family: "o-series",
    description: "Smaller, cost-efficient reasoning model. Comparable to o1 at a fraction of the cost.",
    status: "active",
    contextWindow: 200_000,
    maxOutputTokens: 100_000,
    modalities: { input: ["text"], output: ["text"] },
    releaseDate: "2025-01-31",
    tags: ["reasoning", "efficient"],
    pricing: [
      {
        inputPricePer1M: 1.10,
        outputPricePer1M: 4.40,
        cacheReadPricePer1M: 0.55,
        batchInputPricePer1M: 0.55,
        batchOutputPricePer1M: 2.20,
        currency: "USD",
        effectiveDate: "2025-01-31",
        source: "https://openai.com/api/pricing/",
      },
    ],
  },

  {
    id: "o4-mini",
    name: "o4-mini",
    providerId: "openai",
    family: "o-series",
    description: "Latest compact reasoning model with vision support and strong coding ability.",
    status: "active",
    contextWindow: 200_000,
    maxOutputTokens: 100_000,
    modalities: { input: ["text", "image"], output: ["text"] },
    knowledgeCutoff: "2025-05-31",
    releaseDate: "2025-04-16",
    tags: ["reasoning", "vision", "coding"],
    pricing: [
      {
        inputPricePer1M: 1.10,
        outputPricePer1M: 4.40,
        cacheReadPricePer1M: 0.275,
        batchInputPricePer1M: 0.55,
        batchOutputPricePer1M: 2.20,
        currency: "USD",
        effectiveDate: "2025-04-16",
        source: "https://openai.com/api/pricing/",
      },
    ],
  },

  {
    id: "gpt-5",
    name: "GPT-5",
    providerId: "openai",
    family: "GPT-5",
    description: "OpenAI's most capable unified model, combining reasoning and general intelligence.",
    status: "active",
    contextWindow: 1_000_000,
    maxOutputTokens: 32_768,
    modalities: { input: ["text", "image", "audio", "file"], output: ["text", "image"] },
    knowledgeCutoff: "2025-09-01",
    releaseDate: "2025-05-01",
    tags: ["flagship", "frontier", "multimodal"],
    pricing: [
      {
        inputPricePer1M: 10.00,
        outputPricePer1M: 40.00,
        cacheReadPricePer1M: 2.50,
        batchInputPricePer1M: 5.00,
        batchOutputPricePer1M: 20.00,
        currency: "USD",
        effectiveDate: "2025-05-01",
        source: "https://openai.com/api/pricing/",
      },
    ],
  },

  // ── Anthropic ────────────────────────────────────────────────────────────

  {
    id: "claude-opus-4",
    name: "Claude Opus 4",
    providerId: "anthropic",
    family: "Claude 4",
    description: "Anthropic's most powerful model, optimised for deep analysis and agentic tasks.",
    status: "active",
    contextWindow: 200_000,
    maxOutputTokens: 32_000,
    modalities: { input: ["text", "image", "pdf", "file"], output: ["text"] },
    knowledgeCutoff: "2025-03-01",
    releaseDate: "2025-05-22",
    tags: ["flagship", "agentic", "vision"],
    pricing: [
      {
        inputPricePer1M: 15.00,
        outputPricePer1M: 75.00,
        cacheReadPricePer1M: 1.50,
        cacheWritePricePer1M: 18.75,
        batchInputPricePer1M: 7.50,
        batchOutputPricePer1M: 37.50,
        currency: "USD",
        effectiveDate: "2025-05-22",
        source: "https://anthropic.com/pricing",
      },
    ],
  },

  {
    id: "claude-sonnet-4",
    name: "Claude Sonnet 4",
    providerId: "anthropic",
    family: "Claude 4",
    description: "Hard-working, high-performance model balancing speed and intelligence.",
    status: "active",
    contextWindow: 200_000,
    maxOutputTokens: 64_000,
    modalities: { input: ["text", "image", "pdf", "file"], output: ["text"] },
    knowledgeCutoff: "2025-03-01",
    releaseDate: "2025-07-09",
    tags: ["balanced", "agentic", "vision", "extended-thinking"],
    pricing: [
      {
        inputPricePer1M: 3.00,
        outputPricePer1M: 15.00,
        cacheReadPricePer1M: 0.30,
        cacheWritePricePer1M: 3.75,
        batchInputPricePer1M: 1.50,
        batchOutputPricePer1M: 7.50,
        currency: "USD",
        effectiveDate: "2025-07-09",
        source: "https://anthropic.com/pricing",
        notes: "Extended thinking tokens billed at output token rate.",
      },
    ],
  },

  {
    id: "claude-3-7-sonnet",
    name: "Claude 3.7 Sonnet",
    providerId: "anthropic",
    family: "Claude 3.7",
    description: "Most intelligent Claude 3-series model with extended thinking capability.",
    status: "active",
    contextWindow: 200_000,
    maxOutputTokens: 128_000,
    modalities: { input: ["text", "image", "pdf", "file"], output: ["text"] },
    knowledgeCutoff: "2024-11-01",
    releaseDate: "2025-02-24",
    tags: ["reasoning", "vision", "extended-thinking"],
    pricing: [
      {
        inputPricePer1M: 3.00,
        outputPricePer1M: 15.00,
        cacheReadPricePer1M: 0.30,
        cacheWritePricePer1M: 3.75,
        batchInputPricePer1M: 1.50,
        batchOutputPricePer1M: 7.50,
        currency: "USD",
        effectiveDate: "2025-02-24",
        source: "https://anthropic.com/pricing",
      },
    ],
  },

  {
    id: "claude-3-5-sonnet",
    name: "Claude 3.5 Sonnet",
    providerId: "anthropic",
    family: "Claude 3.5",
    description: "Balanced model with strong coding and instruction-following capabilities.",
    status: "active",
    contextWindow: 200_000,
    maxOutputTokens: 8_192,
    modalities: { input: ["text", "image", "pdf", "file"], output: ["text"] },
    knowledgeCutoff: "2024-04-01",
    releaseDate: "2024-10-22",
    tags: ["balanced", "coding", "vision"],
    pricing: [
      {
        inputPricePer1M: 3.00,
        outputPricePer1M: 15.00,
        cacheReadPricePer1M: 0.30,
        cacheWritePricePer1M: 3.75,
        batchInputPricePer1M: 1.50,
        batchOutputPricePer1M: 7.50,
        currency: "USD",
        effectiveDate: "2024-10-22",
        source: "https://anthropic.com/pricing",
      },
    ],
  },

  {
    id: "claude-3-5-haiku",
    name: "Claude 3.5 Haiku",
    providerId: "anthropic",
    family: "Claude 3.5",
    description: "Fast, compact model for high-throughput tasks and real-time interactions.",
    status: "active",
    contextWindow: 200_000,
    maxOutputTokens: 8_192,
    modalities: { input: ["text", "image"], output: ["text"] },
    knowledgeCutoff: "2024-07-01",
    releaseDate: "2024-11-04",
    tags: ["fast", "efficient", "vision"],
    pricing: [
      {
        inputPricePer1M: 0.80,
        outputPricePer1M: 4.00,
        cacheReadPricePer1M: 0.08,
        cacheWritePricePer1M: 1.00,
        batchInputPricePer1M: 0.40,
        batchOutputPricePer1M: 2.00,
        currency: "USD",
        effectiveDate: "2024-11-04",
        source: "https://anthropic.com/pricing",
      },
    ],
  },

  {
    id: "claude-3-opus",
    name: "Claude 3 Opus",
    providerId: "anthropic",
    family: "Claude 3",
    description: "Anthropic's previous flagship — powerful for complex analysis and nuanced tasks.",
    status: "legacy",
    contextWindow: 200_000,
    maxOutputTokens: 4_096,
    modalities: { input: ["text", "image"], output: ["text"] },
    releaseDate: "2024-03-04",
    tags: ["vision"],
    pricing: [
      {
        inputPricePer1M: 15.00,
        outputPricePer1M: 75.00,
        cacheReadPricePer1M: 1.50,
        cacheWritePricePer1M: 18.75,
        batchInputPricePer1M: 7.50,
        batchOutputPricePer1M: 37.50,
        currency: "USD",
        effectiveDate: "2024-03-04",
        source: "https://anthropic.com/pricing",
      },
    ],
  },

  {
    id: "claude-3-haiku",
    name: "Claude 3 Haiku",
    providerId: "anthropic",
    family: "Claude 3",
    description: "Near-instant responses for lightweight tasks.",
    status: "active",
    contextWindow: 200_000,
    maxOutputTokens: 4_096,
    modalities: { input: ["text", "image"], output: ["text"] },
    releaseDate: "2024-03-13",
    tags: ["fast", "vision"],
    pricing: [
      {
        inputPricePer1M: 0.25,
        outputPricePer1M: 1.25,
        cacheReadPricePer1M: 0.03,
        cacheWritePricePer1M: 0.30,
        batchInputPricePer1M: 0.125,
        batchOutputPricePer1M: 0.625,
        currency: "USD",
        effectiveDate: "2024-03-13",
        source: "https://anthropic.com/pricing",
      },
    ],
  },

  // ── Google ───────────────────────────────────────────────────────────────

  {
    id: "gemini-2-5-pro",
    name: "Gemini 2.5 Pro",
    providerId: "google",
    family: "Gemini 2.5",
    description: "Google's most capable model with native thinking, long context, and multimodal I/O.",
    status: "active",
    contextWindow: 1_048_576,
    maxOutputTokens: 65_536,
    modalities: { input: ["text", "image", "audio", "video", "pdf"], output: ["text"] },
    knowledgeCutoff: "2025-01-01",
    releaseDate: "2025-03-25",
    tags: ["flagship", "long-context", "multimodal", "reasoning"],
    pricing: [
      {
        // Tiered: ≤200K context / >200K context
        inputPricePer1M: 1.25,         // ≤200K tokens
        outputPricePer1M: 10.00,       // ≤200K tokens
        cacheReadPricePer1M: 0.31,
        cacheWritePricePer1M: 4.50,
        batchInputPricePer1M: 0.625,
        batchOutputPricePer1M: 5.00,
        currency: "USD",
        effectiveDate: "2025-03-25",
        source: "https://ai.google.dev/gemini-api/docs/pricing",
        notes: "Prompts >200K tokens: $2.50/M input, $15.00/M output. Thinking tokens billed at output rate.",
      },
    ],
  },

  {
    id: "gemini-2-5-flash",
    name: "Gemini 2.5 Flash",
    providerId: "google",
    family: "Gemini 2.5",
    description: "Best price-performance model in the Gemini family with optional thinking mode.",
    status: "active",
    contextWindow: 1_048_576,
    maxOutputTokens: 65_536,
    modalities: { input: ["text", "image", "audio", "video", "pdf"], output: ["text"] },
    knowledgeCutoff: "2025-01-01",
    releaseDate: "2025-05-20",
    tags: ["efficient", "long-context", "multimodal", "reasoning"],
    pricing: [
      {
        inputPricePer1M: 0.30,
        outputPricePer1M: 2.50,
        cacheReadPricePer1M: 0.075,
        cacheWritePricePer1M: 1.00,
        batchInputPricePer1M: 0.15,
        batchOutputPricePer1M: 1.25,
        currency: "USD",
        effectiveDate: "2025-05-20",
        source: "https://ai.google.dev/gemini-api/docs/pricing",
        notes: "Thinking tokens: $3.50/M output. Audio input: $1.00/M tokens.",
      },
    ],
  },

  {
    id: "gemini-2-0-flash",
    name: "Gemini 2.0 Flash",
    providerId: "google",
    family: "Gemini 2.0",
    description: "Next-gen workhorse model with fast responses and multimodal output.",
    status: "active",
    contextWindow: 1_048_576,
    maxOutputTokens: 8_192,
    modalities: { input: ["text", "image", "audio", "video"], output: ["text", "image", "audio"] },
    releaseDate: "2025-02-05",
    tags: ["multimodal", "fast", "long-context"],
    pricing: [
      {
        inputPricePer1M: 0.10,
        outputPricePer1M: 0.40,
        cacheReadPricePer1M: 0.025,
        cacheWritePricePer1M: 1.00,
        audioPricePer1M: 0.70,
        currency: "USD",
        effectiveDate: "2025-02-05",
        source: "https://ai.google.dev/gemini-api/docs/pricing",
      },
    ],
  },

  {
    id: "gemini-1-5-pro",
    name: "Gemini 1.5 Pro",
    providerId: "google",
    family: "Gemini 1.5",
    description: "Long-context capable model with 2M token window.",
    status: "legacy",
    contextWindow: 2_097_152,
    maxOutputTokens: 8_192,
    modalities: { input: ["text", "image", "audio", "video", "pdf"], output: ["text"] },
    releaseDate: "2024-02-15",
    tags: ["long-context", "multimodal"],
    pricing: [
      {
        inputPricePer1M: 1.25,
        outputPricePer1M: 5.00,
        cacheReadPricePer1M: 0.3125,
        cacheWritePricePer1M: 4.50,
        currency: "USD",
        effectiveDate: "2024-09-24",
        source: "https://ai.google.dev/gemini-api/docs/pricing",
        notes: "Prompts >128K tokens: $2.50/M input, $10.00/M output.",
      },
    ],
  },

  {
    id: "gemini-1-5-flash",
    name: "Gemini 1.5 Flash",
    providerId: "google",
    family: "Gemini 1.5",
    description: "Fast, cost-effective multimodal model.",
    status: "legacy",
    contextWindow: 1_048_576,
    maxOutputTokens: 8_192,
    modalities: { input: ["text", "image", "audio", "video"], output: ["text"] },
    releaseDate: "2024-05-14",
    tags: ["fast", "long-context", "multimodal"],
    pricing: [
      {
        inputPricePer1M: 0.075,
        outputPricePer1M: 0.30,
        cacheReadPricePer1M: 0.01875,
        cacheWritePricePer1M: 1.00,
        currency: "USD",
        effectiveDate: "2024-09-24",
        source: "https://ai.google.dev/gemini-api/docs/pricing",
      },
    ],
  },

  // ── Mistral ──────────────────────────────────────────────────────────────

  {
    id: "mistral-large-2",
    name: "Mistral Large 2",
    providerId: "mistral",
    family: "Mistral Large",
    description: "Top-tier Mistral model for complex, multilingual tasks with strong code generation.",
    status: "active",
    contextWindow: 128_000,
    maxOutputTokens: 8_192,
    modalities: { input: ["text", "image"], output: ["text"] },
    releaseDate: "2024-07-24",
    tags: ["multilingual", "coding", "vision"],
    pricing: [
      {
        inputPricePer1M: 2.00,
        outputPricePer1M: 6.00,
        currency: "USD",
        effectiveDate: "2024-07-24",
        source: "https://mistral.ai/technology/#pricing",
      },
    ],
  },

  {
    id: "mistral-small-3",
    name: "Mistral Small 3",
    providerId: "mistral",
    family: "Mistral Small",
    description: "Efficient model for latency-sensitive tasks with strong multilingual performance.",
    status: "active",
    contextWindow: 32_000,
    maxOutputTokens: 8_192,
    modalities: { input: ["text"], output: ["text"] },
    releaseDate: "2025-01-30",
    tags: ["efficient", "multilingual", "open-weight"],
    openWeightsUrl: "https://huggingface.co/mistralai/Mistral-Small-3B-Instruct-2501",
    pricing: [
      {
        inputPricePer1M: 0.10,
        outputPricePer1M: 0.30,
        currency: "USD",
        effectiveDate: "2025-01-30",
        source: "https://mistral.ai/technology/#pricing",
      },
    ],
  },

  {
    id: "codestral",
    name: "Codestral",
    providerId: "mistral",
    family: "Codestral",
    description: "Mistral's code-specialized model supporting 80+ programming languages.",
    status: "active",
    contextWindow: 256_000,
    maxOutputTokens: 8_192,
    modalities: { input: ["text"], output: ["text"] },
    releaseDate: "2024-05-29",
    tags: ["coding", "long-context"],
    pricing: [
      {
        inputPricePer1M: 0.30,
        outputPricePer1M: 0.90,
        currency: "USD",
        effectiveDate: "2024-12-01",
        source: "https://mistral.ai/technology/#pricing",
      },
    ],
  },

  {
    id: "mixtral-8x22b",
    name: "Mixtral 8x22B",
    providerId: "mistral",
    family: "Mixtral",
    description: "Large mixture-of-experts model with 141B total parameters and strong performance.",
    status: "active",
    contextWindow: 65_536,
    maxOutputTokens: 8_192,
    modalities: { input: ["text"], output: ["text"] },
    releaseDate: "2024-04-17",
    tags: ["moe", "open-weight"],
    openWeightsUrl: "https://huggingface.co/mistralai/Mixtral-8x22B-Instruct-v0.1",
    pricing: [
      {
        inputPricePer1M: 2.00,
        outputPricePer1M: 6.00,
        currency: "USD",
        effectiveDate: "2024-04-17",
        source: "https://mistral.ai/technology/#pricing",
      },
    ],
  },

  // ── DeepSeek ─────────────────────────────────────────────────────────────

  {
    id: "deepseek-v3",
    name: "DeepSeek V3",
    providerId: "deepseek",
    family: "DeepSeek V",
    description: "Frontier-class MoE model at dramatically lower cost. Competitive with GPT-4o and Claude.",
    status: "active",
    contextWindow: 163_840,
    maxOutputTokens: 8_192,
    modalities: { input: ["text"], output: ["text"] },
    releaseDate: "2024-12-26",
    tags: ["moe", "open-weight", "cost-efficient"],
    openWeightsUrl: "https://huggingface.co/deepseek-ai/DeepSeek-V3",
    pricing: [
      {
        inputPricePer1M: 0.27,
        outputPricePer1M: 1.10,
        cacheReadPricePer1M: 0.07,
        batchInputPricePer1M: 0.135,
        batchOutputPricePer1M: 0.55,
        currency: "USD",
        effectiveDate: "2024-12-26",
        source: "https://api-docs.deepseek.com/quick_start/pricing",
      },
    ],
  },

  {
    id: "deepseek-r1",
    name: "DeepSeek R1",
    providerId: "deepseek",
    family: "DeepSeek R",
    description: "State-of-the-art open reasoning model competitive with o1 at a fraction of the cost.",
    status: "active",
    contextWindow: 163_840,
    maxOutputTokens: 32_768,
    modalities: { input: ["text"], output: ["text"] },
    releaseDate: "2025-01-20",
    tags: ["reasoning", "open-weight", "cost-efficient"],
    openWeightsUrl: "https://huggingface.co/deepseek-ai/DeepSeek-R1",
    pricing: [
      {
        inputPricePer1M: 0.55,
        outputPricePer1M: 2.19,
        cacheReadPricePer1M: 0.14,
        batchInputPricePer1M: 0.275,
        batchOutputPricePer1M: 1.10,
        currency: "USD",
        effectiveDate: "2025-01-20",
        source: "https://api-docs.deepseek.com/quick_start/pricing",
        notes: "Output tokens include thinking tokens.",
      },
    ],
  },

  {
    id: "deepseek-r1-0528",
    name: "DeepSeek R1 (0528)",
    providerId: "deepseek",
    family: "DeepSeek R",
    description: "Updated R1 with enhanced coding, math, and reasoning capabilities.",
    status: "active",
    contextWindow: 163_840,
    maxOutputTokens: 65_536,
    modalities: { input: ["text"], output: ["text"] },
    releaseDate: "2025-05-28",
    tags: ["reasoning", "open-weight", "coding"],
    openWeightsUrl: "https://huggingface.co/deepseek-ai/DeepSeek-R1-0528",
    pricing: [
      {
        inputPricePer1M: 0.55,
        outputPricePer1M: 2.19,
        cacheReadPricePer1M: 0.14,
        currency: "USD",
        effectiveDate: "2025-05-28",
        source: "https://api-docs.deepseek.com/quick_start/pricing",
      },
    ],
  },

  // ── xAI ──────────────────────────────────────────────────────────────────

  {
    id: "grok-3",
    name: "Grok 3",
    providerId: "xai",
    family: "Grok 3",
    description: "xAI's frontier model with large context, real-time web data, and strong reasoning.",
    status: "active",
    contextWindow: 131_072,
    maxOutputTokens: 8_192,
    modalities: { input: ["text", "image"], output: ["text"] },
    releaseDate: "2025-02-17",
    tags: ["vision", "real-time-data"],
    pricing: [
      {
        inputPricePer1M: 3.00,
        outputPricePer1M: 15.00,
        currency: "USD",
        effectiveDate: "2025-02-17",
        source: "https://docs.x.ai/docs/models",
      },
    ],
  },

  {
    id: "grok-3-mini",
    name: "Grok 3 Mini",
    providerId: "xai",
    family: "Grok 3",
    description: "Compact reasoning model from xAI for STEM tasks.",
    status: "active",
    contextWindow: 131_072,
    maxOutputTokens: 8_192,
    modalities: { input: ["text"], output: ["text"] },
    releaseDate: "2025-02-17",
    tags: ["reasoning", "efficient"],
    pricing: [
      {
        inputPricePer1M: 0.30,
        outputPricePer1M: 0.50,
        currency: "USD",
        effectiveDate: "2025-02-17",
        source: "https://docs.x.ai/docs/models",
        notes: "Reasoning tokens billed as output tokens.",
      },
    ],
  },

  {
    id: "grok-2-vision",
    name: "Grok 2 Vision",
    providerId: "xai",
    family: "Grok 2",
    description: "Grok 2 with vision capabilities for image understanding.",
    status: "active",
    contextWindow: 32_768,
    maxOutputTokens: 8_192,
    modalities: { input: ["text", "image"], output: ["text"] },
    releaseDate: "2024-10-23",
    tags: ["vision"],
    pricing: [
      {
        inputPricePer1M: 2.00,
        outputPricePer1M: 10.00,
        currency: "USD",
        effectiveDate: "2024-10-23",
        source: "https://docs.x.ai/docs/models",
      },
    ],
  },

  // ── Cohere ───────────────────────────────────────────────────────────────

  {
    id: "command-r-plus-08-2024",
    name: "Command R+ (Aug 2024)",
    providerId: "cohere",
    family: "Command R",
    description: "Cohere's most powerful model, optimised for RAG and enterprise tasks.",
    status: "active",
    contextWindow: 128_000,
    maxOutputTokens: 4_096,
    modalities: { input: ["text"], output: ["text"] },
    releaseDate: "2024-08-01",
    tags: ["enterprise", "rag"],
    pricing: [
      {
        inputPricePer1M: 2.50,
        outputPricePer1M: 10.00,
        currency: "USD",
        effectiveDate: "2024-08-01",
        source: "https://cohere.com/pricing",
      },
    ],
  },

  {
    id: "command-r-08-2024",
    name: "Command R (Aug 2024)",
    providerId: "cohere",
    family: "Command R",
    description: "Balanced retrieval-augmented generation model for enterprise workflows.",
    status: "active",
    contextWindow: 128_000,
    maxOutputTokens: 4_096,
    modalities: { input: ["text"], output: ["text"] },
    releaseDate: "2024-08-01",
    tags: ["enterprise", "rag"],
    pricing: [
      {
        inputPricePer1M: 0.15,
        outputPricePer1M: 0.60,
        currency: "USD",
        effectiveDate: "2024-08-01",
        source: "https://cohere.com/pricing",
      },
    ],
  },

  // ── Meta (reference pricing via Groq / Together) ──────────────────────────

  {
    id: "llama-4-maverick",
    name: "Llama 4 Maverick",
    providerId: "meta",
    family: "Llama 4",
    description: "Meta's MoE flagship open-weight model with native multimodal understanding.",
    status: "active",
    contextWindow: 1_000_000,
    maxOutputTokens: 16_384,
    modalities: { input: ["text", "image"], output: ["text"] },
    releaseDate: "2025-04-05",
    tags: ["open-weight", "moe", "multimodal", "long-context"],
    openWeightsUrl: "https://huggingface.co/meta-llama/Llama-4-Maverick-17B-128E-Instruct",
    pricing: [
      {
        inputPricePer1M: 0.20,
        outputPricePer1M: 0.60,
        currency: "USD",
        effectiveDate: "2025-04-05",
        source: "https://groq.com/pricing/",
        notes: "Pricing via Groq inference. Self-hosting available as open-weight model.",
      },
    ],
  },

  {
    id: "llama-4-scout",
    name: "Llama 4 Scout",
    providerId: "meta",
    family: "Llama 4",
    description: "Efficient MoE model with 10M context window for document-heavy tasks.",
    status: "active",
    contextWindow: 10_000_000,
    maxOutputTokens: 16_384,
    modalities: { input: ["text", "image"], output: ["text"] },
    releaseDate: "2025-04-05",
    tags: ["open-weight", "moe", "multimodal", "ultra-long-context"],
    openWeightsUrl: "https://huggingface.co/meta-llama/Llama-4-Scout-17B-16E-Instruct",
    pricing: [
      {
        inputPricePer1M: 0.11,
        outputPricePer1M: 0.34,
        currency: "USD",
        effectiveDate: "2025-04-05",
        source: "https://groq.com/pricing/",
        notes: "Pricing via Groq inference. Self-hosting available as open-weight model.",
      },
    ],
  },

  {
    id: "llama-3-3-70b",
    name: "Llama 3.3 70B",
    providerId: "meta",
    family: "Llama 3.3",
    description: "Flagship dense open-weight model — performance near Llama 3.1 405B at 70B scale.",
    status: "active",
    contextWindow: 128_000,
    maxOutputTokens: 8_192,
    modalities: { input: ["text"], output: ["text"] },
    releaseDate: "2024-12-06",
    tags: ["open-weight"],
    openWeightsUrl: "https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct",
    pricing: [
      {
        inputPricePer1M: 0.59,
        outputPricePer1M: 0.79,
        currency: "USD",
        effectiveDate: "2024-12-06",
        source: "https://groq.com/pricing/",
        notes: "Pricing via Groq inference.",
      },
    ],
  },

  {
    id: "llama-3-1-8b",
    name: "Llama 3.1 8B",
    providerId: "meta",
    family: "Llama 3.1",
    description: "Small open-weight model for edge and resource-constrained deployments.",
    status: "active",
    contextWindow: 128_000,
    maxOutputTokens: 8_192,
    modalities: { input: ["text"], output: ["text"] },
    releaseDate: "2024-07-23",
    tags: ["open-weight", "small"],
    openWeightsUrl: "https://huggingface.co/meta-llama/Meta-Llama-3.1-8B-Instruct",
    pricing: [
      {
        inputPricePer1M: 0.05,
        outputPricePer1M: 0.08,
        currency: "USD",
        effectiveDate: "2024-07-23",
        source: "https://groq.com/pricing/",
        notes: "Pricing via Groq inference.",
      },
    ],
  },
]
