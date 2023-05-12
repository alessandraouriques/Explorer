// AULA 13
// CALCULANDO O IMC DOS PACIENTES

/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */


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
  altura: 172,
  },
]


/* alert(`
  Paciente ${patients[0].nome} possui o IMC de 
  ${(patients[0].peso / ((patients[0].altura / 100) ** 2)).toFixed(2)}
`)
*/

/* function printPatientIMC(patient) {
  return `
  Paciente ${patient.nome} possui o IMC de 
  ${(patient.peso / ((patient.altura / 100) ** 2)).toFixed(2)}
`
}

for(let patient of patients) {
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage)
} */


/* const printPatientIMC = (patient) => {
  return `
  Paciente ${patient.nome} possui o IMC de 
  ${(patient.peso / ((patient.altura / 100) ** 2)).toFixed(2)}
`
}

for(let patient of patients) {
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage)
} */


function IMC(weight, height) {
  return (weight / ((height / 100)) **2).tofixed(2)
}

function printPatientIMC(patient) {
  return `Paciente ${patient.name} possui o IMC de
  ${IMC(patients.peso, patients.altura)}
  `
}

for(let patient of patients) {
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage)
}







