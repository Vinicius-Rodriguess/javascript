const leia = require("readline-sync")

const numeroA = leia.questionInt("Digite o numero A: ")
const numeroB = leia.questionInt("Digite o numero B: ")
const numeroC = leia.questionInt("Digite o numero C: ")

if ((numeroA + numeroB) > numeroC) 
    console.log("A soma de A + B é Maior do que C")
else
    console.log("A soma de A + B é Menor do que C")