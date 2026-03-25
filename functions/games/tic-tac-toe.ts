interface Board {
  board: (string | null)[][]
  turn: string
  winner: string | null
  draw: boolean
}

function createBoard(): Board {
  return {
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
    turn: "X",
    winner: null,
    draw: false,
  }
}

function checkWinner(board: (string | null)[][]): string | null {
  const lines = [
    // rows
    [board[0][0], board[0][1], board[0][2]],
    [board[1][0], board[1][1], board[1][2]],
    [board[2][0], board[2][1], board[2][2]],
    // columns
    [board[0][0], board[1][0], board[2][0]],
    [board[0][1], board[1][1], board[2][1]],
    [board[0][2], board[1][2], board[2][2]],
    // diagonals
    [board[0][0], board[1][1], board[2][2]],
    [board[0][2], board[1][1], board[2][0]],
  ]

  for (const [a, b, c] of lines) {
    if (a && a === b && b === c) return a
  }

  return null
}

function isDraw(board: (string | null)[][]): boolean {
  return board.every(row => row.every(cell => cell !== null))
}

export const onRequest: PagesFunction = async ({ request }) => {
  const url = new URL(request.url)

  if (request.method === "GET") {
    const body = {
      game: "Tic Tac Toe",
      description: "Returns a fresh board. POST to make a move.",
      usage: {
        start: { method: "GET", path: "/games/tic-tac-toe" },
        move: {
          method: "POST",
          path: "/games/tic-tac-toe",
          body: { board: "[[null,null,null],[null,null,null],[null,null,null]]", row: 0, col: 0, player: "X" },
        },
      },
    }

    return Response.json(body)
  }

  if (request.method === "POST") {
    try {
      const { board: rawBoard, row, col, player } = await request.json() as {
        board: (string | null)[][]
        row: number
        col: number
        player: string
      }

      let board = createBoard()
      if (rawBoard) board.board = rawBoard

      if (board.winner || board.draw) {
        return Response.json({ error: "Game is already over", board }, { status: 400 })
      }

      if (player !== board.turn) {
        return Response.json({ error: `Not your turn. It's ${board.turn}'s turn`, board }, { status: 400 })
      }

      if (row < 0 || row > 2 || col < 0 || col > 2) {
        return Response.json({ error: "Invalid position. Row and col must be 0-2", board }, { status: 400 })
      }

      if (board.board[row][col] !== null) {
        return Response.json({ error: "Cell already taken", board }, { status: 400 })
      }

      board.board[row][col] = player
      board.winner = checkWinner(board.board)
      board.draw = !board.winner && isDraw(board.board)
      board.turn = player === "X" ? "O" : "X"

      return Response.json(board)
    } catch {
      return Response.json({ error: "Invalid JSON body" }, { status: 400 })
    }
  }

  return Response.json({ error: "Method not allowed" }, { status: 405 })
}
