export const onRequest: PagesFunction = async () => {
  const body = {
    name: "Games API",
    description: "Game-related endpoints",
    games: [
      {
        name: "Tic Tac Toe",
        path: "/games/tic-tac-toe",
        description: "Play tic-tac-toe via API",
      },
    ],
  }

  return Response.json(body)
}
