const leia = require("readline-sync")

let i = 1
const numero = leia.questionInt("Digite um numero: ")

do {
  console.log(`${numero} x ${i} = ${numero * i}`)
  i++
} while (i <= 10)
