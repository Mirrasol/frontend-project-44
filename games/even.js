const MIN = 1
const MAX = 1000
const MESSAGE = 'Answer "yes" if the number is even, otherwise answer "no".'

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min)
  const maxFloored = Math.floor(max)
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

function isEven() {
  const number = getRandomInt(MIN, MAX)
  const question = `${number}`
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no'
  return [question, correctAnswer]
}

export { isEven, MESSAGE }
