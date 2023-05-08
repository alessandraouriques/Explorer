// AULA 01
// FOR

// Dentro do for temos 2 controles:
//  * break; para a execução do loop
//  * continue; pula a execução do momento


// A SINTAXE DE FOR SERÍA A SEGUINTE:
//    for(inicialização de uma variável; condição de continuação para o loop; expressão final)


// EXEMPLOS: 

for(let i = 0; i < 10 ; i++) {
  console.log(i)
}
 

// Se eu quiser parar a execução em determinado ponto:

for(let i = 100; i > 0; i--) {
  if(i === 50) {
    break;
  }
  console.log(i)
}

// Se eu quiser pular a execução do momento

for(let i = 10; i > 0; i--) {

if(i === 5) {
  continue;
}
  console.log(i)
}