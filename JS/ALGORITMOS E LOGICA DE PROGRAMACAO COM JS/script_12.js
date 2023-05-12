// AULA 12
// ESTRUTURANDO DADOS COM OBJETOS

/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes


Nessa aula aprenderemos sobre:
[] Estruturas de dados: Objetos
[] object literal
[] for..of

*/

const patients = [
  {
  nome: "Luiz",
  idade: 20,
  peso: 100,
  altura: 190,
  },
  
  {
  nome: "Pamela",
  idade: 15,
  peso: 70,
  altura: 160,
  },

  {
  nome: "Oscar",
  idade: 35,
  peso: 85,
  altura: 174,
  },
]

let patientsNames = []
let patientsAge = []
let patientsWeight = []
let patientsHeight = []

/* 
for(let index = 0; index < patients.length; index++) {
  patientsNames[index] = patients[index].nome
}

alert(patientsNames)
*/

/*
for(let patient of patients) {
  patientsNames.push(patient.nome)
}

alert(patientsNames)
*/

for(let patient of patients) {
  patientsNames.push(patient.nome)
}

for(let patient of patients) {
  patientsAge.push(patient.idade)
}

for(let patient of patients) {
  patientsWeight.push(patient.peso)
}

for(let patient of patients) {
  patientsHeight.push(patient.altura)
}

alert(`O paciente ${patientsNames[0]} tem ${patientsAge[0]} anos de idade, pesa ${patientsWeight[0]} kilos e tem ${patientsHeight[0]} cm de altura`)