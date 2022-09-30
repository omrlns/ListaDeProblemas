function calcular() {

    var inteiro = document.getElementById("inteiro")
    var resposta = document.getElementById("resposta")
    inteiro = Number(inteiro.value)
    antecessor = inteiro - 1
    sucessor = inteiro + 1

    resposta.textContent = `O número informado é ${inteiro} seu antecessor ${antecessor} e sucessor ${sucessor}`
      
    if (inteiro >= 0) {
        document.getElementById("positivo").innerHTML = "Este número é POSITIVO!"
    }
    else
        document.getElementById("positivo").innerHTML = "Este número é NEGATIVO!"

}
var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", calcular)