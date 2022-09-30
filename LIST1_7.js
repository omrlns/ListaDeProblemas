function calcular() {

    var fahrenheit = document.getElementById("fahrenheit")
    var celcius = document.getElementById("celcius")
    fahrenheit = Number(fahrenheit.value)
    celcius = (fahrenheit - 32 ) /1.8

    resposta.textContent = `A temperatura em Celcius é ${celcius.toFixed(2)}`
      
    if (celcius >= 0) {
        document.getElementById("maiormenor").innerHTML = "Não é congelante, tá suave!"
    }
    else
        document.getElementById("maiormenor").innerHTML = "O inverno não está chegando, ele já está aqui!"

}
var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", calcular)