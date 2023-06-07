// Variáveis

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

// Colocando tudo dentro de um array 
const Modal = {

  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  btnClose: document.querySelector('.modal button.close'),

  // Forma moderna de escrita de uma função com nome atribuido 
  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}


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

 
  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}` 

  Modal.message.innerText = message
  Modal.open()
};

// Se na arrow function tiver apenas uma linha de código da para tirar as chaves {}
Modal.btnClose.onclick = () => Modal.close();


function IMC(weight, height) {
  return (weight / ((height / 100) **2)).toFixed(2)
};