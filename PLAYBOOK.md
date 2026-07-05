# apis.meetgor.com Playbook

```sh
BASE=https://apis.meetgor.com
```

## Discovery

```sh
# List all API groups
curl $BASE/

# Docs
curl $BASE/docs
```

## My API

```sh
# Profile
curl $BASE/my

# Docs
curl $BASE/my/docs

# Goodreads shelves
curl $BASE/my/books
curl "$BASE/my/books?shelf=read"
curl "$BASE/my/books?shelf=to-read"

# Goodreads reviews
curl $BASE/my/books/reviews
curl "$BASE/my/books/reviews?shelf=read"

# Blog posts from RSS
curl $BASE/my/thoughts
curl $BASE/my/links

# RFC 10008 QUERY method — rich blog search with filters
# (QUERY is safe & idempotent like GET, but uses a request body)

# Simple text search across all fields
curl -X QUERY $BASE/my/blogs \
  -H "Content-Type: application/json" \
  -d '{"search":"typescript"}'

# Multi-term search with AND/OR mode
curl -X QUERY $BASE/my/blogs \
  -H "Content-Type: application/json" \
  -d '{"search":{"query":"typescript rust go","mode":"any"}}'

# Field-scoped search (title + description only)
curl -X QUERY $BASE/my/blogs \
  -H "Content-Type: application/json" \
  -d '{"search":{"query":"api","fields":["title"]}}'

# Filter by section
curl -X QUERY $BASE/my/blogs \
  -H "Content-Type: application/json" \
  -d '{"section":"thoughts"}'

# Date range filter
curl -X QUERY $BASE/my/blogs \
  -H "Content-Type: application/json" \
  -d '{"date":{"from":"2025-01-01","to":"2025-06-30"}}'

# Sort by title ascending
curl -X QUERY $BASE/my/blogs \
  -H "Content-Type: application/json" \
  -d '{"sort":{"field":"title","order":"asc"}}'

# Field projection (only specific fields returned)
curl -X QUERY $BASE/my/blogs \
  -H "Content-Type: application/json" \
  -d '{"fields":["title","slug","pub_date"],"limit":5}'

# Combined: section + date range + search + sort + pagination
curl -X QUERY $BASE/my/blogs \
  -H "Content-Type: application/json" \
  -d '{
    "search": {"query":"web rust","mode":"all","fields":["title","description"]},
    "section":"posts",
    "date":{"from":"2024-01-01"},
    "sort":{"field":"pub_date","order":"desc"},
    "limit":10,
    "offset":0
  }'

# Pagination with limit/offset
curl -X QUERY $BASE/my/blogs \
  -H "Content-Type: application/json" \
  -d '{"limit":3,"offset":2}'

# Curated blogroll
curl $BASE/my/blogroll
curl "$BASE/my/blogroll?search=rust"

# Social link tree
curl $BASE/my/socials
```

## Newsletter

```sh
# List entries
curl $BASE/my/newsletter

# Paginate
curl "$BASE/my/newsletter?limit=5&offset=10"

# Search
curl "$BASE/my/newsletter?search=weekly"

# Sort ascending by title
curl "$BASE/my/newsletter?sort=title&order=asc"

# Stats
curl $BASE/my/newsletter/stats

# Single entry by slug
curl $BASE/my/newsletter/techstructive-weekly-97

# Refresh from RSS
curl -X POST $BASE/my/newsletter/refresh

# Docs
curl $BASE/my/newsletter/docs
```

## Games

```sh
# List games
curl $BASE/games

# Docs
curl $BASE/games/docs
```

### Tic Tac Toe

```sh
# Get rules
curl $BASE/games/tic-tac-toe

# Make a move
curl -X POST $BASE/games/tic-tac-toe \
  -H "Content-Type: application/json" \
  -d '{"board":[[null,null,null],[null,null,null],[null,null,null]],"row":0,"col":0,"player":"X"}'

# Docs
curl $BASE/games/tic-tac-toe/docs
```

### Chess

```sh
# Get rules and initial board
curl $BASE/games/chess

# Make a move (e2e4)
curl -X POST $BASE/games/chess \
  -H "Content-Type: application/json" \
  -d '{"fen":"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w","move":"e2e4"}'

# Continue (e7e5)
curl -X POST $BASE/games/chess \
  -H "Content-Type: application/json" \
  -d '{"fen":"rnbqkbnr/pppppppp/8/4P3/8/8/PPPP1PPP/RNBQKBNR b","move":"e7e5"}'

# Inspect a custom board
curl "$BASE/games/chess?fen=4k3/8/8/8/8/8/8/4K3 w"

# Docs
curl $BASE/games/chess/docs
```

### Rock Paper Scissors

```sh
# Get rules
curl $BASE/games/rock-paper-scissors

# Play
curl -X POST $BASE/games/rock-paper-scissors \
  -H "Content-Type: application/json" \
  -d '{"choice":"rock"}'

curl -X POST $BASE/games/rock-paper-scissors \
  -H "Content-Type: application/json" \
  -d '{"choice":"paper"}'

curl -X POST $BASE/games/rock-paper-scissors \
  -H "Content-Type: application/json" \
  -d '{"choice":"scissors"}'

# Docs
curl $BASE/games/rock-paper-scissors/docs
```

