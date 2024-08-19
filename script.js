let xAttempts = 1
let randomNumber = Math.round(Math.random() * 10)
const tryScreen = document.querySelector('.try')
const againScreen = document.querySelector('.again')
const btnTry = document.querySelector('#btnTry')
const btnAgain = document.querySelector('#btnAgain')

// Função Callback
function toggleScreen() {
  tryScreen.classList.toggle('hidden')
  againScreen.classList.toggle('hidden')
}

function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    document.querySelector(
      '.again h2'
    ).innerText = `Acertou em ${xAttempts} tentativa(s)!`
  } else {
    // inputNumber.value = ''
    xAttempts++
  }
}

function handleAgainClick() {
  toggleScreen()
  
  randomNumber = Math.round(Math.random() * 10)
  inputNumber.value = ''
  xAttempts = 1
}

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', handleAgainClick)
