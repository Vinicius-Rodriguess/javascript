const leia = require("readline-sync")

const nota1 = leia.questionFloat("Digite a Nota 1: ")
const nota2 = leia.questionFloat("Digite a Nota 2: ")
const nota3 = leia.questionFloat("Digite a Nota 3: ")
const nota4 = leia.questionFloat("Digite a Nota 4: ")
const totalDeNotas = 4
const mediaFinal = ((nota1 + nota2 + nota3 + nota4) / totalDeNotas).toFixed(1)

console.log(`Média final: ${mediaFinal}`)