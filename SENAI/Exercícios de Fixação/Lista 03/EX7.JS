//entradas
//vetor de carros vendidos. subvetor contém carros vendidos em cada mês
let carrosVendidos = [[], [], [], [], [], [], [], [], [], [], [], []]

for (let numeroMes = 0; numeroMes < 12; numeroMes++) {


  while (true) {
    let modelo = prompt(`DIGITE O NOME DO PRÓXIMO CARRO VENDIDO NO MÊS ${numeroMes + 1}.
    DIGITE "FIM" PARA PULAR PARA O PRÓXIMO MÊS.`)

    if (modelo.toUpperCase() === `FIM`) {
      break
    }
    else carrosVendidos[numeroMes].push(modelo)
  }
  //console.log(carrosVendidos)

  let mes
  switch (numeroMes) {
    case 0: mes = `JANEIRO`; break
    case 1: mes = `FEVEREIRO`; break
    case 2: mes = `MARÇO`; break
    case 3: mes = `ABRIL`; break
    case 4: mes = `MAIO`; break
    case 5: mes = `JUNHO`; break
    case 6: mes = `JULHO`; break
    case 7: mes = `AGOSTO`; break
    case 8: mes = `SETEMBRO`; break
    case 9: mes = `OUTUBRO`; break
    case 10: mes = `NOVEMBRO`; break
    case 11: mes = `DEZEMBRO`; break
  }
  console.log(`OS CARROS VENDIDOS NO MÊS DE ${mes} SÃO: `)

  for (let indCarro = 0; carrosVendidos[numeroMes][indCarro] !== undefined; indCarro++)
    console.log(`${carrosVendidos[numeroMes][indCarro]}`)

}

//estrutura para contabilizar os carros vendidos em cada mês:
let totalCarrosPorMes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

//contadores por mês utilizando a propriedade lenght:
totalCarrosPorMes = [
  carrosVendidos[0].length,
  carrosVendidos[1].length,
  carrosVendidos[2].length,
  carrosVendidos[3].length,
  carrosVendidos[4].length,
  carrosVendidos[5].length,
  carrosVendidos[6].length,
  carrosVendidos[7].length,
  carrosVendidos[8].length,
  carrosVendidos[9].length,
  carrosVendidos[10].length,
  carrosVendidos[11].length,
]

//console.log(totalCarrosPorMes.toString())
//ou
//console.log(totalCarrosPorMes.join(" - "))

console.log(`O TOTAL DE CARROS VENDIDOS EM CADA MêS É: ${totalCarrosPorMes.join(" - ")}`)

//quantidade de vendas, por modelo
let modelo = prompt(`DIGITE O NOME DE UM CARRO PARA SABER A QUANTIDADE TOTAL DE CARROS VENDIDOS`)
let nCarrosVendidos = 0

for (numeroMes = 0; numeroMes < 12; numeroMes++) {
    
    for (let indCarro = 0; carrosVendidos[numeroMes][indCarro] !== undefined; indCarro++)
     if (carrosVendidos[numeroMes][indCarro] === modelo) nCarrosVendidos++
}

console.log(`O TOTAL DE CARROS VENDIDOS DO TIPO ${modelo} é: ${nCarrosVendidos}`)

//let pares = [0, 2, 4]
//para imprimir o 2
//console.log(pares[1])

//let valoresAleatorios = ['gol', [], [], 12, true, [1, 2 [1, 2, 3]]]
//para imprimir o 3
//console.log(valoresAleatorios[5][2][2])