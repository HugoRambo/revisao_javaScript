
const Product = require("./Product")

module.export = class Book extends Product {


    constructor(title, synopsis, genre, pages, author, description, price, inStock = 0){
        super(`Livro: ${title}`, description, price, inStock)
        this.title = title
        this.synopsis = synopsis
        this.genre = genre
        this.pages = pages
        this.author = author
    }
} 