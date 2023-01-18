class Book {
    constructor(title){
        this.title = title
        this.published = false
        
    }
    published() {
        this.published = true
    }
}

const eragon = new Book("Eragon")
const eldest = new Book("Gelo e fogo")

eragon.published()

console.log(eragon)