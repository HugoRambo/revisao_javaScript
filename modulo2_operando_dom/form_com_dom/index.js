const form = document.getElementById('orderForm')

form.addEventListener('submit', function(ev) {
    ev.preventDefault()
    
    const name = document.querySelector('input[name="name"]').value
    const address = document.querySelector('input[name="address"]').value
    const breadType = document.querySelector('select[name="breadType"]').value
    const main = document.querySelector('input[name="main"]').value
    const objervations = document.querySelector('textarea[name="objervations"]').value

    let salad = ''
    document.querySelectorAll('input[name="salad"]:checked').forEach(function (item){
        salad += "  -   " + item.value  + "\n"
    })
    console.log({
        name,
        address,
        breadType,
        main,
        objervations,
    })
})