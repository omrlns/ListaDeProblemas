//EX2
const num1 = Number(prompt("digite um número: ")) 
const num2 = Number(prompt("digite outro número: "))
const numeros = [] 


for (let num = num1; num <= num2; num++) {
 numeros.push(num) //empurra as informações para dentro do vetor
  console.log(num) //apresenta os números fora do vetor
}

console.log(numeros) //apresenta os números dentro do vetor