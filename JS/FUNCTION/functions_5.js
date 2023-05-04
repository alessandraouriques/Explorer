 
  //  AULA 05 - FUNCTION SCOPE

 let subject     //se eu deixo essa variável aqui vazia a função irá me retonar UNDEFINED

function createThink(subject) {
  return subject
}

console.log(createThink(subject))




 let subject = 'create video' 

function createThink(subject) {
  return subject
}

console.log(createThink(subject)) // retornará 'create video' pois estou colocando a variável SUBJECT que é igual a 'CREATE VIDEO' dentro do parametro da function e mandando ela retornar subject 


//EXEMPLO PARA MOSTRAR QUE A VARIÁVEL ANIMAL NÃO É A MESMA VARIÁVEL SUBJECT DA FUNCTION, SAO DIFERENTES E TEM VALORES DIFERENTES SE MUDADAS DENTRO DO ESCOPO DA FUNCTION

let animal = 'create video' 

function createThink(subject) {
  return subject
}

console.log(createThink(animal))
console.log(animal)
