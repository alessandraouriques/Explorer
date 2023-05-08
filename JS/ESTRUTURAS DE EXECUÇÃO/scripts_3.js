// AULA 03
// FOR OF

// É uma declaração que cria loop a través de uma variável pré existente
// Percorre objetos iterativos chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto

// EXEMPLO

let name = 'Mayk'
for(let char of name) {
  console.log(char)
}

// Pode ser usado também em um Array

let names = ['Joao', 'Pedro', 'Paulo']

for(let name of names) {
  console.log(name)
}