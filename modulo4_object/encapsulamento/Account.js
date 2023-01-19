class Account {
    #password
    #balance = 0
    
    constructor(name){
        this.email = user.email
        this.#password = user.password
         
    }
    getBalance(email, password){
        if(this.email === email && this.password === password){
            return this.#balance
        }
        else {
            return null
        }
    }
}

const user = {
    email: "hugo",
    password: "1234"
}

const myAccount = new Account(user)



console.log(myAccount)
console.log(myAccount.getBalance("hugo", "1234"))