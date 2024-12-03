const leia = require("readline-sync")

let n1 = leia.questionInt("\nDigite o primeiro numero: ")
let n2 = leia.questionInt("\nDigite o segundo numero: ")
// let soma = n1 + n2

console.log("A Variavel N1 possui o valor: ", n1)
console.log("A Variavel N2 possui o valor: ", n2)

console.log("\nA soma de N1 + N2 é igual a: ", n1 + n2)
console.log("\nA subtracao de N1 + N2 é igual a: ", n1 - n2)
console.log("\nA multiplicacao de N1 + N2 é igual a: ", n1 * n2)
console.log("\nA divisao de N1 + N2 é igual a: ", n1 / n2)
console.log("\nA potenciacao de N1 por N2 é igual a: ", Math.pow(n1,n2))
console.log("\nA raiz quadrada de N1 é igual a: ", Math.sqrt(n1))