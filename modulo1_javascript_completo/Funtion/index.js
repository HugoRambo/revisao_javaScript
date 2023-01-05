function dobro (x){
    alert(`O dobro do valor de ${x} é ${x * 2}`);
}

function criarUsuário (nome, email, senha, tipo = "admin") {
    const usuario = {
        nome: nome,
        email: email,
        senha: senha,
        tipo: tipo
    }
    console.log(usuario);
}

criarUsuário("hugo", "hugo.rambo@hotmail.com", "123456789")


function calcularMedia (a, b){
    const media = (a + b) /2
}

function criarProduto (nome, preco){
    const produto = {
        nome: nome,
        preco: preco,
        estoque: 1
    }
    return produto
}

const produtoo = criarProduto("telefone" , 2500)
console.log(produtoo)

