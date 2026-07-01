import getRandomInt from '../src/utils.js'

const MIN = 1
const MAX = 100
const MESSAGE = 'Find the greatest common divisor of given numbers.'

function getGcd(a, b) {
  while (a >= 0 && b >= 0) {
    if (a === 0 || b === 0) {
      return Math.max(a, b)
    }
    return getGcd(b % a, a)
  }
}

function getGameResults() {
  const num1 = getRandomInt(MIN, MAX)
  const num2 = getRandomInt(MIN, MAX)

  const question = `${num1} ${num2}`
  const correctAnswer = getGcd(num1, num2)
  return [question, correctAnswer]
}

export { getGameResults, MESSAGE }
