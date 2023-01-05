const arr = ["Frodo", "Sam"]
//adiciona um array
arr.push("potter", "rodrigo", "atila")

//corta um um arrya na parte que eu quero
const corte = arr.slice(0,2)

//adiciona uma lista
const add = ["joselito", "francisco"]

//junta mais de uma lista
const uniao = arr.concat(add, "joselita")

//indexof é para achar em qual possição esta o nome da pessoa
const indice = arr.indexOf("rodrigo")

//corto o que eu quero, adiciono na posição que eu quero. 
const alteracao = uniao.splice(indice, 1, "rodrigo_cabeça" )

//usando o for ao meu favor

for( let indice = 0; indice < alteracao.length; indice ++){
    const elemento = alteracao[indice]
    console.log(`${elemento} se enconttra na posição ${indice}`)
}

let pacientes = ["maria", "joaquina", "savanna", "alice"]
let menu = prompt("pacientes em fila, " + pacientes + "adicionar novo paciente ? sim/nao")

if(menu === sim){
    
}

