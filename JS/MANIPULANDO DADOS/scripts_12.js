// AULA 12
// Manipulando Arrays

  let techs = ["html", "css", "js"]

  // Adicionar um item no fim

    techs.push("nodejs")

  // Adicionar um item no começo

    techs.unshift("sql")

  // Remover um item do fim

    techs.pop()

  // Remover um item do começo

    techs.shift()

  // Pegar somente alguns elementos do array

    techs.slice(1, 3)
    /*   o número 1 é a posição index dos items dentro do Array, 
      o número 3 é quantos a partir da posição index eu vou pegar */

  // Remover 1 ou mais items em qualquer posição

    techs.splice(1, 2)

  // Encontrar a posição de um elemento no Array
  
    let index = techs.indexOf('css')
    techs.splice(index, 1)

    console.log(techs)
