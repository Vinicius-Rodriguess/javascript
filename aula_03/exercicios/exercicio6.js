const leia = require("readline-sync")

const nomeColaborador = leia.question("Nome do colaborador: ")
const codigoCargo = leia.questionInt("Cargo: ")
const salario = leia.questionFloat("Salario: ")
let cargo
let reajusteSalarial

switch (codigoCargo) {
    case 1:
        reajusteSalarial = 0.10 
        cargo = "Gerente"
        break
    case 2:
        reajusteSalarial = 0.07
        cargo = "Vendedor"
        break
    case 3:
        reajusteSalarial = 0.09
        cargo = "Supervisor"
        break
    case 4:
        reajusteSalarial = 0.06
        cargo = "Motorista"
        break
    case 5:
        reajusteSalarial = 0.05
        cargo = "Estoquista"
        break
    case 6:
        reajusteSalarial = 0.08
        cargo = "Tecnico de TI"
        break

    default:
        console.log("Codigo de cargo invalido!")
        return
}

const novoSalario = (salario + (salario * reajusteSalarial)).toFixed(2)

console.log(`Nome do Colaborador: ${nomeColaborador}, Cargo: ${cargo}, Salário: R$ ${novoSalario}`)