interface ChessPiece {
  type: PieceType
  color: "w" | "b"
}

type PieceType = "K" | "Q" | "R" | "B" | "N" | "P"

type ChessBoard = (ChessPiece | null)[][]

interface ChessState {
  board: ChessBoard
  turn: "w" | "b"
  gameOver: boolean
  result: string | null
  lastMove: string | null
}

const INITIAL_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w"

function fenToBoard(fen: string): ChessState {
  const parts = fen.split(" ")
  const ranks = parts[0].split("/")
  const board: ChessBoard = []
  for (const rank of ranks) {
    const row: (ChessPiece | null)[] = []
    for (const ch of rank) {
      if (ch >= "1" && ch <= "8") {
        for (let i = 0; i < parseInt(ch); i++) row.push(null)
      } else {
        const color = ch === ch.toUpperCase() ? "w" : "b"
        const type = ch.toUpperCase() as PieceType
        row.push({ type, color })
      }
    }
    board.push(row)
  }
  const turn = (parts[1] || "w") as "w" | "b"
  return { board, turn, gameOver: false, result: null, lastMove: null }
}

function boardToFen(state: ChessState): string {
  const ranks = state.board.map(row => {
    let fen = ""
    let empty = 0
    for (const cell of row) {
      if (cell === null) {
        empty++
      } else {
        if (empty > 0) { fen += empty.toString(); empty = 0 }
        fen += cell.color === "w" ? cell.type : cell.type.toLowerCase()
      }
    }
    if (empty > 0) fen += empty.toString()
    return fen
  })
  return `${ranks.join("/")} ${state.turn}`
}

const FILE_NAMES = "abcdefgh"

function parseUci(uci: string): { fromR: number; fromC: number; toR: number; toC: number } | null {
  if (uci.length < 4) return null
  const fromC = FILE_NAMES.indexOf(uci[0])
  const fromR = 8 - parseInt(uci[1])
  const toC = FILE_NAMES.indexOf(uci[2])
  const toR = 8 - parseInt(uci[3])
  if (fromC === -1 || toC === -1 || isNaN(fromR) || isNaN(toR)) return null
  if (fromR < 0 || fromR > 7 || toR < 0 || toR > 7) return null
  return { fromR, fromC, toR, toC }
}

function inBounds(r: number, c: number): boolean {
  return r >= 0 && r < 8 && c >= 0 && c < 8
}

function isOpponent(piece: ChessPiece, color: "w" | "b"): boolean {
  return piece.color !== color
}

function isValidMove(state: ChessState, fromR: number, fromC: number, toR: number, toC: number): string | null {
  const piece = state.board[fromR][fromC]
  if (!piece) return "No piece at source square"
  if (piece.color !== state.turn) return "Not your turn"
  if (state.gameOver) return "Game is already over"

  const target = state.board[toR][toC]
  if (target && target.color === piece.color) return "Cannot capture your own piece"

  const dr = toR - fromR
  const dc = toC - fromC
  const adr = Math.abs(dr)
  const adc = Math.abs(dc)

  switch (piece.type) {
    case "P": {
      const dir = piece.color === "w" ? -1 : 1
      const startRow = piece.color === "w" ? 6 : 1
      if (dc === 0 && !target) {
        if (dr === dir) return null
        if (dr === 2 * dir && fromR === startRow && !state.board[fromR + dir][fromC]) return null
        return "Invalid pawn move"
      }
      if (adc === 1 && dr === dir && target && isOpponent(target, piece.color)) return null
      return "Invalid pawn move"
    }
    case "R": {
      if (fromR !== toR && fromC !== toC) return "Rook must move in straight line"
      const rStep = dr === 0 ? 0 : dr > 0 ? 1 : -1
      const cStep = dc === 0 ? 0 : dc > 0 ? 1 : -1
      let r = fromR + rStep, c = fromC + cStep
      while (r !== toR || c !== toC) {
        if (state.board[r][c]) return "Rook path is blocked"
        r += rStep; c += cStep
      }
      return null
    }
    case "B": {
      if (adr !== adc) return "Bishop must move diagonally"
      const rStep = dr > 0 ? 1 : -1
      const cStep = dc > 0 ? 1 : -1
      let r = fromR + rStep, c = fromC + cStep
      while (r !== toR || c !== toC) {
        if (state.board[r][c]) return "Bishop path is blocked"
        r += rStep; c += cStep
      }
      return null
    }
    case "Q": {
      if (fromR !== toR && fromC !== toC && adr !== adc) return "Queen must move in straight line or diagonally"
      const rStep = dr === 0 ? 0 : dr > 0 ? 1 : -1
      const cStep = dc === 0 ? 0 : dc > 0 ? 1 : -1
      let r = fromR + rStep, c = fromC + cStep
      while (r !== toR || c !== toC) {
        if (state.board[r][c]) return "Queen path is blocked"
        r += rStep; c += cStep
      }
      return null
    }
    case "N": {
      if (!((adr === 2 && adc === 1) || (adr === 1 && adc === 2))) return "Invalid knight move"
      return null
    }
    case "K": {
      if (adr > 1 || adc > 1) return "King can only move one square"
      return null
    }
    default:
      return "Unknown piece type"
  }
}

