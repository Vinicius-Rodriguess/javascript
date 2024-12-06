const leia = require("readline-sync")

let i = 1
const numero = leia.questionInt("Digite um numero: ")

while(i <= 10) {
    console.log(`${numero} x ${i} = ${numero * i}`)
    i++
}