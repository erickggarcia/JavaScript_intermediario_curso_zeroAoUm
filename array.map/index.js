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

// o "+" que consta antes de valor é aquivalente à Number(valor.replace('R$ ', ''))
// o .map retorna um novo array com os itens que mapeou
const precoNumber = precosFilter.map((valor) => +valor.replace('R$ ', ''))

console.log(precoNumber)