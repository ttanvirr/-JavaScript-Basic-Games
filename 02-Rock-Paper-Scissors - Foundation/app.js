const computer = document.querySelector('.computer')
const user = document.querySelector('.user')
const result = document.querySelector('.result')
const buttons = document.querySelectorAll('button')

let resultText
const handleClick = (button) => {
  const randomNumber = Math.floor(Math.random() * buttons.length)
  const userChoice = button.innerText
  const computerChoice = buttons[randomNumber].innerText
  user.innerHTML = `You Choose: ${userChoice}`
  computer.innerHTML = `Computer Choose: ${computerChoice}`
  getResult(userChoice, computerChoice)
}

function getResult(userChoice, computerChoice) {
  if (userChoice === 'Rock' && computerChoice === 'Scissors') {
    resultText = 'You won!'
  }
  if (userChoice === 'Rock' && computerChoice === 'Paper') {
    resultText = 'You lost!'
  }
  if (userChoice === 'Scissors' && computerChoice === 'Rock') {
    resultText = 'You lost!'
  }
  if (userChoice === 'Scissors' && computerChoice === 'Paper') {
    resultText = 'You won!'
  }
  if (userChoice === 'Paper' && computerChoice === 'Rock') {
    resultText = 'You won!'
  }
  if (userChoice === 'Paper' && computerChoice === 'Scissors') {
    resultText = 'You lost!'
  }
  if (userChoice === computerChoice) {
    resultText = 'Draw!'
  }
  result.innerHTML = resultText
}

buttons.forEach((button) => {
  button.addEventListener('click', () => handleClick(button))
})
