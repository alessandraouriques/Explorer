 
// AULA 06 - FUNCTION HOISTING

// Escrito dessa forma "declaration" a function sofre o hoisting
 sayMyName();

function sayMyName() {
  console.log('Xan')
}
 

// Escrito dessa forma "expressão" somente o "var sayMyName" vai sofrer hoisting, dando erro, pois o sayMyName não é uma function e o "var sayMyName" fica UNDEFINDED também pois não se atribuiu nenhum valor a ele
sayMyName();

var sayMyName = function sayMyName() {
  console.log('Xan')
}
