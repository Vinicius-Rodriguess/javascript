const leia = require("readline-sync")

const matriz = [[], [], [], [], [], [], [], [], [], []]
const vetor = []

for(let i = 0; i < 10; i++) {
    let somatoria = 0

    for(let j = 0; j < 4; j++) {
        const nota = leia.questionInt(`Digite a nota do ${i+1} aluno do ${j+1} bimestre: `)
        matriz[i][j] = nota
        somatoria += nota
    }

    vetor[i] = somatoria / 4
}

console.log(vetor)