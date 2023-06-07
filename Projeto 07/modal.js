// Colocando tudo dentro de um array 
export const Modal = {

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


// Se na arrow function tiver apenas uma linha de código da para tirar as chaves {}
Modal.btnClose.onclick = () => Modal.close();