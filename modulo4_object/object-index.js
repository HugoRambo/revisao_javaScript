/*const book = {
    title: "Eragon",
    pages: 468,
    published: true,
    inStock: 20,
    tags: ["Fantasy", "adventure", "medieval"],
    author: {
        name: "Christopher Paolini"
    },
    addonStock(quantity){
        this.inStock += quantity
    }
}*/

function Book(title, pages, tags, author){
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author 
    this.published = false
    this.inStock = 0
    this.addOnStock = function addOnStock(quantity){
        this.inStock += quantity
    }
    this.save = function (){

    }
}
const author = {name: "Chistopher Paolini"}
const tags = ["Fantasy", "adventure"]


const eragon = new Book("Eragon", 468, tags, author)

console.log(eragon)

const fantasy = new Book("Jorge", 500, "terror", "Huguinho")

console.log(fantasy)