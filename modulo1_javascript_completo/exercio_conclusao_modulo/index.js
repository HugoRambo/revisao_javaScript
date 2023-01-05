/*## Sistema de Vagas de Emprego

Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:

- Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema
    - Listar vagas disponíveis
    - Criar um nova vaga
    - Visualizar uma vaga
    - Inscrever um candidato em uma vaga
    - Excluir uma vaga
    - Sair
- A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.
- A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
- A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
- A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
- A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções.

*/

//Dentro do script, antes de ir adiante, vamos criar um array no escopo mais externo para armazenar as vagas salvas:

const vagas = []

//Depois podemos começar a escrever as funções que vamos ter no programa. A primeira delas é a função de listas as vagas:

function listarVagas() {
    const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
      textoFinal += indice + ". "
      textoFinal += vaga.nome
      textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
      return textoFinal
    }, "")
  
    alert(vagasEmTexto)
  }

//E então a função de adicionar uma nova vaga:
function novaVaga() {
    const nome = prompt("Informe um nome para a vaga:")
    const descricao = prompt("Informe um descrição para a vaga:")
    const dataLimite = prompt("Informe um data limite (dd/mm/aaaa) para a vaga:")
  
    const confirmacao = confirm(
      "Deseja criar uma nova vaga com essas informações?\n" +
      "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite
    )
  
    if (confirmacao) {
      const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
      vagas.push(novaVaga)
      alert("Vaga criada.")
    }
  }

//Vamos criar também uma fufunction exibirVaga() {

    function exibirVaga() {
        const indice = prompt("Informe o índice da vaga que deseja exibir:")
        const vaga = vagas[indice]
      
        const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => textoFinal + "\n - " + candidato, "")
      
        alert(
          "Vaga nº " + indice +
          "\nNome: " + vaga.nome +
          "\nDescrição: " + vaga.descricao +
          "\nData limite: " + vaga.dataLimite +
          "\nQuantidade de candidatos: " + vaga.candidatos.length +
          "\nCandidatos inscritos:" + candidatosEmTexto
        )
      }

//A função de inscrever um candidato em uma vaga:

function inscreverCandidato() {
    const candidato = prompt("Informe o nome do(a) candidato(a):")
    const indice = prompt("Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever:")
    const vaga = vagas[indice]
  
    const confirmacao = confirm(
      "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
      "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )
  
    if (confirmacao) {
      vaga.candidatos.push(candidato)
      alert("Inscrição realizada")
    }
  }

//A função de excluir uma vaga:

function excluirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja excluir:")
    const vaga = vagas[indice]
  
    const confirmacao = confirm(
      "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
      "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )
  
    if (confirmacao) {
      vagas.splice(indice, 1)
      alert("Vaga excluída.")
    }
  }

  //Uma função para exibir o menu e obter a opção escolhida pelo usuário:
  function exibirMenu() {
    const opcao = prompt(
      "Cadastro de Vagas de Emprego" +
      "\n\nEscolha uma das opções" +
      "\n1. Listar vagas disponíveis" +
      "\n2. Criar uma nova vaga" +
      "\n3. Visualizar uma vaga" +
      "\n4. Inscrever um(a) candidato(a)" +
      "\n5. Excluir uma vaga" +
      "\n6. Sair"
    )
  
    return opcao
  }

  //E por fim vamos criar uma função principal para executar nossa aplicação e então chamar essa mesma 
  //função no escopo mais externo, para que ela execute assim que o script for carregado:

  function executar() {
    let opcao = ""
  
    do {
      opcao = exibirMenu()
  
      switch (opcao) {
        case "1":
          listarVagas()
          break
        case "2":
          novaVaga()
          break
        case "3":
          exibirVaga()
          break
        case "4":
          inscreverCandidato()
          break
        case "5":
          excluirVaga()
        case "6":
          alert("Saindo...")
          break
        default:
          alert("Opção inválida.")
      }
  
    } while (opcao !== "6");
  }
  
  executar()


  //opçcao alternativa. 


  let opcao 
let Vagas = []
let numeroCandidaturas = ""

function menu(){
   opcao = prompt("Escolha uma das opções a seguir: \n1-Listar vagas disponíveis  \n2-Criar uma nova vaga \n3-Visualizar uma vaga \n4-Inscrever um candidato em uma vaga \n5-Excluir uma vaga \n6-Sair")
}
do{
  menu()
  switch(opcao){
    case "1":
      listarVagas()
    break
    case "2":
      criarVaga()
    break
    case "3":
      visualizarVagas()
    break
    case "4":
      candidaturas()
    break
    case "5":
      excluirVaga()
    break
    case "6":
      encerrar()
    break  
  }
  
}while(opcao !=6)
  
function listarVagas(){
  let iterarVagas = Vagas.map(function(iterar,index){
      alert("Vagas disponíveis: " + iterar.nomeVaga + "\nO indice da vaga é: " + (index + 1) + "\nQuantidade de candidatos por vaga:")
      })
}

function criarVaga(){
      var listaDeVagas = {}
      listaDeVagas.nomeVaga =  prompt("-----Criando uma nova Vaga  !!!!-----\nDigite o nome da vaga")
      listaDeVagas.descricao = prompt("Digite uma descrição para a vaga: ")
      Vagas.push(listaDeVagas)
}

function visualizarVagas(){
  alert("Vagas Disponíveis ... ")
  const indice = Vagas.indexOf(prompt("Digite o indice"))
  alert(indice)
}
function candidaturas(){
  listaDeVagas.nomecandidato = prompt("Olá candidato, insira seu nome: ")
  confirm("Deseja realizar a candidatura?")
      numeroCandidaturas +=1
}

function excluirVaga(){
  alert("Excluindo Vaga !!!")
  Vagas.pop()
}

function encerrar(){
  alert("Encerrando programa !!!")
}