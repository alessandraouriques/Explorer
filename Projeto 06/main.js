// Variáveis
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');

const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;


// Eventos
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown', enterReset)


// Função callback
function handleTryClick(event) {
  event.preventDefault() //não faça o padrão desse evento, que é um botão dentro de um formulário sería enviar o formulário
  
  const inputNumber = document.querySelector('#inputNumber')
  

  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!`
  }

  else if (isNaN(Number(inputNumber.value))) {
    alert('Se não é número não vale!')
    xAttempts--
  }

  else if (Number(inputNumber.value) > 10 || Number(inputNumber.value) < 0)   {
    alert('Insira um número entre 0 e 10')
    xAttempts--
  }

  else if (Number(inputNumber.value) == "") {
    alert("Por favor insira um número")
    xAttempts--
  }
 
  xAttempts++
  inputNumber.value = ""
  
};

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10);
};


function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
};

function enterReset (e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}
