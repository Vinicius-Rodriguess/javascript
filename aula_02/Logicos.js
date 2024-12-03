const leia = require("readline-sync")

// Dados do Usuario
const usuario = "user@email.com.br"
const senha = "user1234"
const isAdmin = false
const isGerente = true
const isBlock = false

console.log("\nTela de login")

let usuarioLogin = leia.question("Digite o seu usuario: ")
let senhaLogin = leia.question("Digite a seu senha: ", {
    hideEchoBack: true
})

if (usuarioLogin === usuario && senhaLogin === senha) {
    var mensagem = "Seja bem Vindo! Usuario autenticado com sucesso!"
} else {
    var mensagem = "Acesso Negado!"
}

console.log(mensagem)

if (!isBlock) {
    console.log("Usuario ativo!")
} else {
    console.log("Usuario esta inativo! Contate o administrador")
    process.exit(0)
}

if (isAdmin || isGerente) {
    console.log("Acesso ao painel administrativo liiberado!")
} else {
    console.log("Acesso ao painel administrativo Negado!")
}