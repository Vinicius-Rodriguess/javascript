const leia = require("readline-sync")

const num1 = leia.questionInt("Digite o primeiro numero do intervalo: ")
const num2 = leia.questionInt("Digite o segundo numero do intervalo: ")

if (num1 > num2) {
    console.log("O intervalo é invalido!")
    return
}

for (let i = num1; i < num2; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log(`${i} é múltiplo de 3 e 5`)
}