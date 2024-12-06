const leia = require("readline-sync")

const vetor = []
const numerosImpares = []
const numerosPares = []
let soma = 0

for (let i = 0; i < 10; i++) {
    vetor[i] = leia.questionInt(`Digite o ${i+1} numero: `)
}

for (let i = 0; i < vetor.length; i++) {
    const numeroAtual = vetor[i]

    if (numeroAtual % 2 === 0) numerosPares.push(numeroAtual)
    else numerosImpares.push(numeroAtual)

    soma += numeroAtual
}

console.log(`Elementos nos índices ímpares: ${numerosImpares}`)
console.log(`Elementos pares: ${numerosPares}`)
console.log(`Soma: ${soma}`)
console.log(`Média: ${soma / vetor.length}`)
