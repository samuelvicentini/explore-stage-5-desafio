const screenOne = document.querySelector('.screen_one')
const screenTwo = document.querySelector('.screen_two')
const selectCookie = document.querySelector('.screen_one img')
const btnReset = document.querySelector('#btnReset')

const mensageFortune = [
  'Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.',
  'Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho.',
  'Tente a sua sorte! A vida é feita de oportunidades. O homem que vai mais longe é quase sempre aquele que tem coragem de arriscar.',
  'O homem é assim o árbitro constante de sua própria sorte. Ele pode aliviar o seu suplício ou prolongá-lo indefinidamente. Sua felicidade ou sua desgraça dependem da sua vontade de fazer o bem.'
]

selectCookie.addEventListener('click', openCookie)
selectCookie.addEventListener('click', randomMessage)
btnReset.addEventListener('click', cookieReset)


function openCookie() {
  screenOne.classList.toggle('hide')
  screenTwo.classList.toggle('hide')
}

function cookieReset(e) {
  e.preventDefault()
  openCookie()
}

function randomMessage() {
  const numberMenssages = mensageFortune.length - 1
  const randomNumber = Math.round(Math.random() * numberMenssages)
  screenTwo.querySelector('.fortune_mensage').innerText = mensageFortune[randomNumber]
}