const matriz = [ ["l1, c1", "l1, c2", "l1, c3", "l1, c4"], 
["l2, c1", "l2, c2", "l2, c3", "l2, c4"], 
["l3, c1", "l3, c2", "l3, c3", "l3, c4"], 
]

console.table(matriz)

let moveis = []
let opcao = ""
do{
    
    let option = prompt(` Total de imoveis ${moveis.length}
    \nmenu ! \n 1° cadastrar um imovel  \n 2° mostrar todos os imoveis   \n 3° Sair` )
    let InfoMoveis = []
    switch(option){
    case '1':
        alert(`Para cadastra suas informações, vou precisar de alguns dados. `)
        let imovel = {}
        imovel.proprietario = prompt(`Nome do proprietario :`)
        imovel.quartos = prompt("quantidade de quartos :")
        imovel.banheiros = prompt("quantidade de banheiros :")
        imovel.garragem = prompt("Imovel possui garagem  :? ")
        const confirmacao = confirm(`Salvar esse imovel ? \n
        Proprietario${imovel.proprietario}
        \nQuartos: ${imovel.quartos}
        \nBanheiros: ${imovel.banheiros}
        \nGarragem: ${imovel.garragem}`)
        if (confirmacao){
            imoveis.push(imovel)
            alert("Imovel salvo com sucesso. ")
        } else{
            alert("Voltando ao menu")
        }
        break
    case '2':
        for (let i = 0; i < imoveis.length; i++) {
            alert(`Imovel ${i + 1}
            \nProprietario ${imoveis[i].proprietario} \nQuartos: ${imoveis[i].quartos}
            Banheiros: ${imoveis[i].banheiros}
            Garragem: ${imoveis[i].garragem}`)
            }
        break
    case '3':
        let sair = alert("Voce escolheu sair")
        break
    }
    }while(opcao !=="3")
    



