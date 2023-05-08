// AULA 04
// FOR IN

// Cria um loop em cima de um objeto pegando as propriedades do objeto

let person = {
  name: 'Xan',
  age: 32,
  weight: 75,
}

for(const property in person) {
  console.log(property)
  console.log(person[property])
}
