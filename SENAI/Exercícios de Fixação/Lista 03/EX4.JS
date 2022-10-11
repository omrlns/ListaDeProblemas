//código que pergunta a quantidade de números que o usuário deseja iformar e salva as informações em um vetor.

//quantidade de números
let numeros = []
let nNumeros = Number(prompt("digite a quantidade de números: "))

for (let iNumeros = 0; iNumeros < nNumeros; iNumeros++) {
    numeros[iNumeros] = Number(prompt(`digite o número nº ${iNumeros + 1}: `))
    
}

console.log(numeros)

// numeros.push(numeros) //empurra as informações para dentro do vetor
//   console.log(numeros) //apresenta os números fora do vetor

