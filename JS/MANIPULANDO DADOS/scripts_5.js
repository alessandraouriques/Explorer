// AULA 05
// Casas decimais

// Manipulando Strings e Números

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let number = 345.3345234
console.log(number.toFixed(2).replace(".", ","))

// o "toFixed()" transforma o number em String, então o ".replace" funciona, não funciona o .replace em um number puro
