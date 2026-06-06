interface HandyCricketState {
  playerRuns: number
  computerRuns: number
  playerWickets: number
  computerWickets: number
  ballsBowled: number
  isBatting: boolean
  isOver: boolean
  totalBalls: number
  winner: string | null
  lastBall: string | null
}

function createState(): HandyCricketState {
  return {
    playerRuns: 0, computerRuns: 0,
    playerWickets: 0, computerWickets: 0,
    ballsBowled: 0, isBatting: true, isOver: false,
    totalBalls: 60, winner: null, lastBall: null,
  }
}

function randomRun(): number {
  return Math.floor(Math.random() * 6) + 1
}

function playBall(state: HandyCricketState, playerRun: number): HandyCricketState {
  const computerRun = randomRun()
  const newState = { ...state, ballsBowled: state.ballsBowled + 1 }

  if (state.isBatting) {
    if (playerRun === computerRun) {
      newState.playerWickets++
      newState.lastBall = "OUT"
      if (newState.playerWickets >= 10 || newState.ballsBowled >= newState.totalBalls) {
        newState.isBatting = false
        newState.ballsBowled = 0
        newState.lastBall = "Innings over! Now bowling."
      }
    } else {
      newState.playerRuns += playerRun
      newState.lastBall = `${playerRun} runs`
    }
  } else {
    newState.computerRuns += computerRun
    newState.lastBall = `Computer scored ${computerRun} runs`
    if (newState.computerRuns > state.playerRuns) {
      newState.isOver = true
      newState.winner = "Computer"
      newState.lastBall = "Computer wins!"
    }
  }

  if (!newState.isBatting && !newState.isOver) {
    if (computerRun === playerRun) {
      newState.computerWickets++
      newState.lastBall = "Computer OUT!"
      if (newState.computerWickets >= 10 || newState.ballsBowled >= newState.totalBalls) {
        newState.isOver = true
        newState.winner = newState.playerRuns > newState.computerRuns ? "Player" : newState.computerRuns > newState.playerRuns ? "Computer" : "Draw"
        newState.lastBall = newState.winner === "Draw" ? "Match drawn!" : `${newState.winner} wins!`
      }
    } else {
      newState.lastBall = `Computer scored ${computerRun} runs`
    }

    if (!newState.isOver && newState.computerRuns > state.playerRuns) {
      newState.isOver = true
      newState.winner = "Computer"
      newState.lastBall = "Computer wins!"
    }
  }

  if (newState.isBatting && newState.ballsBowled >= newState.totalBalls) {
    newState.isBatting = false
    newState.ballsBowled = 0
    newState.lastBall = "Innings over! Now bowling."
  }

  return newState
}

export async function handleHandyCricket(request: Request): Promise<Response> {
  if (request.method === "GET") {
    return Response.json({
      game: "Handy Cricket",
      description: "Play hand cricket against the computer. Choose a number 1-6 to bat. If computer picks the same number, you're out!",
      rules: [
        "Player bats first and picks a number 1-6 for each ball",
        "Computer randomly picks a number 1-6",
        "If both numbers match, the batsman is out",
        "If numbers differ, batsman scores that many runs",
        "After 10 wickets, computer bats with the same target",
        "Higher total wins",
      ],
      usage: {
        play: { method: "POST", path: "/games/handy-cricket", body: { run: 4, state: { playerRuns: 0, computerRuns: 0, playerWickets: 0, computerWickets: 0, ballsBowled: 0, isBatting: true, isOver: false, totalBalls: 60, winner: null, lastBall: null } } },
      },
      state: createState(),
    })
  }

  if (request.method === "POST") {
    try {
      const { run, state } = await request.json() as { run: number; state: HandyCricketState | null }

      if (!run || run < 1 || run > 6) {
        return Response.json({ error: "Run must be between 1 and 6" }, { status: 400 })
      }

      const currentState = state || createState()
      if (currentState.isOver) {
        return Response.json({ error: "Game is over", winner: currentState.winner }, { status: 400 })
      }

      const newState = playBall(currentState, run)
      return Response.json({ state: newState })
    } catch {
      return Response.json({ error: "Invalid JSON body" }, { status: 400 })
    }
  }

  return Response.json({ error: "Method not allowed" }, { status: 405 })
}
