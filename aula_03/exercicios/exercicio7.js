const leia = require("readline-sync")

const numero1 = leia.questionFloat("Digite o numero 1: ")
const numero2 = leia.questionFloat("Digite o numero 2: ")
const operacaoEscolhida = leia.questionInt(
    `Escolha uma operacao:
    1 - soma
    2 - subtracao
    3 - multiplicacao
    4 - divisao\n`
)
let resultado
let operacao

switch (operacaoEscolhida) {
    case 1:
        resultado = numero1 + numero2
        operacao = "+"
        break
    case 2:
        resultado = numero1 - numero2
        operacao = "-"
        break
    case 3:
        resultado = numero1 * numero2
        operacao = "*"
        break
    case 4:
        resultado = numero1 / numero2
        operacao = "/"
        break
    default:
        console.log("Operação Inválida!")
        return
}

console.log(`${numero1} ${operacao} ${numero2} = ${resultado}`)