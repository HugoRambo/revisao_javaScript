
/*### Treinando a Criação de Classes
Crie, em arquivos separados, as seguintes classes utilizando javascript:

- **User**, que deverá possuir:
    - um atributo **fullname**, atribuível na instanciação
    - um atributo **email**, atribuível na instanciação
    - um atributo **password**, atribuível na instanciação
    - um método login, que tem como parâmetros um email e uma senha e deve comparar esses parâmetros com o email e a senha do usuário e mostrar uma mensagem no console dizendo se o login foi bem sucedido ou não
- **Product**, que deverá possuir:
    - um atributo **name**, atribuível na instanciação
    - um atributo **description**, atribuível na instanciação
    - um atributo **price**, atribuível na instanciação
    - um atributo **inStock**, inicializado sempre em 0
    - um método **addToStock**, que tem como parâmetro a quantidade a ser adicionada em estoque e deve somar essa quantidade à variável inStock
    - um método **calculateDiscount**, que tem como parâmetro a percentagem de desconto a ser aplicada e retorne o valor do preço com o desconto aplicado.*/


class User {
    constructor(fullname, email, password) {
        this.fullname = fullname;
        this.email  = email;
        this.password = password;
}
    login(email) {
        if (this.name === email ) {
            console.log("login realizado com sucesso")
        }else {
            console.log("Falha ao fazer login! email ou senha errados !")
        }
    }
}

const hugo = new User("hugo", "hugo.rambo@hotmail.com", "1234" );
console.log(hugo)
hugo.login("hugo", "hugo.rambo@hotmail.com", "1234")