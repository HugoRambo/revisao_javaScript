const Address = require("./address")
const Person = require("./person")

const addr = new Address("7 de setembro", 99, "centro", "saofidelis", "rj")

const john = new Person ("john", addr)

console.log(john)
console.log(john.address.fullAddress())