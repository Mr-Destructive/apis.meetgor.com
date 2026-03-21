export const onRequest: PagesFunction = async () => {
  const body = {
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
  }

  return Response.json(body)
}
