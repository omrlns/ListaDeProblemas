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

//carros vendidos em janeiro
for (let contador = 0; carrosVendidos[0][contador] !== undefined; contador++) {
  totalCarrosPorMes[0] = contador + 1
}

//carros vendidos em fevereiro
for (let contador = 0; carrosVendidos[1][contador] !== undefined; contador++) {
  totalCarrosPorMes[1] = contador + 1
}

//carros vendidos em março
for (let contador = 0; carrosVendidos[2][contador] !== undefined; contador++) {
  totalCarrosPorMes[2] = contador + 1
}

//carros vendidos em abril
for (let contador = 0; carrosVendidos[3][contador] !== undefined; contador++) {
  totalCarrosPorMes[3] = contador + 1
}

//carros vendidos em maio
for (let contador = 0; carrosVendidos[4][contador] !== undefined; contador++) {
  totalCarrosPorMes[4] = contador + 1
}

//carros vendidos em junho
for (let contador = 0; carrosVendidos[5][contador] !== undefined; contador++) {
  totalCarrosPorMes[5] = contador + 1
}

//carros vendidos em julho
for (let contador = 0; carrosVendidos[6][contador] !== undefined; contador++) {
  totalCarrosPorMes[6] = contador + 1
}

//carros vendidos em agosto
for (let contador = 0; carrosVendidos[7][contador] !== undefined; contador++) {
  totalCarrosPorMes[7] = contador + 1
}

//carros vendidos em setembro
for (let contador = 0; carrosVendidos[8][contador] !== undefined; contador++) {
  totalCarrosPorMes[8] = contador + 1
}

//carros vendidos em outubro
for (let contador = 0; carrosVendidos[9][contador] !== undefined; contador++) {
  totalCarrosPorMes[9] = contador + 1
}

//carros vendidos em novembro
for (let contador = 0; carrosVendidos[10][contador] !== undefined; contador++) {
  totalCarrosPorMes[10] = contador + 1
}

//carros vendidos em dezembro
for (let contador = 0; carrosVendidos[0][contador] !== undefined; contador++) {
  totalCarrosPorMes[11] = contador + 1
}

console.log(totalCarrosPorMes.toString())
