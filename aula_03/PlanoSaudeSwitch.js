const leia = require("readline-sync")

const nome = leia.question("Digite o seu nome: ")

console.log("****Faixas Etarias****")
console.log("1 - Idade entre 0 e 10 anos")
console.log("2 - Idade entre 11 e 29 anos")
console.log("3 - Idade entre 30 e 45 anos")
console.log("4 - Idade entre 46 e 59 anos")
console.log("5 - Idade entre 60 e 65 anos")
console.log("6 - Idade acima de 66 anos")

const faixaEtaria = leia.questionInt("Digite a sua faixa etaria: ")
let valor

switch (faixaEtaria) {
    case 1:
        valor = 100.00
        break
    case 2:
        valor = 200.00
        break
    case 3:
        valor = 300.00
        break
    case 4:
        valor = 500.00
        break
    case 5:
        valor = 600.00
        break
    case 5:
        valor = 1000.00
        break
    default:
        console.log("Faixa Estaria Invalida!")
        process.exit(0)
        break
}


console.log(`O valor do Plano de Saúde do(a) ${nome} é: R$ ${valor.toFixed(2)}`)