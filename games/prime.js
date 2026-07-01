import getRandomInt from '../src/utils.js'

const MIN = 1
const MAX = 100
const MESSAGE = 'Answer "yes" if given number is prime. Otherwise answer "no".'

function isPrime(num) {
  if (num < 2) {
    return false
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

function getGameResults() {
  const number = getRandomInt(MIN, MAX)
  const question = `${number}`
  const correctAnswer = isPrime(number) ? 'yes' : 'no'
  return [question, correctAnswer]
}

export { getGameResults, MESSAGE }
