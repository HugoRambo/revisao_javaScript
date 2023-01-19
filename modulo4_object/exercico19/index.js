const Author = require("./Author")

const john = new Author("John Doe")

const post = john.writePost("Titulo do poste, etc etc etc. ")

post.addComment("Isaac Pontes", "muito bom")
post.addComment("meu pau n sua mao", "romeu")

console.log(john)
console.log(post)