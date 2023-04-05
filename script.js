const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const clickCookie = document.querySelector('#cookie')
const btnOpenAnotherCookie = document.querySelector('#openAnotherCookie')
const pPhrase = document.querySelector('#phrase')

/* FRASES */
const phrases = [
  "Acredite em si mesmo e todo o resto será fácil. Vá em frente e faça um dia incrível!",
  "Você não pode ter um resultado positivo usando um pensamento negativo.",
  "Não importa quantas vezes você falhe, você deve continuar tentando. Não desista no primeiro obstáculo.",
  "Nunca desista do que você realmente quer fazer. A pessoa com grandes sonhos é mais poderosa do que aquela com todos os fatos.",
  "O sucesso não é final, o fracasso não é fatal: é a coragem de continuar que conta.",
  "Acredite em si mesmo, assuma riscos, continue tentando e nunca desista.",
  "Não existe fracasso, apenas feedback.",
  "Oportunidades não surgem. Você as cria.",
  "Não deixe o medo de perder ser maior que a excitação de ganhar.",
  "A chave para o sucesso é começar antes de estar pronto.",
]
/* FUNCTIONS */

function toggleScreen(){
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
function showPhrases() {
  const indice = Math.floor(Math.random() * phrases.length)
  pPhrase.textContent = phrases[indice]

  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
/* EVENTOS */
clickCookie.addEventListener('click', showPhrases)
btnOpenAnotherCookie.addEventListener('click', toggleScreen)
