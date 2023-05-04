// AULA 07
// Manipulando Strings e Arrays

//Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
console.log(myArray)

let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)

// no primeiro (" ") tem um espaço
// se colocasse por exemplo ("o") a frase ficaria separada assim: "Eu quer", "viver", "Am", "r!"