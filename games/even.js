import getRandomInt from '../src/utils.js'

const MIN = 1
const MAX = 1000
const MESSAGE = 'Answer "yes" if the number is even, otherwise answer "no".'

function isEven(num) {
  return num % 2 === 0
}

function getGameResults() {
  const number = getRandomInt(MIN, MAX)
  const question = `${number}`
  const correctAnswer = isEven(number) ? 'yes' : 'no'
  return [question, correctAnswer]
}

export { getGameResults, MESSAGE }
