function show (){
    const contactList = document.getElementById("contact-list")
    console.log(contactList)

    const listElements = document.getElementsByTagName("li")
    console.log(listElements)

    const listClass = document.getElementsByClassName("contact-input")
    console.log(listClass)

    const contact1 = document.getElementsByName('contact1')
    console.log(contact1)


    const contacts = document.querySelectorAll('#contact-input > li > label')
    console.log(contacts)

    const firstContanct = document.querySelector('#contact-list > li > label')
    console.log(firstContanct)
}
