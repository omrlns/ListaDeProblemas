let nomes = ['João', 'Maria', 'José']

//primeira  versão de uma linha de código que apresenta os nomes de forma separada
for (const nome of nomes) {
    console.log(`SEU NOME É ${nome}! `)
}

//segunda  versão de uma linha de código que apresenta os nomes de forma separada
nomes.forEach((nome) => {
    console.log(`SEU NOME É ${nome}!`)
}
)

