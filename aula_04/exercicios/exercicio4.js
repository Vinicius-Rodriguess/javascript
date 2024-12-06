const leia = require("readline-sync")

let continua = true
let devBackEnd = 0
let mulheresCisETransFront = 0
let homemCisTransMobile40anos = 0
let naoBinarioFullStack30anos = 0
let totalIdades = 0
let quantidadeParticipantes = 0

while (continua) {
    const idade = leia.questionInt("Digite sua idade: ")
    const identidadeGenero = leia.questionInt(`
        1 - Mulher Cis
        2 - Homem Cis
        3 - Não Binário
        4 - Mulher Trans
        5 - Homem Trans
        6 - Outros
    `)
    const pessoaDesenvolvedora = leia.questionInt(`
        1 - Backend
        2 - Frontend
        3 - Mobile
        4 - FullStack
    `)

    if(pessoaDesenvolvedora === 1) devBackEnd++
    if((identidadeGenero === 1 || identidadeGenero === 4) && pessoaDesenvolvedora === 2) mulheresCisETransFront++
    if((identidadeGenero === 2 || identidadeGenero === 5) && pessoaDesenvolvedora === 3 && idade > 40) homemCisTransMobile40anos++
    if(identidadeGenero === 3 && pessoaDesenvolvedora === 4 && idade < 30) naoBinarioFullStack30anos++
    
    totalIdades += idade
    quantidadeParticipantes++

    continua = leia.keyInYNStrict("Deseja continuar a leitura dos dados de um novo colaborador: ")
}


console.log(`O número de pessoas desenvolvedoras Backend: ${devBackEnd}`)
console.log(`O número de Mulheres Cis e Trans desenvolvedoras Frontend: ${mulheresCisETransFront}`)
console.log(`O número de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${homemCisTransMobile40anos}`)
console.log(`O número de Não Binários desenvolvedores FullStack menores de 30 anos: ${naoBinarioFullStack30anos}`)
console.log(`O número total de pessoas que responderam à pesquisa: ${quantidadeParticipantes}`)
console.log(`A média de idade das pessoas que responderam à pesquisa: ${totalIdades / quantidadeParticipantes}`)