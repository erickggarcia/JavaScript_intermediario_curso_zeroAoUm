const valores =  [
    "Credito",
    "R$ 200",
    "R$ 300",
    "R$ 400",
    "Crédito especial",
    "Empréstimo",
    "Carro", 
    "Casa"
]

const valoresFilter = valores.filter(function(valor) {
    if(valor.includes("R$")) return true
})

console.log(valoresFilter)