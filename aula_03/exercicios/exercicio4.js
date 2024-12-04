const leia = require("readline-sync")

const palavra1 = leia.question("Digite a Primeira palavra: ").toLowerCase()
const palavra2 = leia.question("Digite a Segundo palavra: ").toLowerCase()
const palavra3 = leia.question("Digite a Terceira palavra: ").toLowerCase()
let resultado = ""

if (palavra1 === "vertebrado") {

    if (palavra2 === "ave") {
        if (palavra3 === "carnivoro") resultado = "Aguia"
        if (palavra3 === "onivoro") resultado = "Pomba"
    } 

    if (palavra2 === "mamifero") {
        if (palavra3 === "onivoro") resultado = "Homem"
        if (palavra3 === "herbivoro") resultado = "Vaca"
    }
}

if (palavra1 === "invertebrado") {
    
    if (palavra2 === "inseto") {
        if (palavra3 === "hematofago") resultado = "Pulga"
        if (palavra3 === "herbivoro") resultado = "Lagarta"
    } 

    if (palavra2 === "anelideo") {
        if (palavra3 === "hematofago") resultado = "Sanguessuga"
        if (palavra3 === "onivoro") resultado = "Minhoca"
    }
}

if (resultado) 
    console.log(resultado)
else 
    console.log("Escreva uma combinação valida!")