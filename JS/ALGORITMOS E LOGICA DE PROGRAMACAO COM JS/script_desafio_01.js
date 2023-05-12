/* Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~. */



const numberOne = prompt("Insira o primero número");
const numberTwo = prompt("Insira o segundo número");

const sum = alert("A soma é " + (Number(numberOne) + Number(numberTwo)));
const sub = alert("A subtração é " + (Number(numberOne) - Number(numberTwo)));
const mult = alert("A multiplicação é " + (Number(numberOne) * Number(numberTwo)));
const div = alert("A divisão é " + (Number(numberOne) / Number(numberTwo)));
const rest = alert("O resto é " + (Number(numberOne) % Number(numberTwo)));

if((Number(numberOne) + Number(numberTwo)) % 2 === 0) {
  alert("O resultado da soma é um número par: " + (Number(numberOne) + Number(numberTwo)))
}
else {
  alert("O resultado da soma é um número ímpar: " + (Number(numberOne) + Number(numberTwo)))
};

if(numberOne == numberTwo) {
  alert("Os números digitados são iguais")
}
else {
  alert("Os números digitados são diferentes")
};