function applyMove(state: ChessState, fromR: number, fromC: number, toR: number, toC: number): ChessState {
  const newBoard: ChessBoard = state.board.map(row => row.map(cell => cell ? { ...cell } : null))
  newBoard[toR][toC] = newBoard[fromR][fromC]
  newBoard[fromR][fromC] = null
  const nextTurn = state.turn === "w" ? "b" : "w"
  const fromSquare = FILE_NAMES[fromC] + (8 - fromR)
  const toSquare = FILE_NAMES[toC] + (8 - toR)
  const captured = state.board[toR][toC]
  const moveStr = `${fromSquare}${toSquare}${captured ? "x" : ""}`
  return { board: newBoard, turn: nextTurn, gameOver: false, result: null, lastMove: moveStr }
}

function countPieces(board: ChessBoard, color: "w" | "b"): number {
  return board.flat().filter(p => p && p.color === color).length
}

export async function handleChess(request: Request): Promise<Response> {
  const url = new URL(request.url)

  if (request.method === "GET") {
    const fen = url.searchParams.get("fen") || INITIAL_FEN
    const state = fenToBoard(fen)
    return Response.json({
      game: "Chess",
      description: "Play chess via API. Board represented in FEN notation. Send moves in UCI format (e.g. e2e4).",
      usage: {
        start: { method: "GET", path: "/games/chess", description: "Get fresh board (FEN: rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w)" },
        move: { method: "POST", path: "/games/chess", body: { fen: "FEN string", move: "e2e4" } },
      },
      fen: INITIAL_FEN,
      turn: "w",
      board: state.board,
    })
  }

  if (request.method === "POST") {
    try {
      const { fen, move } = await request.json() as { fen: string; move: string }
      if (!fen || !move) {
        return Response.json({ error: "fen and move are required" }, { status: 400 })
      }

      const state = fenToBoard(fen)
      if (state.gameOver) {
        return Response.json({ error: "Game is already over", result: state.result }, { status: 400 })
      }

      const parsed = parseUci(move)
      if (!parsed) {
        return Response.json({ error: "Invalid move format. Use UCI notation (e.g. e2e4)" }, { status: 400 })
      }

      const { fromR, fromC, toR, toC } = parsed
      const piece = state.board[fromR][fromC]
      if (!piece) {
        return Response.json({ error: "No piece at source square" }, { status: 400 })
      }

      const validity = isValidMove(state, fromR, fromC, toR, toC)
      if (validity !== null) {
        return Response.json({ error: validity, fen: boardToFen(state), turn: state.turn }, { status: 400 })
      }

      const newState = applyMove(state, fromR, fromC, toR, toC)
      const newFen = boardToFen(newState)

      const wCount = countPieces(newState.board, "w")
      const bCount = countPieces(newState.board, "b")
      if (wCount < 1 || bCount < 1) {
        newState.gameOver = true
        newState.result = wCount < 1 ? "Black wins" : "White wins"
      }

      return Response.json({ fen: newFen, turn: newState.turn, gameOver: newState.gameOver, result: newState.result, lastMove: newState.lastMove })
    } catch {
      return Response.json({ error: "Invalid JSON body" }, { status: 400 })
    }
  }

  return Response.json({ error: "Method not allowed" }, { status: 405 })
}
