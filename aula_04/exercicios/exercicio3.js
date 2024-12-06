const leia = require("readline-sync")

let idadeDigitada = 1
let menores21anos = 0
let maiores50anos = 0

while(idadeDigitada > 0) {
    idadeDigitada = leia.questionInt("Digite uma idade: ")
    if (idadeDigitada > 0 && idadeDigitada < 21) menores21anos++
    if (idadeDigitada > 51) maiores50anos++
}

console.log(`Total de pessoas menores de 21 anos: ${menores21anos}\n Total de pessoas maiores de 50 anos: ${maiores50anos}`)