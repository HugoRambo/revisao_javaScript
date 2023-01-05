/*### Calculadora Geométrica

Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:

- área do triângulo: base * altura / 2
- área do retângulo: base * altura
- área do quadrado: lado²
- área do trapézio: (base maior + base menor) * altura / 2
- área do círculo: pi * raio² (considere pi = 3.14)

Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.*/ 

let menu = ""

do{
  menu = prompt(
    `Escolha a operação\n1 - Área do triângulo\n2 - Área do retângulo\n3 - Área do quadrado\n4 - Área do trapézio\n5 - Área do circulo\n6 - Sair`
  )
  
  switch(menu){
    case "1":
      let tBase = prompt("Digite a base: ")
      let tAltura = prompt("Digite a altura: ")

      function triangulo(tBase, tAltura) {
        let trianguloR = tBase * tAltura / 2
        return trianguloR        
      }
      alert("A área do Triângulo é de: "+triangulo(tBase,tAltura))      
      break

    case "2":
      let rBase = prompt("Digite a base: ")
      let rAltura = prompt("Digite a altura: ")

      function retangulo(rBase, rAltura){
        let retanguloR = rBase * rAltura
        return retanguloR
      }      
      alert("A área do Retângulo é de: "+(rBase, rAltura))
      break

    case "3":
      let qLado = prompt("Digite o tamanho do lado: ")

      function quadrado(qLado) {
        let quadradoR = Math.pow(qLado, 2)
        return quadradoR
      }
      
      alert("A área do Quadrado é de: "+ quadrado(qLado))
      break

    case "4":
      let baseMa = prompt("Digite a base maior: ")
      let baseMe = prompt("Digite a base menor: ")
      let alturaT = prompt("Digite a altura: ")

      function trapezio(baseMa, baseMe, alturaT){
        let trapezioR = (baseMa + baseMe) * alturaT / 2
        return trapezioR
      }
      alert("A área do Trapézio é de: "+trapezio(baseMa, baseMe, alturaT))
      break

    case "5":
      let raio = prompt("Digite o raio: ")

      function circulo(raio) {
        let circuloR = 3.14 * Math.pow(raio, 2)
        return circuloR
      }
      alert("A área do Circulo é de: "+circulo(raio))
      break

    case "6":
      alert("Saindo...")
      break

    default:
      alert("Informação inválida")
  }
  

} while(menu !== "6")