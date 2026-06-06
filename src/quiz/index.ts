interface Question {
  id: number
  question: string
  options: string[]
  answer: number
}

interface Topic {
  id: string
  name: string
  description: string
  questionCount: number
}

const TOPICS: Record<string, { name: string; description: string; questions: Question[] }> = {
  "general-knowledge": {
    name: "General Knowledge",
    description: "Questions about general knowledge and trivia.",
    questions: [
      { id: 1, question: "What is the capital of France?", options: ["London", "Paris", "Berlin", "Madrid"], answer: 1 },
      { id: 2, question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: 2 },
      { id: 3, question: "What is the largest ocean?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: 3 },
      { id: 4, question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: 1 },
      { id: 5, question: "What is the tallest animal?", options: ["Elephant", "Giraffe", "Horse", "Camel"], answer: 1 },
      { id: 6, question: "How many colors are in a rainbow?", options: ["5", "6", "7", "8"], answer: 2 },
      { id: 7, question: "What gas do plants absorb from the air?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: 2 },
      { id: 8, question: "Which is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], answer: 1 },
      { id: 9, question: "What is the smallest country?", options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], answer: 1 },
      { id: 10, question: "How many bones in the human body?", options: ["106", "206", "306", "406"], answer: 1 },
      { id: 11, question: "What is the longest river?", options: ["Amazon", "Nile", "Mississippi", "Yangtze"], answer: 1 },
      { id: 12, question: "Which element has symbol Fe?", options: ["Silver", "Iron", "Gold", "Copper"], answer: 1 },
    ],
  },
  "science": {
    name: "Science",
    description: "Physics, chemistry, biology and more.",
    questions: [
      { id: 1, question: "What is the chemical symbol for water?", options: ["H2O", "CO2", "NaCl", "HCl"], answer: 0 },
      { id: 2, question: "What is the speed of light approximately?", options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "100,000 km/s"], answer: 0 },
      { id: 3, question: "Which gas makes up most of the atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], answer: 2 },
      { id: 4, question: "What planet is closest to the sun?", options: ["Venus", "Mercury", "Earth", "Mars"], answer: 1 },
      { id: 5, question: "What type of blood cells fight infections?", options: ["Red", "White", "Platelets", "Plasma"], answer: 1 },
      { id: 6, question: "What is the unit of electric current?", options: ["Volt", "Ampere", "Ohm", "Watt"], answer: 1 },
      { id: 7, question: "Which acid is in the human stomach?", options: ["Sulfuric", "Nitric", "Hydrochloric", "Acetic"], answer: 2 },
      { id: 8, question: "What is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi"], answer: 2 },
      { id: 9, question: "How many planets in the solar system?", options: ["7", "8", "9", "10"], answer: 1 },
      { id: 10, question: "What element is needed for combustion?", options: ["Nitrogen", "Hydrogen", "Oxygen", "Carbon"], answer: 2 },
    ],
  },
  "history": {
    name: "History",
    description: "World history and historical events.",
    questions: [
      { id: 1, question: "Which year did World War II end?", options: ["1943", "1944", "1945", "1946"], answer: 2 },
      { id: 2, question: "Who discovered America?", options: ["Columbus", "Magellan", "Vasco da Gama", "Cook"], answer: 0 },
      { id: 3, question: "Which empire built the Colosseum?", options: ["Greek", "Roman", "Egyptian", "Persian"], answer: 1 },
      { id: 4, question: "What was the first civilization?", options: ["Egyptian", "Mesopotamian", "Indus Valley", "Chinese"], answer: 1 },
      { id: 5, question: "Who painted the Mona Lisa?", options: ["Raphael", "Michelangelo", "da Vinci", "Rembrandt"], answer: 2 },
      { id: 6, question: "Which wall divided Berlin?", options: ["Great Wall", "Berlin Wall", "Hadrian Wall", "Western Wall"], answer: 1 },
      { id: 7, question: "What year did the Titanic sink?", options: ["1910", "1911", "1912", "1913"], answer: 2 },
      { id: 8, question: "Who was the first US president?", options: ["Adams", "Jefferson", "Washington", "Franklin"], answer: 2 },
      { id: 9, question: "Which ancient wonder is still standing?", options: ["Colossus", "Pyramids", "Hanging Gardens", "Lighthouse"], answer: 1 },
      { id: 10, question: "What year did humans land on the moon?", options: ["1967", "1968", "1969", "1970"], answer: 2 },
    ],
  },
  "technology": {
    name: "Technology",
    description: "Computers, programming, and tech trivia.",
    questions: [
      { id: 1, question: "What does CPU stand for?", options: ["Central Process Unit", "Computer Personal Unit", "Central Processing Unit", "Core Process Unit"], answer: 2 },
      { id: 2, question: "Who created Linux?", options: ["Stallman", "Torvalds", "Gates", "Jobs"], answer: 1 },
      { id: 3, question: "What does HTML stand for?", options: ["HyperText Markup Language", "HighText Machine Language", "HyperText Markdown Language", "Home Tool Markup Language"], answer: 0 },
      { id: 4, question: "What is the brain of the computer?", options: ["RAM", "GPU", "CPU", "SSD"], answer: 2 },
      { id: 5, question: "Which company created JavaScript?", options: ["Microsoft", "Netscape", "Sun", "Oracle"], answer: 1 },
      { id: 6, question: "What year was the internet created?", options: ["1973", "1983", "1993", "2003"], answer: 1 },
      { id: 7, question: "What does API stand for?", options: ["Application Programming Interface", "Applied Program Integration", "Automatic Protocol Interface", "Application Process Integration"], answer: 0 },
      { id: 8, question: "Which language runs on the web?", options: ["Java", "Python", "JavaScript", "C++"], answer: 2 },
      { id: 9, question: "What is 8 bits called?", options: ["Byte", "Nibble", "Word", "Kilobit"], answer: 0 },
      { id: 10, question: "Who founded Microsoft?", options: ["Jobs", "Gates", "Zuckerberg", "Bezos"], answer: 1 },
    ],
  },
  "movies": {
    name: "Movies",
    description: "Movies, actors, and cinema trivia.",
    questions: [
      { id: 1, question: "What movie won the first Oscar?", options: ["Wings", "Gone with Wind", "Casablanca", "Citizen Kane"], answer: 0 },
      { id: 2, question: "Who directed Jurassic Park?", options: ["Cameron", "Spielberg", "Lucas", "Scorsese"], answer: 1 },
      { id: 3, question: "What is the highest grossing film?", options: ["Avatar", "Avengers", "Titanic", "Star Wars"], answer: 0 },
      { id: 4, question: "Which actor played Iron Man?", options: ["Evans", "Downey Jr", "Hemsworth", "Pratt"], answer: 1 },
      { id: 5, question: "What year was The Matrix released?", options: ["1997", "1998", "1999", "2000"], answer: 2 },
      { id: 6, question: "Who played the Joker in The Dark Knight?", options: ["Nicholson", "Ledger", "Phoenix", "Leto"], answer: 1 },
      { id: 7, question: "What is the longest movie?", options: ["Gone with Wind", "Ben-Hur", "Seven Samurai", "Lawrence of Arabia"], answer: 2 },
      { id: 8, question: "Which studio made The Godfather?", options: ["Universal", "Paramount", "Warner", "Disney"], answer: 1 },
    ],
  },
  "geography": {
    name: "Geography",
    description: "Countries, capitals, and geography facts.",
    questions: [
      { id: 1, question: "What is the largest country by area?", options: ["USA", "China", "Russia", "Canada"], answer: 2 },
      { id: 2, question: "What is the longest river?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: 1 },
      { id: 3, question: "What is the highest mountain?", options: ["K2", "Everest", "Kangchenjunga", "Lhotse"], answer: 1 },
      { id: 4, question: "Which country has the most population?", options: ["USA", "India", "China", "Indonesia"], answer: 1 },
      { id: 5, question: "What is the smallest continent?", options: ["Europe", "Australia", "Antarctica", "South America"], answer: 1 },
      { id: 6, question: "How many time zones in Russia?", options: ["9", "10", "11", "12"], answer: 2 },
      { id: 7, question: "Which desert is the largest?", options: ["Sahara", "Arabian", "Gobi", "Antarctic"], answer: 3 },
      { id: 8, question: "What is the deepest ocean trench?", options: ["Mariana", "Tonga", "Philippine", "Java"], answer: 0 },
      { id: 9, question: "Which country has the most islands?", options: ["Sweden", "Indonesia", "Philippines", "Finland"], answer: 0 },
      { id: 10, question: "What is the longest mountain range?", options: ["Himalayas", "Andes", "Rockies", "Alps"], answer: 1 },
    ],
  },
}

export async function handleQuiz(request: Request): Promise<Response> {
  const url = new URL(request.url)
  const path = url.pathname.replace(/\/$/, "")
  const basePath = "/quiz"

  const rest = path.slice(basePath.length)
  const segments = rest.split("/").filter(Boolean)

  if (request.method === "GET") {
    if (segments.length === 0) {
      const topics: Topic[] = Object.entries(TOPICS).map(([id, topic]) => ({
        id, name: topic.name, description: topic.description, questionCount: topic.questions.length,
      }))
      return Response.json({
        name: "Quiz API",
        description: "Quiz with predefined topics. Pick a topic and answer questions.",
        topics,
        usage: { getQuestions: "/quiz/{topicId}", submitAnswers: "POST /quiz/{topicId}/submit" },
      })
    }

    const topicId = segments[0]
    const topic = TOPICS[topicId]
    if (!topic) {
      const available = Object.keys(TOPICS).join(", ")
      return Response.json({ error: `Topic not found. Available: ${available}` }, { status: 404 })
    }

    const questions = topic.questions.map(q => ({
      id: q.id, question: q.question, options: q.options,
    }))
    return Response.json({
      topic: topicId, name: topic.name, questionCount: questions.length, questions,
    })
  }

  if (request.method === "POST") {
    if (segments.length >= 2 && segments[1] === "submit") {
      const topicId = segments[0]
      const topic = TOPICS[topicId]
      if (!topic) {
        return Response.json({ error: `Topic not found. Available: ${Object.keys(TOPICS).join(", ")}` }, { status: 404 })
      }

      try {
        const { answers } = await request.json() as { answers: Record<number, number> }
        if (!answers || typeof answers !== "object") {
          return Response.json({ error: "answers must be an object with question id as key and answer index as value" }, { status: 400 })
        }

        let correct = 0
        const results: { id: number; correct: boolean; correctAnswer: number }[] = []
        for (const q of topic.questions) {
          const userAnswer = answers[q.id]
          const isCorrect = userAnswer === q.answer
          if (isCorrect) correct++
          results.push({ id: q.id, correct: isCorrect, correctAnswer: q.answer })
        }

        const total = topic.questions.length
        return Response.json({
          topic: topicId, name: topic.name, score: correct, total, percentage: Math.round((correct / total) * 100),
          results,
        })
      } catch {
        return Response.json({ error: "Invalid JSON body. Send { answers: { questionId: answerIndex } }" }, { status: 400 })
      }
    }

    return Response.json({ error: "Use POST /quiz/{topic}/submit" }, { status: 400 })
  }

  return Response.json({ error: "Method not allowed" }, { status: 405 })
}
