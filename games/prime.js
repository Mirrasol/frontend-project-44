const MIN = 1
const MAX = 100
const MESSAGE = 'Answer "yes" if given number is prime. Otherwise answer "no".'

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min)
  const maxFloored = Math.floor(max)
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

function checkPrime(num) {
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

function isPrime() {
  const number = getRandomInt(MIN, MAX)
  const question = `${number}`
  const correctAnswer = checkPrime(number) ? 'yes' : 'no'
  return [question, correctAnswer]
}

export { isPrime, MESSAGE }
