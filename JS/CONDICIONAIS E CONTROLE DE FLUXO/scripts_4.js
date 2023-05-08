// AULA 04
// THROW TRY/CATCH

// Vamos tentar executar um bloco de código e se der um erro vai ser disparado esse erro então posso capturar esse erro na minha aplicação
// Então vou fazer uma função que caso não seja passado um parâmetro nessa função ela dispare um erro

// THROW
function sayMyName(name = '') {
  if (name === '')  {
    throw new Error("Nome é obrigatório")
  }
  console.log(name)
}


// TRY... CATCH
try {
  sayMyName('Mayk')
} catch(e) {
  console.log(e)
}

console.log('após o try/catch')