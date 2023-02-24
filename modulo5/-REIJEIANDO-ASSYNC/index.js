function imc (weight, height){
    return new Promise((resolve, rejeitado)=> {
      if (typeof weight !== 'number' || typeof height !=='number'){
        rejeitado('Argumento tem que ser um numero')
      } else {
        resolve(weight / (height * height))
      }
    })
}

function showImc (weight, height)   {
    imc(weight, height).then((result)=>{
        console.log(`O resultado do IMC foi de ${result}.`)

        if (result < 18.5) console.log('Situação : Magro')
        else if (result < 25) console.log('Situação: Normal')
        else if (result < 30) console.log('Situação: Sobrepeso')
        else if (result < 40) console.log('Situação: Muito gordoooo')
        else console.log('Situação: OBESIDADE MORBIDA')
    }).catch((err)=>{
        console.log(err)
    })

    console.log('calculando...')
}

showImc(71, 1.74)
showImc(80, 1.76)