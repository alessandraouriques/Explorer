// Import & expport

  import { Modal } from './modal.js'
  import { AlertError } from './alert-error.js'

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
  const showAlertError = notANumber(weight) || notANumber(height)

  if (showAlertError) {
    AlertError.open()
    return; // se coloca o return aqui para que o navegador não continue a leitura do código caso entrar aqui
  }

  AlertError.close()

//

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}` 

  Modal.message.innerText = message
  Modal.open()
};

function IMC(weight, height) {
  return (weight / ((height / 100) **2)).toFixed(2)
};


// VALIDANDO DADOS

function notANumber(value) {
  return isNaN(value) || value == "" // É colocado || OU "" vazio pois o isNaN considera que um valor vazio é um número e vai sair false na verificação se não é um número
}