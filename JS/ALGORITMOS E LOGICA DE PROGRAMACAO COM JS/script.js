/* # Sobre o desafio
💡 Principais pontos abordados nesse desafio:

- Estrutura de dados com objetos;
- Estrutura de repetição;
- Criação de funções;
- Operadores comparativos;


Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela. */

const students = [
  {
    name: "Karla",
    first_grade: 8,
    second_grade: 6,
  },

  {
    name: "Celso",
    first_grade: 2,
    second_grade: 5,
  },

  {
    name: "Patrícia",
    first_grade: 4,
    second_grade: 3,
  }
];


function average(first, second) {
  return ((first * second) / 2).toFixed(2)
};

function printAverage(student) {
    return `A média do(a) aluno(a) ${student.name} é de: ${average(student.first_grade, student.second_grade)}`
};

function printMessage(student) {
  if(average(student.first_grade, student.second_grade) >= 7) {
    return `Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`;
  } else {
    return `Não foi dessa vez, ${student.name}! Tente novamente!`;
  }
}

for(let student of students) {
  let studentAverage = printAverage(student);
  let studentMessage = printMessage(student);

  alert(`${studentAverage}\n${studentMessage}`);
}
