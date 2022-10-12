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

//contadores por mÊs, mas com uma estrutura única
for (let numeroMes = 0; numeroMes < 12; numeroMes++) {
  for (let contador = 0; carrosVendidos[numeroMes][contador] !== undefined; contador++)
  totalCarrosPorMes[numeroMes] = contador + 1
}

console.log(totalCarrosPorMes.toString())
