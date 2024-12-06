const leia = require("readline-sync")

let pares = 0
let impares = 0

for (let i = 0; i < 10; i++) {
    const numeroDigitado = leia.questionInt(`Digite o ${i+1} numero: `)
    if (numeroDigitado % 2 === 0)
        pares++
    else 
        impares++
}

console.log(`Total de números pares: ${pares}\n Total de números ímpares: ${impares}`)