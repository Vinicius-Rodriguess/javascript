const leia = require("readline-sync")

const numero = leia.questionInt("Digite um numero: ")

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`)
}