const MIN = 1
const MAX = 99
const MESSAGE = 'What is the result of the expression?'

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min)
  const maxFloored = Math.floor(max)
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

function getRandomSign() {
  const result = Math.floor(Math.random() * 3)

  switch (result) {
    case 0:
      return '+'
    case 1:
      return '-'
    default:
      return '*'
  }
}

function makeCalc() {
  const num1 = getRandomInt(MIN, MAX)
  const num2 = getRandomInt(MIN, MAX)

  const operator = getRandomSign()
  const question = `${num1} ${operator} ${num2}`
  let correctAnswer

  switch (operator) {
    case '+':
      correctAnswer = `${num1 + num2}`
      break
    case '-':
      correctAnswer = `${num1 - num2}`
      break
    default:
      correctAnswer = `${num1 * num2}`
      break
  }

  return [question, correctAnswer]
}

export { makeCalc, MESSAGE }
