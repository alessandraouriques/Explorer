// AULA 12
// FALSY E TRUTHY (o typecasting transforma os valores forçosamente ao um boolean de acordo com as regras àbaixo, esses valores sem serem atribuídos alguma coisa serão considerados TRUTHY OU FALSY)

// FALSY é quando um valor é considerado falso em contextos que onde o booleano é obrigatório (condicionais e loops)
/* Todos os valores abaixo seríam representados como FALSE em um boolean
    * false
    * 0
    * -0
    * null
    * undefined
    * NaN
*/

console.log(0 ? 'verdadeiro' : 'falso')


// TRUTHY é quando um valor é considerado true em contextos que onde o booleano é obrigatório (condicionais e loops)
/* Todos os valores abaixo seríam representados como FALSE em um boolean
    * true
    * {}
    * []
    * 1
    * 3.23
    * "0"
    * "false"
    * -1
    * Infinity
    * -Infinity
*/

console.log({} ? 'verdadeiro' : 'falso')