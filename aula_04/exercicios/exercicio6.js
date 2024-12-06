const leia = require("readline-sync")

let numero = 1
let soma = 0
let quantidadeNumeros = 0

do {

    numero = leia.questionInt("Digite um numero: ")
    if (numero !== 0 && numero % 3 === 0) {
        soma += numero
        quantidadeNumeros++
    }

} while(numero !== 0)

console.log(`A média de todos os números múltiplos de 3 é: ${soma / quantidadeNumeros}`)