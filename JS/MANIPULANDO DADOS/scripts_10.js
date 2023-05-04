// AULA 10
// Manipulando Arrays

// Contar elementros de um array

console.log(['a', 'b'].length)


// Dentro do Array os elementos podem ser qualquer tipo de dado, até "function"

console.log([
  'a',
{type: "array"},
function () { return "alo"},
].length)


// Acessando um elemento dentro do Array

console.log([
  'a',
{type: "array"},
function () { return "alo"},
][2])

