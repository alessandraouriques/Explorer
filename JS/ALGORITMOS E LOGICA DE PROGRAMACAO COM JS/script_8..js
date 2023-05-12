// AULA 08
// JOGO DA ADIVINHAÇÃO


// Math -> é um pacote de funcionalidades matemáticas 
// Math.random -> cria um número aleatório entre 0 e 1
// Math.ceil -> arredonda um número quebrado pra cima
// Math.floor -> arredonda um número quebrado para baixo
// Math.round -> arredonda números quebrados pra cima e pra baixo

/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas
*/



let result = prompt('Adivinhe o número que estou pensando? Está entre 0 e 10')
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1;

while(Number(result) != randomNumber) {
  result = prompt("Erro, tente novamente");
  xAttempts++
}

if(xAttempts > 1) {
alert(`Parabéns! Você acertou em ${xAttempts} tentativas`)
} else {
  alert(`Parabéns! Você acertou em apenas ${xAttempts} tentativa!`)
}




/*
Nessa aula vemos sobre:

[] Como controlar o fluxo da aplicação
[] Estrutura de repetição while
[] Gerar número aleatório utilizando Math()

Pacote com funcionalidades matemáticas
Math.random()
Math.round() - Math.ceil() - Math.floor()
[] Tipo de dado: NaN
não é um número
[] Tipo de erro: SyntaxError
erro de sintaxe; erro de escrita de código
[] console
Pacote com funcionalidades para o console do devtools (browser)
[] template literals ou template strings
interpolação de dados
*/