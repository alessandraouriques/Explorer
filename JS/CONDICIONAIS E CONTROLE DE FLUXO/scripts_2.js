// AULA 02
// IF & ELSE

// Muda o fluxo da aplicação

let temperature = 37.5
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature <= 37.5 && temperature >=37

if(highTemperature) {
  console.log("Febre alta")
} else if(mediumTemperature) {
  console.log("Febre moderada")
} else {
  console.log("Saudável")
}

// Posso deixar o ELSE vazio
// A aplicação começa entrando no IF e se ela encontrar o que procura ali não entrará nas demais