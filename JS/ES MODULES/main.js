// 1. Import e export simples
import './utils.js' // nessa linha ele importa e executa o arquivo

// 2. Default import e export (pode somente 1 por página)
  import qualquerNome from '.utils,js'
  alert(qualquerNome)

// 3. Named import e export
  import {today} from './utils.js'

// 4. Import as
  import { sum as soma } from './utils.js' 
  console.log(soma(18, 2))

// 5. Import * as
  import * as calculator from './utils.js'
    console.log(calculator.divide(48, 8))


    /* Referência
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export */