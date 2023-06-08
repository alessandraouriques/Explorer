// Colocando o modal tudo dentro de um array + exportando

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


// FECHAR O MODAL AO APERTAR A TECLA ESC


/* Posso fazer de 4 jeitos:

 // 1. Com arrow function
  window.addEventListener('keydown', event => {})

// 2. Com função anônima
  window.addEventListener('keydown', function(event) {})
  
// 3. Com uma função geral (só se permite UM por aplicativo, pois é uma forma geral de se escrever o onkeydown. Sempre irá considerar somente o ultimo onkeydown que escrevermos)
  window.onkeydown = handleKeydown
  */

// 4. Com uma função com nome específico, esta é a mais recomendada, pois fica mais claro o que voce esta fazendo com a função. E ao contrário da anterior ele vai sempre estar ali para estar acessível sempre que quisermos chamar. 
  window.addEventListener('keydown', handleKeydown)

/* Eu posso fazer essa function para ir no navegador e olhar no console qual o nome das teclas que eu for apertando pois está disparando o nome delas
function handleKeydown(event) {
  console.log(event.key)
}
*/

  function handleKeydown(event) {
    if(event.key === 'Escape') {
      Modal.close()
    }
  }