### Handy Cricket

```sh
# Get rules and initial state
curl $BASE/games/handy-cricket

# Play a ball (choose 1-6)
curl -X POST $BASE/games/handy-cricket \
  -H "Content-Type: application/json" \
  -d '{"run":4}'

# Continue with previous state
curl -X POST $BASE/games/handy-cricket \
  -H "Content-Type: application/json" \
  -d '{"run":3,"state":{"playerRuns":4,"computerRuns":0,"playerWickets":0,"computerWickets":0,"ballsBowled":1,"isBatting":true,"isOver":false,"totalBalls":60,"winner":null,"lastBall":"4 runs"}}'

# Docs
curl $BASE/games/handy-cricket/docs
```

### Virtual Fight

```sh
# Get rules and characters
curl $BASE/games/virtual-fight

# Start a game with a character
curl -X POST $BASE/games/virtual-fight \
  -H "Content-Type: application/json" \
  -d '{"characterId":"cyber-samurai"}'

curl -X POST $BASE/games/virtual-fight \
  -H "Content-Type: application/json" \
  -d '{"characterId":"flame-titan"}'

curl -X POST $BASE/games/virtual-fight \
  -H "Content-Type: application/json" \
  -d '{"characterId":"frost-mage"}'

curl -X POST $BASE/games/virtual-fight \
  -H "Content-Type: application/json" \
  -d '{"characterId":"shadow-assassin"}'

curl -X POST $BASE/games/virtual-fight \
  -H "Content-Type: application/json" \
  -d '{"characterId":"iron-guardian"}'

# Attack
curl -X POST $BASE/games/virtual-fight \
  -H "Content-Type: application/json" \
  -d '{"state":{...},"action":"attack"}'

# Special move
curl -X POST $BASE/games/virtual-fight \
  -H "Content-Type: application/json" \
  -d '{"state":{...},"action":"special"}'

# Defend
curl -X POST $BASE/games/virtual-fight \
  -H "Content-Type: application/json" \
  -d '{"state":{...},"action":"defend"}'

# Heal
curl -X POST $BASE/games/virtual-fight \
  -H "Content-Type: application/json" \
  -d '{"state":{...},"action":"heal"}'

# Docs
curl $BASE/games/virtual-fight/docs
```

## Quiz

```sh
# List topics
curl $BASE/quiz

# Get questions for a topic
curl $BASE/quiz/general-knowledge
curl $BASE/quiz/science
curl $BASE/quiz/history
curl $BASE/quiz/technology
curl $BASE/quiz/movies
curl $BASE/quiz/geography

# Submit answers
curl -X POST $BASE/quiz/general-knowledge/submit \
  -H "Content-Type: application/json" \
  -d '{"answers":{"1":1,"2":2,"3":3,"4":1,"5":1,"6":2,"7":2,"8":1,"9":1,"10":1,"11":1,"12":1}}'

# Docs
curl $BASE/quiz/docs
```

## Llamaline

```sh
# List providers
curl $BASE/llamaline/v1/providers

# Get a specific provider
curl $BASE/llamaline/v1/providers/openai

# Provider timeline
curl $BASE/llamaline/v1/providers/openai/timeline

# List models
curl $BASE/llamaline/v1/models

# Filter models by provider
curl "$BASE/llamaline/v1/models?providerId=openai"

# Filter by status
curl "$BASE/llamaline/v1/models?status=active"

# Search models
curl "$BASE/llamaline/v1/models?search=gpt"

# Get a specific model
curl $BASE/llamaline/v1/models/gpt-4o

# Model timeline
curl $BASE/llamaline/v1/models/gpt-4o/timeline

# Timeline with date range
curl "$BASE/llamaline/v1/timeline?startDate=2024-01-01&endDate=2024-12-31"

# Filter timeline by type
curl "$BASE/llamaline/v1/timeline?type=model_released"

# Pagination
curl "$BASE/llamaline/v1/models?limit=5&offset=0"

# Docs
curl $BASE/llamaline/docs
```

## Doclet

```sh
# Manifest
curl $BASE/doclet

# Capabilities
curl $BASE/doclet/v1/capabilities

# Inspect an upload
curl -X POST $BASE/doclet/v1/inspect \
  -F "file=@./sample.pdf"

# Split selected pages from a PDF
curl -X POST $BASE/doclet/v1/operate \
  -F "file=@./sample.pdf" \
  -F 'intent={"action":"split","params":{"pages":"1,3"}}'

# Rotate a PDF
curl -X POST $BASE/doclet/v1/operate \
  -F "file=@./sample.pdf" \
  -F 'intent={"action":"rotate","params":{"angle":90}}'

# Merge PDFs
curl -X POST $BASE/doclet/v1/merge \
  -F "files=@./a.pdf" \
  -F "files=@./b.pdf"

# Extract text from DOCX or text-like files
curl -X POST $BASE/doclet/v1/operate \
  -F "file=@./notes.docx" \
  -F 'intent={"action":"extract-text"}'

# Docs
curl $BASE/doclet/docs
```
