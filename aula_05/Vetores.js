const leia = require("readline-sync")

const vetorStrings = ["Boxer", "Pastor Alemão", "Pinscher", "Husky Siberiano", "Corgi"]
const vetorInteiros = new Array(5)
const vetorNumeros = [7,5,9,1,3,2,6,4,8,10]

for (let i = 0; i < vetorStrings.length; i++) {
    console.log(vetorStrings[i])
}

console.log(`O tamanho do Vetor de strings é: ${vetorStrings.length}`)

// for (let i = 0; i < vetorInteiros.length; i++) {
//     vetorInteiros[i] = leia.questionInt("Digite um numero: ")
// }

console.table(vetorInteiros)

console.table(vetorStrings.sort())

console.table(vetorNumeros.sort((a , b) => a - b))