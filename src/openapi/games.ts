export const gamesSpec = `openapi: "3.1.0"
info:
  title: Games API
  description: >
    Game-related API endpoints. Play classic games like Tic Tac Toe
    via simple HTTP requests.
  version: "1.0.0"
  contact:
    name: Meet Gor
    url: https://meetgor.com

servers:
  - url: https://apis.meetgor.com
    description: Production

tags:
  - name: Games
    description: Game listing endpoints
  - name: Tic Tac Toe
    description: Tic Tac Toe game API

paths:
  /games:
    get:
      summary: List all games
      description: Returns a list of all available games with their paths and descriptions.
      operationId: listGames
      tags:
        - Games
      responses:
        "200":
          description: Games directory
          content:
            application/json:
              schema:
                type: object
                properties:
                  name:
                    type: string
                  description:
                    type: string
                  games:
                    type: array
                    items:
                      type: object
                      properties:
                        name:
                          type: string
                        path:
                          type: string
                        description:
                          type: string

  /games/tic-tac-toe:
    get:
      summary: Get Tic Tac Toe info
      description: >
        Returns the game rules and usage guide. Use POST to play a move.
      operationId: getTicTacToeInfo
      tags:
        - Tic Tac Toe
      responses:
        "200":
          description: Game info and usage instructions
          content:
            application/json:
              schema:
                type: object
                properties:
                  game:
                    type: string
                    example: Tic Tac Toe
                  description:
                    type: string
                  usage:
                    type: object
                    properties:
                      start:
                        type: object
                        properties:
                          method:
                            type: string
                          path:
                            type: string
                      move:
                        type: object
                        properties:
                          method:
                            type: string
                          path:
                            type: string
                          body:
                            type: object
                            properties:
                              board:
                                type: array
                                description: 3x3 board state
                              row:
                                type: integer
                                description: Row index (0-2)
                              col:
                                type: integer
                                description: Column index (0-2)
                              player:
                                type: string
                                description: Player symbol (X or O)

    post:
      summary: Make a move
      description: >
        Makes a move on the Tic Tac Toe board. Provide the current board
        state, the row and column of your move, and your player symbol.
        Returns the updated board with winner detection.
      operationId: makeTicTacToeMove
      tags:
        - Tic Tac Toe
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - board
                - row
                - col
                - player
              properties:
                board:
                  type: array
                  description: >
                    Current 3x3 board. Use null for empty cells, "X" or "O"
                    for taken cells.
                  example:
                    - [null, null, null]
                    - [null, null, null]
                    - [null, null, null]
                row:
                  type: integer
                  minimum: 0
                  maximum: 2
                  description: Row index to place your move
                  example: 0
                col:
                  type: integer
                  minimum: 0
                  maximum: 2
                  description: Column index to place your move
                  example: 1
                player:
                  type: string
                  enum:
                    - X
                    - O
                  description: Your player symbol
                  example: X
      responses:
        "200":
          description: Updated board state
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Board"
        "400":
          description: Invalid move (cell taken, wrong turn, game over)
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    type: string
                  board:
                    $ref: "#/components/schemas/Board"
        "405":
          description: Method not allowed

components:
  schemas:
    Board:
      type: object
      description: Tic Tac Toe board state
      properties:
        board:
          type: array
          description: 3x3 grid of cells
          example:
            - ["X", null, "O"]
            - [null, "X", null]
            - ["O", null, null]
        turn:
          type: string
          description: Whose turn it is next
          example: O
        winner:
          type: string
          nullable: true
          description: Winner symbol (X or O), or null if game ongoing
        draw:
          type: boolean
          description: Whether the game ended in a draw
`
