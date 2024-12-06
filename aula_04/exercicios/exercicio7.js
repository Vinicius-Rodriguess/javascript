const leia = require("readline-sync")

const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]
const numero = leia.questionInt("Digite o numero que voce deseja encontrar: ")
const posicao = vetor.indexOf(numero)

if (posicao < 0) 
    console.log(`O número ${numero} não foi encontrado!`)
else 
    console.log(`O número ${numero} está localizado na posição: ${posicao}`)