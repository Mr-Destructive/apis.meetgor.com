import { type TokenomicsModel } from "./seed"

export const orModels: TokenomicsModel[] = [
  {
    "id": "or-openai-gpt-6-astra",
    "name": "[OR] OpenAI: GPT-6 Astra",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-6 Astra is OpenAI's flagship model for demanding end-to-end work. It is suited for advanced analysis, software engineering, deep research, scientific work, and document creation, with particular strengths in long-horizon...",
    "status": "active",
    "contextWindow": 1050000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "file",
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 10,
        "outputPricePer1M": 50,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-6-astra:batch",
    "name": "[OR] OpenAI: GPT-6 Astra (batch)",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-6 Astra is OpenAI's flagship model for demanding end-to-end work. It is suited for advanced analysis, software engineering, deep research, scientific work, and document creation, with particular strengths in long-horizon...",
    "status": "active",
    "contextWindow": 1050000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "file",
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 5,
        "outputPricePer1M": 25,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-6-astra-pro",
    "name": "[OR] OpenAI: GPT-6 Astra Pro",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-6 Astra Pro is the same underlying model as [GPT-6 Astra](https://openrouter.ai/openai/gpt-6-astra), served with `reasoning.mode` set to `pro` for higher-quality responses on complex tasks.\n\nLearn more in OpenAI's docs: https://developers.openai.com/api/docs/guides/reasoning#reasoning-mode",
    "status": "active",
    "contextWindow": 1050000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "file",
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 10,
        "outputPricePer1M": 50,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-6-astra-pro:batch",
    "name": "[OR] OpenAI: GPT-6 Astra Pro (batch)",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-6 Astra Pro is the same underlying model as [GPT-6 Astra](https://openrouter.ai/openai/gpt-6-astra), served with `reasoning.mode` set to `pro` for higher-quality responses on complex tasks.\n\nLearn more in OpenAI's docs: https://developers.openai.com/api/docs/guides/reasoning#reasoning-mode",
    "status": "active",
    "contextWindow": 1050000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "file",
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 5,
        "outputPricePer1M": 25,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-inclusionai-ling-3.0-flash-sante:free",
    "name": "[OR] inclusionAI: Ling 3.0 Flash Sante (free)",
    "providerId": "inclusionai",
    "family": "inclusionai",
    "description": "Ling 3.0 Flash Sante is a health and medicine-focused mixture-of-experts model from InclusionAI, built on Ling 3.0 Flash with 5.1B active parameters out of 124B total. It is designed for...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0,
        "outputPricePer1M": 0,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3.8-max-0902",
    "name": "[OR] Qwen: Qwen3.8 Max (0902)",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3.8 Max 0902 is an updated snapshot of Qwen3.8 Max from Alibaba's Qwen team. It is a 2.4-trillion-parameter mixture-of-experts model that accepts text, image, and video input and returns text,...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 131072,
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2,
        "outputPricePer1M": 6,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-meta-muse-spark-1.3-contributor",
    "name": "[OR] Meta: Muse Spark 1.3 Contributor",
    "providerId": "meta",
    "family": "meta",
    "description": "Muse Spark 1.3 Contributor is the cost-efficient contributor tier of Meta’s multimodal reasoning model for experimentation, learning, and early-stage agentic, multi-agent, and coding workflows. It is designed to track information...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 943718,
    "modalities": {
      "input": [
        "text",
        "image",
        "video",
        "file",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.09999999999999999,
        "outputPricePer1M": 0.19999999999999998,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-meta-muse-spark-1.3",
    "name": "[OR] Meta: Muse Spark 1.3",
    "providerId": "meta",
    "family": "meta",
    "description": "Muse Spark 1.3 is a multimodal reasoning model from Meta for long-running agentic, multi-agent, and coding workflows. It is designed to keep track of information across extended tasks, work through...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 943718,
    "modalities": {
      "input": [
        "text",
        "image",
        "video",
        "file",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.25,
        "outputPricePer1M": 4.25,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemini-3.8-flash",
    "name": "[OR] Google: Gemini 3.8 Flash",
    "providerId": "google",
    "family": "google",
    "description": "Gemini 3.8 Flash is Google's most intelligent Flash model with significant gains from 3.7 Flash across software engineering, agentic tasks, and multi-step reasoning.",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text",
        "image",
        "video",
        "file",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.75,
        "outputPricePer1M": 3.75,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemini-3.8-flash:batch",
    "name": "[OR] Google: Gemini 3.8 Flash (batch)",
    "providerId": "google",
    "family": "google",
    "description": "Gemini 3.8 Flash is Google's most intelligent Flash model with significant gains from 3.7 Flash across software engineering, agentic tasks, and multi-step reasoning.",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text",
        "image",
        "video",
        "file",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.375,
        "outputPricePer1M": 1.875,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-anthropic-claude-fable-5.1",
    "name": "[OR] Anthropic: Claude Fable 5.1",
    "providerId": "anthropic",
    "family": "anthropic",
    "description": "Claude Fable 5.1 improves on Claude Fable 5 across the board, with the biggest gains in agentic coding, long-running agentic workflows, and knowledge work: long code refactors, front-end and visual...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 10,
        "outputPricePer1M": 50,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-anthropic-claude-fable-5.1:batch",
    "name": "[OR] Anthropic: Claude Fable 5.1 (batch)",
    "providerId": "anthropic",
    "family": "anthropic",
    "description": "Claude Fable 5.1 improves on Claude Fable 5 across the board, with the biggest gains in agentic coding, long-running agentic workflows, and knowledge work: long code refactors, front-end and visual...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 5,
        "outputPricePer1M": 25,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-inception-mercury-2.5-preview",
    "name": "[OR] Inception: Mercury 2.5 Preview",
    "providerId": "inception",
    "family": "inception",
    "description": "Mercury 2.5 is the fastest reasoning LLM, and the latest diffusion LLM (dLLM) from Inception. Instead of generating tokens sequentially, Mercury 2.5 produces and refines multiple tokens in parallel, achieving...",
    "status": "active",
    "contextWindow": 260000,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.04,
        "outputPricePer1M": 0.15,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-ibm-granite-granite-4.2-8b",
    "name": "[OR] IBM: Granite 4.2 8B",
    "providerId": "ibm-granite",
    "family": "ibm-granite",
    "description": "Granite 4.2 8B is a dense reasoning model from IBM. It is suited for mathematics, code generation, multilingual dialogue, and agentic workflows that need multi-step reasoning. It supports full, low-effort,...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 117964,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.09999999999999999,
        "outputPricePer1M": 0.15,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-tencent-hy4-preview",
    "name": "[OR] Tencent: Hy4 preview",
    "providerId": "tencent",
    "family": "tencent",
    "description": "Tencent: Hy4 preview is a mixture-of-experts model from Tencent, with 49B active parameters out of 770B total. It is designed for coding agents, complex tool-use workflows, and productivity tasks that...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 64000,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.834,
        "outputPricePer1M": 2.501,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-inclusionai-ling-3.0-flash-fin",
    "name": "[OR] inclusionAI: Ling 3.0 Flash Fin",
    "providerId": "inclusionai",
    "family": "inclusionai",
    "description": "Ling 3.0 Flash Fin is a finance-focused mixture-of-experts model from InclusionAI, built on Ling 3.0 Flash with 5.1B active parameters out of 124B total. It is designed for real-world investment...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 235929,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.06,
        "outputPricePer1M": 0.18,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-inclusionai-ling-3.0-flash-fin:free",
    "name": "[OR] inclusionAI: Ling 3.0 Flash Fin (free)",
    "providerId": "inclusionai",
    "family": "inclusionai",
    "description": "Ling 3.0 Flash Fin is a finance-focused mixture-of-experts model from InclusionAI, built on Ling 3.0 Flash with 5.1B active parameters out of 124B total. It is designed for real-world investment...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0,
        "outputPricePer1M": 0,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-~z-ai-glm-flash-latest",
    "name": "[OR] Z.ai: GLM Flash Latest",
    "providerId": "~z-ai",
    "family": "~z-ai",
    "description": "This model always redirects to the latest model in the GLM Flash family.",
    "status": "active",
    "contextWindow": 1310720,
    "maxOutputTokens": 943718,
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.075,
        "outputPricePer1M": 0.25,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3.8-flash",
    "name": "[OR] Qwen: Qwen3.8 Flash",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3.8 Flash is a multimodal reasoning model from Alibaba. It is suited for coding assistance, agentic workflows, visual understanding, document and codebase analysis, desktop interaction, chart analysis, and long-video analysis.",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 131072,
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.15,
        "outputPricePer1M": 0.47,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-z-ai-glm-5.3-flash",
    "name": "[OR] Z.ai: GLM 5.3 Flash",
    "providerId": "z-ai",
    "family": "z-ai",
    "description": "GLM-5.3-Flash is a native multimodal model from Z.ai. It is suited for efficient coding and long-horizon agent tasks. Its hybrid sparse and linear attention architecture maintains accurate long-context behavior while...",
    "status": "active",
    "contextWindow": 1310720,
    "maxOutputTokens": 131072,
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.075,
        "outputPricePer1M": 0.25,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-z-ai-glm-5.3-flash:batch",
    "name": "[OR] Z.ai: GLM 5.3 Flash (batch)",
    "providerId": "z-ai",
    "family": "z-ai",
    "description": "GLM-5.3-Flash is a native multimodal model from Z.ai. It is suited for efficient coding and long-horizon agent tasks. Its hybrid sparse and linear attention architecture maintains accurate long-context behavior while...",
    "status": "active",
    "contextWindow": 1048575,
    "maxOutputTokens": 943717,
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.15,
        "outputPricePer1M": 0.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-meta-muse-spark-1.2-contributor",
    "name": "[OR] Meta: Muse Spark 1.2 Contributor",
    "providerId": "meta",
    "family": "meta",
    "description": "Muse Spark 1.2 contributor tier is a reasoning model from Meta designed for developers who want to start building at an even lower cost. It’s meaningfully cheaper than Muse Spark...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 943718,
    "modalities": {
      "input": [
        "text",
        "image",
        "video",
        "file",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.09999999999999999,
        "outputPricePer1M": 0.19999999999999998,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-deepseek-deepseek-v4-flash-vision-exp",
    "name": "[OR] DeepSeek: DeepSeek V4 Flash Vision Exp",
    "providerId": "deepseek",
    "family": "deepseek",
    "description": "DeepSeek V4 Flash Vision Exp is an experimental vision-enabled version of [DeepSeek V4 Flash 0731](https://openrouter.ai/deepseek/deepseek-v4-flash-0731) from DeepSeek, adding image understanding while matching the base model on text capabilities including agents,...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 384000,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.22,
        "outputPricePer1M": 0.66,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-tencent-hy-mt2-1.8b",
    "name": "[OR] Tencent: Hy-MT2-1.8B",
    "providerId": "tencent",
    "family": "tencent",
    "description": "Hy-MT2-1.8B is a compact 1.8B-parameter translation model from Tencent. It supports 33 language pairs and five Chinese dialect and minority-language pairs, with workflows for structured, delimiter-based, contextual, glossary-based, and style-guided...",
    "status": "active",
    "contextWindow": 8192,
    "maxOutputTokens": 4096,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.044,
        "outputPricePer1M": 0.17700000000000002,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-tencent-hy-mt2-30b-a3b",
    "name": "[OR] Tencent: Hy-MT2-30B-A3B",
    "providerId": "tencent",
    "family": "tencent",
    "description": "Hy-MT2-30B-A3B is Tencent's flagship translation model in the Hy-MT2 family. It supports 33 language pairs and five Chinese dialect and minority-language pairs, with workflows for structured, delimiter-based, contextual, glossary-based, and...",
    "status": "active",
    "contextWindow": 8192,
    "maxOutputTokens": 4096,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.074,
        "outputPricePer1M": 0.295,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-~z-ai-glm-latest",
    "name": "[OR] Z.ai: GLM Latest",
    "providerId": "~z-ai",
    "family": "~z-ai",
    "description": "This model always redirects to the latest GLM model from Z.ai.",
    "status": "active",
    "contextWindow": 1310720,
    "maxOutputTokens": 235929,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.15,
        "outputPricePer1M": 3.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-tencent-hy-mt2-7b",
    "name": "[OR] Tencent: Hy-MT2-7B",
    "providerId": "tencent",
    "family": "tencent",
    "description": "Hy-MT2-7B is a 7B-parameter translation model from Tencent. It supports 33 language pairs and five Chinese dialect and minority-language pairs, with workflows for structured, delimiter-based, contextual, glossary-based, and style-guided translation.",
    "status": "active",
    "contextWindow": 8192,
    "maxOutputTokens": 4096,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.074,
        "outputPricePer1M": 0.295,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-z-ai-glm-5.3",
    "name": "[OR] Z.ai: GLM 5.3",
    "providerId": "z-ai",
    "family": "z-ai",
    "description": "GLM-5.3 is a large-scale reasoning model from Z.ai, built for complex software engineering and long-horizon agent tasks. It supports text input and output with a 1M-token context window, and improves...",
    "status": "active",
    "contextWindow": 1310720,
    "maxOutputTokens": 262144,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.4,
        "outputPricePer1M": 4.4,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3.8-27b",
    "name": "[OR] Qwen: Qwen3.8 27B",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3.8 27B is an open-weight dense vision-language model from Qwen. It is suited for coding, professional workflows, research, multimodal interaction, and long-running agent tasks, with flexible thinking that can be...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 131072,
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.42,
        "outputPricePer1M": 3,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-dots-studio-dots-3-note-preview:free",
    "name": "[OR] Dots Studio: Dots3-Note Preview (free)",
    "providerId": "dots-studio",
    "family": "dots-studio",
    "description": "Dots3-Note Preview is an open-weight mixture-of-experts model from Dots Studio, with 16B active parameters out of 280B total. It is the lightest model in the Dots 3 family and is...",
    "status": "active",
    "contextWindow": 512000,
    "maxOutputTokens": 460800,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0,
        "outputPricePer1M": 0,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemini-3.7-flash",
    "name": "[OR] Google: Gemini 3.7 Flash",
    "providerId": "google",
    "family": "google",
    "description": "Gemini 3.7 Flash is a multimodal model from Google for fast agentic workflows, coding, and complex multi-step reasoning. It is designed for tasks that require responsive performance and reliable multi-step...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text",
        "image",
        "video",
        "file",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.75,
        "outputPricePer1M": 3.75,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemini-3.7-flash:batch",
    "name": "[OR] Google: Gemini 3.7 Flash (batch)",
    "providerId": "google",
    "family": "google",
    "description": "Gemini 3.7 Flash is a multimodal model from Google for fast agentic workflows, coding, and complex multi-step reasoning. It is designed for tasks that require responsive performance and reliable multi-step...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text",
        "image",
        "video",
        "file",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.375,
        "outputPricePer1M": 1.875,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-bytedance-seed-seed-2-1-turbo",
    "name": "[OR] ByteDance Seed: Seed 2.1 Turbo",
    "providerId": "bytedance-seed",
    "family": "bytedance-seed",
    "description": "Seed 2.1 Turbo is a multimodal model from ByteDance Seed for coding and long-horizon agent workflows. It is suited for end-to-end software delivery, multi-step task execution, and understanding visual and...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 235929,
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.5,
        "outputPricePer1M": 2.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3.8-2.4t-a95b",
    "name": "[OR] Qwen: Qwen3.8 2.4T A95B",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3.8 2.4T A95B is an open-weight sparse mixture-of-experts model from Qwen and the open-weight variant of [Qwen3.8 Max](/qwen/qwen3.8-max), with 95 billion active parameters out of 2.4 trillion total. It is...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 262144,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2,
        "outputPricePer1M": 6,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3.8-2.4t-a95b:batch",
    "name": "[OR] Qwen: Qwen3.8 2.4T A95B (batch)",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3.8 2.4T A95B is an open-weight sparse mixture-of-experts model from Qwen and the open-weight variant of [Qwen3.8 Max](/qwen/qwen3.8-max), with 95 billion active parameters out of 2.4 trillion total. It is...",
    "status": "active",
    "contextWindow": 1010000,
    "maxOutputTokens": 909000,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2,
        "outputPricePer1M": 6,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-bytedance-seed-seed-2.0-code",
    "name": "[OR] ByteDance Seed: Seed-2.0-Code",
    "providerId": "bytedance-seed",
    "family": "bytedance-seed",
    "description": "Seed 2.0 Code is a model from ByteDance Seed optimized for agentic coding. It is suited for frontend development, multilingual programming tasks, and coding-agent workflows in tools such as Claude...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 131072,
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.5,
        "outputPricePer1M": 3,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-deepseek-deepseek-v4-pro-0813",
    "name": "[OR] DeepSeek: DeepSeek V4 Pro 0813",
    "providerId": "deepseek",
    "family": "deepseek",
    "description": "DeepSeek V4 Pro 0813 is a large-scale mixture-of-experts model from DeepSeek. This is the GA release of DeepSeek V4 Pro.",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 384000,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.12068,
        "outputPricePer1M": 3.36204,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-deepseek-deepseek-v4-pro-0813:batch",
    "name": "[OR] DeepSeek: DeepSeek V4 Pro 0813 (batch)",
    "providerId": "deepseek",
    "family": "deepseek",
    "description": "DeepSeek V4 Pro 0813 is a large-scale mixture-of-experts model from DeepSeek. This is the GA release of DeepSeek V4 Pro.",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 943718,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.32,
        "outputPricePer1M": 3.9600000000000004,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-x-ai-grok-4.6",
    "name": "[OR] SpaceXAI: Grok 4.6",
    "providerId": "x-ai",
    "family": "x-ai",
    "description": "Grok 4.6 is SpaceXAI's smartest model with frontier performance on coding, knowledge work, and STEM.",
    "status": "active",
    "contextWindow": 500000,
    "maxOutputTokens": 450000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2,
        "outputPricePer1M": 6,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-liquid-lfm-2.5-2.6b:free",
    "name": "[OR] LiquidAI: LFM2.5-2.6B (free)",
    "providerId": "liquid",
    "family": "liquid",
    "description": "LFM2.5-2.6B is a compact reasoning model from Liquid AI. It is suited for agent workflows, data extraction, RAG, and long-context processing. Liquid advises against using it for agentic coding or...",
    "status": "active",
    "contextWindow": 65536,
    "maxOutputTokens": 8192,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0,
        "outputPricePer1M": 0,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-nvidia-nemotron-3.5-lightning",
    "name": "[OR] NVIDIA: Nemotron 3.5 Lightning",
    "providerId": "nvidia",
    "family": "nvidia",
    "description": "NVIDIA Nemotron 3.5 Lightning is an open mixture-of-experts model from NVIDIA, with 3B active parameters out of 30B total. It is suited for high-throughput agentic workloads and specialized tasks that...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 131072,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.08,
        "outputPricePer1M": 0.19999999999999998,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-nvidia-nemotron-3.5-lightning:free",
    "name": "[OR] NVIDIA: Nemotron 3.5 Lightning (free)",
    "providerId": "nvidia",
    "family": "nvidia",
    "description": "NVIDIA Nemotron 3.5 Lightning is an open mixture-of-experts model from NVIDIA, with 3B active parameters out of 30B total. It is suited for high-throughput agentic workloads and specialized tasks that...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0,
        "outputPricePer1M": 0,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-sakana-sakana-namazu",
    "name": "[OR] Sakana: Sakana Namazu",
    "providerId": "sakana",
    "family": "sakana",
    "description": "Sakana Namazu is a Japanese-specialized reasoning model from Sakana AI, based on Kimi K2.6 with additional training for Japanese language and business contexts. It is suited for Japanese instruction following,...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.95,
        "outputPricePer1M": 4,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-upstage-solar-pro4",
    "name": "[OR] Upstage: Solar Pro 4",
    "providerId": "upstage",
    "family": "upstage",
    "description": "Solar Pro 4 is Upstage's cost-efficient large language model, featuring a 524K context window. It is built for long-horizon tasks and agentic workflows, with strong capabilities in office productivity, document-intensive...",
    "status": "active",
    "contextWindow": 524288,
    "maxOutputTokens": 131072,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.03,
        "outputPricePer1M": 0.12,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-meta-muse-glimmer-30b",
    "name": "[OR] Meta: Muse Glimmer 30B",
    "providerId": "meta",
    "family": "meta",
    "description": "Muse Glimmer 30B is a dense, open-weight multimodal model from Meta Superintelligence Labs, distilled from Muse Spark and optimized for autonomous agents on consumer hardware. It is suited for long-horizon...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 117964,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.3,
        "outputPricePer1M": 1.1,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-meta-muse-glimmer-30b:batch",
    "name": "[OR] Meta: Muse Glimmer 30B (batch)",
    "providerId": "meta",
    "family": "meta",
    "description": "Muse Glimmer 30B is a dense, open-weight multimodal model from Meta Superintelligence Labs, distilled from Muse Spark and optimized for autonomous agents on consumer hardware. It is suited for long-horizon...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 117964,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.35,
        "outputPricePer1M": 1.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-meta-muse-spark-1.2",
    "name": "[OR] Meta: Muse Spark 1.2",
    "providerId": "meta",
    "family": "meta",
    "description": "Muse Spark 1.2 is a reasoning model from Meta, designed for complex agentic tasks. It accepts text, images, video, audio, and PDF documents, returns text, and offers a 1M-token context...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 943718,
    "modalities": {
      "input": [
        "text",
        "image",
        "video",
        "file",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.25,
        "outputPricePer1M": 4.25,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-~deepseek-deepseek-v4-flash-latest",
    "name": "[OR] DeepSeek V4 Flash Latest",
    "providerId": "~deepseek",
    "family": "~deepseek",
    "description": "This model always redirects to the latest model in the DeepSeek V4 Flash family.",
    "status": "active",
    "contextWindow": 1310720,
    "maxOutputTokens": 131072,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.049980000000000004,
        "outputPricePer1M": 0.09996000000000001,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-deepseek-deepseek-v4-flash-0731",
    "name": "[OR] DeepSeek: DeepSeek V4 Flash 0731",
    "providerId": "deepseek",
    "family": "deepseek",
    "description": "DeepSeek V4 Flash 0731 is a sparse mixture-of-experts model from DeepSeek, with 13B active parameters out of 284B total. This re-post-trained revision is suited for coding, reasoning, and agent workflows....",
    "status": "active",
    "contextWindow": 1310720,
    "maxOutputTokens": 943718,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.065,
        "outputPricePer1M": 0.18,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-deepseek-deepseek-v4-flash-0731:batch",
    "name": "[OR] DeepSeek: DeepSeek V4 Flash 0731 (batch)",
    "providerId": "deepseek",
    "family": "deepseek",
    "description": "DeepSeek V4 Flash 0731 is a sparse mixture-of-experts model from DeepSeek, with 13B active parameters out of 284B total. This re-post-trained revision is suited for coding, reasoning, and agent workflows....",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 943718,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.14,
        "outputPricePer1M": 0.28,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-thinkingmachines-inkling-small",
    "name": "[OR] Thinking Machines: Inkling Small",
    "providerId": "thinkingmachines",
    "family": "thinkingmachines",
    "description": "Inkling Small is an open-weight multimodal mixture-of-experts model from Thinking Machines Lab, with 12B active parameters out of 276B total. It is positioned as the smaller, more efficient member of...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 262144,
    "modalities": {
      "input": [
        "text",
        "image",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.44999999999999996,
        "outputPricePer1M": 1.2,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-thinkingmachines-inkling-small:batch",
    "name": "[OR] Thinking Machines: Inkling Small (batch)",
    "providerId": "thinkingmachines",
    "family": "thinkingmachines",
    "description": "Inkling Small is an open-weight multimodal mixture-of-experts model from Thinking Machines Lab, with 12B active parameters out of 276B total. It is positioned as the smaller, more efficient member of...",
    "status": "active",
    "contextWindow": 524288,
    "maxOutputTokens": 471859,
    "modalities": {
      "input": [
        "text",
        "image",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.5,
        "outputPricePer1M": 1.2,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-thinkingmachines-inkling-small:free",
    "name": "[OR] Thinking Machines: Inkling Small (free)",
    "providerId": "thinkingmachines",
    "family": "thinkingmachines",
    "description": "Inkling Small is an open-weight multimodal mixture-of-experts model from Thinking Machines Lab, with 12B active parameters out of 276B total. It is positioned as the smaller, more efficient member of...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 262144,
    "modalities": {
      "input": [
        "text",
        "image",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0,
        "outputPricePer1M": 0,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3.7-flash",
    "name": "[OR] Qwen: Qwen3.7 Flash",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3.7 Flash is a vision-language reasoning model from Alibaba. It is suited for multimodal agents, visual coding, search, and computer interaction, with strengths in object recognition, spatial understanding, and real-world...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.03,
        "outputPricePer1M": 0.13,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-anthropic-claude-opus-5",
    "name": "[OR] Claude Opus 5",
    "providerId": "anthropic",
    "family": "anthropic",
    "description": "Claude Opus 5 is Anthropic’s flagship model for demanding reasoning, coding, and long-horizon agentic work. It is particularly strong at end-to-end software tasks, code review and bug finding, visual analysis...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 5,
        "outputPricePer1M": 25,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-anthropic-claude-opus-5:batch",
    "name": "[OR] Claude Opus 5 (batch)",
    "providerId": "anthropic",
    "family": "anthropic",
    "description": "Claude Opus 5 is Anthropic’s flagship model for demanding reasoning, coding, and long-horizon agentic work. It is particularly strong at end-to-end software tasks, code review and bug finding, visual analysis...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2.5,
        "outputPricePer1M": 12.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-inclusionai-ling-3.0-flash",
    "name": "[OR] inclusionAI: Ling 3.0 Flash",
    "providerId": "inclusionai",
    "family": "inclusionai",
    "description": "*Ling-3.0-flash* is a *124B-parameter Mixture-of-Experts (MoE) model*, with approximately *5.1B parameters activated per token*. The model is designed with *token efficiency and production-scale agentic inference* as key priorities, enabling developers...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.020999999999999998,
        "outputPricePer1M": 0.063,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-poolside-laguna-s-2.1",
    "name": "[OR] Poolside: Laguna S 2.1",
    "providerId": "poolside",
    "family": "poolside",
    "description": "Laguna S 2.1 is the latest coding agent model from [Poolside](<https://poolside.ai/>). Laguna S 2.1 is a 118B total parameter model with 8B active parameters, scoring 70.2% on Terminal-Bench 2.1 and...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 131072,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.09,
        "outputPricePer1M": 0.18,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-poolside-laguna-s-2.1:free",
    "name": "[OR] Poolside: Laguna S 2.1 (free)",
    "providerId": "poolside",
    "family": "poolside",
    "description": "Laguna S 2.1 is the latest coding agent model from [Poolside](<https://poolside.ai/>). Laguna S 2.1 is a 118B total parameter model with 8B active parameters, scoring 70.2% on Terminal-Bench 2.1 and...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0,
        "outputPricePer1M": 0,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemini-3.6-flash",
    "name": "[OR] Google: Gemini 3.6 Flash",
    "providerId": "google",
    "family": "google",
    "description": "Gemini 3.6 Flash is a high-efficiency model from Google for coding, agentic workflows, and web and app development. It is designed to produce polished outputs with fewer unnecessary edits and...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text",
        "image",
        "video",
        "file",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.75,
        "outputPricePer1M": 3.75,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemini-3.6-flash:batch",
    "name": "[OR] Google: Gemini 3.6 Flash (batch)",
    "providerId": "google",
    "family": "google",
    "description": "Gemini 3.6 Flash is a high-efficiency model from Google for coding, agentic workflows, and web and app development. It is designed to produce polished outputs with fewer unnecessary edits and...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text",
        "image",
        "video",
        "file",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.375,
        "outputPricePer1M": 1.875,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemini-3.5-flash-lite",
    "name": "[OR] Google: Gemini 3.5 Flash Lite",
    "providerId": "google",
    "family": "google",
    "description": "Gemini 3.5 Flash Lite is a high-efficiency model from Google with upgraded agentic capabilities. It is suited for subagents that execute focused tasks within complex, multi-agent workflows.",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text",
        "image",
        "video",
        "file",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.3,
        "outputPricePer1M": 2.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemini-3.5-flash-lite:batch",
    "name": "[OR] Google: Gemini 3.5 Flash Lite (batch)",
    "providerId": "google",
    "family": "google",
    "description": "Gemini 3.5 Flash Lite is a high-efficiency model from Google with upgraded agentic capabilities. It is suited for subagents that execute focused tasks within complex, multi-agent workflows.",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text",
        "image",
        "video",
        "file",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.15,
        "outputPricePer1M": 1.25,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-meituan-longcat-2.0",
    "name": "[OR] Meituan: LongCat 2.0",
    "providerId": "meituan",
    "family": "meituan",
    "description": "LongCat 2.0 is a sparse mixture-of-experts language model from Meituan, with 48B active parameters out of 1.6T total. It is suited for coding, repository-level changes, long-horizon problem solving, and agentic...",
    "status": "active",
    "contextWindow": 1048756,
    "maxOutputTokens": 262144,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.3,
        "outputPricePer1M": 1.2,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-thinkingmachines-inkling",
    "name": "[OR] Thinking Machines: Inkling",
    "providerId": "thinkingmachines",
    "family": "thinkingmachines",
    "description": "Inkling is an open-weight multimodal mixture-of-experts model from Thinking Machines Lab, with 41B active parameters out of 975B total. It is designed for general-purpose reasoning, coding, agentic and tool-use systems,...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 471859,
    "modalities": {
      "input": [
        "text",
        "image",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1,
        "outputPricePer1M": 4.05,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-thinkingmachines-inkling:batch",
    "name": "[OR] Thinking Machines: Inkling (batch)",
    "providerId": "thinkingmachines",
    "family": "thinkingmachines",
    "description": "Inkling is an open-weight multimodal mixture-of-experts model from Thinking Machines Lab, with 41B active parameters out of 975B total. It is designed for general-purpose reasoning, coding, agentic and tool-use systems,...",
    "status": "active",
    "contextWindow": 524288,
    "maxOutputTokens": 471859,
    "modalities": {
      "input": [
        "text",
        "image",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1,
        "outputPricePer1M": 4.05,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-thinkingmachines-inkling:free",
    "name": "[OR] Thinking Machines: Inkling (free)",
    "providerId": "thinkingmachines",
    "family": "thinkingmachines",
    "description": "Inkling is an open-weight multimodal mixture-of-experts model from Thinking Machines Lab, with 41B active parameters out of 975B total. It is designed for general-purpose reasoning, coding, agentic and tool-use systems,...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 262144,
    "modalities": {
      "input": [
        "text",
        "image",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0,
        "outputPricePer1M": 0,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openrouter-auto-beta",
    "name": "[OR] Auto Router (Beta)",
    "providerId": "openrouter",
    "family": "openrouter",
    "description": "Auto Router (Beta) is a task-aware router from OpenRouter. It classifies each request, then routes it the [most popular model](/rankings#task-spend) for that task based on aggregate spend, filtered by your...",
    "status": "active",
    "contextWindow": 2000000,
    "maxOutputTokens": 0,
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "file",
        "video"
      ],
      "output": [
        "text",
        "image"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": -1000000,
        "outputPricePer1M": -1000000,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-moonshotai-kimi-k3",
    "name": "[OR] MoonshotAI: Kimi K3",
    "providerId": "moonshotai",
    "family": "moonshotai",
    "description": "Kimi K3 is a 2.8T parameter open-weight multimodal reasoning model from Moonshot AI. It is suited for complex coding, knowledge work, and long-horizon agentic workflows, and is particularly strong at...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 943718,
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 3,
        "outputPricePer1M": 15,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-moonshotai-kimi-k3:batch",
    "name": "[OR] MoonshotAI: Kimi K3 (batch)",
    "providerId": "moonshotai",
    "family": "moonshotai",
    "description": "Kimi K3 is a 2.8T parameter open-weight multimodal reasoning model from Moonshot AI. It is suited for complex coding, knowledge work, and long-horizon agentic workflows, and is particularly strong at...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 943718,
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 3,
        "outputPricePer1M": 15,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-meta-muse-spark-1.1",
    "name": "[OR] Meta: Muse Spark 1.1",
    "providerId": "meta",
    "family": "meta",
    "description": "Muse Spark 1.1 is a multimodal reasoning model from Meta, built for agentic tasks. It accepts text, images, video, audio, and PDF documents and returns text, with a 1M-token context...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 943718,
    "modalities": {
      "input": [
        "text",
        "image",
        "video",
        "file",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.25,
        "outputPricePer1M": 4.25,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-kwaipilot-kat-coder-pro-v2.5",
    "name": "[OR] Kwaipilot: KAT-Coder-Pro V2.5",
    "providerId": "kwaipilot",
    "family": "kwaipilot",
    "description": "KAT-Coder-Pro V2.5 is a flagship-level Agentic Coding model that can directly hand over an entire issue or an entire business workflow to it, allowing it to autonomously locate and make...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 235929,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.74,
        "outputPricePer1M": 2.96,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.6-luna-pro",
    "name": "[OR] OpenAI: GPT-5.6 Luna Pro",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.6 Luna Pro is the same underlying model as [GPT-5.6 Luna](https://openrouter.ai/openai/gpt-5.6-luna), served with `reasoning.mode` set to `pro` for higher-quality responses on complex tasks.\n\nLearn more in OpenAI's docs: https://developers.openai.com/api/docs/guides/reasoning#reasoning-mode",
    "status": "active",
    "contextWindow": 1050000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "file",
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.19999999999999998,
        "outputPricePer1M": 1.2,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.6-luna-pro:batch",
    "name": "[OR] OpenAI: GPT-5.6 Luna Pro (batch)",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.6 Luna Pro is the same underlying model as [GPT-5.6 Luna](https://openrouter.ai/openai/gpt-5.6-luna), served with `reasoning.mode` set to `pro` for higher-quality responses on complex tasks.\n\nLearn more in OpenAI's docs: https://developers.openai.com/api/docs/guides/reasoning#reasoning-mode",
    "status": "active",
    "contextWindow": 1050000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "file",
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.09999999999999999,
        "outputPricePer1M": 0.6,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.6-luna",
    "name": "[OR] OpenAI: GPT-5.6 Luna",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.6 Luna is a fast, cost-efficient model in OpenAI's GPT-5.6 series. It is suited for high-volume, latency-sensitive tasks such as chat, classification, and lightweight agentic workflows, providing capable reasoning for...",
    "status": "active",
    "contextWindow": 1050000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "file",
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.19999999999999998,
        "outputPricePer1M": 1.2,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.6-luna:batch",
    "name": "[OR] OpenAI: GPT-5.6 Luna (batch)",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.6 Luna is a fast, cost-efficient model in OpenAI's GPT-5.6 series. It is suited for high-volume, latency-sensitive tasks such as chat, classification, and lightweight agentic workflows, providing capable reasoning for...",
    "status": "active",
    "contextWindow": 1050000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "file",
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.09999999999999999,
        "outputPricePer1M": 0.6,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.6-terra-pro",
    "name": "[OR] OpenAI: GPT-5.6 Terra Pro",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.6 Terra Pro is the same underlying model as [GPT-5.6 Terra](https://openrouter.ai/openai/gpt-5.6-terra), served with `reasoning.mode` set to `pro` for higher-quality responses on complex tasks.\n\nLearn more in OpenAI's docs: https://developers.openai.com/api/docs/guides/reasoning#reasoning-mode",
    "status": "active",
    "contextWindow": 1050000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "file",
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2,
        "outputPricePer1M": 12,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.6-terra-pro:batch",
    "name": "[OR] OpenAI: GPT-5.6 Terra Pro (batch)",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.6 Terra Pro is the same underlying model as [GPT-5.6 Terra](https://openrouter.ai/openai/gpt-5.6-terra), served with `reasoning.mode` set to `pro` for higher-quality responses on complex tasks.\n\nLearn more in OpenAI's docs: https://developers.openai.com/api/docs/guides/reasoning#reasoning-mode",
    "status": "active",
    "contextWindow": 1050000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "file",
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1,
        "outputPricePer1M": 6,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.6-terra",
    "name": "[OR] OpenAI: GPT-5.6 Terra",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.6 Terra is a balanced model in OpenAI's GPT-5.6 series, positioned between the flagship Sol tier and the cost-efficient Luna tier. It is suited for everyday coding, reasoning, and agentic...",
    "status": "active",
    "contextWindow": 1050000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "file",
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2,
        "outputPricePer1M": 12,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.6-terra:batch",
    "name": "[OR] OpenAI: GPT-5.6 Terra (batch)",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.6 Terra is a balanced model in OpenAI's GPT-5.6 series, positioned between the flagship Sol tier and the cost-efficient Luna tier. It is suited for everyday coding, reasoning, and agentic...",
    "status": "active",
    "contextWindow": 1050000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "file",
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1,
        "outputPricePer1M": 6,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.6-sol-pro",
    "name": "[OR] OpenAI: GPT-5.6 Sol Pro",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.6 Sol Pro is the same underlying model as [GPT-5.6 Sol](https://openrouter.ai/openai/gpt-5.6-sol), served with `reasoning.mode` set to `pro` for higher-quality responses on complex tasks.\n\nLearn more in OpenAI's docs: https://developers.openai.com/api/docs/guides/reasoning#reasoning-mode",
    "status": "active",
    "contextWindow": 1050000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "file",
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2,
        "outputPricePer1M": 10,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.6-sol-pro:batch",
    "name": "[OR] OpenAI: GPT-5.6 Sol Pro (batch)",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.6 Sol Pro is the same underlying model as [GPT-5.6 Sol](https://openrouter.ai/openai/gpt-5.6-sol), served with `reasoning.mode` set to `pro` for higher-quality responses on complex tasks.\n\nLearn more in OpenAI's docs: https://developers.openai.com/api/docs/guides/reasoning#reasoning-mode",
    "status": "active",
    "contextWindow": 1050000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "file",
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1,
        "outputPricePer1M": 5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.6-sol",
    "name": "[OR] OpenAI: GPT-5.6 Sol",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.6 Sol is the flagship model in OpenAI's GPT-5.6 series. It is suited for complex reasoning, coding, and agentic workflows, and is particularly strong at command-line and multi-step coding tasks...",
    "status": "active",
    "contextWindow": 1050000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "file",
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2,
        "outputPricePer1M": 10,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.6-sol:batch",
    "name": "[OR] OpenAI: GPT-5.6 Sol (batch)",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.6 Sol is the flagship model in OpenAI's GPT-5.6 series. It is suited for complex reasoning, coding, and agentic workflows, and is particularly strong at command-line and multi-step coding tasks...",
    "status": "active",
    "contextWindow": 1050000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "file",
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1,
        "outputPricePer1M": 5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-x-ai-grok-4.5",
    "name": "[OR] SpaceXAI: Grok 4.5",
    "providerId": "x-ai",
    "family": "x-ai",
    "description": "Grok 4.5 is a model from SpaceXAI with frontier performance on coding, knowledge work, and STEM.",
    "status": "active",
    "contextWindow": 500000,
    "maxOutputTokens": 450000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2,
        "outputPricePer1M": 6,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-~x-ai-grok-latest",
    "name": "[OR] xAI: Grok Latest",
    "providerId": "~x-ai",
    "family": "~x-ai",
    "description": "This model always redirects to the latest Grok model from xAI.",
    "status": "active",
    "contextWindow": 500000,
    "maxOutputTokens": 450000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2,
        "outputPricePer1M": 6,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-aion-labs-aion-3.0-mini",
    "name": "[OR] AionLabs: Aion-3.0-Mini",
    "providerId": "aion-labs",
    "family": "aion-labs",
    "description": "Aion-3.0 Mini is a multi-model roleplaying and storytelling system from AionLabs, built on the DeepSeek family of models. It uses a collaborative generation process in which multiple specialized models each...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.7,
        "outputPricePer1M": 1.4,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-aion-labs-aion-3.0",
    "name": "[OR] AionLabs: Aion-3.0",
    "providerId": "aion-labs",
    "family": "aion-labs",
    "description": "Aion-3.0 is a multi-model roleplaying and storytelling system from AionLabs, built on the GLM family of models. It uses a collaborative generation process in which multiple specialized models each contribute...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 3,
        "outputPricePer1M": 6,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-tencent-hy3",
    "name": "[OR] Tencent: Hy3",
    "providerId": "tencent",
    "family": "tencent",
    "description": "Hy3 is a 295B-parameter Mixture-of-Experts model from Tencent (21B active, 192 experts with top-8 routing) built for reasoning, agentic workflows, and real-world production use. It supports a configurable reasoning effort:...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.13199999999999998,
        "outputPricePer1M": 0.5279999999999999,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-poolside-laguna-xs-2.1",
    "name": "[OR] Poolside: Laguna XS 2.1",
    "providerId": "poolside",
    "family": "poolside",
    "description": "Laguna XS 2.1 is the latest coding agent model in the 33B-A3B category from [Poolside](https://poolside.ai/) and a step forward from their Laguna XS.2 model (released in April 2026). It combines...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.06,
        "outputPricePer1M": 0.12,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-poolside-laguna-xs-2.1:free",
    "name": "[OR] Poolside: Laguna XS 2.1 (free)",
    "providerId": "poolside",
    "family": "poolside",
    "description": "Laguna XS 2.1 is the latest coding agent model in the 33B-A3B category from [Poolside](https://poolside.ai/) and a step forward from their Laguna XS.2 model (released in April 2026). It combines...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0,
        "outputPricePer1M": 0,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-anthropic-claude-sonnet-5",
    "name": "[OR] Anthropic: Claude Sonnet 5",
    "providerId": "anthropic",
    "family": "anthropic",
    "description": "Sonnet 5 is Anthropic's most capable Sonnet-class model, with frontier performance across coding, agents, and professional work. It supports adaptive thinking with selectable reasoning effort levels (low, medium, high, max,...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2,
        "outputPricePer1M": 10,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-anthropic-claude-sonnet-5:batch",
    "name": "[OR] Anthropic: Claude Sonnet 5 (batch)",
    "providerId": "anthropic",
    "family": "anthropic",
    "description": "Sonnet 5 is Anthropic's most capable Sonnet-class model, with frontier performance across coding, agents, and professional work. It supports adaptive thinking with selectable reasoning effort levels (low, medium, high, max,...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1,
        "outputPricePer1M": 5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemini-3.1-flash-lite-image",
    "name": "[OR] Google: Nano Banana 2 Lite (Gemini 3.1 Flash Lite Image)",
    "providerId": "google",
    "family": "google",
    "description": "Nano Banana 2 Lite (Gemini 3.1 Flash Lite Image) is Google's fastest, most cost-efficient Gemini image model, built for high-velocity developer pipelines and rapid-fire visual exploration. It delivers text-to-image generation...",
    "status": "active",
    "contextWindow": 65536,
    "maxOutputTokens": 58982,
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "image",
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.25,
        "outputPricePer1M": 1.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-nex-agi-nex-n2-mini",
    "name": "[OR] Nex AGI: Nex-N2-Mini",
    "providerId": "nex-agi",
    "family": "nex-agi",
    "description": "Nex-N2-Mini is an open-source agentic mixture-of-experts model from Nex AGI, the smaller sibling in the Nex-N2 series. It accepts text and image input and is built for coding, tool use,...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 235929,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.024999999999999998,
        "outputPricePer1M": 0.09999999999999999,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-sakana-fugu-ultra",
    "name": "[OR] Sakana: Fugu Ultra",
    "providerId": "sakana",
    "family": "sakana",
    "description": "Fugu Ultra is the higher-performance model in Sakana AI's Fugu family. Rather than a single monolithic model, Fugu is a learned multi-agent orchestration system: a language model trained to route...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 5,
        "outputPricePer1M": 30,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemini-3.1-flash-image",
    "name": "[OR] Google: Nano Banana 2 (Gemini 3.1 Flash Image)",
    "providerId": "google",
    "family": "google",
    "description": "Gemini 3.1 Flash Image, a.k.a. \"Nano Banana 2,\" is Google’s latest state of the art image generation and editing model, delivering Pro-level visual quality at Flash speed. It combines advanced...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "image",
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.5,
        "outputPricePer1M": 3,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemini-3-pro-image",
    "name": "[OR] Google: Nano Banana Pro (Gemini 3 Pro Image)",
    "providerId": "google",
    "family": "google",
    "description": "Nano Banana Pro is Google’s most advanced image-generation and editing model, built on Gemini 3 Pro. It extends the original Nano Banana with significantly improved multimodal reasoning, real-world grounding, and...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "image",
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2,
        "outputPricePer1M": 12,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-cohere-north-mini-code:free",
    "name": "[OR] Cohere: North Mini Code (free)",
    "providerId": "cohere",
    "family": "cohere",
    "description": "North Mini Code is Cohere's first agentic coding model and the debut of its North family. A sparse mixture-of-experts model with 30B total parameters and 3B active, it is optimized...",
    "status": "active",
    "contextWindow": 256000,
    "maxOutputTokens": 64000,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0,
        "outputPricePer1M": 0,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-z-ai-glm-5.2",
    "name": "[OR] Z.ai: GLM 5.2",
    "providerId": "z-ai",
    "family": "z-ai",
    "description": "GLM 5.2 is a large-scale reasoning model from Z.ai. It supports text input and output with a 1M-token context window, and is suited for long-horizon agent workflows, project-level software engineering,...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 131072,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.966,
        "outputPricePer1M": 3.036,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-z-ai-glm-5.2:free",
    "name": "[OR] Z.ai: GLM 5.2 (free)",
    "providerId": "z-ai",
    "family": "z-ai",
    "description": "GLM 5.2 is a large-scale reasoning model from Z.ai. It supports text input and output with a 1M-token context window, and is suited for long-horizon agent workflows, project-level software engineering,...",
    "status": "active",
    "contextWindow": 256000,
    "maxOutputTokens": 230400,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0,
        "outputPricePer1M": 0,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openrouter-fusion",
    "name": "[OR] OpenRouter: Fusion",
    "providerId": "openrouter",
    "family": "openrouter",
    "description": "Fusion turns your prompt into a small multi-model deliberation. A panel of expert models (see below) analyzes your prompt in parallel with web search and web fetch enabled, then a...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 0,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": -1000000,
        "outputPricePer1M": -1000000,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-moonshotai-kimi-k2.7-code",
    "name": "[OR] MoonshotAI: Kimi K2.7 Code",
    "providerId": "moonshotai",
    "family": "moonshotai",
    "description": "MoonshotAI: Kimi K2.7 Code is a coding-focused model in Moonshot AI's Kimi K2 family, built to complete end-to-end programming tasks reliably over long contexts. It uses a native multimodal mixture-of-experts...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 235929,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.66,
        "outputPricePer1M": 3.4,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-~anthropic-claude-fable-latest",
    "name": "[OR] Anthropic: Claude Fable Latest",
    "providerId": "~anthropic",
    "family": "~anthropic",
    "description": "This model always redirects to the latest model in the Claude Fable family.",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 10,
        "outputPricePer1M": 50,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-anthropic-claude-fable-5",
    "name": "[OR] Anthropic: Claude Fable 5",
    "providerId": "anthropic",
    "family": "anthropic",
    "description": "Claude Fable 5 is a Mythos-class model from Anthropic, built for autonomous knowledge work and coding. It supports text, image, and file inputs with text output, with reasoning support and...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 10,
        "outputPricePer1M": 50,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-anthropic-claude-fable-5:batch",
    "name": "[OR] Anthropic: Claude Fable 5 (batch)",
    "providerId": "anthropic",
    "family": "anthropic",
    "description": "Claude Fable 5 is a Mythos-class model from Anthropic, built for autonomous knowledge work and coding. It supports text, image, and file inputs with text output, with reasoning support and...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 5,
        "outputPricePer1M": 25,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-nex-agi-nex-n2-pro",
    "name": "[OR] Nex AGI: Nex-N2-Pro",
    "providerId": "nex-agi",
    "family": "nex-agi",
    "description": "Nex-N2-Pro is an agentic mixture-of-experts model from Nex AGI, with 17B active parameters out of 397B total. Built on the Qwen3.5 architecture, it accepts text and image input and produces...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 235929,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.25,
        "outputPricePer1M": 1,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-nvidia-nemotron-3.5-content-safety",
    "name": "[OR] NVIDIA: Nemotron 3.5 Content Safety",
    "providerId": "nvidia",
    "family": "nvidia",
    "description": "NVIDIA Nemotron 3.5 Content Safety is a compact 4B-parameter multimodal guardrail model from NVIDIA, fine-tuned from Google Gemma-3-4B. It moderates both inputs to and responses from LLMs and VLMs, accepting...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 117964,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.19999999999999998,
        "outputPricePer1M": 0.19999999999999998,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-nvidia-nemotron-3.5-content-safety:free",
    "name": "[OR] NVIDIA: Nemotron 3.5 Content Safety (free)",
    "providerId": "nvidia",
    "family": "nvidia",
    "description": "NVIDIA Nemotron 3.5 Content Safety is a compact 4B-parameter multimodal guardrail model from NVIDIA, fine-tuned from Google Gemma-3-4B. It moderates both inputs to and responses from LLMs and VLMs, accepting...",
    "status": "active",
    "contextWindow": 128000,
    "maxOutputTokens": 8192,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0,
        "outputPricePer1M": 0,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-nvidia-nemotron-3-ultra-550b-a55b",
    "name": "[OR] NVIDIA: Nemotron 3 Ultra",
    "providerId": "nvidia",
    "family": "nvidia",
    "description": "NVIDIA Nemotron 3 Ultra is an open frontier-reasoning and orchestration model from NVIDIA, with 55B active parameters out of 550B total (MoE). Built on a hybrid Transformer-Mamba mixture-of-experts architecture, it...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.625,
        "outputPricePer1M": 3.125,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-nvidia-nemotron-3-ultra-550b-a55b:free",
    "name": "[OR] NVIDIA: Nemotron 3 Ultra (free)",
    "providerId": "nvidia",
    "family": "nvidia",
    "description": "NVIDIA Nemotron 3 Ultra is an open frontier-reasoning and orchestration model from NVIDIA, with 55B active parameters out of 550B total (MoE). Built on a hybrid Transformer-Mamba mixture-of-experts architecture, it...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0,
        "outputPricePer1M": 0,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3.7-plus",
    "name": "[OR] Qwen: Qwen3.7 Plus",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3.7-Plus is a cost-effective model in Alibaba's Qwen3.7 series. It supports text and image input with text output, building on the series' text capabilities with a comprehensive upgrade to its...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 131072,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.32,
        "outputPricePer1M": 1.28,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-minimax-minimax-m3",
    "name": "[OR] MiniMax: MiniMax M3",
    "providerId": "minimax",
    "family": "minimax",
    "description": "MiniMax-M3 is a multimodal foundation model from MiniMax. It supports text, image, and video inputs with text output, a 1M-token context window, and is suited for long-horizon agentic work, coding,...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 512000,
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.3,
        "outputPricePer1M": 1.2,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-minimax-minimax-m3:batch",
    "name": "[OR] MiniMax: MiniMax M3 (batch)",
    "providerId": "minimax",
    "family": "minimax",
    "description": "MiniMax-M3 is a multimodal foundation model from MiniMax. It supports text, image, and video inputs with text output, a 1M-token context window, and is suited for long-horizon agentic work, coding,...",
    "status": "active",
    "contextWindow": 524288,
    "maxOutputTokens": 471859,
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.3,
        "outputPricePer1M": 1.2,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-minimax-minimax-m3:free",
    "name": "[OR] MiniMax: MiniMax M3 (free)",
    "providerId": "minimax",
    "family": "minimax",
    "description": "MiniMax-M3 is a multimodal foundation model from MiniMax. It supports text, image, and video inputs with text output, a 1M-token context window, and is suited for long-horizon agentic work, coding,...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 943718,
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0,
        "outputPricePer1M": 0,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-stepfun-step-3.7-flash",
    "name": "[OR] StepFun: Step 3.7 Flash",
    "providerId": "stepfun",
    "family": "stepfun",
    "description": "Step 3.7 Flash is StepFun's latest high-efficiency multimodal Mixture-of-Experts model. It pairs a 196B-parameter language backbone with a vision encoder for native image and video understanding, activating roughly 11B parameters...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 230400,
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.19999999999999998,
        "outputPricePer1M": 1.15,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-anthropic-claude-opus-4.8",
    "name": "[OR] Anthropic: Claude Opus 4.8",
    "providerId": "anthropic",
    "family": "anthropic",
    "description": "Claude Opus 4.8 is Anthropic's most capable generally available model in the Opus family. It supports text, image, and file inputs with text output, with reasoning support and a 1M-token...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 5,
        "outputPricePer1M": 25,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-anthropic-claude-opus-4.8:batch",
    "name": "[OR] Anthropic: Claude Opus 4.8 (batch)",
    "providerId": "anthropic",
    "family": "anthropic",
    "description": "Claude Opus 4.8 is Anthropic's most capable generally available model in the Opus family. It supports text, image, and file inputs with text output, with reasoning support and a 1M-token...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2.5,
        "outputPricePer1M": 12.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3.7-max",
    "name": "[OR] Qwen: Qwen3.7 Max",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3.7-Max is the flagship model in Alibaba's Qwen3.7 series. It supports text input and output and is designed for agent-centric workloads, with particular strengths in coding, office and productivity tasks,...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 131072,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.475,
        "outputPricePer1M": 4.425,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-x-ai-grok-build-0.1",
    "name": "[OR] SpaceXAI: Grok Build 0.1",
    "providerId": "x-ai",
    "family": "x-ai",
    "description": "Grok Build 0.1 is SpaceXAI’s fast coding model trained specifically for agentic software engineering workflows. It supports text and image inputs with text output, and is optimized for interactive coding...",
    "status": "active",
    "contextWindow": 256000,
    "maxOutputTokens": 230400,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1,
        "outputPricePer1M": 2,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemini-3.5-flash",
    "name": "[OR] Google: Gemini 3.5 Flash",
    "providerId": "google",
    "family": "google",
    "description": "Gemini 3.5 Flash is Google's high-efficiency multimodal model, bringing near-Pro level coding and reasoning at Flash-tier cost and speed. It is highly optimized for coding proficiency and parallel agentic execution...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text",
        "image",
        "video",
        "file",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.5,
        "outputPricePer1M": 9,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemini-3.5-flash:batch",
    "name": "[OR] Google: Gemini 3.5 Flash (batch)",
    "providerId": "google",
    "family": "google",
    "description": "Gemini 3.5 Flash is Google's high-efficiency multimodal model, bringing near-Pro level coding and reasoning at Flash-tier cost and speed. It is highly optimized for coding proficiency and parallel agentic execution...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text",
        "image",
        "video",
        "file",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.75,
        "outputPricePer1M": 4.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-perceptron-perceptron-mk1",
    "name": "[OR] Perceptron: Perceptron Mk1",
    "providerId": "perceptron",
    "family": "perceptron",
    "description": "Perceptron Mk1 (Mark One) is Perceptron's highest-quality vision-language model for video and embodied reasoning.** It accepts image and video inputs paired with natural language queries, and produces detailed visual understanding...",
    "status": "active",
    "contextWindow": 32768,
    "maxOutputTokens": 8192,
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.15,
        "outputPricePer1M": 1.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemini-3.1-flash-lite",
    "name": "[OR] Google: Gemini 3.1 Flash Lite",
    "providerId": "google",
    "family": "google",
    "description": "Gemini 3.1 Flash Lite is Google’s GA high-efficiency multimodal model optimized for low-latency, high-volume workloads. It supports text, image, video, audio, and PDF inputs, and is designed for lightweight agentic...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text",
        "image",
        "video",
        "file",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.25,
        "outputPricePer1M": 1.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemini-3.1-flash-lite:batch",
    "name": "[OR] Google: Gemini 3.1 Flash Lite (batch)",
    "providerId": "google",
    "family": "google",
    "description": "Gemini 3.1 Flash Lite is Google’s GA high-efficiency multimodal model optimized for low-latency, high-volume workloads. It supports text, image, video, audio, and PDF inputs, and is designed for lightweight agentic...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text",
        "image",
        "video",
        "file",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.125,
        "outputPricePer1M": 0.75,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-chat-latest",
    "name": "[OR] OpenAI: GPT Chat Latest",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT Chat Latest points to OpenAI's stable API alias `chat-latest` that always resolves to the latest Instant chat model used in ChatGPT. As OpenAI rolls out new Instant model updates...",
    "status": "active",
    "contextWindow": 400000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 5,
        "outputPricePer1M": 30,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-x-ai-grok-4.3",
    "name": "[OR] SpaceXAI: Grok 4.3",
    "providerId": "x-ai",
    "family": "x-ai",
    "description": "Grok 4.3 is a reasoning model from SpaceXAI. It accepts text and image inputs with text output, and is suited for agentic workflows, instruction-following tasks, and applications requiring high factual...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 900000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.25,
        "outputPricePer1M": 2.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-x-ai-grok-4.3:batch",
    "name": "[OR] SpaceXAI: Grok 4.3 (batch)",
    "providerId": "x-ai",
    "family": "x-ai",
    "description": "Grok 4.3 is a reasoning model from SpaceXAI. It accepts text and image inputs with text output, and is suited for agentic workflows, instruction-following tasks, and applications requiring high factual...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 900000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1,
        "outputPricePer1M": 2,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-mistralai-mistral-medium-3-5",
    "name": "[OR] Mistral: Mistral Medium 3.5",
    "providerId": "mistralai",
    "family": "mistralai",
    "description": "Mistral Medium 3.5 is a dense 128B instruction-following model from Mistral AI. It supports text and image inputs with text output, and is designed for agentic workflows, coding, and complex...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 209715,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.5,
        "outputPricePer1M": 7.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-mistralai-mistral-medium-3-5:batch",
    "name": "[OR] Mistral: Mistral Medium 3.5 (batch)",
    "providerId": "mistralai",
    "family": "mistralai",
    "description": "Mistral Medium 3.5 is a dense 128B instruction-following model from Mistral AI. It supports text and image inputs with text output, and is designed for agentic workflows, coding, and complex...",
    "status": "active",
    "contextWindow": 32768,
    "maxOutputTokens": 26214,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.75,
        "outputPricePer1M": 3.75,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-nvidia-nemotron-3-nano-omni-30b-a3b-reasoning:free",
    "name": "[OR] NVIDIA: Nemotron 3 Nano Omni (free)",
    "providerId": "nvidia",
    "family": "nvidia",
    "description": "NVIDIA Nemotron™ 3 Nano Omni is a 30B-A3B open multimodal model designed to function as a perception and context sub-agent in enterprise agent systems. It accepts text, image, video, and...",
    "status": "active",
    "contextWindow": 256000,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text",
        "audio",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0,
        "outputPricePer1M": 0,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-~anthropic-claude-haiku-latest",
    "name": "[OR] Anthropic Claude Haiku Latest",
    "providerId": "~anthropic",
    "family": "~anthropic",
    "description": "This model always redirects to the latest model in the Anthropic Claude Haiku family.",
    "status": "active",
    "contextWindow": 200000,
    "maxOutputTokens": 64000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1,
        "outputPricePer1M": 5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-~openai-gpt-mini-latest",
    "name": "[OR] OpenAI GPT Mini Latest",
    "providerId": "~openai",
    "family": "~openai",
    "description": "This model always redirects to the latest model in the OpenAI GPT Mini family.",
    "status": "active",
    "contextWindow": 400000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "file",
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.75,
        "outputPricePer1M": 4.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-~google-gemini-pro-latest",
    "name": "[OR] Google Gemini Pro Latest",
    "providerId": "~google",
    "family": "~google",
    "description": "This model always redirects to the latest model in the Google Gemini Pro family.",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "audio",
        "file",
        "image",
        "text",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2,
        "outputPricePer1M": 12,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-~moonshotai-kimi-latest",
    "name": "[OR] MoonshotAI Kimi Latest",
    "providerId": "~moonshotai",
    "family": "~moonshotai",
    "description": "This model always redirects to the latest model in the MoonshotAI Kimi family.",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 943718,
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2.5500000000000003,
        "outputPricePer1M": 12.75,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-~google-gemini-flash-latest",
    "name": "[OR] Google Gemini Flash Latest",
    "providerId": "~google",
    "family": "~google",
    "description": "This model always redirects to the latest model in the Google Gemini Flash family.",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text",
        "image",
        "video",
        "file",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.75,
        "outputPricePer1M": 3.75,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-~anthropic-claude-sonnet-latest",
    "name": "[OR] Anthropic Claude Sonnet Latest",
    "providerId": "~anthropic",
    "family": "~anthropic",
    "description": "This model always redirects to the latest model in the Anthropic Claude Sonnet family.",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2,
        "outputPricePer1M": 10,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-~openai-gpt-latest",
    "name": "[OR] OpenAI GPT Latest",
    "providerId": "~openai",
    "family": "~openai",
    "description": "This model always redirects to the latest model in the OpenAI GPT family.",
    "status": "active",
    "contextWindow": 1050000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "file",
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2,
        "outputPricePer1M": 10,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3.5-plus-20260420",
    "name": "[OR] Qwen: Qwen3.5 Plus 2026-04-20",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3.5 Plus (April 2026) is a large-scale multimodal language model from Alibaba. It accepts text, image, and video input and produces text output, with a 1M token context window. This...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.3,
        "outputPricePer1M": 1.7999999999999998,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3.6-flash",
    "name": "[OR] Qwen: Qwen3.6 Flash",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3.6 Flash is a fast, efficient language model from Alibaba's Qwen 3.6 series. It supports text, image, and video input with a 1M token context window. Tiered pricing kicks in...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.1875,
        "outputPricePer1M": 1.125,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3.6-35b-a3b",
    "name": "[OR] Qwen: Qwen3.6 35B A3B",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3.6-35B-A3B is an open-weight multimodal model from Alibaba Cloud with 35 billion total parameters and 3 billion active parameters per token. It uses a hybrid sparse mixture-of-experts architecture combining Gated...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 235929,
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.09999999999999999,
        "outputPricePer1M": 0.8999999999999999,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3.6-max-preview",
    "name": "[OR] Qwen: Qwen3.6 Max Preview",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3.6-Max-Preview is a proprietary frontier model from Alibaba Cloud built on a sparse mixture-of-experts architecture with approximately 1 trillion total parameters. It is optimized for agentic coding, tool use, and...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.0270000000000001,
        "outputPricePer1M": 6.162,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3.6-27b",
    "name": "[OR] Qwen: Qwen3.6 27B",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3.6 27B is a dense 27-billion-parameter language model from the Qwen Team at Alibaba, released in April 2026. It features hybrid multimodal capabilities — accepting text, image, and video inputs...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.3,
        "outputPricePer1M": 2,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.5-pro",
    "name": "[OR] OpenAI: GPT-5.5 Pro",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.5 Pro is OpenAI’s high-capability model optimized for deep reasoning and accuracy on complex, high-stakes workloads. It features a 1M+ token context window (922K input, 128K output) with support for...",
    "status": "active",
    "contextWindow": 1050000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "file",
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 30,
        "outputPricePer1M": 180,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.5-pro:batch",
    "name": "[OR] OpenAI: GPT-5.5 Pro (batch)",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.5 Pro is OpenAI’s high-capability model optimized for deep reasoning and accuracy on complex, high-stakes workloads. It features a 1M+ token context window (922K input, 128K output) with support for...",
    "status": "active",
    "contextWindow": 1050000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "file",
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 15,
        "outputPricePer1M": 90,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.5",
    "name": "[OR] OpenAI: GPT-5.5",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.5 is OpenAI’s frontier model designed for complex professional workloads, building on GPT-5.4 with stronger reasoning, higher reliability, and improved token efficiency on hard tasks. It features a 1M+ token...",
    "status": "active",
    "contextWindow": 1050000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "file",
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 5,
        "outputPricePer1M": 30,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.5:batch",
    "name": "[OR] OpenAI: GPT-5.5 (batch)",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.5 is OpenAI’s frontier model designed for complex professional workloads, building on GPT-5.4 with stronger reasoning, higher reliability, and improved token efficiency on hard tasks. It features a 1M+ token...",
    "status": "active",
    "contextWindow": 1050000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "file",
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2.5,
        "outputPricePer1M": 15,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-deepseek-deepseek-v4-pro",
    "name": "[OR] DeepSeek: DeepSeek V4 Pro 0423",
    "providerId": "deepseek",
    "family": "deepseek",
    "description": "DeepSeek V4 Pro is a large-scale Mixture-of-Experts model from DeepSeek with 1.6T total parameters and 49B activated parameters, supporting a 1M-token context window. It is designed for advanced reasoning, coding,...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 384000,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.90045,
        "outputPricePer1M": 1.8009,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-deepseek-deepseek-v4-flash",
    "name": "[OR] DeepSeek: DeepSeek V4 Flash 0423",
    "providerId": "deepseek",
    "family": "deepseek",
    "description": "DeepSeek V4 Flash is an efficiency-optimized Mixture-of-Experts model from DeepSeek with 284B total parameters and 13B activated parameters, supporting a 1M-token context window. It is designed for fast inference and...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 384000,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.08553999999999999,
        "outputPricePer1M": 0.17107999999999998,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-tencent-hy3-preview",
    "name": "[OR] Tencent: Hy3 preview",
    "providerId": "tencent",
    "family": "tencent",
    "description": "Hy3 preview is a high-efficiency Mixture-of-Experts model from Tencent designed for agentic workflows and production use. It supports configurable reasoning levels across disabled, low, and high modes, allowing it to...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 235929,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.18,
        "outputPricePer1M": 0.6,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-xiaomi-mimo-v2.5-pro",
    "name": "[OR] Xiaomi: MiMo-V2.5-Pro",
    "providerId": "xiaomi",
    "family": "xiaomi",
    "description": "MiMo-V2.5-Pro is Xiaomi’s flagship model, delivering strong performance in general agentic capabilities, complex software engineering, and long-horizon tasks, with top rankings on benchmarks such as ClawEval, GDPVal, and SWE-bench Pro....",
    "status": "active",
    "contextWindow": 1050000,
    "maxOutputTokens": 131072,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.435,
        "outputPricePer1M": 0.87,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-xiaomi-mimo-v2.5",
    "name": "[OR] Xiaomi: MiMo-V2.5",
    "providerId": "xiaomi",
    "family": "xiaomi",
    "description": "MiMo-V2.5 is a native omnimodal model by Xiaomi. It delivers Pro-level agentic performance at roughly half the inference cost, while surpassing MiMo-V2-Omni in multimodal perception across image and video understanding...",
    "status": "active",
    "contextWindow": 1050000,
    "maxOutputTokens": 131072,
    "modalities": {
      "input": [
        "text",
        "audio",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.14,
        "outputPricePer1M": 0.28,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.4-image-2",
    "name": "[OR] OpenAI: GPT-5.4 Image 2",
    "providerId": "openai",
    "family": "openai",
    "description": "[GPT-5.4](https://openrouter.ai/openai/gpt-5.4) Image 2 combines OpenAI's GPT-5.4 model with state-of-the-art image generation capabilities from GPT Image 2. It enables rich multimodal workflows, allowing users to seamlessly move between reasoning, coding, and...",
    "status": "active",
    "contextWindow": 272000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "image",
        "text",
        "file"
      ],
      "output": [
        "image",
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 8,
        "outputPricePer1M": 15,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-~anthropic-claude-opus-latest",
    "name": "[OR] Anthropic: Claude Opus Latest",
    "providerId": "~anthropic",
    "family": "~anthropic",
    "description": "This model always redirects to the latest model in the Claude Opus family.",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 5,
        "outputPricePer1M": 25,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openrouter-pareto-code",
    "name": "[OR] Pareto Code Router",
    "providerId": "openrouter",
    "family": "openrouter",
    "description": "The Pareto Router maintains a tiered shortlist of strong coding models, ranked by [Artificial Analysis](https://artificialanalysis.ai/) coding percentiles. Set min_coding_score between 0 and 1 on the [pareto-router plugin](https://openrouter.ai/docs/guides/routing/routers/pareto-router#the-min_coding_score-parameter) to control how...",
    "status": "active",
    "contextWindow": 2000000,
    "maxOutputTokens": 0,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": -1000000,
        "outputPricePer1M": -1000000,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-moonshotai-kimi-k2.6",
    "name": "[OR] MoonshotAI: Kimi K2.6",
    "providerId": "moonshotai",
    "family": "moonshotai",
    "description": "Kimi K2.6 is Moonshot AI's next-generation multimodal model, designed for long-horizon coding, coding-driven UI/UX generation, and multi-agent orchestration. It handles complex end-to-end coding tasks across Python, Rust, and Go, and...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 235929,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.95,
        "outputPricePer1M": 4,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-anthropic-claude-opus-4.7",
    "name": "[OR] Anthropic: Claude Opus 4.7",
    "providerId": "anthropic",
    "family": "anthropic",
    "description": "Opus 4.7 is the next generation of Anthropic's Opus family, built for long-running, asynchronous agents. Building on the coding and agentic strengths of Opus 4.6, it delivers stronger performance on...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 5,
        "outputPricePer1M": 25,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-anthropic-claude-opus-4.7:batch",
    "name": "[OR] Anthropic: Claude Opus 4.7 (batch)",
    "providerId": "anthropic",
    "family": "anthropic",
    "description": "Opus 4.7 is the next generation of Anthropic's Opus family, built for long-running, asynchronous agents. Building on the coding and agentic strengths of Opus 4.6, it delivers stronger performance on...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2.5,
        "outputPricePer1M": 12.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-z-ai-glm-5.1",
    "name": "[OR] Z.ai: GLM 5.1",
    "providerId": "z-ai",
    "family": "z-ai",
    "description": "GLM-5.1 delivers a major leap in coding capability, with particularly significant gains in handling long-horizon tasks. Unlike previous models built around minute-level interactions, GLM-5.1 can work independently and continuously on...",
    "status": "active",
    "contextWindow": 204800,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.966,
        "outputPricePer1M": 3.036,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemma-4-26b-a4b-it",
    "name": "[OR] Google: Gemma 4 26B A4B ",
    "providerId": "google",
    "family": "google",
    "description": "Gemma 4 26B A4B IT is an instruction-tuned Mixture-of-Experts (MoE) model from Google DeepMind. Despite 25.2B total parameters, only 3.8B activate per token during inference — delivering near-31B quality at...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "image",
        "text",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.07,
        "outputPricePer1M": 0.33999999999999997,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemma-4-26b-a4b-it:free",
    "name": "[OR] Google: Gemma 4 26B A4B  (free)",
    "providerId": "google",
    "family": "google",
    "description": "Gemma 4 26B A4B IT is an instruction-tuned Mixture-of-Experts (MoE) model from Google DeepMind. Despite 25.2B total parameters, only 3.8B activate per token during inference — delivering near-31B quality at...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "image",
        "text",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0,
        "outputPricePer1M": 0,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemma-4-31b-it",
    "name": "[OR] Google: Gemma 4 31B",
    "providerId": "google",
    "family": "google",
    "description": "Gemma 4 31B Instruct is Google DeepMind's 30.7B dense multimodal model supporting text and image input with text output. Features a 256K token context window, configurable thinking/reasoning mode, native function...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "image",
        "text",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.09,
        "outputPricePer1M": 0.33999999999999997,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemma-4-31b-it:batch",
    "name": "[OR] Google: Gemma 4 31B (batch)",
    "providerId": "google",
    "family": "google",
    "description": "Gemma 4 31B Instruct is Google DeepMind's 30.7B dense multimodal model supporting text and image input with text output. Features a 256K token context window, configurable thinking/reasoning mode, native function...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 235929,
    "modalities": {
      "input": [
        "image",
        "text",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.39,
        "outputPricePer1M": 0.9700000000000001,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemma-4-31b-it:free",
    "name": "[OR] Google: Gemma 4 31B (free)",
    "providerId": "google",
    "family": "google",
    "description": "Gemma 4 31B Instruct is Google DeepMind's 30.7B dense multimodal model supporting text and image input with text output. Features a 256K token context window, configurable thinking/reasoning mode, native function...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "image",
        "text",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0,
        "outputPricePer1M": 0,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3.6-plus",
    "name": "[OR] Qwen: Qwen3.6 Plus",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen 3.6 Plus builds on a hybrid architecture that combines efficient linear attention with sparse mixture-of-experts routing, enabling strong scalability and high-performance inference. Compared to the 3.5 series, it delivers...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.325,
        "outputPricePer1M": 1.95,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-z-ai-glm-5v-turbo",
    "name": "[OR] Z.ai: GLM 5V Turbo",
    "providerId": "z-ai",
    "family": "z-ai",
    "description": "GLM-5V-Turbo is Z.ai’s first native multimodal agent foundation model, built for vision-based coding and agent-driven tasks. It natively handles image, video, and text inputs, excels at long-horizon planning, complex coding,...",
    "status": "active",
    "contextWindow": 202752,
    "maxOutputTokens": 131072,
    "modalities": {
      "input": [
        "image",
        "text",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.2,
        "outputPricePer1M": 4,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-arcee-ai-trinity-large-thinking",
    "name": "[OR] Arcee AI: Trinity Large Thinking",
    "providerId": "arcee-ai",
    "family": "arcee-ai",
    "description": "Trinity Large Thinking is a powerful open source reasoning model from the team at Arcee AI. It shows strong performance in PinchBench, agentic workloads, and reasoning tasks. Launch video: https://youtu.be/Gc82AXLa0Rg?si=4RLn6WBz33qT--B7...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 80000,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.25,
        "outputPricePer1M": 0.7999999999999999,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-x-ai-grok-4.20-multi-agent",
    "name": "[OR] SpaceXAI: Grok 4.20 Multi-Agent",
    "providerId": "x-ai",
    "family": "x-ai",
    "description": "Grok 4.20 Multi-Agent is a variant of SpaceXAI’s Grok 4.20 designed for collaborative, agent-based workflows. Multiple agents operate in parallel to conduct deep research, coordinate tool use, and synthesize information...",
    "status": "active",
    "contextWindow": 2000000,
    "maxOutputTokens": 1800000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.25,
        "outputPricePer1M": 2.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-x-ai-grok-4.20",
    "name": "[OR] SpaceXAI: Grok 4.20",
    "providerId": "x-ai",
    "family": "x-ai",
    "description": "Grok 4.20 is a reasoning model from SpaceXAI with industry-leading speed and agentic tool calling capabilities. It combines the lowest hallucination rate on the market with strict prompt adherance, delivering...",
    "status": "active",
    "contextWindow": 2000000,
    "maxOutputTokens": 1800000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.25,
        "outputPricePer1M": 2.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-lyria-3-pro-preview",
    "name": "[OR] Google: Lyria 3 Pro Preview",
    "providerId": "google",
    "family": "google",
    "description": "Full-length songs are priced at $0.08 per song. Lyria 3 is Google's family of music generation models, available through the Gemini API. With Lyria 3, you can generate high-quality, 48kHz...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text",
        "audio"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0,
        "outputPricePer1M": 0,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-lyria-3-clip-preview",
    "name": "[OR] Google: Lyria 3 Clip Preview",
    "providerId": "google",
    "family": "google",
    "description": "30 second duration clips are priced at $0.04 per clip. Lyria 3 is Google's family of music generation models, available through the Gemini API. With Lyria 3, you can generate...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text",
        "audio"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0,
        "outputPricePer1M": 0,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-kwaipilot-kat-coder-pro-v2",
    "name": "[OR] Kwaipilot: KAT-Coder-Pro V2",
    "providerId": "kwaipilot",
    "family": "kwaipilot",
    "description": "KAT-Coder-Pro V2 is the latest high-performance model in KwaiKAT’s KAT-Coder series, designed for complex enterprise-grade software engineering and SaaS integration. It builds on the agentic coding strengths of earlier versions,...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 144000,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.3,
        "outputPricePer1M": 1.2,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-rekaai-reka-edge",
    "name": "[OR] Reka Edge",
    "providerId": "rekaai",
    "family": "rekaai",
    "description": "Reka Edge is an extremely efficient 7B multimodal vision-language model that accepts image/video+text inputs and generates text outputs. This model is optimized specifically to deliver industry-leading performance in image understanding,...",
    "status": "active",
    "contextWindow": 16384,
    "maxOutputTokens": 14745,
    "modalities": {
      "input": [
        "image",
        "text",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.09999999999999999,
        "outputPricePer1M": 0.09999999999999999,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-minimax-minimax-m2.7",
    "name": "[OR] MiniMax: MiniMax M2.7",
    "providerId": "minimax",
    "family": "minimax",
    "description": "MiniMax-M2.7 is a next-generation large language model designed for autonomous, real-world productivity and continuous improvement. Built to actively participate in its own evolution, M2.7 integrates advanced agentic capabilities through multi-agent...",
    "status": "active",
    "contextWindow": 204800,
    "maxOutputTokens": 131072,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.3,
        "outputPricePer1M": 1.2,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-minimax-minimax-m2.7:free",
    "name": "[OR] MiniMax: MiniMax M2.7 (free)",
    "providerId": "minimax",
    "family": "minimax",
    "description": "MiniMax-M2.7 is a next-generation large language model designed for autonomous, real-world productivity and continuous improvement. Built to actively participate in its own evolution, M2.7 integrates advanced agentic capabilities through multi-agent...",
    "status": "active",
    "contextWindow": 196608,
    "maxOutputTokens": 176947,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0,
        "outputPricePer1M": 0,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.4-nano",
    "name": "[OR] OpenAI: GPT-5.4 Nano",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.4 nano is the most lightweight and cost-efficient variant of the GPT-5.4 family, optimized for speed-critical and high-volume tasks. It supports text and image inputs and is designed for low-latency...",
    "status": "active",
    "contextWindow": 400000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "file",
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.19999999999999998,
        "outputPricePer1M": 1.25,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.4-nano:batch",
    "name": "[OR] OpenAI: GPT-5.4 Nano (batch)",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.4 nano is the most lightweight and cost-efficient variant of the GPT-5.4 family, optimized for speed-critical and high-volume tasks. It supports text and image inputs and is designed for low-latency...",
    "status": "active",
    "contextWindow": 400000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "file",
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.09999999999999999,
        "outputPricePer1M": 0.625,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.4-mini",
    "name": "[OR] OpenAI: GPT-5.4 Mini",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.4 mini brings the core capabilities of GPT-5.4 to a faster, more efficient model optimized for high-throughput workloads. It supports text and image inputs with strong performance across reasoning, coding,...",
    "status": "active",
    "contextWindow": 400000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "file",
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.75,
        "outputPricePer1M": 4.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.4-mini:batch",
    "name": "[OR] OpenAI: GPT-5.4 Mini (batch)",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.4 mini brings the core capabilities of GPT-5.4 to a faster, more efficient model optimized for high-throughput workloads. It supports text and image inputs with strong performance across reasoning, coding,...",
    "status": "active",
    "contextWindow": 400000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "file",
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.375,
        "outputPricePer1M": 2.25,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-mistralai-mistral-small-2603",
    "name": "[OR] Mistral: Mistral Small 4",
    "providerId": "mistralai",
    "family": "mistralai",
    "description": "Mistral Small 4 is the next major release in the Mistral Small family, unifying the capabilities of several flagship Mistral models into a single system. It combines strong reasoning from...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 209715,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.15,
        "outputPricePer1M": 0.6,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-z-ai-glm-5-turbo",
    "name": "[OR] Z.ai: GLM 5 Turbo",
    "providerId": "z-ai",
    "family": "z-ai",
    "description": "GLM-5 Turbo is a new model from Z.ai designed for fast inference and strong performance in agent-driven environments such as OpenClaw scenarios. It is deeply optimized for real-world agent workflows...",
    "status": "active",
    "contextWindow": 202752,
    "maxOutputTokens": 131072,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.2,
        "outputPricePer1M": 4,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-nvidia-nemotron-3-super-120b-a12b",
    "name": "[OR] NVIDIA: Nemotron 3 Super",
    "providerId": "nvidia",
    "family": "nvidia",
    "description": "NVIDIA Nemotron 3 Super is a 120B-parameter open hybrid MoE model, activating just 12B parameters for maximum compute efficiency and accuracy in complex multi-agent applications. Built on a hybrid Mamba-Transformer...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.08499999999999999,
        "outputPricePer1M": 0.39999999999999997,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-nvidia-nemotron-3-super-120b-a12b:free",
    "name": "[OR] NVIDIA: Nemotron 3 Super (free)",
    "providerId": "nvidia",
    "family": "nvidia",
    "description": "NVIDIA Nemotron 3 Super is a 120B-parameter open hybrid MoE model, activating just 12B parameters for maximum compute efficiency and accuracy in complex multi-agent applications. Built on a hybrid Mamba-Transformer...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 235929,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0,
        "outputPricePer1M": 0,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-bytedance-seed-seed-2.0-lite",
    "name": "[OR] ByteDance Seed: Seed-2.0-Lite",
    "providerId": "bytedance-seed",
    "family": "bytedance-seed",
    "description": "Seed-2.0-Lite is a versatile, cost‑efficient enterprise workhorse that delivers strong multimodal and agent capabilities while offering noticeably lower latency, making it a practical default choice for most production workloads across...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 131072,
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.25,
        "outputPricePer1M": 2,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3.5-9b",
    "name": "[OR] Qwen: Qwen3.5-9B",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3.5-9B is a multimodal foundation model from the Qwen3.5 family, designed to deliver strong reasoning, coding, and visual understanding in an efficient 9B-parameter architecture. It uses a unified vision-language design...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 235929,
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.09999999999999999,
        "outputPricePer1M": 0.15,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3.5-9b:batch",
    "name": "[OR] Qwen: Qwen3.5-9B (batch)",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3.5-9B is a multimodal foundation model from the Qwen3.5 family, designed to deliver strong reasoning, coding, and visual understanding in an efficient 9B-parameter architecture. It uses a unified vision-language design...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 235929,
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.16999999999999998,
        "outputPricePer1M": 0.25,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.4-pro",
    "name": "[OR] OpenAI: GPT-5.4 Pro",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.4 Pro is OpenAI's most advanced model, building on GPT-5.4's unified architecture with enhanced reasoning capabilities for complex, high-stakes tasks. It features a 1M+ token context window (922K input, 128K...",
    "status": "active",
    "contextWindow": 1050000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 30,
        "outputPricePer1M": 180,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.4-pro:batch",
    "name": "[OR] OpenAI: GPT-5.4 Pro (batch)",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.4 Pro is OpenAI's most advanced model, building on GPT-5.4's unified architecture with enhanced reasoning capabilities for complex, high-stakes tasks. It features a 1M+ token context window (922K input, 128K...",
    "status": "active",
    "contextWindow": 1050000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 15,
        "outputPricePer1M": 90,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.4",
    "name": "[OR] OpenAI: GPT-5.4",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.4 is OpenAI’s latest frontier model, unifying the Codex and GPT lines into a single system. It features a 1M+ token context window (922K input, 128K output) with support for...",
    "status": "active",
    "contextWindow": 1050000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2.5,
        "outputPricePer1M": 15,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.4:batch",
    "name": "[OR] OpenAI: GPT-5.4 (batch)",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.4 is OpenAI’s latest frontier model, unifying the Codex and GPT lines into a single system. It features a 1M+ token context window (922K input, 128K output) with support for...",
    "status": "active",
    "contextWindow": 1050000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.25,
        "outputPricePer1M": 7.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-inception-mercury-2",
    "name": "[OR] Inception: Mercury 2",
    "providerId": "inception",
    "family": "inception",
    "description": "Mercury 2 is an extremely fast reasoning LLM, and the first reasoning diffusion LLM (dLLM). Instead of generating tokens sequentially, Mercury 2 produces and refines multiple tokens in parallel, achieving...",
    "status": "active",
    "contextWindow": 128000,
    "maxOutputTokens": 50000,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.25,
        "outputPricePer1M": 0.75,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemini-3.1-flash-lite-preview",
    "name": "[OR] Google: Gemini 3.1 Flash Lite Preview",
    "providerId": "google",
    "family": "google",
    "description": "Gemini 3.1 Flash Lite Preview is Google's high-efficiency model optimized for high-volume use cases. It outperforms Gemini 2.5 Flash Lite on overall quality and approaches Gemini 2.5 Flash performance across...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text",
        "image",
        "video",
        "file",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.25,
        "outputPricePer1M": 1.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-bytedance-seed-seed-2.0-mini",
    "name": "[OR] ByteDance Seed: Seed-2.0-Mini",
    "providerId": "bytedance-seed",
    "family": "bytedance-seed",
    "description": "Seed-2.0-mini targets latency-sensitive, high-concurrency, and cost-sensitive scenarios, emphasizing fast response and flexible inference deployment. It delivers performance comparable to ByteDance-Seed-1.6, supports 256k context, four reasoning effort modes (minimal/low/medium/high), multimodal understanding,...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 131072,
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.09999999999999999,
        "outputPricePer1M": 0.39999999999999997,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemini-3.1-flash-image-preview",
    "name": "[OR] Google: Nano Banana 2 (Gemini 3.1 Flash Image Preview)",
    "providerId": "google",
    "family": "google",
    "description": "Gemini 3.1 Flash Image Preview, a.k.a. \"Nano Banana 2,\" is Google’s latest state of the art image generation and editing model, delivering Pro-level visual quality at Flash speed. It combines...",
    "status": "active",
    "contextWindow": 65536,
    "maxOutputTokens": 58982,
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "image",
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.5,
        "outputPricePer1M": 3,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3.5-35b-a3b",
    "name": "[OR] Qwen: Qwen3.5-35B-A3B",
    "providerId": "qwen",
    "family": "qwen",
    "description": "The Qwen3.5 Series 35B-A3B is a native vision-language model designed with a hybrid architecture that integrates linear attention mechanisms and a sparse mixture-of-experts model, achieving higher inference efficiency. Its overall...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.08,
        "outputPricePer1M": 0.75,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3.5-27b",
    "name": "[OR] Qwen: Qwen3.5-27B",
    "providerId": "qwen",
    "family": "qwen",
    "description": "The Qwen3.5 27B native vision-language Dense model incorporates a linear attention mechanism, delivering fast response times while balancing inference speed and performance. Its overall capabilities are comparable to those of...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.195,
        "outputPricePer1M": 1.56,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3.5-122b-a10b",
    "name": "[OR] Qwen: Qwen3.5-122B-A10B",
    "providerId": "qwen",
    "family": "qwen",
    "description": "The Qwen3.5 122B-A10B native vision-language model is built on a hybrid architecture that integrates a linear attention mechanism with a sparse mixture-of-experts model, achieving higher inference efficiency. In terms of...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 81920,
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.29,
        "outputPricePer1M": 2.4,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3.5-flash-02-23",
    "name": "[OR] Qwen: Qwen3.5-Flash",
    "providerId": "qwen",
    "family": "qwen",
    "description": "The Qwen3.5 native vision-language Flash models are built on a hybrid architecture that integrates a linear attention mechanism with a sparse mixture-of-experts model, achieving higher inference efficiency. Compared to the...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.065,
        "outputPricePer1M": 0.26,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemini-3.1-pro-preview-customtools",
    "name": "[OR] Google: Gemini 3.1 Pro Preview Custom Tools",
    "providerId": "google",
    "family": "google",
    "description": "Gemini 3.1 Pro Preview Custom Tools is a variant of Gemini 3.1 Pro that improves tool selection behavior by preventing overuse of a general bash tool when more efficient third-party...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text",
        "audio",
        "image",
        "video",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2,
        "outputPricePer1M": 12,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.3-codex",
    "name": "[OR] OpenAI: GPT-5.3-Codex",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.3-Codex is OpenAI’s most advanced agentic coding model, combining the frontier software engineering performance of GPT-5.2-Codex with the broader reasoning and professional knowledge capabilities of GPT-5.2. It achieves state-of-the-art results...",
    "status": "active",
    "contextWindow": 400000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.75,
        "outputPricePer1M": 14,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-aion-labs-aion-2.0",
    "name": "[OR] AionLabs: Aion-2.0",
    "providerId": "aion-labs",
    "family": "aion-labs",
    "description": "Aion-2.0 is a variant of DeepSeek V3.2 optimized for immersive roleplaying and storytelling. It is particularly strong at introducing tension, crises, and conflict into stories, making narratives feel more engaging....",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.7999999999999999,
        "outputPricePer1M": 1.5999999999999999,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemini-3.1-pro-preview",
    "name": "[OR] Google: Gemini 3.1 Pro Preview",
    "providerId": "google",
    "family": "google",
    "description": "Gemini 3.1 Pro Preview is Google’s frontier reasoning model, delivering enhanced software engineering performance, improved agentic reliability, and more efficient token usage across complex workflows. Building on the multimodal foundation...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "audio",
        "file",
        "image",
        "text",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2,
        "outputPricePer1M": 12,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemini-3.1-pro-preview:batch",
    "name": "[OR] Google: Gemini 3.1 Pro Preview (batch)",
    "providerId": "google",
    "family": "google",
    "description": "Gemini 3.1 Pro Preview is Google’s frontier reasoning model, delivering enhanced software engineering performance, improved agentic reliability, and more efficient token usage across complex workflows. Building on the multimodal foundation...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "audio",
        "file",
        "image",
        "text",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1,
        "outputPricePer1M": 6,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-anthropic-claude-sonnet-4.6",
    "name": "[OR] Anthropic: Claude Sonnet 4.6",
    "providerId": "anthropic",
    "family": "anthropic",
    "description": "Sonnet 4.6 is Anthropic's most capable Sonnet-class model yet, with frontier performance across coding, agents, and professional work. It excels at iterative development, complex codebase navigation, end-to-end project management with...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 3,
        "outputPricePer1M": 15,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-anthropic-claude-sonnet-4.6:batch",
    "name": "[OR] Anthropic: Claude Sonnet 4.6 (batch)",
    "providerId": "anthropic",
    "family": "anthropic",
    "description": "Sonnet 4.6 is Anthropic's most capable Sonnet-class model yet, with frontier performance across coding, agents, and professional work. It excels at iterative development, complex codebase navigation, end-to-end project management with...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.5,
        "outputPricePer1M": 7.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3.5-plus-02-15",
    "name": "[OR] Qwen: Qwen3.5 Plus 2026-02-15",
    "providerId": "qwen",
    "family": "qwen",
    "description": "The Qwen3.5 native vision-language series Plus models are built on a hybrid architecture that integrates linear attention mechanisms with sparse mixture-of-experts models, achieving higher inference efficiency. In a variety of...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.26,
        "outputPricePer1M": 1.56,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3.5-397b-a17b",
    "name": "[OR] Qwen: Qwen3.5 397B A17B",
    "providerId": "qwen",
    "family": "qwen",
    "description": "The Qwen3.5 series 397B-A17B native vision-language model is built on a hybrid architecture that integrates a linear attention mechanism with a sparse mixture-of-experts model, achieving higher inference efficiency. It delivers...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 235929,
    "modalities": {
      "input": [
        "text",
        "image",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.55,
        "outputPricePer1M": 3.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-minimax-minimax-m2.5",
    "name": "[OR] MiniMax: MiniMax M2.5",
    "providerId": "minimax",
    "family": "minimax",
    "description": "MiniMax-M2.5 is a SOTA large language model designed for real-world productivity. Trained in a diverse range of complex real-world digital working environments, M2.5 builds upon the coding expertise of M2.1...",
    "status": "active",
    "contextWindow": 204800,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.27,
        "outputPricePer1M": 1.08,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-z-ai-glm-5",
    "name": "[OR] Z.ai: GLM 5",
    "providerId": "z-ai",
    "family": "z-ai",
    "description": "GLM-5 is Z.ai’s flagship open-source foundation model engineered for complex systems design and long-horizon agent workflows. Built for expert developers, it delivers production-grade performance on large-scale programming tasks, rivaling leading...",
    "status": "active",
    "contextWindow": 204800,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.6,
        "outputPricePer1M": 1.92,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3-max-thinking",
    "name": "[OR] Qwen: Qwen3 Max Thinking",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3-Max-Thinking is the flagship reasoning model in the Qwen3 series, designed for high-stakes cognitive tasks that require deep, multi-step reasoning. By significantly scaling model capacity and reinforcement learning compute, it...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.78,
        "outputPricePer1M": 3.9,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-anthropic-claude-opus-4.6",
    "name": "[OR] Anthropic: Claude Opus 4.6",
    "providerId": "anthropic",
    "family": "anthropic",
    "description": "Opus 4.6 is Anthropic’s strongest model for coding and long-running professional tasks. It is built for agents that operate across entire workflows rather than single prompts, making it especially effective...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 5,
        "outputPricePer1M": 25,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-anthropic-claude-opus-4.6:batch",
    "name": "[OR] Anthropic: Claude Opus 4.6 (batch)",
    "providerId": "anthropic",
    "family": "anthropic",
    "description": "Opus 4.6 is Anthropic’s strongest model for coding and long-running professional tasks. It is built for agents that operate across entire workflows rather than single prompts, making it especially effective...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2.5,
        "outputPricePer1M": 12.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3-coder-next",
    "name": "[OR] Qwen: Qwen3 Coder Next",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3-Coder-Next is an open-weight causal language model optimized for coding agents and local development workflows. It uses a sparse MoE design with 80B total parameters and only 3B activated per...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 235929,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.12,
        "outputPricePer1M": 0.7999999999999999,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openrouter-free",
    "name": "[OR] Free Models Router",
    "providerId": "openrouter",
    "family": "openrouter",
    "description": "The simplest way to get free inference. openrouter/free is a router that selects free models at random from the models available on OpenRouter. The router smartly filters for models that...",
    "status": "active",
    "contextWindow": 200000,
    "maxOutputTokens": 0,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0,
        "outputPricePer1M": 0,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-stepfun-step-3.5-flash",
    "name": "[OR] StepFun: Step 3.5 Flash",
    "providerId": "stepfun",
    "family": "stepfun",
    "description": "Step 3.5 Flash is StepFun's most capable open-source foundation model. Built on a sparse Mixture of Experts (MoE) architecture, it selectively activates only 11B of its 196B parameters per token....",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.09999999999999999,
        "outputPricePer1M": 0.3,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-moonshotai-kimi-k2.5",
    "name": "[OR] MoonshotAI: Kimi K2.5",
    "providerId": "moonshotai",
    "family": "moonshotai",
    "description": "Kimi K2.5 is Moonshot AI's native multimodal model, delivering state-of-the-art visual coding capability and a self-directed agent swarm paradigm. Built on Kimi K2 with continued pretraining over approximately 15T mixed...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 235929,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.44999999999999996,
        "outputPricePer1M": 2.25,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-upstage-solar-pro-3",
    "name": "[OR] Upstage: Solar Pro 3",
    "providerId": "upstage",
    "family": "upstage",
    "description": "Solar Pro 3 is Upstage's powerful Mixture-of-Experts (MoE) language model. With 102B total parameters and 12B active parameters per forward pass, it delivers exceptional performance while maintaining computational efficiency. Optimized...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 117964,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.15,
        "outputPricePer1M": 0.6,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-minimax-minimax-m2-her",
    "name": "[OR] MiniMax: MiniMax M2-her",
    "providerId": "minimax",
    "family": "minimax",
    "description": "MiniMax M2-her is a dialogue-first large language model built for immersive roleplay, character-driven chat, and expressive multi-turn conversations. Designed to stay consistent in tone and personality, it supports rich message...",
    "status": "active",
    "contextWindow": 65536,
    "maxOutputTokens": 2048,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.3,
        "outputPricePer1M": 1.2,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-writer-palmyra-x5",
    "name": "[OR] Writer: Palmyra X5",
    "providerId": "writer",
    "family": "writer",
    "description": "Palmyra X5 is Writer's most advanced model, purpose-built for building and scaling AI agents across the enterprise. It delivers industry-leading speed and efficiency on context windows up to 1 million...",
    "status": "active",
    "contextWindow": 1040000,
    "maxOutputTokens": 8192,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.6,
        "outputPricePer1M": 6,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-audio",
    "name": "[OR] OpenAI: GPT Audio",
    "providerId": "openai",
    "family": "openai",
    "description": "The gpt-audio model is OpenAI's first generally available audio model. The new snapshot features an upgraded decoder for more natural sounding voices and maintains better voice consistency. Audio is priced...",
    "status": "active",
    "contextWindow": 128000,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "text",
        "audio"
      ],
      "output": [
        "text",
        "audio"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2.5,
        "outputPricePer1M": 10,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-audio-mini",
    "name": "[OR] OpenAI: GPT Audio Mini",
    "providerId": "openai",
    "family": "openai",
    "description": "A cost-efficient version of GPT Audio. The new snapshot features an upgraded decoder for more natural sounding voices and maintains better voice consistency. Input is priced at $0.60 per million...",
    "status": "active",
    "contextWindow": 128000,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "text",
        "audio"
      ],
      "output": [
        "text",
        "audio"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.6,
        "outputPricePer1M": 2.4,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-z-ai-glm-4.7-flash",
    "name": "[OR] Z.ai: GLM 4.7 Flash",
    "providerId": "z-ai",
    "family": "z-ai",
    "description": "As a 30B-class SOTA model, GLM-4.7-Flash offers a new option that balances performance and efficiency. It is further optimized for agentic coding use cases, strengthening coding capabilities, long-horizon task planning,...",
    "status": "active",
    "contextWindow": 202752,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.06,
        "outputPricePer1M": 0.39999999999999997,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.2-codex",
    "name": "[OR] OpenAI: GPT-5.2-Codex",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.2-Codex is an upgraded version of GPT-5.1-Codex optimized for software engineering and coding workflows. It is designed for both interactive development sessions and long, independent execution of complex engineering tasks....",
    "status": "active",
    "contextWindow": 400000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.75,
        "outputPricePer1M": 14,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-bytedance-seed-seed-1.6-flash",
    "name": "[OR] ByteDance Seed: Seed 1.6 Flash",
    "providerId": "bytedance-seed",
    "family": "bytedance-seed",
    "description": "Seed 1.6 Flash is an ultra-fast multimodal deep thinking model by ByteDance Seed, supporting both text and visual understanding. It features a 256k context window and can generate outputs of...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "image",
        "text",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.075,
        "outputPricePer1M": 0.3,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-bytedance-seed-seed-1.6",
    "name": "[OR] ByteDance Seed: Seed 1.6",
    "providerId": "bytedance-seed",
    "family": "bytedance-seed",
    "description": "Seed 1.6 is a general-purpose model released by the ByteDance Seed team. It incorporates multimodal capabilities and adaptive deep thinking with a 256K context window.",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "image",
        "text",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.25,
        "outputPricePer1M": 2,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-minimax-minimax-m2.1",
    "name": "[OR] MiniMax: MiniMax M2.1",
    "providerId": "minimax",
    "family": "minimax",
    "description": "MiniMax-M2.1 is a lightweight, state-of-the-art large language model optimized for coding, agentic workflows, and modern application development. With only 10 billion activated parameters, it delivers a major jump in real-world...",
    "status": "active",
    "contextWindow": 204800,
    "maxOutputTokens": 131072,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.3,
        "outputPricePer1M": 1.2,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-z-ai-glm-4.7",
    "name": "[OR] Z.ai: GLM 4.7",
    "providerId": "z-ai",
    "family": "z-ai",
    "description": "GLM-4.7 is Z.ai’s latest flagship model, featuring upgrades in two key areas: enhanced programming capabilities and more stable multi-step reasoning/execution. It demonstrates significant improvements in executing complex agent tasks while...",
    "status": "active",
    "contextWindow": 204800,
    "maxOutputTokens": 131072,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.39999999999999997,
        "outputPricePer1M": 1.75,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemini-3-flash-preview",
    "name": "[OR] Google: Gemini 3 Flash Preview",
    "providerId": "google",
    "family": "google",
    "description": "Gemini 3 Flash Preview is a high speed, high value thinking model designed for agentic workflows, multi turn chat, and coding assistance. It delivers near Pro level reasoning and tool...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text",
        "image",
        "file",
        "audio",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.5,
        "outputPricePer1M": 3,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemini-3-flash-preview:batch",
    "name": "[OR] Google: Gemini 3 Flash Preview (batch)",
    "providerId": "google",
    "family": "google",
    "description": "Gemini 3 Flash Preview is a high speed, high value thinking model designed for agentic workflows, multi turn chat, and coding assistance. It delivers near Pro level reasoning and tool...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text",
        "image",
        "file",
        "audio",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.25,
        "outputPricePer1M": 1.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-nvidia-nemotron-3-nano-30b-a3b",
    "name": "[OR] NVIDIA: Nemotron 3 Nano 30B A3B",
    "providerId": "nvidia",
    "family": "nvidia",
    "description": "NVIDIA Nemotron 3 Nano 30B A3B is a small language MoE model with highest compute efficiency and accuracy for developers to build specialized agentic AI systems. The model is fully...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 235929,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.049999999999999996,
        "outputPricePer1M": 0.19999999999999998,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.2-chat",
    "name": "[OR] OpenAI: GPT-5.2 Chat",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.2 Chat (AKA Instant) is the fast, lightweight member of the 5.2 family, optimized for low-latency chat while retaining strong general intelligence. It uses adaptive reasoning to selectively “think” on...",
    "status": "active",
    "contextWindow": 128000,
    "maxOutputTokens": 32000,
    "modalities": {
      "input": [
        "file",
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.75,
        "outputPricePer1M": 14,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.2-pro",
    "name": "[OR] OpenAI: GPT-5.2 Pro",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.2 Pro is OpenAI’s most advanced model, offering major improvements in agentic coding and long context performance over GPT-5 Pro. It is optimized for complex tasks that require step-by-step reasoning,...",
    "status": "active",
    "contextWindow": 400000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "image",
        "text",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 21,
        "outputPricePer1M": 168,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.2-pro:batch",
    "name": "[OR] OpenAI: GPT-5.2 Pro (batch)",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.2 Pro is OpenAI’s most advanced model, offering major improvements in agentic coding and long context performance over GPT-5 Pro. It is optimized for complex tasks that require step-by-step reasoning,...",
    "status": "active",
    "contextWindow": 400000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "image",
        "text",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 10.5,
        "outputPricePer1M": 84,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.2",
    "name": "[OR] OpenAI: GPT-5.2",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.2 is the latest frontier-grade model in the GPT-5 series, offering stronger agentic and long context perfomance compared to GPT-5.1. It uses adaptive reasoning to allocate computation dynamically, responding quickly...",
    "status": "active",
    "contextWindow": 400000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "file",
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.75,
        "outputPricePer1M": 14,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.2:batch",
    "name": "[OR] OpenAI: GPT-5.2 (batch)",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.2 is the latest frontier-grade model in the GPT-5 series, offering stronger agentic and long context perfomance compared to GPT-5.1. It uses adaptive reasoning to allocate computation dynamically, responding quickly...",
    "status": "active",
    "contextWindow": 400000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "file",
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.875,
        "outputPricePer1M": 7,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-mistralai-devstral-2512",
    "name": "[OR] Mistral: Devstral 2 2512",
    "providerId": "mistralai",
    "family": "mistralai",
    "description": "Devstral 2 is a state-of-the-art open-source model by Mistral AI specializing in agentic coding. It is a 123B-parameter dense transformer model supporting a 256K context window. Devstral 2 supports exploring...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 209715,
    "modalities": {
      "input": [
        "text",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.39999999999999997,
        "outputPricePer1M": 2,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-relace-relace-search",
    "name": "[OR] Relace: Relace Search",
    "providerId": "relace",
    "family": "relace",
    "description": "The relace-search model uses 4-12 `view_file` and `grep` tools in parallel to explore a codebase and return relevant files to the user request. In contrast to RAG, relace-search performs agentic...",
    "status": "active",
    "contextWindow": 256000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1,
        "outputPricePer1M": 3,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-z-ai-glm-4.6v",
    "name": "[OR] Z.ai: GLM 4.6V",
    "providerId": "z-ai",
    "family": "z-ai",
    "description": "GLM-4.6V is a large multimodal model designed for high-fidelity visual understanding and long-context reasoning across images, documents, and mixed media. It supports up to 128K tokens, processes complex page layouts...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "image",
        "text",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.3,
        "outputPricePer1M": 0.8999999999999999,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openrouter-bodybuilder",
    "name": "[OR] Body Builder (beta)",
    "providerId": "openrouter",
    "family": "openrouter",
    "description": "Transform your natural language requests into structured OpenRouter API request objects. Describe what you want to accomplish with AI models, and Body Builder will construct the appropriate API calls. Example:...",
    "status": "active",
    "contextWindow": 128000,
    "maxOutputTokens": 0,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": -1000000,
        "outputPricePer1M": -1000000,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.1-codex-max",
    "name": "[OR] OpenAI: GPT-5.1-Codex-Max",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.1-Codex-Max is OpenAI’s latest agentic coding model, designed for long-running, high-context software development tasks. It is based on an updated version of the 5.1 reasoning stack and trained on agentic...",
    "status": "active",
    "contextWindow": 400000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.25,
        "outputPricePer1M": 10,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-amazon-nova-2-lite-v1",
    "name": "[OR] Amazon: Nova 2 Lite",
    "providerId": "amazon",
    "family": "amazon",
    "description": "Nova 2 Lite is a fast, cost-effective reasoning model for everyday workloads that can process text, images, and videos to generate text. Nova 2 Lite demonstrates standout capabilities in processing...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 65535,
    "modalities": {
      "input": [
        "text",
        "image",
        "video",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.3,
        "outputPricePer1M": 2.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-mistralai-ministral-14b-2512",
    "name": "[OR] Mistral: Ministral 3 14B 2512",
    "providerId": "mistralai",
    "family": "mistralai",
    "description": "The largest model in the Ministral 3 family, Ministral 3 14B offers frontier capabilities and performance comparable to its larger Mistral Small 3.2 24B counterpart. A powerful and efficient language...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 209715,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.19999999999999998,
        "outputPricePer1M": 0.19999999999999998,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-mistralai-ministral-8b-2512",
    "name": "[OR] Mistral: Ministral 3 8B 2512",
    "providerId": "mistralai",
    "family": "mistralai",
    "description": "A balanced model in the Ministral 3 family, Ministral 3 8B is a powerful, efficient tiny language model with vision capabilities.",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 209715,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.15,
        "outputPricePer1M": 0.15,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-mistralai-ministral-3b-2512",
    "name": "[OR] Mistral: Ministral 3 3B 2512",
    "providerId": "mistralai",
    "family": "mistralai",
    "description": "The smallest model in the Ministral 3 family, Ministral 3 3B is a powerful, efficient tiny language model with vision capabilities.",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 104857,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.09999999999999999,
        "outputPricePer1M": 0.09999999999999999,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-mistralai-mistral-large-2512",
    "name": "[OR] Mistral: Mistral Large 3 2512",
    "providerId": "mistralai",
    "family": "mistralai",
    "description": "Mistral Large 3 2512 is Mistral’s most capable model to date, featuring a sparse mixture-of-experts architecture with 41B active parameters (675B total), and released under the Apache 2.0 license.",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 209715,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.5,
        "outputPricePer1M": 1.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-deepseek-deepseek-v3.2",
    "name": "[OR] DeepSeek: DeepSeek V3.2",
    "providerId": "deepseek",
    "family": "deepseek",
    "description": "DeepSeek-V3.2 is a large language model designed to harmonize high computational efficiency with strong reasoning and agentic tool-use performance. It introduces DeepSeek Sparse Attention (DSA), a fine-grained sparse attention mechanism...",
    "status": "active",
    "contextWindow": 163840,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.26899999999999996,
        "outputPricePer1M": 0.39999999999999997,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-anthropic-claude-opus-4.5",
    "name": "[OR] Anthropic: Claude Opus 4.5",
    "providerId": "anthropic",
    "family": "anthropic",
    "description": "Claude Opus 4.5 is Anthropic’s frontier reasoning model optimized for complex software engineering, agentic workflows, and long-horizon computer use. It offers strong multimodal capabilities, competitive performance across real-world coding and...",
    "status": "active",
    "contextWindow": 200000,
    "maxOutputTokens": 64000,
    "modalities": {
      "input": [
        "file",
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 5,
        "outputPricePer1M": 25,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-anthropic-claude-opus-4.5:batch",
    "name": "[OR] Anthropic: Claude Opus 4.5 (batch)",
    "providerId": "anthropic",
    "family": "anthropic",
    "description": "Claude Opus 4.5 is Anthropic’s frontier reasoning model optimized for complex software engineering, agentic workflows, and long-horizon computer use. It offers strong multimodal capabilities, competitive performance across real-world coding and...",
    "status": "active",
    "contextWindow": 200000,
    "maxOutputTokens": 64000,
    "modalities": {
      "input": [
        "file",
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2.5,
        "outputPricePer1M": 12.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemini-3-pro-image-preview",
    "name": "[OR] Google: Nano Banana Pro (Gemini 3 Pro Image Preview)",
    "providerId": "google",
    "family": "google",
    "description": "Nano Banana Pro is Google’s most advanced image-generation and editing model, built on Gemini 3 Pro. It extends the original Nano Banana with significantly improved multimodal reasoning, real-world grounding, and...",
    "status": "active",
    "contextWindow": 65536,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "image",
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2,
        "outputPricePer1M": 12,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.1",
    "name": "[OR] OpenAI: GPT-5.1",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.1 is the latest frontier-grade model in the GPT-5 series, offering stronger general-purpose reasoning, improved instruction adherence, and a more natural conversational style compared to GPT-5. It uses adaptive reasoning...",
    "status": "active",
    "contextWindow": 400000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "image",
        "text",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.25,
        "outputPricePer1M": 10,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.1:batch",
    "name": "[OR] OpenAI: GPT-5.1 (batch)",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.1 is the latest frontier-grade model in the GPT-5 series, offering stronger general-purpose reasoning, improved instruction adherence, and a more natural conversational style compared to GPT-5. It uses adaptive reasoning...",
    "status": "active",
    "contextWindow": 400000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "image",
        "text",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.625,
        "outputPricePer1M": 5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.1-codex",
    "name": "[OR] OpenAI: GPT-5.1-Codex",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.1-Codex is a specialized version of GPT-5.1 optimized for software engineering and coding workflows. It is designed for both interactive development sessions and long, independent execution of complex engineering tasks....",
    "status": "active",
    "contextWindow": 400000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.25,
        "outputPricePer1M": 10,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5.1-codex-mini",
    "name": "[OR] OpenAI: GPT-5.1-Codex-Mini",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5.1-Codex-Mini is a smaller and faster version of GPT-5.1-Codex",
    "status": "active",
    "contextWindow": 400000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.25,
        "outputPricePer1M": 2,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-moonshotai-kimi-k2-thinking",
    "name": "[OR] MoonshotAI: Kimi K2 Thinking",
    "providerId": "moonshotai",
    "family": "moonshotai",
    "description": "Kimi K2 Thinking is Moonshot AI’s most advanced open reasoning model to date, extending the K2 series into agentic, long-horizon reasoning. Built on the trillion-parameter Mixture-of-Experts (MoE) architecture introduced in...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 100352,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.6,
        "outputPricePer1M": 2.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-amazon-nova-premier-v1",
    "name": "[OR] Amazon: Nova Premier 1.0",
    "providerId": "amazon",
    "family": "amazon",
    "description": "Amazon Nova Premier is the most capable of Amazon’s multimodal models for complex reasoning tasks and for use as the best teacher for distilling custom models.",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 32000,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2.5,
        "outputPricePer1M": 12.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-perplexity-sonar-pro-search",
    "name": "[OR] Perplexity: Sonar Pro Search",
    "providerId": "perplexity",
    "family": "perplexity",
    "description": "Exclusively available on the OpenRouter API, Sonar Pro's new Pro Search mode is Perplexity's most advanced agentic search system. It is designed for deeper reasoning and analysis. Pricing is based...",
    "status": "active",
    "contextWindow": 200000,
    "maxOutputTokens": 8000,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 3,
        "outputPricePer1M": 15,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-mistralai-voxtral-small-24b-2507",
    "name": "[OR] Mistral: Voxtral Small 24B 2507",
    "providerId": "mistralai",
    "family": "mistralai",
    "description": "Voxtral Small is an enhancement of Mistral Small 3, incorporating state-of-the-art audio input capabilities while retaining best-in-class text performance. It excels at speech transcription, translation and audio understanding. Input audio...",
    "status": "active",
    "contextWindow": 32768,
    "maxOutputTokens": 26214,
    "modalities": {
      "input": [
        "text",
        "audio",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.09999999999999999,
        "outputPricePer1M": 0.3,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-oss-safeguard-20b",
    "name": "[OR] OpenAI: gpt-oss-safeguard-20b",
    "providerId": "openai",
    "family": "openai",
    "description": "gpt-oss-safeguard-20b is a safety reasoning model from OpenAI built upon gpt-oss-20b. This open-weight, 21B-parameter Mixture-of-Experts (MoE) model offers lower latency for safety tasks like content classification, LLM filtering, and trust...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.075,
        "outputPricePer1M": 0.3,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-minimax-minimax-m2",
    "name": "[OR] MiniMax: MiniMax M2",
    "providerId": "minimax",
    "family": "minimax",
    "description": "MiniMax-M2 is a compact, high-efficiency large language model optimized for end-to-end coding and agentic workflows. With 10 billion activated parameters (230 billion total), it delivers near-frontier intelligence across general reasoning,...",
    "status": "active",
    "contextWindow": 204800,
    "maxOutputTokens": 131072,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.255,
        "outputPricePer1M": 1.02,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3-vl-32b-instruct",
    "name": "[OR] Qwen: Qwen3 VL 32B Instruct",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3-VL-32B-Instruct is a large-scale multimodal vision-language model designed for high-precision understanding and reasoning across text, images, and video. With 32 billion parameters, it combines deep visual perception with advanced text...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.10400000000000001,
        "outputPricePer1M": 0.41600000000000004,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-ibm-granite-granite-4.0-h-micro",
    "name": "[OR] IBM: Granite 4.0 Micro",
    "providerId": "ibm-granite",
    "family": "ibm-granite",
    "description": "Granite-4.0-H-Micro is a 3B parameter from the Granite 4 family of models. These models are the latest in a series of models released by IBM. They are fine-tuned for long...",
    "status": "active",
    "contextWindow": 131000,
    "maxOutputTokens": 117900,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.017,
        "outputPricePer1M": 0.112,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5-image-mini",
    "name": "[OR] OpenAI: GPT-5 Image Mini",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5 Image Mini combines OpenAI's advanced language capabilities, powered by [GPT-5 Mini](https://openrouter.ai/openai/gpt-5-mini), with GPT Image 1 Mini for efficient image generation. This natively multimodal model features superior instruction following, text...",
    "status": "active",
    "contextWindow": 400000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "file",
        "image",
        "text"
      ],
      "output": [
        "image",
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2.5,
        "outputPricePer1M": 2,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-anthropic-claude-haiku-4.5",
    "name": "[OR] Anthropic: Claude Haiku 4.5",
    "providerId": "anthropic",
    "family": "anthropic",
    "description": "Claude Haiku 4.5 is Anthropic’s fastest and most efficient model, delivering near-frontier intelligence at a fraction of the cost and latency of larger Claude models. Matching Claude Sonnet 4’s performance...",
    "status": "active",
    "contextWindow": 200000,
    "maxOutputTokens": 64000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1,
        "outputPricePer1M": 5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-anthropic-claude-haiku-4.5:batch",
    "name": "[OR] Anthropic: Claude Haiku 4.5 (batch)",
    "providerId": "anthropic",
    "family": "anthropic",
    "description": "Claude Haiku 4.5 is Anthropic’s fastest and most efficient model, delivering near-frontier intelligence at a fraction of the cost and latency of larger Claude models. Matching Claude Sonnet 4’s performance...",
    "status": "active",
    "contextWindow": 200000,
    "maxOutputTokens": 64000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.5,
        "outputPricePer1M": 2.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3-vl-8b-thinking",
    "name": "[OR] Qwen: Qwen3 VL 8B Thinking",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3-VL-8B-Thinking is the reasoning-optimized variant of the Qwen3-VL-8B multimodal model, designed for advanced visual and textual reasoning across complex scenes, documents, and temporal sequences. It integrates enhanced multimodal alignment and...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.18,
        "outputPricePer1M": 2.0999999999999996,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3-vl-8b-instruct",
    "name": "[OR] Qwen: Qwen3 VL 8B Instruct",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3-VL-8B-Instruct is a multimodal vision-language model from the Qwen3-VL series, built for high-fidelity understanding and reasoning across text, images, and video. It features improved multimodal fusion with Interleaved-MRoPE for long-horizon...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.117,
        "outputPricePer1M": 0.45499999999999996,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5-image",
    "name": "[OR] OpenAI: GPT-5 Image",
    "providerId": "openai",
    "family": "openai",
    "description": "[GPT-5](https://openrouter.ai/openai/gpt-5) Image combines OpenAI's GPT-5 model with state-of-the-art image generation capabilities. It offers major improvements in reasoning, code quality, and user experience while incorporating GPT Image 1's superior instruction following,...",
    "status": "active",
    "contextWindow": 400000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "image",
        "text",
        "file"
      ],
      "output": [
        "image",
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 10,
        "outputPricePer1M": 10,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemini-2.5-flash-image",
    "name": "[OR] Google: Nano Banana (Gemini 2.5 Flash Image)",
    "providerId": "google",
    "family": "google",
    "description": "Gemini 2.5 Flash Image, a.k.a. \"Nano Banana,\" is now generally available. It is a state of the art image generation model with contextual understanding. It is capable of image generation,...",
    "status": "active",
    "contextWindow": 32768,
    "maxOutputTokens": 8192,
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "image",
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.3,
        "outputPricePer1M": 2.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3-vl-30b-a3b-thinking",
    "name": "[OR] Qwen: Qwen3 VL 30B A3B Thinking",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3-VL-30B-A3B-Thinking is a multimodal model that unifies strong text generation with visual understanding for images and videos. Its Thinking variant enhances reasoning in STEM, math, and complex tasks. It excels...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.19999999999999998,
        "outputPricePer1M": 2.4,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3-vl-30b-a3b-instruct",
    "name": "[OR] Qwen: Qwen3 VL 30B A3B Instruct",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3-VL-30B-A3B-Instruct is a multimodal model that unifies strong text generation with visual understanding for images and videos. Its Instruct variant optimizes instruction-following for general multimodal tasks. It excels in perception...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.15,
        "outputPricePer1M": 0.6,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5-pro",
    "name": "[OR] OpenAI: GPT-5 Pro",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5 Pro is OpenAI’s most advanced model, offering major improvements in reasoning, code quality, and user experience. It is optimized for complex tasks that require step-by-step reasoning, instruction following, and...",
    "status": "active",
    "contextWindow": 400000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "image",
        "text",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 15,
        "outputPricePer1M": 120,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5-pro:batch",
    "name": "[OR] OpenAI: GPT-5 Pro (batch)",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5 Pro is OpenAI’s most advanced model, offering major improvements in reasoning, code quality, and user experience. It is optimized for complex tasks that require step-by-step reasoning, instruction following, and...",
    "status": "active",
    "contextWindow": 400000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "image",
        "text",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 7.5,
        "outputPricePer1M": 60,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-z-ai-glm-4.6",
    "name": "[OR] Z.ai: GLM 4.6",
    "providerId": "z-ai",
    "family": "z-ai",
    "description": "Compared with GLM-4.5, this generation brings several key improvements: Longer context window: The context window has been expanded from 128K to 200K tokens, enabling the model to handle more complex...",
    "status": "active",
    "contextWindow": 204800,
    "maxOutputTokens": 131072,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.55,
        "outputPricePer1M": 2.2,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-anthropic-claude-sonnet-4.5",
    "name": "[OR] Anthropic: Claude Sonnet 4.5",
    "providerId": "anthropic",
    "family": "anthropic",
    "description": "Claude Sonnet 4.5 is Anthropic’s most advanced Sonnet model to date, optimized for real-world agents and coding workflows. It delivers state-of-the-art performance on coding benchmarks such as SWE-bench Verified, with...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 64000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 3,
        "outputPricePer1M": 15,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-anthropic-claude-sonnet-4.5:batch",
    "name": "[OR] Anthropic: Claude Sonnet 4.5 (batch)",
    "providerId": "anthropic",
    "family": "anthropic",
    "description": "Claude Sonnet 4.5 is Anthropic’s most advanced Sonnet model to date, optimized for real-world agents and coding workflows. It delivers state-of-the-art performance on coding benchmarks such as SWE-bench Verified, with...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 64000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.5,
        "outputPricePer1M": 7.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-deepseek-deepseek-v3.2-exp",
    "name": "[OR] DeepSeek: DeepSeek V3.2 Exp",
    "providerId": "deepseek",
    "family": "deepseek",
    "description": "DeepSeek-V3.2-Exp is an experimental large language model released by DeepSeek as an intermediate step between V3.1 and future architectures. It introduces DeepSeek Sparse Attention (DSA), a fine-grained sparse attention mechanism...",
    "status": "active",
    "contextWindow": 163840,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.27,
        "outputPricePer1M": 0.41,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-thedrummer-cydonia-24b-v4.1",
    "name": "[OR] TheDrummer: Cydonia 24B V4.1",
    "providerId": "thedrummer",
    "family": "thedrummer",
    "description": "Uncensored and creative writing model based on Mistral Small 3.2 24B with good recall, prompt adherence, and intelligence.",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 117964,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.3,
        "outputPricePer1M": 0.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-relace-relace-apply-3",
    "name": "[OR] Relace: Relace Apply 3",
    "providerId": "relace",
    "family": "relace",
    "description": "Relace Apply 3 is a specialized code-patching LLM that merges AI-suggested edits straight into your source files. It can apply updates from GPT-4o, Claude, and others into your files at...",
    "status": "active",
    "contextWindow": 256000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.85,
        "outputPricePer1M": 1.25,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3-vl-235b-a22b-thinking",
    "name": "[OR] Qwen: Qwen3 VL 235B A22B Thinking",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3-VL-235B-A22B Thinking is a multimodal model that unifies strong text generation with visual understanding across images and video. The Thinking model is optimized for multimodal reasoning in STEM and math....",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.39999999999999997,
        "outputPricePer1M": 4,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3-vl-235b-a22b-instruct",
    "name": "[OR] Qwen: Qwen3 VL 235B A22B Instruct",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3-VL-235B-A22B Instruct is an open-weight multimodal model that unifies strong text generation with visual understanding across images and video. The Instruct model targets general vision-language use (VQA, document parsing, chart/table...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.21,
        "outputPricePer1M": 1.9,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3-max",
    "name": "[OR] Qwen: Qwen3 Max",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3-Max is an updated release built on the Qwen3 series, offering major improvements in reasoning, instruction following, multilingual support, and long-tail knowledge coverage compared to the January 2025 version. It...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.78,
        "outputPricePer1M": 3.9,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3-coder-plus",
    "name": "[OR] Qwen: Qwen3 Coder Plus",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3 Coder Plus is Alibaba's proprietary version of the Open Source Qwen3 Coder 480B A35B. It is a powerful coding agent model specializing in autonomous programming via tool calling and...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.65,
        "outputPricePer1M": 3.25,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-deepseek-deepseek-v3.1-terminus",
    "name": "[OR] DeepSeek: DeepSeek V3.1 Terminus",
    "providerId": "deepseek",
    "family": "deepseek",
    "description": "DeepSeek-V3.1 Terminus is an update to [DeepSeek V3.1](/deepseek/deepseek-chat-v3.1) that maintains the model's original capabilities while addressing issues reported by users, including language consistency and agent capabilities, further optimizing the model's...",
    "status": "active",
    "contextWindow": 163840,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.27,
        "outputPricePer1M": 1,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3-coder-flash",
    "name": "[OR] Qwen: Qwen3 Coder Flash",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3 Coder Flash is Alibaba's fast and cost efficient version of their proprietary Qwen3 Coder Plus. It is a powerful coding agent model specializing in autonomous programming via tool calling...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.195,
        "outputPricePer1M": 0.975,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3-next-80b-a3b-thinking",
    "name": "[OR] Qwen: Qwen3 Next 80B A3B Thinking",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3-Next-80B-A3B-Thinking is a reasoning-first chat model in the Qwen3-Next line that outputs structured “thinking” traces by default. It’s designed for hard multi-step problems; math proofs, code synthesis/debugging, logic, and agentic...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.15,
        "outputPricePer1M": 1.2,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3-next-80b-a3b-instruct",
    "name": "[OR] Qwen: Qwen3 Next 80B A3B Instruct",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3-Next-80B-A3B-Instruct is an instruction-tuned chat model in the Qwen3-Next series optimized for fast, stable responses without “thinking” traces. It targets complex tasks across reasoning, code generation, knowledge QA, and multilingual...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 235929,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.09999999999999999,
        "outputPricePer1M": 1.1,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen-plus-2025-07-28",
    "name": "[OR] Qwen: Qwen Plus 0728",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen Plus 0728, based on the Qwen3 foundation model, is a 1 million context hybrid reasoning model with a balanced performance, speed, and cost combination.",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.26,
        "outputPricePer1M": 0.78,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-moonshotai-kimi-k2-0905",
    "name": "[OR] MoonshotAI: Kimi K2 0905",
    "providerId": "moonshotai",
    "family": "moonshotai",
    "description": "Kimi K2 0905 is the September update of [Kimi K2 0711](moonshotai/kimi-k2). It is a large-scale Mixture-of-Experts (MoE) language model developed by Moonshot AI, featuring 1 trillion total parameters with 32...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 100352,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.6,
        "outputPricePer1M": 2.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3-30b-a3b-thinking-2507",
    "name": "[OR] Qwen: Qwen3 30B A3B Thinking 2507",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3-30B-A3B-Thinking-2507 is a 30B parameter Mixture-of-Experts reasoning model optimized for complex tasks requiring extended multi-step thinking. The model is designed specifically for “thinking mode,” where internal reasoning traces are separated...",
    "status": "active",
    "contextWindow": 81920,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.19999999999999998,
        "outputPricePer1M": 2.4,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-nousresearch-hermes-4-70b",
    "name": "[OR] Nous: Hermes 4 70B",
    "providerId": "nousresearch",
    "family": "nousresearch",
    "description": "Hermes 4 70B is a hybrid reasoning model from Nous Research, built on Meta-Llama-3.1-70B. It introduces the same hybrid mode as the larger 405B release, allowing the model to either...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 117964,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.13,
        "outputPricePer1M": 0.39999999999999997,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-nousresearch-hermes-4-405b",
    "name": "[OR] Nous: Hermes 4 405B",
    "providerId": "nousresearch",
    "family": "nousresearch",
    "description": "Hermes 4 is a large-scale reasoning model built on Meta-Llama-3.1-405B and released by Nous Research. It introduces a hybrid reasoning mode, where the model can choose to deliberate internally with...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 117964,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1,
        "outputPricePer1M": 3,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-deepseek-deepseek-chat-v3.1",
    "name": "[OR] DeepSeek: DeepSeek V3.1",
    "providerId": "deepseek",
    "family": "deepseek",
    "description": "DeepSeek-V3.1 is a large hybrid reasoning model (671B parameters, 37B active) that supports both thinking and non-thinking modes via prompt templates. It extends the DeepSeek-V3 base with a two-phase long-context...",
    "status": "active",
    "contextWindow": 163840,
    "maxOutputTokens": 144900,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.55,
        "outputPricePer1M": 1.6500000000000001,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-mistralai-mistral-medium-3.1",
    "name": "[OR] Mistral: Mistral Medium 3.1",
    "providerId": "mistralai",
    "family": "mistralai",
    "description": "Mistral Medium 3.1 is an updated version of Mistral Medium 3, which is a high-performance enterprise-grade language model designed to deliver frontier-level capabilities at significantly reduced operational cost. It balances...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 104857,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.39999999999999997,
        "outputPricePer1M": 2,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-z-ai-glm-4.5v",
    "name": "[OR] Z.ai: GLM 4.5V",
    "providerId": "z-ai",
    "family": "z-ai",
    "description": "GLM-4.5V is a vision-language foundation model for multimodal agent applications. Built on a Mixture-of-Experts (MoE) architecture with 106B parameters and 12B activated parameters, it achieves state-of-the-art results in video understanding,...",
    "status": "active",
    "contextWindow": 65536,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.6,
        "outputPricePer1M": 1.7999999999999998,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5",
    "name": "[OR] OpenAI: GPT-5",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5 is OpenAI’s most advanced model, offering major improvements in reasoning, code quality, and user experience. It is optimized for complex tasks that require step-by-step reasoning, instruction following, and accuracy...",
    "status": "active",
    "contextWindow": 400000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.25,
        "outputPricePer1M": 10,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5:batch",
    "name": "[OR] OpenAI: GPT-5 (batch)",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5 is OpenAI’s most advanced model, offering major improvements in reasoning, code quality, and user experience. It is optimized for complex tasks that require step-by-step reasoning, instruction following, and accuracy...",
    "status": "active",
    "contextWindow": 400000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.625,
        "outputPricePer1M": 5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5-mini",
    "name": "[OR] OpenAI: GPT-5 Mini",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5 Mini is a compact version of GPT-5, designed to handle lighter-weight reasoning tasks. It provides the same instruction-following and safety-tuning benefits as GPT-5, but with reduced latency and cost....",
    "status": "active",
    "contextWindow": 400000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.25,
        "outputPricePer1M": 2,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5-mini:batch",
    "name": "[OR] OpenAI: GPT-5 Mini (batch)",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5 Mini is a compact version of GPT-5, designed to handle lighter-weight reasoning tasks. It provides the same instruction-following and safety-tuning benefits as GPT-5, but with reduced latency and cost....",
    "status": "active",
    "contextWindow": 400000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.125,
        "outputPricePer1M": 1,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5-nano",
    "name": "[OR] OpenAI: GPT-5 Nano",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5-Nano is the smallest and fastest variant in the GPT-5 system, optimized for developer tools, rapid interactions, and ultra-low latency environments. While limited in reasoning depth compared to its larger...",
    "status": "active",
    "contextWindow": 400000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.049999999999999996,
        "outputPricePer1M": 0.39999999999999997,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-5-nano:batch",
    "name": "[OR] OpenAI: GPT-5 Nano (batch)",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-5-Nano is the smallest and fastest variant in the GPT-5 system, optimized for developer tools, rapid interactions, and ultra-low latency environments. While limited in reasoning depth compared to its larger...",
    "status": "active",
    "contextWindow": 400000,
    "maxOutputTokens": 128000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.024999999999999998,
        "outputPricePer1M": 0.19999999999999998,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-oss-120b",
    "name": "[OR] OpenAI: gpt-oss-120b",
    "providerId": "openai",
    "family": "openai",
    "description": "gpt-oss-120b is an open-weight, 117B-parameter Mixture-of-Experts (MoE) language model from OpenAI designed for high-reasoning, agentic, and general-purpose production use cases. It activates 5.1B parameters per forward pass and is optimized...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 117964,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.037,
        "outputPricePer1M": 0.16999999999999998,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-oss-120b:batch",
    "name": "[OR] OpenAI: gpt-oss-120b (batch)",
    "providerId": "openai",
    "family": "openai",
    "description": "gpt-oss-120b is an open-weight, 117B-parameter Mixture-of-Experts (MoE) language model from OpenAI designed for high-reasoning, agentic, and general-purpose production use cases. It activates 5.1B parameters per forward pass and is optimized...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 117964,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.15,
        "outputPricePer1M": 0.6,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-oss-20b",
    "name": "[OR] OpenAI: gpt-oss-20b",
    "providerId": "openai",
    "family": "openai",
    "description": "gpt-oss-20b is an open-weight 21B parameter model released by OpenAI under the Apache 2.0 license. It uses a Mixture-of-Experts (MoE) architecture with 3.6B active parameters per forward pass, optimized for...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 117964,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.03,
        "outputPricePer1M": 0.13,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-oss-20b:batch",
    "name": "[OR] OpenAI: gpt-oss-20b (batch)",
    "providerId": "openai",
    "family": "openai",
    "description": "gpt-oss-20b is an open-weight 21B parameter model released by OpenAI under the Apache 2.0 license. It uses a Mixture-of-Experts (MoE) architecture with 3.6B active parameters per forward pass, optimized for...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 117964,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.049999999999999996,
        "outputPricePer1M": 0.19999999999999998,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-anthropic-claude-opus-4.1",
    "name": "[OR] Anthropic: Claude Opus 4.1",
    "providerId": "anthropic",
    "family": "anthropic",
    "description": "Claude Opus 4.1 is an updated version of Anthropic’s flagship model, offering improved performance in coding, reasoning, and agentic tasks. It achieves 74.5% on SWE-bench Verified and shows notable gains...",
    "status": "active",
    "contextWindow": 200000,
    "maxOutputTokens": 32000,
    "modalities": {
      "input": [
        "image",
        "text",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 15,
        "outputPricePer1M": 75,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-anthropic-claude-opus-4.1:batch",
    "name": "[OR] Anthropic: Claude Opus 4.1 (batch)",
    "providerId": "anthropic",
    "family": "anthropic",
    "description": "Claude Opus 4.1 is an updated version of Anthropic’s flagship model, offering improved performance in coding, reasoning, and agentic tasks. It achieves 74.5% on SWE-bench Verified and shows notable gains...",
    "status": "active",
    "contextWindow": 200000,
    "maxOutputTokens": 32000,
    "modalities": {
      "input": [
        "image",
        "text",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 7.5,
        "outputPricePer1M": 37.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-mistralai-codestral-2508",
    "name": "[OR] Mistral: Codestral 2508",
    "providerId": "mistralai",
    "family": "mistralai",
    "description": "Mistral's cutting-edge language model for coding released end of July 2025. Codestral specializes in low-latency, high-frequency tasks such as fill-in-the-middle (FIM), code correction and test generation.\n\n[Blog Post](https://mistral.ai/news/codestral-25-08)",
    "status": "active",
    "contextWindow": 256000,
    "maxOutputTokens": 204800,
    "modalities": {
      "input": [
        "text",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.3,
        "outputPricePer1M": 0.8999999999999999,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3-coder-30b-a3b-instruct",
    "name": "[OR] Qwen: Qwen3 Coder 30B A3B Instruct",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3-Coder-30B-A3B-Instruct is a 30.5B parameter Mixture-of-Experts (MoE) model with 128 experts (8 active per forward pass), designed for advanced code generation, repository-scale understanding, and agentic tool use. Built on the...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 235929,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.07,
        "outputPricePer1M": 0.28,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3-30b-a3b-instruct-2507",
    "name": "[OR] Qwen: Qwen3 30B A3B Instruct 2507",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3-30B-A3B-Instruct-2507 is a 30.5B-parameter mixture-of-experts language model from Qwen, with 3.3B active parameters per inference. It operates in non-thinking mode and is designed for high-quality instruction following, multilingual understanding, and...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 32000,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.04815,
        "outputPricePer1M": 0.19305,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-z-ai-glm-4.5",
    "name": "[OR] Z.ai: GLM 4.5",
    "providerId": "z-ai",
    "family": "z-ai",
    "description": "GLM-4.5 is our latest flagship foundation model, purpose-built for agent-based applications. It leverages a Mixture-of-Experts (MoE) architecture and supports a context length of up to 128k tokens. GLM-4.5 delivers significantly...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 98304,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.6,
        "outputPricePer1M": 2.2,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-z-ai-glm-4.5-air",
    "name": "[OR] Z.ai: GLM 4.5 Air",
    "providerId": "z-ai",
    "family": "z-ai",
    "description": "GLM-4.5-Air is the lightweight variant of our latest flagship model family, also purpose-built for agent-centric applications. Like GLM-4.5, it adopts the Mixture-of-Experts (MoE) architecture but with a more compact parameter...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 98304,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.13,
        "outputPricePer1M": 0.85,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3-235b-a22b-thinking-2507",
    "name": "[OR] Qwen: Qwen3 235B A22B Thinking 2507",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3-235B-A22B-Thinking-2507 is a high-performance, open-weight Mixture-of-Experts (MoE) language model optimized for complex reasoning tasks. It activates 22B of its 235B parameters per forward pass and natively supports up to 262,144...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 117964,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.22999999999999998,
        "outputPricePer1M": 2.3,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3-coder",
    "name": "[OR] Qwen: Qwen3 Coder 480B A35B",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3-Coder-480B-A35B-Instruct is a Mixture-of-Experts (MoE) code generation model developed by the Qwen team. It is optimized for agentic coding tasks such as function calling, tool use, and long-context reasoning over...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.3,
        "outputPricePer1M": 1,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-bytedance-ui-tars-1.5-7b",
    "name": "[OR] ByteDance: UI-TARS 7B ",
    "providerId": "bytedance",
    "family": "bytedance",
    "description": "UI-TARS-1.5 is a multimodal vision-language agent optimized for GUI-based environments, including desktop interfaces, web browsers, mobile systems, and games. Built by ByteDance, it builds upon the UI-TARS framework with reinforcement...",
    "status": "active",
    "contextWindow": 128000,
    "maxOutputTokens": 2048,
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.09999999999999999,
        "outputPricePer1M": 0.19999999999999998,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemini-2.5-flash-lite",
    "name": "[OR] Google: Gemini 2.5 Flash Lite",
    "providerId": "google",
    "family": "google",
    "description": "Gemini 2.5 Flash-Lite is a lightweight reasoning model in the Gemini 2.5 family, optimized for ultra-low latency and cost efficiency. It offers improved throughput, faster token generation, and better performance...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 65535,
    "modalities": {
      "input": [
        "text",
        "image",
        "file",
        "audio",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.09999999999999999,
        "outputPricePer1M": 0.39999999999999997,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemini-2.5-flash-lite:batch",
    "name": "[OR] Google: Gemini 2.5 Flash Lite (batch)",
    "providerId": "google",
    "family": "google",
    "description": "Gemini 2.5 Flash-Lite is a lightweight reasoning model in the Gemini 2.5 family, optimized for ultra-low latency and cost efficiency. It offers improved throughput, faster token generation, and better performance...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 65535,
    "modalities": {
      "input": [
        "text",
        "image",
        "file",
        "audio",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.049999999999999996,
        "outputPricePer1M": 0.19999999999999998,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3-235b-a22b-2507",
    "name": "[OR] Qwen: Qwen3 235B A22B Instruct 2507",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3-235B-A22B-Instruct-2507 is a multilingual, instruction-tuned mixture-of-experts language model based on the Qwen3-235B architecture, with 22B active parameters per forward pass. It is optimized for general-purpose text generation, including instruction following,...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.09,
        "outputPricePer1M": 0.55,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-moonshotai-kimi-k2",
    "name": "[OR] MoonshotAI: Kimi K2 0711",
    "providerId": "moonshotai",
    "family": "moonshotai",
    "description": "Kimi K2 Instruct is a large-scale Mixture-of-Experts (MoE) language model developed by Moonshot AI, featuring 1 trillion total parameters with 32 billion active per forward pass. It is optimized for...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 100352,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.5700000000000001,
        "outputPricePer1M": 2.3,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-cognitivecomputations-dolphin-mistral-24b-venice-edition",
    "name": "[OR] Venice: Uncensored",
    "providerId": "cognitivecomputations",
    "family": "cognitivecomputations",
    "description": "Venice Uncensored Dolphin Mistral 24B Venice Edition is a fine-tuned variant of Mistral-Small-24B-Instruct-2501, developed by dphn.ai in collaboration with Venice.ai. This model is designed as an “uncensored” instruct-tuned LLM, preserving...",
    "status": "active",
    "contextWindow": 128000,
    "maxOutputTokens": 8192,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.19999999999999998,
        "outputPricePer1M": 0.8999999999999999,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-tencent-hunyuan-a13b-instruct",
    "name": "[OR] Tencent: Hunyuan A13B Instruct",
    "providerId": "tencent",
    "family": "tencent",
    "description": "Hunyuan-A13B is a 13B active parameter Mixture-of-Experts (MoE) language model developed by Tencent, with a total parameter count of 80B and support for reasoning via Chain-of-Thought. It offers competitive benchmark...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 117964,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.14,
        "outputPricePer1M": 0.5700000000000001,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-morph-morph-v3-large",
    "name": "[OR] Morph: Morph V3 Large",
    "providerId": "morph",
    "family": "morph",
    "description": "Morph's high-accuracy apply model for complex code edits. ~4,500 tokens/sec with 98% accuracy for precise code transformations. The model requires the prompt to be in the following format: <instruction>{instruction}</instruction> <code>{initial_code}</code>...",
    "status": "active",
    "contextWindow": 262144,
    "maxOutputTokens": 131072,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.8999999999999999,
        "outputPricePer1M": 1.9,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-morph-morph-v3-fast",
    "name": "[OR] Morph: Morph V3 Fast",
    "providerId": "morph",
    "family": "morph",
    "description": "Morph's fastest apply model for code edits. ~10,500 tokens/sec with 96% accuracy for rapid code transformations. The model requires the prompt to be in the following format: <instruction>{instruction}</instruction> <code>{initial_code}</code> <update>{edit_snippet}</update>...",
    "status": "active",
    "contextWindow": 81920,
    "maxOutputTokens": 38000,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.7999999999999999,
        "outputPricePer1M": 1.2,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-baidu-ernie-4.5-vl-424b-a47b",
    "name": "[OR] Baidu: ERNIE 4.5 VL 424B A47B ",
    "providerId": "baidu",
    "family": "baidu",
    "description": "ERNIE-4.5-VL-424B-A47B is a multimodal Mixture-of-Experts (MoE) model from Baidu’s ERNIE 4.5 series, featuring 424B total parameters with 47B active per token. It is trained jointly on text and image data...",
    "status": "active",
    "contextWindow": 123000,
    "maxOutputTokens": 16000,
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.42,
        "outputPricePer1M": 1.25,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-mistralai-mistral-small-3.2-24b-instruct",
    "name": "[OR] Mistral: Mistral Small 3.2 24B",
    "providerId": "mistralai",
    "family": "mistralai",
    "description": "Mistral-Small-3.2-24B-Instruct-2506 is an updated 24B parameter model from Mistral optimized for instruction following, repetition reduction, and improved function calling. Compared to the 3.1 release, version 3.2 significantly improves accuracy on...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.075,
        "outputPricePer1M": 0.19999999999999998,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-minimax-minimax-m1",
    "name": "[OR] MiniMax: MiniMax M1",
    "providerId": "minimax",
    "family": "minimax",
    "description": "MiniMax-M1 is a large-scale, open-weight reasoning model designed for extended context and high-efficiency inference. It leverages a hybrid Mixture-of-Experts (MoE) architecture paired with a custom \"lightning attention\" mechanism, allowing it...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 40000,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.55,
        "outputPricePer1M": 2.2,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemini-2.5-flash",
    "name": "[OR] Google: Gemini 2.5 Flash",
    "providerId": "google",
    "family": "google",
    "description": "Gemini 2.5 Flash is Google's state-of-the-art workhorse model, specifically designed for advanced reasoning, coding, mathematics, and scientific tasks. It includes built-in \"thinking\" capabilities, enabling it to provide responses with greater...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 65535,
    "modalities": {
      "input": [
        "file",
        "image",
        "text",
        "audio",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.3,
        "outputPricePer1M": 2.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemini-2.5-flash:batch",
    "name": "[OR] Google: Gemini 2.5 Flash (batch)",
    "providerId": "google",
    "family": "google",
    "description": "Gemini 2.5 Flash is Google's state-of-the-art workhorse model, specifically designed for advanced reasoning, coding, mathematics, and scientific tasks. It includes built-in \"thinking\" capabilities, enabling it to provide responses with greater...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 65535,
    "modalities": {
      "input": [
        "file",
        "image",
        "text",
        "audio",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.15,
        "outputPricePer1M": 1.25,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemini-2.5-pro",
    "name": "[OR] Google: Gemini 2.5 Pro",
    "providerId": "google",
    "family": "google",
    "description": "Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks. It employs “thinking” capabilities, enabling it to reason through responses with enhanced accuracy...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text",
        "image",
        "file",
        "audio",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.25,
        "outputPricePer1M": 10,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemini-2.5-pro:batch",
    "name": "[OR] Google: Gemini 2.5 Pro (batch)",
    "providerId": "google",
    "family": "google",
    "description": "Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks. It employs “thinking” capabilities, enabling it to reason through responses with enhanced accuracy...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "text",
        "image",
        "file",
        "audio",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.625,
        "outputPricePer1M": 5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-o3-pro",
    "name": "[OR] OpenAI: o3 Pro",
    "providerId": "openai",
    "family": "openai",
    "description": "The o-series of models are trained with reinforcement learning to think before they answer and perform complex reasoning. The o3-pro model uses more compute to think harder and provide consistently...",
    "status": "active",
    "contextWindow": 200000,
    "maxOutputTokens": 100000,
    "modalities": {
      "input": [
        "text",
        "file",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 20,
        "outputPricePer1M": 80,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemini-2.5-pro-preview",
    "name": "[OR] Google: Gemini 2.5 Pro Preview 06-05",
    "providerId": "google",
    "family": "google",
    "description": "Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks. It employs “thinking” capabilities, enabling it to reason through responses with enhanced accuracy...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 65536,
    "modalities": {
      "input": [
        "file",
        "image",
        "text",
        "audio"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.25,
        "outputPricePer1M": 10,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-deepseek-deepseek-r1-0528",
    "name": "[OR] DeepSeek: R1 0528",
    "providerId": "deepseek",
    "family": "deepseek",
    "description": "May 28th update to the [original DeepSeek R1](/deepseek/deepseek-r1) Performance on par with [OpenAI o1](/openai/o1), but open-sourced and with fully open reasoning tokens. It's 671B parameters in size, with 37B active...",
    "status": "active",
    "contextWindow": 163840,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.5,
        "outputPricePer1M": 2.1500000000000004,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-anthropic-claude-opus-4",
    "name": "[OR] Anthropic: Claude Opus 4",
    "providerId": "anthropic",
    "family": "anthropic",
    "description": "Claude Opus 4 is benchmarked as the world’s best coding model, at time of release, bringing sustained performance on complex, long-running tasks and agent workflows. It sets new benchmarks in...",
    "status": "active",
    "contextWindow": 200000,
    "maxOutputTokens": 32000,
    "modalities": {
      "input": [
        "image",
        "text",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 15,
        "outputPricePer1M": 75,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-anthropic-claude-sonnet-4",
    "name": "[OR] Anthropic: Claude Sonnet 4",
    "providerId": "anthropic",
    "family": "anthropic",
    "description": "Claude Sonnet 4 significantly enhances the capabilities of its predecessor, Sonnet 3.7, excelling in both coding and reasoning tasks with improved precision and controllability. Achieving state-of-the-art performance on SWE-bench (72.7%),...",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 64000,
    "modalities": {
      "input": [
        "image",
        "text",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 3,
        "outputPricePer1M": 15,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-mistralai-mistral-medium-3",
    "name": "[OR] Mistral: Mistral Medium 3",
    "providerId": "mistralai",
    "family": "mistralai",
    "description": "Mistral Medium 3 is a high-performance enterprise-grade language model designed to deliver frontier-level capabilities at significantly reduced operational cost. It balances state-of-the-art reasoning and multimodal performance with 8× lower cost...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 104857,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.39999999999999997,
        "outputPricePer1M": 2,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemini-2.5-pro-preview-05-06",
    "name": "[OR] Google: Gemini 2.5 Pro Preview 05-06",
    "providerId": "google",
    "family": "google",
    "description": "Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks. It employs “thinking” capabilities, enabling it to reason through responses with enhanced accuracy...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 65535,
    "modalities": {
      "input": [
        "text",
        "image",
        "file",
        "audio",
        "video"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.25,
        "outputPricePer1M": 10,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-meta-llama-llama-guard-4-12b",
    "name": "[OR] Meta: Llama Guard 4 12B",
    "providerId": "meta-llama",
    "family": "meta-llama",
    "description": "Llama Guard 4 is a Llama 4 Scout-derived multimodal pretrained model, fine-tuned for content safety classification. Similar to previous versions, it can be used to classify content in both LLM...",
    "status": "active",
    "contextWindow": 163840,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "image",
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.18,
        "outputPricePer1M": 0.18,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3-30b-a3b",
    "name": "[OR] Qwen: Qwen3 30B A3B",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3, the latest generation in the Qwen large language model series, features both dense and mixture-of-experts (MoE) architectures to excel in reasoning, multilingual support, and advanced agent tasks. Its unique...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.12,
        "outputPricePer1M": 0.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3-8b",
    "name": "[OR] Qwen: Qwen3 8B",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3-8B is a dense 8.2B parameter causal language model from the Qwen3 series, designed for both reasoning-heavy tasks and efficient dialogue. It supports seamless switching between \"thinking\" mode for math,...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 8192,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.117,
        "outputPricePer1M": 0.45499999999999996,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3-14b",
    "name": "[OR] Qwen: Qwen3 14B",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3-14B is a dense 14.8B parameter causal language model from the Qwen3 series, designed for both complex reasoning and efficient dialogue. It supports seamless switching between a \"thinking\" mode for...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.12,
        "outputPricePer1M": 0.24,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3-32b",
    "name": "[OR] Qwen: Qwen3 32B",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3-32B is a dense 32.8B parameter causal language model from the Qwen3 series, optimized for both complex reasoning and efficient dialogue. It supports seamless switching between a \"thinking\" mode for...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.08,
        "outputPricePer1M": 0.28,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen3-235b-a22b",
    "name": "[OR] Qwen: Qwen3 235B A22B",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen3-235B-A22B is a 235B parameter mixture-of-experts (MoE) model developed by Qwen, activating 22B parameters per forward pass. It supports seamless switching between a \"thinking\" mode for complex reasoning, math, and...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 8192,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.45499999999999996,
        "outputPricePer1M": 1.8199999999999998,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-o4-mini-high",
    "name": "[OR] OpenAI: o4 Mini High",
    "providerId": "openai",
    "family": "openai",
    "description": "OpenAI o4-mini-high is the same model as [o4-mini](/openai/o4-mini) with reasoning_effort set to high. OpenAI o4-mini is a compact reasoning model in the o-series, optimized for fast, cost-efficient performance while retaining...",
    "status": "active",
    "contextWindow": 200000,
    "maxOutputTokens": 100000,
    "modalities": {
      "input": [
        "image",
        "text",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.1,
        "outputPricePer1M": 4.4,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-o3",
    "name": "[OR] OpenAI: o3",
    "providerId": "openai",
    "family": "openai",
    "description": "o3 is a well-rounded and powerful model across domains. It sets a new standard for math, science, coding, and visual reasoning tasks. It also excels at technical writing and instruction-following....",
    "status": "active",
    "contextWindow": 200000,
    "maxOutputTokens": 100000,
    "modalities": {
      "input": [
        "image",
        "text",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2,
        "outputPricePer1M": 8,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-o3:batch",
    "name": "[OR] OpenAI: o3 (batch)",
    "providerId": "openai",
    "family": "openai",
    "description": "o3 is a well-rounded and powerful model across domains. It sets a new standard for math, science, coding, and visual reasoning tasks. It also excels at technical writing and instruction-following....",
    "status": "active",
    "contextWindow": 200000,
    "maxOutputTokens": 100000,
    "modalities": {
      "input": [
        "image",
        "text",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1,
        "outputPricePer1M": 4,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-o4-mini",
    "name": "[OR] OpenAI: o4 Mini",
    "providerId": "openai",
    "family": "openai",
    "description": "OpenAI o4-mini is a compact reasoning model in the o-series, optimized for fast, cost-efficient performance while retaining strong multimodal and agentic capabilities. It supports tool use and demonstrates competitive reasoning...",
    "status": "active",
    "contextWindow": 200000,
    "maxOutputTokens": 100000,
    "modalities": {
      "input": [
        "image",
        "text",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.1,
        "outputPricePer1M": 4.4,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-o4-mini:batch",
    "name": "[OR] OpenAI: o4 Mini (batch)",
    "providerId": "openai",
    "family": "openai",
    "description": "OpenAI o4-mini is a compact reasoning model in the o-series, optimized for fast, cost-efficient performance while retaining strong multimodal and agentic capabilities. It supports tool use and demonstrates competitive reasoning...",
    "status": "active",
    "contextWindow": 200000,
    "maxOutputTokens": 100000,
    "modalities": {
      "input": [
        "image",
        "text",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.55,
        "outputPricePer1M": 2.2,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-4.1",
    "name": "[OR] OpenAI: GPT-4.1",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-4.1 is a flagship large language model optimized for advanced instruction following, real-world software engineering, and long-context reasoning. It supports a 1 million token context window and outperforms GPT-4o and...",
    "status": "active",
    "contextWindow": 1047576,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "image",
        "text",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2,
        "outputPricePer1M": 8,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-4.1:batch",
    "name": "[OR] OpenAI: GPT-4.1 (batch)",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-4.1 is a flagship large language model optimized for advanced instruction following, real-world software engineering, and long-context reasoning. It supports a 1 million token context window and outperforms GPT-4o and...",
    "status": "active",
    "contextWindow": 1047576,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "image",
        "text",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1,
        "outputPricePer1M": 4,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-4.1-mini",
    "name": "[OR] OpenAI: GPT-4.1 Mini",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-4.1 Mini is a mid-sized model delivering performance competitive with GPT-4o at substantially lower latency and cost. It retains a 1 million token context window and scores 45.1% on hard...",
    "status": "active",
    "contextWindow": 1047576,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "image",
        "text",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.39999999999999997,
        "outputPricePer1M": 1.5999999999999999,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-4.1-mini:batch",
    "name": "[OR] OpenAI: GPT-4.1 Mini (batch)",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-4.1 Mini is a mid-sized model delivering performance competitive with GPT-4o at substantially lower latency and cost. It retains a 1 million token context window and scores 45.1% on hard...",
    "status": "active",
    "contextWindow": 1047576,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "image",
        "text",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.19999999999999998,
        "outputPricePer1M": 0.7999999999999999,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-4.1-nano",
    "name": "[OR] OpenAI: GPT-4.1 Nano",
    "providerId": "openai",
    "family": "openai",
    "description": "For tasks that demand low latency, GPT‑4.1 nano is the fastest and cheapest model in the GPT-4.1 series. It delivers exceptional performance at a small size with its 1 million...",
    "status": "active",
    "contextWindow": 1047576,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "image",
        "text",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.09999999999999999,
        "outputPricePer1M": 0.39999999999999997,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-4.1-nano:batch",
    "name": "[OR] OpenAI: GPT-4.1 Nano (batch)",
    "providerId": "openai",
    "family": "openai",
    "description": "For tasks that demand low latency, GPT‑4.1 nano is the fastest and cheapest model in the GPT-4.1 series. It delivers exceptional performance at a small size with its 1 million...",
    "status": "active",
    "contextWindow": 1047576,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "image",
        "text",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.049999999999999996,
        "outputPricePer1M": 0.19999999999999998,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-meta-llama-llama-4-maverick",
    "name": "[OR] Meta: Llama 4 Maverick",
    "providerId": "meta-llama",
    "family": "meta-llama",
    "description": "Llama 4 Maverick 17B Instruct (128E) is a high-capacity multimodal language model from Meta, built on a mixture-of-experts (MoE) architecture with 128 experts and 17 billion active parameters per forward...",
    "status": "active",
    "contextWindow": 1048576,
    "maxOutputTokens": 115200,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.19999999999999998,
        "outputPricePer1M": 0.696,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-meta-llama-llama-4-scout",
    "name": "[OR] Meta: Llama 4 Scout",
    "providerId": "meta-llama",
    "family": "meta-llama",
    "description": "Llama 4 Scout 17B Instruct (16E) is a mixture-of-experts (MoE) language model developed by Meta, activating 17 billion parameters out of a total of 109B. It supports native multimodal input...",
    "status": "active",
    "contextWindow": 1310720,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.09999999999999999,
        "outputPricePer1M": 0.3,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-deepseek-deepseek-chat-v3-0324",
    "name": "[OR] DeepSeek: DeepSeek V3 0324",
    "providerId": "deepseek",
    "family": "deepseek",
    "description": "DeepSeek V3, a 685B-parameter, mixture-of-experts model, is the latest iteration of the flagship chat model family from the DeepSeek team. It succeeds the [DeepSeek V3](/deepseek/deepseek-chat-v3) model and performs really well...",
    "status": "active",
    "contextWindow": 163840,
    "maxOutputTokens": 147456,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.25,
        "outputPricePer1M": 1,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-o1-pro",
    "name": "[OR] OpenAI: o1-pro",
    "providerId": "openai",
    "family": "openai",
    "description": "The o1 series of models are trained with reinforcement learning to think before they answer and perform complex reasoning. The o1-pro model uses more compute to think harder and provide...",
    "status": "active",
    "contextWindow": 200000,
    "maxOutputTokens": 100000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 150,
        "outputPricePer1M": 600,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-mistralai-mistral-small-3.1-24b-instruct",
    "name": "[OR] Mistral: Mistral Small 3.1 24B",
    "providerId": "mistralai",
    "family": "mistralai",
    "description": "Mistral Small 3.1 24B Instruct is an upgraded variant of Mistral Small 3 (2501), featuring 24 billion parameters with advanced multimodal capabilities. It provides state-of-the-art performance in text-based reasoning and...",
    "status": "active",
    "contextWindow": 128000,
    "maxOutputTokens": 102400,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.351,
        "outputPricePer1M": 0.5549999999999999,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemma-3-4b-it",
    "name": "[OR] Google: Gemma 3 4B",
    "providerId": "google",
    "family": "google",
    "description": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabilities,...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.049999999999999996,
        "outputPricePer1M": 0.09999999999999999,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemma-3-12b-it",
    "name": "[OR] Google: Gemma 3 12B",
    "providerId": "google",
    "family": "google",
    "description": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabilities,...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.049999999999999996,
        "outputPricePer1M": 0.15,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-cohere-command-a",
    "name": "[OR] Cohere: Command A",
    "providerId": "cohere",
    "family": "cohere",
    "description": "Command A is an open-weights 111B parameter model with a 256k context window focused on delivering great performance across agentic, multilingual, and coding use cases. Compared to other leading proprietary...",
    "status": "active",
    "contextWindow": 256000,
    "maxOutputTokens": 8192,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2.5,
        "outputPricePer1M": 10,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-rekaai-reka-flash-3",
    "name": "[OR] Reka Flash 3",
    "providerId": "rekaai",
    "family": "rekaai",
    "description": "Reka Flash 3 is a general-purpose, instruction-tuned large language model with 21 billion parameters, developed by Reka. It excels at general chat, coding tasks, instruction-following, and function calling. Featuring a...",
    "status": "active",
    "contextWindow": 65536,
    "maxOutputTokens": 58982,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.09999999999999999,
        "outputPricePer1M": 0.19999999999999998,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemma-3-27b-it",
    "name": "[OR] Google: Gemma 3 27B",
    "providerId": "google",
    "family": "google",
    "description": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabilities,...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 117964,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.08,
        "outputPricePer1M": 0.44999999999999996,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-thedrummer-skyfall-36b-v2",
    "name": "[OR] TheDrummer: Skyfall 36B V2",
    "providerId": "thedrummer",
    "family": "thedrummer",
    "description": "Skyfall 36B v2 is an enhanced iteration of Mistral Small 2501, specifically fine-tuned for improved creativity, nuanced writing, role-playing, and coherent storytelling.",
    "status": "active",
    "contextWindow": 32768,
    "maxOutputTokens": 29491,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.55,
        "outputPricePer1M": 0.7999999999999999,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-perplexity-sonar-reasoning-pro",
    "name": "[OR] Perplexity: Sonar Reasoning Pro",
    "providerId": "perplexity",
    "family": "perplexity",
    "description": "Note: Sonar Pro pricing includes Perplexity search pricing. See [details here](https://docs.perplexity.ai/guides/pricing#detailed-pricing-breakdown-for-sonar-reasoning-pro-and-sonar-pro) Sonar Reasoning Pro is a premier reasoning model powered by DeepSeek R1 with Chain of Thought (CoT). Designed for...",
    "status": "active",
    "contextWindow": 128000,
    "maxOutputTokens": 115200,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2,
        "outputPricePer1M": 8,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-perplexity-sonar-pro",
    "name": "[OR] Perplexity: Sonar Pro",
    "providerId": "perplexity",
    "family": "perplexity",
    "description": "Note: Sonar Pro pricing includes Perplexity search pricing. See [details here](https://docs.perplexity.ai/guides/pricing#detailed-pricing-breakdown-for-sonar-reasoning-pro-and-sonar-pro) For enterprises seeking more advanced capabilities, the Sonar Pro API can handle in-depth, multi-step queries with added extensibility, like...",
    "status": "active",
    "contextWindow": 200000,
    "maxOutputTokens": 8000,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 3,
        "outputPricePer1M": 15,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-perplexity-sonar-deep-research",
    "name": "[OR] Perplexity: Sonar Deep Research",
    "providerId": "perplexity",
    "family": "perplexity",
    "description": "Sonar Deep Research is a research-focused model designed for multi-step retrieval, synthesis, and reasoning across complex topics. It autonomously searches, reads, and evaluates sources, refining its approach as it gathers...",
    "status": "active",
    "contextWindow": 128000,
    "maxOutputTokens": 115200,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2,
        "outputPricePer1M": 8,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-mistralai-mistral-saba",
    "name": "[OR] Mistral: Saba",
    "providerId": "mistralai",
    "family": "mistralai",
    "description": "Mistral Saba is a 24B-parameter language model specifically designed for the Middle East and South Asia, delivering accurate and contextually relevant responses while maintaining efficient performance. Trained on curated regional...",
    "status": "active",
    "contextWindow": 32768,
    "maxOutputTokens": 26214,
    "modalities": {
      "input": [
        "text",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.19999999999999998,
        "outputPricePer1M": 0.6,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-o3-mini-high",
    "name": "[OR] OpenAI: o3 Mini High",
    "providerId": "openai",
    "family": "openai",
    "description": "OpenAI o3-mini-high is the same model as [o3-mini](/openai/o3-mini) with reasoning_effort set to high. o3-mini is a cost-efficient language model optimized for STEM reasoning tasks, particularly excelling in science, mathematics, and...",
    "status": "active",
    "contextWindow": 200000,
    "maxOutputTokens": 100000,
    "modalities": {
      "input": [
        "text",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.1,
        "outputPricePer1M": 4.4,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-aion-labs-aion-rp-llama-3.1-8b",
    "name": "[OR] AionLabs: Aion-RP 1.0 (8B)",
    "providerId": "aion-labs",
    "family": "aion-labs",
    "description": "Aion-RP-Llama-3.1-8B ranks the highest in the character evaluation portion of the RPBench-Auto benchmark, a roleplaying-specific variant of Arena-Hard-Auto, where LLMs evaluate each other’s responses. It is a fine-tuned base model...",
    "status": "active",
    "contextWindow": 32768,
    "maxOutputTokens": 29491,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.7999999999999999,
        "outputPricePer1M": 1.5999999999999999,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen2.5-vl-72b-instruct",
    "name": "[OR] Qwen: Qwen2.5 VL 72B Instruct",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen2.5-VL is proficient in recognizing common objects such as flowers, birds, fish, and insects. It is also highly capable of analyzing texts, charts, icons, graphics, and layouts within images.",
    "status": "active",
    "contextWindow": 128000,
    "maxOutputTokens": 115200,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.7999999999999999,
        "outputPricePer1M": 1,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen-plus",
    "name": "[OR] Qwen: Qwen-Plus",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen-Plus, based on the Qwen2.5 foundation model, is a 131K context model with a balanced performance, speed, and cost combination.",
    "status": "active",
    "contextWindow": 1000000,
    "maxOutputTokens": 32768,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.26,
        "outputPricePer1M": 0.78,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-o3-mini",
    "name": "[OR] OpenAI: o3 Mini",
    "providerId": "openai",
    "family": "openai",
    "description": "OpenAI o3-mini is a cost-efficient language model optimized for STEM reasoning tasks, particularly excelling in science, mathematics, and coding. This model supports the `reasoning_effort` parameter, which can be set to...",
    "status": "active",
    "contextWindow": 200000,
    "maxOutputTokens": 100000,
    "modalities": {
      "input": [
        "text",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.1,
        "outputPricePer1M": 4.4,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-o3-mini:batch",
    "name": "[OR] OpenAI: o3 Mini (batch)",
    "providerId": "openai",
    "family": "openai",
    "description": "OpenAI o3-mini is a cost-efficient language model optimized for STEM reasoning tasks, particularly excelling in science, mathematics, and coding. This model supports the `reasoning_effort` parameter, which can be set to...",
    "status": "active",
    "contextWindow": 200000,
    "maxOutputTokens": 100000,
    "modalities": {
      "input": [
        "text",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.55,
        "outputPricePer1M": 2.2,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-mistralai-mistral-small-24b-instruct-2501",
    "name": "[OR] Mistral: Mistral Small 3",
    "providerId": "mistralai",
    "family": "mistralai",
    "description": "Mistral Small 3 is a 24B-parameter language model optimized for low-latency performance across common AI tasks. Released under the Apache 2.0 license, it features both pre-trained and instruction-tuned versions designed...",
    "status": "active",
    "contextWindow": 32768,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.049999999999999996,
        "outputPricePer1M": 0.08,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-perplexity-sonar",
    "name": "[OR] Perplexity: Sonar",
    "providerId": "perplexity",
    "family": "perplexity",
    "description": "Sonar is lightweight, affordable, fast, and simple to use — now featuring citations and the ability to customize sources. It is designed for companies seeking to integrate lightweight question-and-answer features...",
    "status": "active",
    "contextWindow": 127072,
    "maxOutputTokens": 114364,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1,
        "outputPricePer1M": 1,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-deepseek-deepseek-r1-distill-llama-70b",
    "name": "[OR] DeepSeek: R1 Distill Llama 70B",
    "providerId": "deepseek",
    "family": "deepseek",
    "description": "DeepSeek R1 Distill Llama 70B is a distilled large language model based on [Llama-3.3-70B-Instruct](/meta-llama/llama-3.3-70b-instruct), using outputs from [DeepSeek R1](/deepseek/deepseek-r1). The model combines advanced distillation techniques to achieve high performance across...",
    "status": "active",
    "contextWindow": 8192,
    "maxOutputTokens": 7372,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.7999999999999999,
        "outputPricePer1M": 0.7999999999999999,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-deepseek-deepseek-r1",
    "name": "[OR] DeepSeek: R1",
    "providerId": "deepseek",
    "family": "deepseek",
    "description": "DeepSeek R1 is here: Performance on par with [OpenAI o1](/openai/o1), but open-sourced and with fully open reasoning tokens. It's 671B parameters in size, with 37B active in an inference pass....",
    "status": "active",
    "contextWindow": 64000,
    "maxOutputTokens": 16000,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.7,
        "outputPricePer1M": 2.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-minimax-minimax-01",
    "name": "[OR] MiniMax: MiniMax-01",
    "providerId": "minimax",
    "family": "minimax",
    "description": "MiniMax-01 is a combines MiniMax-Text-01 for text generation and MiniMax-VL-01 for image understanding. It has 456 billion parameters, with 45.9 billion parameters activated per inference, and can handle a context...",
    "status": "active",
    "contextWindow": 1000192,
    "maxOutputTokens": 900172,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.19999999999999998,
        "outputPricePer1M": 1.1,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-microsoft-phi-4",
    "name": "[OR] Microsoft: Phi 4",
    "providerId": "microsoft",
    "family": "microsoft",
    "description": "[Microsoft Research](/microsoft) Phi-4 is designed to perform well in complex reasoning tasks and can operate efficiently in situations with limited memory or where quick responses are needed. At 14 billion...",
    "status": "active",
    "contextWindow": 16384,
    "maxOutputTokens": 14745,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.07,
        "outputPricePer1M": 0.14,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-deepseek-deepseek-chat",
    "name": "[OR] DeepSeek: DeepSeek V3",
    "providerId": "deepseek",
    "family": "deepseek",
    "description": "DeepSeek-V3 is the latest model from the DeepSeek team, building upon the instruction following and coding abilities of the previous versions. Pre-trained on nearly 15 trillion tokens, the reported evaluations...",
    "status": "active",
    "contextWindow": 163840,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.32,
        "outputPricePer1M": 0.8899999999999999,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-sao10k-l3.3-euryale-70b",
    "name": "[OR] Sao10K: Llama 3.3 Euryale 70B",
    "providerId": "sao10k",
    "family": "sao10k",
    "description": "Euryale L3.3 70B is a model focused on creative roleplay from [Sao10k](https://ko-fi.com/sao10k). It is the successor of [Euryale L3 70B v2.2](/models/sao10k/l3-euryale-70b).",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.65,
        "outputPricePer1M": 0.75,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-o1",
    "name": "[OR] OpenAI: o1",
    "providerId": "openai",
    "family": "openai",
    "description": "The latest and strongest model family from OpenAI, o1 is designed to spend more time thinking before responding. The o1 model series is trained with large-scale reinforcement learning to reason...",
    "status": "active",
    "contextWindow": 200000,
    "maxOutputTokens": 100000,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 15,
        "outputPricePer1M": 60,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-cohere-command-r7b-12-2024",
    "name": "[OR] Cohere: Command R7B (12-2024)",
    "providerId": "cohere",
    "family": "cohere",
    "description": "Command R7B (12-2024) is a small, fast update of the Command R+ model, delivered in December 2024. It excels at RAG, tool use, agents, and similar tasks requiring complex reasoning...",
    "status": "active",
    "contextWindow": 128000,
    "maxOutputTokens": 4000,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.0375,
        "outputPricePer1M": 0.15,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-meta-llama-llama-3.3-70b-instruct",
    "name": "[OR] Meta: Llama 3.3 70B Instruct",
    "providerId": "meta-llama",
    "family": "meta-llama",
    "description": "The Meta Llama 3.3 multilingual large language model (LLM) is a pretrained and instruction tuned generative model in 70B (text in/text out). The Llama 3.3 instruction tuned text only model...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.09999999999999999,
        "outputPricePer1M": 0.32,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-amazon-nova-lite-v1",
    "name": "[OR] Amazon: Nova Lite 1.0",
    "providerId": "amazon",
    "family": "amazon",
    "description": "Amazon Nova Lite 1.0 is a very low-cost multimodal model from Amazon that focused on fast processing of image, video, and text inputs to generate text output. Amazon Nova Lite...",
    "status": "active",
    "contextWindow": 300000,
    "maxOutputTokens": 5120,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.06,
        "outputPricePer1M": 0.24,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-amazon-nova-micro-v1",
    "name": "[OR] Amazon: Nova Micro 1.0",
    "providerId": "amazon",
    "family": "amazon",
    "description": "Amazon Nova Micro 1.0 is a text-only model that delivers the lowest latency responses in the Amazon Nova family of models at a very low cost. With a context length...",
    "status": "active",
    "contextWindow": 128000,
    "maxOutputTokens": 5120,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.035,
        "outputPricePer1M": 0.14,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-amazon-nova-pro-v1",
    "name": "[OR] Amazon: Nova Pro 1.0",
    "providerId": "amazon",
    "family": "amazon",
    "description": "Amazon Nova Pro 1.0 is a capable multimodal model from Amazon focused on providing a combination of accuracy, speed, and cost for a wide range of tasks. As of December...",
    "status": "active",
    "contextWindow": 300000,
    "maxOutputTokens": 5120,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.7999999999999999,
        "outputPricePer1M": 3.1999999999999997,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-4o-2024-11-20",
    "name": "[OR] OpenAI: GPT-4o (2024-11-20)",
    "providerId": "openai",
    "family": "openai",
    "description": "The 2024-11-20 version of GPT-4o offers a leveled-up creative writing ability with more natural, engaging, and tailored writing to improve relevance & readability. It’s also better at working with uploaded...",
    "status": "active",
    "contextWindow": 128000,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2.5,
        "outputPricePer1M": 10,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-mistralai-mistral-large-2407",
    "name": "[OR] Mistral Large 2407",
    "providerId": "mistralai",
    "family": "mistralai",
    "description": "This is Mistral AI's flagship model, Mistral Large 2 (version mistral-large-2407). It's a proprietary weights-available model and excels at reasoning, code, JSON, chat, and more. Read the launch announcement [here](https://mistral.ai/news/mistral-large-2407/)....",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 104857,
    "modalities": {
      "input": [
        "text",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2,
        "outputPricePer1M": 6,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen-2.5-coder-32b-instruct",
    "name": "[OR] Qwen2.5 Coder 32B Instruct",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen2.5-Coder is the latest series of Code-Specific Qwen large language models (formerly known as CodeQwen). Qwen2.5-Coder brings the following improvements upon CodeQwen1.5: - Significantly improvements in **code generation**, **code reasoning**...",
    "status": "active",
    "contextWindow": 32768,
    "maxOutputTokens": 29491,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.66,
        "outputPricePer1M": 1,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-thedrummer-unslopnemo-12b",
    "name": "[OR] TheDrummer: UnslopNemo 12B",
    "providerId": "thedrummer",
    "family": "thedrummer",
    "description": "UnslopNemo v4.1 is the latest addition from the creator of Rocinante, designed for adventure writing and role-play scenarios.",
    "status": "active",
    "contextWindow": 1024000,
    "maxOutputTokens": 26214,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.39999999999999997,
        "outputPricePer1M": 0.39999999999999997,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-anthracite-org-magnum-v4-72b",
    "name": "[OR] Magnum v4 72B",
    "providerId": "anthracite-org",
    "family": "anthracite-org",
    "description": "This is a series of models designed to replicate the prose quality of the Claude 3 models, specifically Sonnet(https://openrouter.ai/anthropic/claude-3.5-sonnet) and Opus(https://openrouter.ai/anthropic/claude-3-opus).\n\nThe model is fine-tuned on top of [Qwen2.5 72B](https://openrouter.ai/qwen/qwen-2.5-72b-instruct).",
    "status": "active",
    "contextWindow": 32768,
    "maxOutputTokens": 4096,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2.5,
        "outputPricePer1M": 5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen-2.5-7b-instruct",
    "name": "[OR] Qwen: Qwen2.5 7B Instruct",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen2.5 7B is the latest series of Qwen large language models. Qwen2.5 brings the following improvements upon Qwen2: - Significantly more knowledge and has greatly improved capabilities in coding and...",
    "status": "active",
    "contextWindow": 32768,
    "maxOutputTokens": 29491,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.09999999999999999,
        "outputPricePer1M": 0.19999999999999998,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-meta-llama-llama-3.2-1b-instruct",
    "name": "[OR] Meta: Llama 3.2 1B Instruct",
    "providerId": "meta-llama",
    "family": "meta-llama",
    "description": "Llama 3.2 1B is a 1-billion-parameter language model focused on efficiently performing natural language tasks, such as summarization, dialogue, and multilingual text analysis. Its smaller size allows it to operate...",
    "status": "active",
    "contextWindow": 60000,
    "maxOutputTokens": 54000,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.027,
        "outputPricePer1M": 0.201,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-meta-llama-llama-3.2-3b-instruct",
    "name": "[OR] Meta: Llama 3.2 3B Instruct",
    "providerId": "meta-llama",
    "family": "meta-llama",
    "description": "Llama 3.2 3B is a 3-billion-parameter multilingual large language model, optimized for advanced natural language processing tasks like dialogue generation, reasoning, and summarization. Designed with the latest transformer architecture, it...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 117964,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.049999999999999996,
        "outputPricePer1M": 0.33,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-qwen-qwen-2.5-72b-instruct",
    "name": "[OR] Qwen2.5 72B Instruct",
    "providerId": "qwen",
    "family": "qwen",
    "description": "Qwen2.5 72B is the latest series of Qwen large language models. Qwen2.5 brings the following improvements upon Qwen2: - Significantly more knowledge and has greatly improved capabilities in coding and...",
    "status": "active",
    "contextWindow": 32768,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.36,
        "outputPricePer1M": 0.39999999999999997,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-cohere-command-r-08-2024",
    "name": "[OR] Cohere: Command R (08-2024)",
    "providerId": "cohere",
    "family": "cohere",
    "description": "command-r-08-2024 is an update of the [Command R](/models/cohere/command-r) with improved performance for multilingual retrieval-augmented generation (RAG) and tool use. More broadly, it is better at math, code and reasoning and...",
    "status": "active",
    "contextWindow": 128000,
    "maxOutputTokens": 4000,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.15,
        "outputPricePer1M": 0.6,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-cohere-command-r-plus-08-2024",
    "name": "[OR] Cohere: Command R+ (08-2024)",
    "providerId": "cohere",
    "family": "cohere",
    "description": "command-r-plus-08-2024 is an update of the [Command R+](/models/cohere/command-r-plus) with roughly 50% higher throughput and 25% lower latencies as compared to the previous Command R+ version, while keeping the hardware footprint...",
    "status": "active",
    "contextWindow": 128000,
    "maxOutputTokens": 4000,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2.5,
        "outputPricePer1M": 10,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-sao10k-l3.1-euryale-70b",
    "name": "[OR] Sao10K: Llama 3.1 Euryale 70B v2.2",
    "providerId": "sao10k",
    "family": "sao10k",
    "description": "Euryale L3.1 70B v2.2 is a model focused on creative roleplay from [Sao10k](https://ko-fi.com/sao10k). It is the successor of [Euryale L3 70B v2.1](/models/sao10k/l3-euryale-70b).",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.85,
        "outputPricePer1M": 0.85,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-nousresearch-hermes-3-llama-3.1-70b",
    "name": "[OR] Nous: Hermes 3 70B Instruct",
    "providerId": "nousresearch",
    "family": "nousresearch",
    "description": "Hermes 3 is a generalist language model with many improvements over [Hermes 2](/models/nousresearch/nous-hermes-2-mistral-7b-dpo), including advanced agentic capabilities, much better roleplaying, reasoning, multi-turn conversation, long context coherence, and improvements across the...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.7,
        "outputPricePer1M": 0.7,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-nousresearch-hermes-3-llama-3.1-405b",
    "name": "[OR] Nous: Hermes 3 405B Instruct",
    "providerId": "nousresearch",
    "family": "nousresearch",
    "description": "Hermes 3 is a generalist language model with many improvements over Hermes 2, including advanced agentic capabilities, much better roleplaying, reasoning, multi-turn conversation, long context coherence, and improvements across the...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1,
        "outputPricePer1M": 1,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-sao10k-l3-lunaris-8b",
    "name": "[OR] Sao10K: Llama 3 8B Lunaris",
    "providerId": "sao10k",
    "family": "sao10k",
    "description": "Lunaris 8B is a versatile generalist and roleplaying model based on Llama 3. It's a strategic merge of multiple models, designed to balance creativity with improved logic and general knowledge....",
    "status": "active",
    "contextWindow": 8192,
    "maxOutputTokens": 7372,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.04,
        "outputPricePer1M": 0.049999999999999996,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-4o-2024-08-06",
    "name": "[OR] OpenAI: GPT-4o (2024-08-06)",
    "providerId": "openai",
    "family": "openai",
    "description": "The 2024-08-06 version of GPT-4o offers improved performance in structured outputs, with the ability to supply a JSON schema in the respone_format. Read more [here](https://openai.com/index/introducing-structured-outputs-in-the-api/). GPT-4o (\"o\" for \"omni\") is...",
    "status": "active",
    "contextWindow": 128000,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2.5,
        "outputPricePer1M": 10,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-meta-llama-llama-3.1-70b-instruct",
    "name": "[OR] Meta: Llama 3.1 70B Instruct",
    "providerId": "meta-llama",
    "family": "meta-llama",
    "description": "Meta's latest class of model (Llama 3.1) launched with a variety of sizes & flavors. This 70B instruct-tuned version is optimized for high quality dialogue usecases. It has demonstrated strong...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.39999999999999997,
        "outputPricePer1M": 0.39999999999999997,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-meta-llama-llama-3.1-8b-instruct",
    "name": "[OR] Meta: Llama 3.1 8B Instruct",
    "providerId": "meta-llama",
    "family": "meta-llama",
    "description": "Meta's latest class of model (Llama 3.1) launched with a variety of sizes & flavors. This 8B instruct-tuned version is fast and efficient. It has demonstrated strong performance compared to...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 117964,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.049999999999999996,
        "outputPricePer1M": 0.08,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-mistralai-mistral-nemo",
    "name": "[OR] Mistral: Mistral Nemo",
    "providerId": "mistralai",
    "family": "mistralai",
    "description": "A 12B parameter model with a 128k token context length built by Mistral in collaboration with NVIDIA. The model is multilingual, supporting English, French, German, Spanish, Italian, Portuguese, Chinese, Japanese,...",
    "status": "active",
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.019000000000000003,
        "outputPricePer1M": 0.03,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-4o-mini",
    "name": "[OR] OpenAI: GPT-4o-mini",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-4o mini is OpenAI's newest model after [GPT-4 Omni](/models/openai/gpt-4o), supporting both text and image inputs with text outputs. As their most advanced small model, it is many multiples more affordable...",
    "status": "active",
    "contextWindow": 128000,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.15,
        "outputPricePer1M": 0.6,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-4o-mini-2024-07-18",
    "name": "[OR] OpenAI: GPT-4o-mini (2024-07-18)",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-4o mini is OpenAI's newest model after [GPT-4 Omni](/models/openai/gpt-4o), supporting both text and image inputs with text outputs. As their most advanced small model, it is many multiples more affordable...",
    "status": "active",
    "contextWindow": 128000,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.15,
        "outputPricePer1M": 0.6,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-4o-mini:batch",
    "name": "[OR] OpenAI: GPT-4o-mini (batch)",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-4o mini is OpenAI's newest model after [GPT-4 Omni](/models/openai/gpt-4o), supporting both text and image inputs with text outputs. As their most advanced small model, it is many multiples more affordable...",
    "status": "active",
    "contextWindow": 128000,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.075,
        "outputPricePer1M": 0.3,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-google-gemma-2-27b-it",
    "name": "[OR] Google: Gemma 2 27B",
    "providerId": "google",
    "family": "google",
    "description": "Gemma 2 27B by Google is an open model built from the same research and technology used to create the [Gemini models](/models?q=gemini). Gemma models are well-suited for a variety of...",
    "status": "active",
    "contextWindow": 8192,
    "maxOutputTokens": 2048,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.65,
        "outputPricePer1M": 0.65,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-4o",
    "name": "[OR] OpenAI: GPT-4o",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-4o (\"o\" for \"omni\") is OpenAI's latest AI model, supporting both text and image inputs with text outputs. It maintains the intelligence level of [GPT-4 Turbo](/models/openai/gpt-4-turbo) while being twice as...",
    "status": "active",
    "contextWindow": 128000,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2.5,
        "outputPricePer1M": 10,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-4o-2024-05-13",
    "name": "[OR] OpenAI: GPT-4o (2024-05-13)",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-4o (\"o\" for \"omni\") is OpenAI's latest AI model, supporting both text and image inputs with text outputs. It maintains the intelligence level of [GPT-4 Turbo](/models/openai/gpt-4-turbo) while being twice as...",
    "status": "active",
    "contextWindow": 128000,
    "maxOutputTokens": 4096,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 5,
        "outputPricePer1M": 15,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-4o:batch",
    "name": "[OR] OpenAI: GPT-4o (batch)",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-4o (\"o\" for \"omni\") is OpenAI's latest AI model, supporting both text and image inputs with text outputs. It maintains the intelligence level of [GPT-4 Turbo](/models/openai/gpt-4-turbo) while being twice as...",
    "status": "active",
    "contextWindow": 128000,
    "maxOutputTokens": 16384,
    "modalities": {
      "input": [
        "text",
        "image",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.25,
        "outputPricePer1M": 5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-mistralai-mixtral-8x22b-instruct",
    "name": "[OR] Mistral: Mixtral 8x22B Instruct",
    "providerId": "mistralai",
    "family": "mistralai",
    "description": "Mistral's official instruct fine-tuned version of [Mixtral 8x22B](/models/mistralai/mixtral-8x22b). It uses 39B active parameters out of 141B, offering unparalleled cost efficiency for its size. Its strengths include: - strong math, coding,...",
    "status": "active",
    "contextWindow": 65536,
    "maxOutputTokens": 52428,
    "modalities": {
      "input": [
        "text",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2,
        "outputPricePer1M": 6,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-microsoft-wizardlm-2-8x22b",
    "name": "[OR] WizardLM-2 8x22B",
    "providerId": "microsoft",
    "family": "microsoft",
    "description": "WizardLM-2 8x22B is Microsoft AI's most advanced Wizard model. It demonstrates highly competitive performance compared to leading proprietary models, and it consistently outperforms all existing state-of-the-art opensource models. It is...",
    "status": "active",
    "contextWindow": 65535,
    "maxOutputTokens": 8000,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.62,
        "outputPricePer1M": 0.62,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-4-turbo",
    "name": "[OR] OpenAI: GPT-4 Turbo",
    "providerId": "openai",
    "family": "openai",
    "description": "The latest GPT-4 Turbo model with vision capabilities. Vision requests can now use JSON mode and function calling.\n\nTraining data: up to December 2023.",
    "status": "active",
    "contextWindow": 128000,
    "maxOutputTokens": 4096,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 10,
        "outputPricePer1M": 30,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-4-turbo:batch",
    "name": "[OR] OpenAI: GPT-4 Turbo (batch)",
    "providerId": "openai",
    "family": "openai",
    "description": "The latest GPT-4 Turbo model with vision capabilities. Vision requests can now use JSON mode and function calling.\n\nTraining data: up to December 2023.",
    "status": "active",
    "contextWindow": 128000,
    "maxOutputTokens": 4096,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 5,
        "outputPricePer1M": 15,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-anthropic-claude-3-haiku",
    "name": "[OR] Anthropic: Claude 3 Haiku",
    "providerId": "anthropic",
    "family": "anthropic",
    "description": "Claude 3 Haiku is Anthropic's fastest and most compact model for\nnear-instant responsiveness. Quick and accurate targeted performance.\n\nSee the launch announcement and benchmark results [here](https://www.anthropic.com/news/claude-3-haiku)\n\n#multimodal",
    "status": "active",
    "contextWindow": 200000,
    "maxOutputTokens": 4096,
    "modalities": {
      "input": [
        "text",
        "image"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.25,
        "outputPricePer1M": 1.25,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-mistralai-mistral-large",
    "name": "[OR] Mistral Large",
    "providerId": "mistralai",
    "family": "mistralai",
    "description": "This is Mistral AI's flagship model, Mistral Large 2 (version `mistral-large-2407`). It's a proprietary weights-available model and excels at reasoning, code, JSON, chat, and more. Read the launch announcement [here](https://mistral.ai/news/mistral-large-2407/)....",
    "status": "active",
    "contextWindow": 128000,
    "maxOutputTokens": 102400,
    "modalities": {
      "input": [
        "text",
        "file"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 2,
        "outputPricePer1M": 6,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-3.5-turbo-0613",
    "name": "[OR] OpenAI: GPT-3.5 Turbo (older v0613)",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-3.5 Turbo is OpenAI's fastest model. It can understand and generate natural language or code, and is optimized for chat and traditional completion tasks.\n\nTraining data up to Sep 2021.",
    "status": "active",
    "contextWindow": 4095,
    "maxOutputTokens": 3685,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1,
        "outputPricePer1M": 2,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-4-turbo-preview",
    "name": "[OR] OpenAI: GPT-4 Turbo Preview",
    "providerId": "openai",
    "family": "openai",
    "description": "The preview GPT-4 model with improved instruction following, JSON mode, reproducible outputs, parallel function calling, and more. Training data: up to Dec 2023. **Note:** heavily rate limited by OpenAI while...",
    "status": "active",
    "contextWindow": 128000,
    "maxOutputTokens": 4096,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 10,
        "outputPricePer1M": 30,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openrouter-auto",
    "name": "[OR] Auto Router",
    "providerId": "openrouter",
    "family": "openrouter",
    "description": "The Auto Router automatically selects the best model for your prompt, powered by the wisdom of the market. It routes you based on what the OpenRouter community collectively spends on...",
    "status": "active",
    "contextWindow": 2000000,
    "maxOutputTokens": 0,
    "modalities": {
      "input": [
        "text",
        "image",
        "audio",
        "file",
        "video"
      ],
      "output": [
        "text",
        "image"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": -1000000,
        "outputPricePer1M": -1000000,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-3.5-turbo-instruct",
    "name": "[OR] OpenAI: GPT-3.5 Turbo Instruct",
    "providerId": "openai",
    "family": "openai",
    "description": "This model is a variant of GPT-3.5 Turbo tuned for instructional prompts and omitting chat-related optimizations. Training data: up to Sep 2021.",
    "status": "active",
    "contextWindow": 4095,
    "maxOutputTokens": 3685,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 1.5,
        "outputPricePer1M": 2,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-3.5-turbo-16k",
    "name": "[OR] OpenAI: GPT-3.5 Turbo 16k",
    "providerId": "openai",
    "family": "openai",
    "description": "This model offers four times the context length of gpt-3.5-turbo, allowing it to support approximately 20 pages of text in a single request at a higher cost. Training data: up...",
    "status": "active",
    "contextWindow": 16385,
    "maxOutputTokens": 4096,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 3,
        "outputPricePer1M": 4,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-mancer-weaver",
    "name": "[OR] Mancer: Weaver (alpha)",
    "providerId": "mancer",
    "family": "mancer",
    "description": "An attempt to recreate Claude-style verbosity, but don't expect the same level of coherence or memory. Meant for use in roleplay/narrative situations.",
    "status": "active",
    "contextWindow": 8000,
    "maxOutputTokens": 6000,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.39999999999999997,
        "outputPricePer1M": 0.75,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-undi95-remm-slerp-l2-13b",
    "name": "[OR] ReMM SLERP 13B",
    "providerId": "undi95",
    "family": "undi95",
    "description": "A recreation trial of the original MythoMax-L2-B13 but with updated models. #merge",
    "status": "active",
    "contextWindow": 6144,
    "maxOutputTokens": 5529,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.35,
        "outputPricePer1M": 0.65,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-gryphe-mythomax-l2-13b",
    "name": "[OR] MythoMax 13B",
    "providerId": "gryphe",
    "family": "gryphe",
    "description": "One of the highest performing and most popular fine-tunes of Llama 2 13B, with rich descriptions and roleplay. #merge",
    "status": "active",
    "contextWindow": 8192,
    "maxOutputTokens": 3686,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.06,
        "outputPricePer1M": 0.06,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-3.5-turbo",
    "name": "[OR] OpenAI: GPT-3.5 Turbo",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-3.5 Turbo is OpenAI's fastest model. It can understand and generate natural language or code, and is optimized for chat and traditional completion tasks.\n\nTraining data up to Sep 2021.",
    "status": "active",
    "contextWindow": 16385,
    "maxOutputTokens": 4096,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.5,
        "outputPricePer1M": 1.5,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-3.5-turbo:batch",
    "name": "[OR] OpenAI: GPT-3.5 Turbo (batch)",
    "providerId": "openai",
    "family": "openai",
    "description": "GPT-3.5 Turbo is OpenAI's fastest model. It can understand and generate natural language or code, and is optimized for chat and traditional completion tasks.\n\nTraining data up to Sep 2021.",
    "status": "active",
    "contextWindow": 16385,
    "maxOutputTokens": 4096,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 0.25,
        "outputPricePer1M": 0.75,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  },
  {
    "id": "or-openai-gpt-4",
    "name": "[OR] OpenAI: GPT-4",
    "providerId": "openai",
    "family": "openai",
    "description": "OpenAI's flagship model, GPT-4 is a large-scale multimodal language model capable of solving difficult problems with greater accuracy than previous models due to its broader general knowledge and advanced reasoning...",
    "status": "active",
    "contextWindow": 8191,
    "maxOutputTokens": 4096,
    "modalities": {
      "input": [
        "text"
      ],
      "output": [
        "text"
      ]
    },
    "tags": [
      "openrouter"
    ],
    "pricing": [
      {
        "inputPricePer1M": 30,
        "outputPricePer1M": 60,
        "currency": "USD",
        "effectiveDate": "2026-09-05",
        "source": "https://openrouter.ai/models"
      }
    ]
  }
]