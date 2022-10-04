//inicia as variáveis responsável pela entrada do código
//true = 1
//false = 0
var jarvis = Number(prompt("Defina o estado lógico do 1º Computador (LIGADO/TRUE = 1 ou DESLIGADO/FALSE = 0)"))
var ultron = Number(prompt("Defina o estado lógico do 2º Computador (LIGADO/TRUE = 1 ou DESLIGADO/FALSE = 0)"))
var sextafeira = Number(prompt("Defina o estado lógico do 3º Computador (LIGADO/TRUE = 1 ou DESLIGADO/FALSE = 0)"))

//inicia a variável responsável pela contagem
var contador1 = 0

//breve condição para definir o estado lógico dos computadores (cpu) e realizar a contagem
if (jarvis == 1) { contador1++ }; if (ultron == 1) { contador1++ }; if (sextafeira == 1) { contador1++ }

//realiza uma verificação sobre o valor, analisando a validade dele
if (jarvis > 1 || ultron > 1 || sextafeira > 1)  {console.log("Digite um estado válido")}

//Verifica em qual sala está ligado
if(jarvis == 1 || ultron == 1) { console.log(`A SALA-A POSSUE ALGUMA MÁQUINA LIGADA`) }
if(sextafeira == 1 ) {console.log(`A SALA-B POSSUE ALGUMA MÁQUINA LIGADA`)}
