function calcular() {

    var nota1 = document.getElementById("nota1")
    var nota2 = document.getElementById("nota2")
    var nota3 = document.getElementById("nota3")
    var media = document.getElementById("celcius")
    nota1 = Number(nota1.value)
    nota2 = Number(nota2.value)
    nota3 = Number(nota3.value)
    media = (nota1 + nota2 + nota3) / 3

    resposta.textContent = `A sua média é ${media.toFixed(2)}`
      
    if (media >= 7) {
        document.getElementById("maiormenor").innerHTML = "Parábens, você está aprovado!"
    }
    else
        document.getElementById("maiormenor").innerHTML = "Eita, está na hora de estudar!"

}
var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", calcular)