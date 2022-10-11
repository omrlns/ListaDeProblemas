//entradas
//vetor de carros vendidos.
//cada subvetor contém os carros vendidos em cada mês (jan-dez)
let carrosVendidos = [[], [], [], [], [], [], [], [], [], [], [], []]

for (let mes = 0; mes < 12; mes++) {
  while (true) {
    let modelo = prompt(`DIGITE O NOME DO PRÓXIMO CARRO VENDIDO NO MÊS ${mes + 1}.
  DIGITE FIM PARA PULAR PARA O PRÓXIMO MêS`)

    console.log(modelo)

    if (modelo.toUpperCase() === 'FIM') {
      break
    } else carrosVendidos[mes].push(modelo)

  }
}

console.log(carrosVendidos)