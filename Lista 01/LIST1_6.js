function calcular() {

    var celcius = document.getElementById("celcius")
    var fahrenheit = document.getElementById("fahrenheit")
    celcius = Number(celcius.value)
    fahrenheit = (celcius * 1.8 ) + 32

    resposta.textContent = `A temperatura em Fahrenheit é ${fahrenheit}`
      
    if (celcius >= 0) {
        document.getElementById("maiormenor").innerHTML = "Tá calor! Vamos pra praia?"
    }
    else
        document.getElementById("maiormenor").innerHTML = "Eita, tá frio! Está na hora de colocar uma meia no pé.!"

}
var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", calcular)