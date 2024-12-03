let nome = "Vinicius"
let profissao = "Pessoa Desenvolvedora"
let salarioBruto = 3500.44
const bonus = 0.05

console.log("\nNome: ", nome)
console.log("\nProfissao: ", profissao)
console.log(
    "Salario Liquido: ",
    new Intl.NumberFormat("pt-BR", { 
        style: "currency",
        currency: "BRL"
    }).format(salarioBruto + (bonus * salarioBruto))
)

console.log(`O Salário Bruto do Colaborador ${nome} é ${salarioBruto}`)

// console.log("\nNome: ", nome)
// console.log("\nTipo da variavel: ", typeof nome)

// nome = 12

// console.log("\nNome: ", nome)
// console.log("\nTipo da variavel: ", typeof nome)