// AULA 11
// OPERADOR CONDICIONAL (TERNÁRIO)

// Dependendo da condição, nós receberemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value 2

// Exemplos
// Café da manhã top para pessoas que querem pao e querem queijo também

  let pao = true
  let queijo = true

  const niceBreakfeast = pao && queijo ? 'Café top' : 'Café ruim'
  console.log(niceBreakfeast)

// então nessa condição como os dois são true o resultado é 'Café top' mas se um fosse false sairía 'Café ruim'
// Se fosse um café da manhã para uma pessoa que tanto faz se tem um dos dois ta bom eu usaria na condition || (or) e sairía 'Café top' desde que um dos dois fosse true


// Maior que 18

  let age = 16
  const canDrive = age >= 18 ? 'Can drive' : "Can't drive"
  
  console.log(canDrive)