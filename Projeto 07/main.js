// Import & expport

  import { Modal } from './modal.js'
  import { AlertError } from './alert-error.js'
  import { calculateIMC, notANumber } from './utils.js'

// Variáveis
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

// Três maneiras de criar e atribuir função à um evento
// 1.
// form.onsubmit = () => {}

// 2.
// form.onsubmit = handleSubmit
// function handleSubmit() {}


// 3.
form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

// Lógica para validar se é número ou não os valores da altura e peso
  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return; // se coloca o return aqui para que o navegador não continue a leitura do código caso entrar aqui
  }
  
  AlertError.close()

//

  const result = calculateIMC(weight, height)
  displayResultMessage(result)
};

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}` 

  Modal.message.innerText = message
  Modal.open()
}

/* REGRAS DE CLEAN CODE: (REFATORAÇÃO)
    1. Nome das variáveis com bons significados, podem ser grandes sem problemas
    2. As funções mais enxutas, bem específicas
    3. Não colocacar comentários desnecessários (a não ser que estiver aprendendo, estudando)
    4. Quando mexer em um código sempre melhore ele (refatore ele)
*/

// Fechar a janela de erro ao digitar no campo
// evento é de nome .oninput, ele serve para ver se o input está sendo alterado

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()