// AULA 06
// CALCULANDO A MÉDIA DE UM ESTUDANTE

/*
  Solicitar o nome do aluno e as 3 notas do bimestre 
  calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os parabéns.

  Se o aluno não passou no bimestre, motivar o aluno a dar
  seu melhor na prova de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno 
  e a nota
  */


let name = prompt('Digite o seu nome');
let first = prompt('Digite a nota da primeira');
let second = prompt('Digite a nota da segunda prova');
let third = prompt('Digite a nota da terceira prova');

first = Number(first);
second = Number(second);
third = Number(third);


// MEDIA: É a nota 1 + nota 2 + nota 3 dividido pelo número de notas (nesse caso 3)
let media = ((first + second + third) / 3);
let result = media > 6;
media = media.toFixed(2);

if (result) {
  alert('Parabéns, ' + name + ' você passou com media de ' + media );
} else if (media < 3) {
  alert('Reprovado')
} else {
  alert(name + ' estude para sua prova de recuperação! Suma media foi de ' + media)
}



/*
  - Caminhos lógicos baseado em algum dado ou informação:
    [] Tipo de dado: Boolean (true | false)
    [] if/else
    [] Operadores comparativos
*/    