const leia = require("readline-sync")

const numero = leia.questionInt("Digite um numero: ")
let paridade = "Ímpar"
let sinal = "Positivo"

if (numero % 2 === 0) paridade = "Par"

if (numero < 0) sinal = "Negativo"

console.log(`O Número ${numero} é ${paridade} e ${sinal}!`)