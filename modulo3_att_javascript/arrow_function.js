const sum = (a, b) => a * b

const hugo = () => {
    console.log('Hugo é bonitao')
}

const subtract = (a, b) => a -b

console.log(`${subtract(10, 10)}`)

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen']

const startingWithP = towns.filter(towns => towns[0] ==="P")

console.log(startingWithP)