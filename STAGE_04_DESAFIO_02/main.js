// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello world!")


// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let x = prompt("Escreva o primeiro número para a soma")
let y = prompt("Escreva o segundo número para a soma")

let resultado = Number(x) + Number(y)

alert(resultado)



// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. 
// Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

let variavel = Number(prompt("Escreva alguma coisa para verificar se é um Number"))

if(!Number.isNaN(variavel)) {
  alert("É um número!")
}
else{
  alert("Não é um número!")
} 
 


// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. 
// Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

  let variable = 2


if(typeof variable === 'string') {
  console.log("É uma string")
}
else {
  console.log("Não é uma String")
}


// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. 
// Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

  let variable = true

  if(typeof variable === 'boolean') {
    alert("É um booleano!")
  }
  else {
    alert("Não é um booleano!")
  }



// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

let x = 5
let y = 3

alert(x - y)



// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

let x = Number(prompt("Escreva o primeiro número da multiplicação"));
let y = Number(prompt("Escreva o segundo número da multiplicação"));

function mult(x, y) {
  let result = x * y 
  return result
};

alert(mult(x, y));



// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

let x = 65;
let y = 2;

console.log(x / y);



// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. 
// Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

let x = Number(prompt("Escreva um número para saber se é par."))

if(x % 2 == 0) {
  alert("É par!")
}
else {
  alert("Não é par!")
}



// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. 
// Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

let x = Number(prompt("Escreva um número para saber se é ímpar."))

if(x % 2 !== 0) {
  alert("É ímpar!")
}
else {
  alert("Não é ímpar!")
}