
// AULA 03 E 04 - RETORNANDO VALORES DENTRO DA FUNÇÃO
//  PASSO 3 Então para fucionar desse jeito que foi escrito àcima deveria ser assim
  
 total = 0
  const sum = function (number1, number2) {
    let total = number1 + number2
    return total
  }

  let number1 = 34 
  let number2 = 25
  
  console.log(`o número 1 é ${number1}`)
  console.log(`o número 1 é ${number2}`)
  console.log(`a soma é ${sum(number1, number2)}`)
  console.log(total) // este irá funcionar se eu declarar um total fora do escopo da function
 

  //PORÉM NUNCA JAMAIS deve ser escrita uma variável sem um identificador let ou const, por exemplo o 'total' ali de cima, funcionou porém pode 
  //ocasionar muitos problemas para o código MAS nesse caso
  // MAS se eu colocar um const ou let não vai mais funcionar o código pois estão em diferentes escopos




// FUNCTION: OUTRA FORMA DE ENTENDER, FUNCTION É UM LIQUIDIFICADOR ELE MISTURA O QUE TU BOTAR DENTRO DELE

  function fazerSuco(fruta1, fruta2) {
    return 'suco de: ' + fruta1 + fruta2
  }

  const copo = fazerSuco('banana', 'maçã')

  console.log(copo)



  // 
  function cortarFrutas(fruta3, fruta4) {
    return 'cortar frutas: ' + fruta3 + fruta4
  }

  const tabua = cortarFrutas('pera', ' uva')

  console.log(tabua) 

