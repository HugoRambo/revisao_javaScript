// chama ela mesma

function dividir (num){
    console.log(num)
    if(num % 2 ===0){
        dividir(num / 2)
    }else {
        return num
    }
}

https://onebitcode.notion.site/48-Fun-es-Recursivas-589026656812401eb6f77b743604e6b7