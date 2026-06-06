interface Fighter {
  id: string
  name: string
  health: number
  maxHealth: number
  attack: number
  defense: number
  specialName: string
  specialDamage: number
  specialDescription: string
}

interface FightState {
  player: Fighter
  robot: Fighter
  turn: "player" | "robot"
  gameOver: boolean
  winner: string | null
  log: string[]
  round: number
  defendBoost: number
}

const CHARACTERS: Fighter[] = [
  { id: "cyber-samurai", name: "Cyber Samurai", health: 100, maxHealth: 100, attack: 18, defense: 12, specialName: "Blade Storm", specialDamage: 35, specialDescription: "Unleash a flurry of quick slashes" },
  { id: "flame-titan", name: "Flame Titan", health: 120, maxHealth: 120, attack: 22, defense: 8, specialName: "Inferno Blast", specialDamage: 45, specialDescription: "Engulf the opponent in flames" },
  { id: "frost-mage", name: "Frost Mage", health: 90, maxHealth: 90, attack: 14, defense: 16, specialName: "Glacial Prison", specialDamage: 30, specialDescription: "Trap opponent in ice and shatter" },
  { id: "shadow-assassin", name: "Shadow Assassin", health: 80, maxHealth: 80, attack: 24, defense: 6, specialName: "Shadow Strike", specialDamage: 50, specialDescription: "Strike from the shadows for massive damage" },
  { id: "iron-guardian", name: "Iron Guardian", health: 140, maxHealth: 140, attack: 12, defense: 18, specialName: "Counter Surge", specialDamage: 25, specialDescription: "Absorb damage and counterattack" },
]

const ROBOT_NAMES = ["Sentinel-X", "BattleBot-9000", "MechDestroyer", "CyberDroid-Z", "TitanFall-Mk3", "VoidWalker-AI"]

function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function createRobot(character: Fighter): Fighter {
  const name = randomItem(ROBOT_NAMES)
  const base = character.health + character.attack + character.defense
  const scale = base / 50
  return {
    id: "robot", name, health: Math.round(100 * scale), maxHealth: Math.round(100 * scale),
    attack: Math.round(14 * scale), defense: Math.round(10 * scale),
    specialName: "Overclock", specialDamage: Math.round(35 * scale), specialDescription: "Maximum power output",
  }
}

function createState(playerChar: Fighter): FightState {
  return {
    player: { ...playerChar, health: playerChar.maxHealth },
    robot: createRobot(playerChar),
    turn: "player", gameOver: false, winner: null, log: [], round: 0, defendBoost: 0,
  }
}

function calcDamage(attacker: Fighter, defender: Fighter, isSpecial: boolean, defendBoost: number): { damage: number; log: string } {
  const base = isSpecial ? attacker.specialDamage : attacker.attack
  const defense = defender.defense + defendBoost
  let damage = Math.max(1, base - defense + Math.floor(Math.random() * 6) - 3)
  if (isSpecial) {
    damage = Math.max(5, Math.round(damage * 1.2))
  }
  if (damage > defender.health) damage = defender.health
  const action = isSpecial ? attacker.specialName : "attack"
  return { damage, log: `${attacker.name} used ${action} for ${damage} damage!` }
}

function playerAction(state: FightState, action: string): FightState {
  if (state.turn !== "player") return state
  const newState = { ...state, log: [] as string[], defendBoost: 0, round: state.round + 1 }

  switch (action) {
    case "attack": {
      const { damage, log } = calcDamage(newState.player, newState.robot, false, 0)
      newState.robot.health -= damage
      newState.log.push(log)
      if (newState.robot.health <= 0) {
        newState.robot.health = 0
        newState.gameOver = true
        newState.winner = "Player"
        newState.log.push(`${newState.robot.name} defeated!`)
        return newState
      }
      break
    }
    case "special": {
      const { damage, log } = calcDamage(newState.player, newState.robot, true, 0)
      newState.robot.health -= damage
      newState.log.push(log)
      if (newState.robot.health <= 0) {
        newState.robot.health = 0
        newState.gameOver = true
        newState.winner = "Player"
        newState.log.push(`${newState.robot.name} defeated!`)
        return newState
      }
      break
    }
    case "defend": {
      newState.defendBoost = 8
      const healAmount = Math.round(newState.player.maxHealth * 0.05)
      newState.player.health = Math.min(newState.player.maxHealth, newState.player.health + healAmount)
      newState.log.push(`Player defends, recovering ${healAmount} health.`)
      break
    }
    case "heal": {
      const healAmount = Math.round(newState.player.maxHealth * 0.2)
      newState.player.health = Math.min(newState.player.maxHealth, newState.player.health + healAmount)
      newState.log.push(`Player heals for ${healAmount} health.`)
      break
    }
    default:
      return state
  }

  newState.turn = "robot"

  const robotAction = chooseRobotAction(newState)
  const { damage, log } = calcDamage(newState.robot, newState.player, robotAction === "special", newState.defendBoost)
  newState.player.health -= damage
  newState.log.push(log)
  if (newState.player.health <= 0) {
    newState.player.health = 0
    newState.gameOver = true
    newState.winner = "Robot"
    newState.log.push(`${newState.player.name} defeated!`)
    return newState
  }

  newState.turn = "player"
  return newState
}

function chooseRobotAction(state: FightState): "attack" | "special" {
  if (state.robot.health < state.robot.maxHealth * 0.3 && Math.random() < 0.4) return "special"
  return "attack"
}

export async function handleVirtualFight(request: Request): Promise<Response> {
  if (request.method === "GET") {
    return Response.json({
      game: "Virtual Fight",
      description: "Turn-based fighting game. Pick a character and fight a robot AI.",
      characters: CHARACTERS.map(c => ({
        id: c.id, name: c.name, health: c.health, attack: c.attack, defense: c.defense,
        special: { name: c.specialName, damage: c.specialDamage, description: c.specialDescription },
      })),
      actions: [
        { name: "attack", description: "Basic attack based on your attack stat" },
        { name: "special", description: "Powerful special move (high damage)" },
        { name: "defend", description: "Reduce incoming damage and recover a bit" },
        { name: "heal", description: "Recover 20% of max health" },
      ],
      usage: {
        start: { method: "POST", path: "/games/virtual-fight", body: { characterId: "cyber-samurai" } },
        action: { method: "POST", path: "/games/virtual-fight", body: { state: "...", action: "attack" } },
      },
    })
  }

  if (request.method === "POST") {
    try {
      const body = await request.json() as { characterId?: string; state?: FightState; action?: string }

      if (body.characterId && !body.state) {
        const character = CHARACTERS.find(c => c.id === body.characterId)
        if (!character) {
          return Response.json({ error: "Invalid character. Choose from: " + CHARACTERS.map(c => c.id).join(", ") }, { status: 400 })
        }
        return Response.json({ state: createState(character) })
      }

      if (body.state && body.action) {
        const state = body.state as FightState
        if (state.gameOver) {
          return Response.json({ error: "Game is over", winner: state.winner }, { status: 400 })
        }
        const validActions = ["attack", "special", "defend", "heal"]
        if (!validActions.includes(body.action)) {
          return Response.json({ error: "Invalid action. Choose: " + validActions.join(", ") }, { status: 400 })
        }
        const newState = playerAction(state, body.action)
        return Response.json({ state: newState })
      }

      return Response.json({ error: "Send characterId to start or state+action to play" }, { status: 400 })
    } catch {
      return Response.json({ error: "Invalid JSON body" }, { status: 400 })
    }
  }

  return Response.json({ error: "Method not allowed" }, { status: 405 })
}
