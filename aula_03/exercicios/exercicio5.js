const leia = require("readline-sync")

const codigoProduto = leia.questionInt("Codigo do produto: ")
const quantidadeComprada = leia.questionInt("Quantidade comprada: ")
let produto 
let precoProduto

switch (codigoProduto) {
    case 1:
        produto = "Cachorro Quente"
        precoProduto = 10.00
        break
    case 2:
        produto = "X-Salada"
        precoProduto = 15.00
        break
    case 3:
        produto = "X-Bacon"
        precoProduto = 18.00
        break
    case 4:
        produto = "Bauru"
        precoProduto = 12.00
        break
    case 5:
        produto = "Refrigerante"
        precoProduto = 8.00
        break
    case 6:
        produto = "Suco de laranja"
        precoProduto = 13.00
        break

    default:
        console.log("Código de Produto não encontrado.")
        return
}

const valorTotalCompra = (precoProduto * quantidadeComprada).toFixed(2)

console.log(`Produto: ${produto} - Valor Total R$ ${valorTotalCompra}`)