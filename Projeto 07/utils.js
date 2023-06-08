// FUNÇÕES UTILITÁRIAS

export function calculateIMC(weight, height) {
  return (weight / ((height / 100) **2)).toFixed(2)
};


// VALIDANDO DADOS

export function notANumber(value) {
  return isNaN(value) || value == "" // É colocado || OU "" vazio pois o isNaN considera que um valor vazio é um número e vai sair false na verificação se não é um número
}