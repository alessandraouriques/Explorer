// AULA 10
// INTERAGINDO COM UM MENU DE OPÇÕES - PT 1

/* PERGUNTAS A SEREM FEITAS 
1. Quais os dados de entrada que terei? (inputs)
2. Quais as variáveis?
3. Qual o caminho ideal? (fluxo ideal)
4. Qual(is) o(s) caminho(s) alternativo(s)? (fluxo alternativo)
5. Quais tratamentos de dados preciso fazer? (estrutura de dados, funções)
6. Qual é a saída, ou quais os dados de saída, esperada? (outputs)
*/



/* * PROBLEMA: * 

  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.


  // RESPOSTAS PARA AS PERGUNTAS 

    Dados de estrada do usuário (inputs)\
      1. Número desejado das opções
      2. Item da lista

    Variáveis
      1. Opção digitada 
      2. Lista de itens

    Tratamento de dados
      1. Transformar string em número
      2. Guardar Item na lista quando for digitado
*/


let option;
let items = [];


while(option !== 3) {

option = Number(prompt(`Olá usuário! Digite o número da opção desejada:

  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa
  `));


if(option === 1) {
  let item = prompt('Digite o nome do item') 
  items.push(item)
} 

else if(option === 2) {
  if(items.length === 0) {
    alert("Não existem itens cadastrados")
  } else {
  alert(items)
  }
}

else {
  if(option === 3) {
    alert("Até mais!")
  } else {
    alert("Opção inválida")
  }
}
}











/*
Ferramentas da linguagem que abordaremos
[] loop while
[] arrays e funções de arrays
[] condicional if/else
[] template literals (strings)
*/