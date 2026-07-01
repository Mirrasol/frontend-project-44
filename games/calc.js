import getRandomInt from '../src/utils.js'

const MIN = 1
const MAX = 99
const operators = ['+', '-', '*']
const MESSAGE = 'What is the result of the expression?'

function getRandomOperator(operators) {
  const operatorsAmount = operators.length
  const randomIndex = Math.floor(Math.random() * operatorsAmount)

  return operators[randomIndex]
}

function getGameResults() {
  const num1 = getRandomInt(MIN, MAX)
  const num2 = getRandomInt(MIN, MAX)

  const operator = getRandomOperator(operators)
  const question = `${num1} ${operator} ${num2}`
  let correctAnswer

  switch (operator) {
    case '+':
      correctAnswer = num1 + num2
      break
    case '-':
      correctAnswer = num1 - num2
      break
    default:
      correctAnswer = num1 * num2
      break
  }

  return [question, correctAnswer]
}

export { getGameResults, MESSAGE }
