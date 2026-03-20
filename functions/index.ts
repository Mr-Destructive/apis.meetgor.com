interface ApiEntry {
  name: string
  description: string
  path: string
  endpoints: string[]
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

export const onRequest: PagesFunction = async () => {
  const body = {
    name: "apis.meetgor.com",
    version: "1.0.0",
    apis,
  }

  return Response.json(body)
}
