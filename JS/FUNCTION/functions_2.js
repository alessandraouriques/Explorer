// AULA 02 ARGUMENTOS E PARÂMETROS


// Quando se tem um function() com os parêntesese vazios é chamado de:
//function expression
//function anonymous

// Parâmetros (Parameters) são o que vai dentro do () da function, e eles são respectivamento o que for escrito dentro do () da execução da função



  const sum = function (number1, number2) {
    console.log(number1 + number2)
  }

  sum(2,3) // Argumentos (Arguments) são esses valores que colocamos dentro do () da execução, eles irão ser atribuidos respectivamente na ordem dos parâmetros da function
  sum(4, 5)
  sum(5, 566545)
 



  //Posso reutilizar assim o sum para qualquer conta várias vezes, na verdade o que estamos reutilizando é o bloco de código lá de cima dentro dos {}




  // Outra forma de escrever a sum EXPLICAÇÃO E PASSO 1


  const sum = function (number1, number2) {
    console.log(number1 + number2)
  }

  let number1 = 34 // estas variáveis que declarei aqui mesmo que tenha o mesmo nome que os do function eles não são os mesmos pois estão em diferentes escopos
  let number2 = 25
  sum(number1, number2) // eles passam a ser os mesmos quando eu declaro a execução do sum e colocando eles dentro dos argumentos para serem mandados respectivamente aos parametros da function
 




  // Forma (errada) PASSO 2


  const sum = function (number1, number2) {
    console.log(number1 + number2)
  }

  let number1 = 34 
  let number2 = 25
  
  console.log(`o número 1 é ${number1}`)
  console.log(`o número 1 é ${number2}`)
  console.log(`a soma é ${sum(number1, number2)}`) // Aqui foi declarado o execute do sum, porém no console.log não irá aparecer assim
  //irá aparecer o 59 antes e 'a soma é' ficará undefined porque
  // o JS executa primeiro a função sum(number1, number2) e DEPOIS interpola {} e lê a string
  // então como dentro a sum(number1, number2) vai executar o console log dentro da function
  // ele imediatamente vai imprimir isso, que é 59.
  // Toda function retorna algo, então se a function não tem um RETURN ela vai retornar UNDEFINED, como neste caso
  o RETURN faz com que a function pare a sua execução e retorne o que está à frente do RETURN