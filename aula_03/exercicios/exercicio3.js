const leia = require("readline-sync")

const nome = leia.question("Digite o Nome do doador: ")
const idade = leia.questionInt("Digite a idadee do doador: ")
const primeiraDoacao = leia.question("Primeira doacao de sangue? escolha true ou false: ").toLowerCase()

if (idade >= 18 && idade <= 59)
    console.log(`${nome} está apto(a) a para doar sangue!`)

else if (idade >= 60 && primeiraDoacao === "false")
    console.log(`${nome} está apto(a) a para doar sangue!`)

else
    console.log(`${nome} Não está apto(a) a para doar sangue!`)
