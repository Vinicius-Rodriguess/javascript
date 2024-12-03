const leia = require("readline-sync")

const salario = leia.questionFloat("Digite o Salário: ")
const abono = leia.questionFloat("Digite o Abono: ")

const novoSalario = salario + abono
const salarioFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
}).format(novoSalario) 

console.log(`Novo Salário: ${salarioFormatado}`)