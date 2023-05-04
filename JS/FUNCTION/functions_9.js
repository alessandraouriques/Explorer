 // AULA 09 - FUNÇÕES CONTRUTORAS
/* 
    Function constructor

      *expressão new
      *criar um novo objeto
      *this keyword */


      /* function Person(nome){
        this.name = nome
      }

      const mayk = new Person("Mayk")
      console.log(mayk) */




      function Person(nome){
        this.name = nome
        this.walk = function() {
          return this.name + " está andando"
        }
      }

      const mayk = new Person("Mayk")
      const xan = new Person('Xan')
      
      console.log(mayk.walk())
      console.log(xan.walk())
     