// //cálculo de média para "N" notas escolares

//   //"N" notas
//   let notas = []
//   let nNotas = Number(prompt("DIGITE A QUANTIDADE DE NOTAS: "))
//   let somatorio = 0
//   let media = 0
  
// for (let iNotas = 0; iNotas < nNotas; iNotas++) {
//     notas[iNotas] = Number(prompt(`DIGITE A NOTA Nº ${iNotas + 1}: `))
//   somatorio = somatorio + notas[iNotas] //soma das notas
// }

//quantidade de números
let numeros = []
let nNumeros = Number(prompt("digite a quantidade de números: "))

for (let iNumeros = 0; iNumeros < nNumeros; iNumeros++) {
    numeros[iNumeros] = Number(prompt(`digite o número nº ${iNumeros + 1}: `))
    
}

// numeros.push(num) //empurra as informações para dentro do vetor
//   console.log(num) //apresenta os números fora do vetor

//lembrar de terminar o código