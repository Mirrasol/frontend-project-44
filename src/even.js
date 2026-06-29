import readlineSync from 'readline-sync'

const MIN = 1
const MAX = 1000
const NUMBER_OF_ROUNDS = 3

function isEven(num) {
  return num % 2 === 0
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min)
  const maxFloored = Math.floor(max)
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

function playEven() {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  let gameResult = 'win'

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const number = getRandomInt(MIN, MAX)
    console.log(`Question: ${number}`)

    const userAnswer = readlineSync.question('Your answer: ')

    let correctAnswer = 'no'

    if (isEven(number)) {
      correctAnswer = 'yes'
    }

    if (correctAnswer === userAnswer) {
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

export default playEven
