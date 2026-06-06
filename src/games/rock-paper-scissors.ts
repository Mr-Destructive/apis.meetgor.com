const CHOICES = ["rock", "paper", "scissors"] as const
type Choice = typeof CHOICES[number]

function randomChoice(): Choice {
  return CHOICES[Math.floor(Math.random() * 3)]
}

function determineWinner(player: Choice, computer: Choice): "win" | "lose" | "draw" {
  if (player === computer) return "draw"
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) return "win"
  return "lose"
}

export async function handleRockPaperScissors(request: Request): Promise<Response> {
  if (request.method === "GET") {
    return Response.json({
      game: "Rock Paper Scissors",
      description: "Play rock paper scissors against the computer.",
      usage: {
        play: { method: "POST", path: "/games/rock-paper-scissors", body: { choice: "rock | paper | scissors" } },
      },
      choices: ["rock", "paper", "scissors"],
    })
  }

  if (request.method === "POST") {
    try {
      const { choice } = await request.json() as { choice: string }
      const normalized = choice?.toLowerCase()

      if (!normalized || !CHOICES.includes(normalized as Choice)) {
        return Response.json({ error: "Invalid choice. Must be rock, paper, or scissors" }, { status: 400 })
      }

      const playerChoice = normalized as Choice
      const computerChoice = randomChoice()
      const result = determineWinner(playerChoice, computerChoice)

      const resultText = result === "win" ? "You win!" : result === "lose" ? "Computer wins!" : "Draw!"

      return Response.json({ player: playerChoice, computer: computerChoice, result, message: resultText })
    } catch {
      return Response.json({ error: "Invalid JSON body" }, { status: 400 })
    }
  }

  return Response.json({ error: "Method not allowed" }, { status: 405 })
}
