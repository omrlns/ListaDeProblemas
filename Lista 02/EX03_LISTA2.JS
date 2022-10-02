
//linha de comando para perguntar em qual andar o elevador se encontra parado
const origem = Number(prompt("INFORME O ANDAR QUE O ELEVADOR SE ENCONTRA PARADO, SENDO: -1 SUBSOLO, 0 TÉRREO, 1 PRIMEIRO ANDAR "))
const subsolo = Number(prompt("DIGITE 1, PARA CHAMAR O ELEVADOR NO SUBSOLO OU DIGITE 0, PARA CONTINUAR"))
const andarup = Number(prompt("DIGITE 1, PARA CHAMAR O ELEVADOR NO TÉRREO PARA SUBIR OU DIGITE 0, PARA CONTINUAR")) //linha de comando para chamar (CIMA -> TÉRREO)
const andardown = Number(prompt("DIGITE 1, PARA CHAMAR O ELEVADOR NO TÉRREO PARAR DESCER OU DIGITE 0, PARA CONTINUAR")) //linha de comando para chamar (BAIXO -> TÉRREO)
const andar1 = Number(prompt("DIGITE 1, PARA CHAMAR O ELEVADOR NO 1º ANDAR OU DIGITE 0, PARA CONTINUAR"))

const terreo = andardown+ andarup //linha de comando que define o valor do TÉRREO

//verifica se existe algum valor um que não condiz com a quantidade de andares 
if (origem > 1 || origem < -1) { console.log("Andar inexistente") }
else 
{
    //se o andar de origem for diferente do atual e o atual for chamado
    if (origem != -1 && subsolo == 1) { console.log("DESCENDO PARA SUBSOLO: true") }
    if (origem != 0 && andardown == 1 && origem == 1) { console.log("DESCENDO PARA TÉRREO: true") }
    if (origem != 0 && andarup == 1 && origem == -1) { console.log("SUBINDO PARA TÉRREO: true") }
    if (origem != 1 && andar1 == 1) { console.log("SUBINDO PARA O 1º ANDAR: true") }
}
