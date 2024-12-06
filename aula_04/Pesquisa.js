const leia = require("readline-sync")

let idade
let esporte
let futebol = 0
let voleibolMaiores18 = 0
let basquetebolMenores18 = 0
let outros = 0
let continua = "s"

while(continua === "s") {
    idade = leia.questionInt("Digite a sua idade: ")

    do {
        esporte = leia.questionInt("Digitet o esporte favorito (1-FUT/2VOL/3-BASQ/4-OUTROS)")

        if (esporte < 1 || esporte > 4) console.log("Digite um numero entre 1 e 4")

    } while (esporte < 1 || esporte > 4)

    if(esporte === 1) futebol++

    if(esporte === 2 && idade > 18) voleibolMaiores18++

    if(esporte === 4) outros++

    continua = leia.question("Deseja continuar (S/N)? ").toLowerCase()
}

console.log(`Total de pessoas que gostam de futebol: ${futebol}`)

console.log(`Total de pessoas que gostam de voleibol e são maiores de 18 anos: ${voleibolMaiores18}`)

console.log(`Total de pessoas que gostam de basquetebol e são menores de 18 anos: ${basquetebolMenores18}`)

console.log(`Total de pessoas que gostam de outros esportes: ${outros}`)
 