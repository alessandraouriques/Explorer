// 1. Import e export simples: Podemos importar qualquer tipo de arquivo e ele será executado imediatamente, como uma função é executada


    const message = "Mensagem" // Essa variável fica isolada nesse arquivo, e não consigo usar ela em outro lugar


// 2. Default import e export: Exportamos qualquer tipo de dado e, ao importar, podemos dar qualquer nome,
// Somente 1 default por arquivo

    export default 'algum dado'

    // ou para um dado que já existe
        const text = 'alguma coisa'
        export default text


// 3. Named export: Exportamos uma varável ou função e, ao importar, devemos colocar o mesmo nome.
// É possivel ter múltiplos exports

    export const today = Date.now()

    // exportando um valor já existente
        const double = number => number * 2
        export {double}

    // exportando diversos 
        export {today, double}

    // posso exportar diretamente
        export const text = "Texto"
        export const message = "outra mensagem"

  

// 4. Import as: É possível renomear um ou mais dados que foram exportados

    export function sum (a, b) {
      return a + b
    }


// 5. Import * as (múltiplos): Podemos importar todos os named exports e dar um nome padrão

    export const sum = (a, b) => a+b
    export const multiply = (a, b) => a*b
    export const subtract = (a, b) => a-b
    export const divide = (a, b) => a/b

    // ou 
    // export {sum, multiply, subtract, divide}