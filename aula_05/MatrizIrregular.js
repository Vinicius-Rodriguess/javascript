const leia = require("readline-sync")

const matrizInteiros = new Array(3)

for (let i = 0; i < matrizInteiros.length; i++) {
    matrizInteiros[i] = Array(3)
}

for (let i = 0; i < matrizInteiros.length; i++) {
    for (let j = 0; j < matrizInteiros[i].length; j++) {
        matrizInteiros[i][j] = leia.questionInt("Digite um numero: ")
    }
}

console.table(matrizInteiros)