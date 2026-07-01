const PROGR_LENGTH = 10
const PROGR_MIN_START = 1
const PROGR_MAX_START = 100
const PROGR_MIN_DIFF = 2
const PROGR_MAX_DIFF = 5
const MESSAGE = 'What number is missing in the progression?'

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min)
  const maxFloored = Math.floor(max)
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

function createProgression(start, end, step) {
  const progression = []
  for (let i = 0; i <= end; i += 1) {
    const currentElement = start + i * step
    progression.push(currentElement)
  }
  return progression
}

function hideElement(progression, indexToHide) {
  const hiddenElement = progression[indexToHide]
  progression[indexToHide] = '. .'
  return [progression, hiddenElement]
}

function makeProgression() {
  const start = getRandomInt(PROGR_MIN_START, PROGR_MAX_START)
  const step = getRandomInt(PROGR_MIN_DIFF, PROGR_MAX_DIFF)
  const end = PROGR_LENGTH

  const progression = createProgression(start, end, step)

  const indexToHide = getRandomInt(0, PROGR_LENGTH - 1)
  const [progressionWithHidden, hiddenElement] = hideElement(progression, indexToHide)

  const question = progressionWithHidden.join(' ')
  const correctAnswer = hiddenElement

  return [question, correctAnswer]
}

export { makeProgression, MESSAGE }
