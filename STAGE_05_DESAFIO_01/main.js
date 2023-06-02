// Variáveis
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');

const luck = document.querySelector('#luck');
const btnRetry = document.querySelector('#btnRetry');

const frases = [
  "A vida trará coisas boas se tiver paciência.",
  "Não ser amado é falta de sorte, mas não amar é a própria infelicidade.",
  "Não compense na ira o que lhe falta na razão.",
  "O bom-senso vale mais do que muito conhecimento.",
  "A adversidade é um espelho que reflete o verdadeiro eu.",
  "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
  "Se a classe operária tudo produz, a ela tudo pertence?",
  "Espere pelo mais sábio dos conselhos: o tempo.",
  "Obrigada por testar esse coisinho",
  "A solidão é a sorte de todos os espíritos excepcionais.",
  "Te amo.",
]

let randomNumber = Math.round(Math.random() * 10);
const phrase = frases[randomNumber]

// Eventos
luck.addEventListener('click', handleLuckClick);
btnRetry.addEventListener('click', toggleScreen)


// Funções callback

function handleLuckClick() {
  toggleScreen()
  randomNumber = Math.round(Math.random() * 10)
  const phrase = frases[randomNumber]
  screen2.querySelector("p").innerText = phrase
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}; 
