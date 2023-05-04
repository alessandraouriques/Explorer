 
// AULA 08 - CALLBACK FUNCTION
// Já que a function é um tipo de dado ela também pode ir dentro dos 'arguments' do executor, como também da para escrever uma function dentro do object da própria function

 function sayMyName(name) {
  console.log('antes de executar a callback')
  name() //executando dentro da function
  console.log('depois de executar a callback')
}

sayMyName(
  () => {
    console.log('estou em uma callback')
  }
) 

// Posso escrever assim que da na mesma

   function sayMyName(){
    function name(){
      console.log('estou em uma callback dentro da function')
    }
    name() //chamei a function criada aqui dentro
  }

  sayMyName() //executei a sayMyName para ela executar o que tiver dentro