console.log("programa iniciado")

/*setTimeout(()=> {
    console.log("5 segundos se passaram desde que o programa foi iniciado")
}, 1000 * 5)*/


let seconds = 0

setInterval(()=> {
    seconds += 3
    console.log(`se passaram ${seconds}`)
    if (seconds > 10){
        clearInterval(setInterval)
        console.log("tempo estotado ! ecerrando")
    }
}, 1000 * 3)