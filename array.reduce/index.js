const precos = [
    "crédito",
    "R$ 200",
    "R$ 300",
    "R$ 400",
    "R$ 500",
    "cheque especial",
    "conta de luz",
    "conta de internet",
    "conta de água"
]

const precosFilter = precos.filter((preco) => preco.includes('R$'))
const precoNumber = precosFilter.map((valor) => +valor.replace('R$ ', ''))

// O reduce reduz o conteúdo de um array, retornando esse valor em um novo
//Ele recebe dois parâmetros: um é responsável pelo itemanterior, e o segundo pelo item posterior
const reduceArray = precoNumber.reduce((acumulador, item) => acumulador + item)

console.log(precoNumber, reduceArray)