const leia = require("readline-sync")

const numero1 = leia.questionFloat("Digite o Numero 1: ")
const numero2 = leia.questionFloat("Digite o Numero 2: ")
const numero3 = leia.questionFloat("Digite o Numero 3: ")
const numero4 = leia.questionFloat("Digite o Numero 4: ")
const diferenca = (numero1 * numero2)  - (numero3 * numero4)

console.log(`Diferença: ${diferenca}`)