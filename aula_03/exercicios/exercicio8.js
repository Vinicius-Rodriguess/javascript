const leia = require("readline-sync")

const operacaoEscolhida = leia.questionFloat(
    `Escolha a Operação
    1 - Saldo
    2 - Saque
    3 - Deposito
    `
)
let valor
let saldoAtual = 1000

if (operacaoEscolhida != 1) valor = leia.questionFloat("Digite o valor: ")

switch (operacaoEscolhida) {
    case 1:
        console.log(`Saldo: R$ ${saldoAtual.toFixed(2)}`)
        break

    case 2:
        if (valor > saldoAtual)
            console.log("Saldo insuficiente!")
        else {
            saldoAtual -= valor
            console.log(`Novo saldo: R$ ${saldoAtual.toFixed(2)}`)
        }
        break

    case 3:
        saldoAtual += valor
        console.log(`Novo saldo: R$ ${saldoAtual.toFixed(2)}`)
        break

    default:
        console.log("Operação Inválida!")
        return
}