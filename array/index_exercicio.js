const baralho= []
let opcao = ""

do {
    opcao = prompt(
        "cartas no baralho" + baralho.length + "\n1. Adicionar uma carta \n2. Puxar uma carta\n3. Sair"
    )
    switch(opcao){
        case '1':
            const novaCarta = prompt("qual é a carta")
            baralho.push(novaCarta)
            break
        case "2":
            const cartaPuxada = baralho.pop()
            if(!cartaPuxada) {
                alert("Não há nenhuma carta no baralho")
            }else {
                alert("voce puxou uma carta" + cartaPuxada) 
            }
            break
        case "3":
            alert("Saindo...")
            break
        default:
            alert("opcao invalida") 
        }
}while(opcao !== "3")