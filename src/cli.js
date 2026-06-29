import readlineSync from 'readline-sync'

function greetUser() {
  const name = readlineSync.question('May I have your name?')
  console.log(`Hello, ${name}!`)
}

export default greetUser
