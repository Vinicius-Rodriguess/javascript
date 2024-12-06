const leia = require("readline-sync")

const matriz = [[],[],[]]
const numerosDiagonalPrincipal = []
const numerosDiagonalSecundaria = []
let somaDiagonalPrincipal = 0
let somaDiagonalSecundaria = 0

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = leia.questionInt("Digite um numero: ")
    }
}
// const matriz = 
//         [   [1,2,3],
//             [4,5,6],
//             [7,8,9] 	]

for (let i = 0; i < matriz.length; i++) {
    const diagonalPrincipal = matriz[i][i]
    const diagonalSecundaria = matriz[i][matriz[i].length - 1 - i]

    numerosDiagonalPrincipal[i] = diagonalPrincipal
    numerosDiagonalSecundaria[i] = diagonalSecundaria
    
    somaDiagonalPrincipal += diagonalPrincipal
    somaDiagonalSecundaria += diagonalSecundaria
}

console.log(`Elementos da Diagonal Principal: ${numerosDiagonalPrincipal}`)
console.log(`Elementos da Diagonal Secundária: ${numerosDiagonalSecundaria}`)
console.log(`Soma dos Elementos da Diagonal Principal: ${somaDiagonalPrincipal}`)
console.log(`Soma dos Elementos da Diagonal Secundária: ${somaDiagonalSecundaria}`)