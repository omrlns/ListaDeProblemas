//andar em que o elevador se encontra estagnado
let andarPredio1 = Number(prompt("Digite o andar em que o 1° elevador de encontra parado"))
let andarPredio2 = Number(prompt("Digite o andar em que o 2° elevador de encontra parado"))
let andarUp = Number(prompt("Digite um 1 para chamada dos elevadores no ss ou 0 para continuar"))

//verifica se existe algum valor que não condiz com a quantidade de andares, ou seja, verifica a validade da informação
if (andarPredio1 > 1 || andarPredio2 > 1 || andarPredio1 < -1 || andarPredio2 > 1) { console.log("Andar inexistente") }

//se o andar que o elevaodor estiver estagnado for diferente do atual e o andar atual for solicitado
else {


    //Elevador 01 e Elevador 02 no SS
    if (andarPredio1 != -1 && andarPredio2 != -1 && andarUp == 1) { console.log("Descendo para SS: true") }

    //Elevador 01 no SS e Elevador 02 no Primeiro Andar
    else if (andarPredio1 != -1 && andarPredio2 == 1 && andarUp == 1) { console.log("Descendo para SS: true") }

    //Elevador 01 no SS e Elevador 02 no Térreo
    else if (andarPredio1 != -1 && andarPredio2 == 0 && andarUp == 1) { console.log("Descendo para SS: true") }

    //Elevador 01 no Primeiro Andar e o Elevador 02 no SS
    else if (andarPredio1 != 1 && andarPredio2 == -1 && andarUp == 1) { console.log("Descendo para SS: true") }

    //Elevador 01/02 no Primeiro Andar
    else if (andarPredio1 != 1 && andarPredio2 == 1 && andarUp == 1) { console.log("Descendo para SS: true") }

    //Elevador 01 no Primeiro Andar e o Elevador 02 no Térreo
    else if (andarPredio1 != 1 && andarPredio2 == 0 && andarUp == 1) { console.log("Descendo para SS: true") }

    //Elevador 01 no Térreo e o Elevador 02 no SS
    else if (andarPredio1 != 0 && andarPredio2 == -1 && andarUp == 1) { console.log("Descendo para SS: true") }

    //Elevador  no Térreo e o Elevador 02 no Primeiro Andar
    else if (andarPredio1 != 0 && andarPredio2 == 1 && andarUp == 1) { console.log("Descendo para SS: true") }

    //Elevador 01/02 no Térreo
    else if (andarPredio1 != 0 && andarPredio2 == 0 && andarUp == 1) { console.log("Descendo para SS: true") }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    //Elevador 01/02 no Primeiro Andar
    if (andarPredio1 != 1 && andarPredio2 != 1 && primeiroAndar == 1) { console.log("Subindo para o Primeiro Andar: true") }

    //Elevador 01 no Primeiro Andar e Elevador 02 no Térreo
    else if (andarPredio1 != 1 && andarPredio2 != 0 && primeiroAndar == 1) { console.log("Subindo para o Primeiro Andar: true") }

    //Elevador 01 no Primeiro Andar e o Elevador no SS
    else if (andarPredio1 != 1 && andarPredio2 != -1 && primeiroAndar== 1) { console.log("Subindo para o Primeiro Andar: true") }

    //Elevador 01 no Térreo e Elevador no Primeiro Andar
    else if (andarPredio1 != 0 && andarPredio2 != 1 && primeiroAndar == 1) { console.log("Subindo para o Primeiro Andar: true") }

    //Elevador 01 e Elevador 02 no Térreo
    else if (andarPredio1 != 0 && andarPredio2 != 0 && primeiroAndar == 1) { console.log("Subindo para o Primeiro Andar: true") }

    //Elevador 01 no Térreo e o Elevador no SS
    else if (andarPredio1 != 0 && andarPredio2 != -1 && primeiroAndar == 1) { console.log("Subindo para o Primeiro Andar: true") }

    //Elevador 01 no SS e Elevador 02 no Primeiro Andar
    else if (andarPredio1 != -1 && andarPredio2 != 1 && primeiroAndar == 1) { console.log("Subindo para o Primeiro Andar: true") }

    //Elevador 01 no SS e Elevador 02 no Térreo
    else if (andarPredio1 != -1 && andarPredio2 != 0 && primeiroAndar == 1) { console.log("Subindo para o Primeiro Andar: true") }

    //Elevador 01/02 no SS
    else if (andarPredio1 != -1 && andarPredio2 != -1 && primeiroAndar == 1) { console.log("Subindo para o Primeiro Andar: true") }
}

//tentar fazer uma versão mais simples, onde o nome das variavéis seja mais simples e compacto.
//revisar if/else e complementar código (teste para uma nova versão)