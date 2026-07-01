import readlineSync from 'readline-sync'

const NUMBER_OF_ROUNDS = 3

function play(game, message) {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  console.log(message)

  let gameResult = 'win'

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const [question, correctAnswer] = game()
    const correctAnswerString = String(correctAnswer)

    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (correctAnswerString === userAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`)
      console.log(`Let's try again, ${userName}!`)
      gameResult = 'lose'
      break
    }
  }

  if (gameResult === 'win') {
    console.log(`Congratulations, ${userName}!`)
  }
}

export default play
