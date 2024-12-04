const leia = require("readline-sync")

const nome = leia.question("Digite o seu nome: ")
const idade = leia.questionInt("Digite a sua idade: ")
let valor

if (idade >= 0) {
    console.log("Por favor, insira uma idade valida!")
    process.exit(0)
}

if (idade <= 10)
    valor = 100.00
else if (idade <= 29)
    valor = 200.00
else if (idade <= 45)
    valor = 500.00
else if (idade <= 65)
    valor = 600.00
else 
    valor = 1000.00

console.log(`O valor do Plano de Saúde do(a) ${nome} é: R$ ${valor.toFixed(2)}`)