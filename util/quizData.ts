type QuizData = {
  [key: string]: {
    question: string
    choices: string[]
  }
}

const quizData: QuizData = {
  problem1: {
    question: 'This is problem 1?',
    choices: ['Option 1', 'Option 2', 'Option 3'],
  },
  problem2: {
    question: 'This is problem 2?',
    choices: ['Option 1', 'Option 2', 'Option 3'],
  },
  problem3: {
    question: 'This is problem 3?',
    choices: ['Option 1', 'Option 2', 'Option 3'],
  },
}
