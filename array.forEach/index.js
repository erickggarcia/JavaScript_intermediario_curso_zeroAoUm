//O forEach não retorna nenhum elemento

const valores = [
    "Crédito",
    "R$ 200",
    "R$ 300",
    "R$ 400",
    "R$ 500",
    "Conta de luz",
    "Conta de água",
    "Empréstimo"
]

let newArray = []
//O forEach não retorna um valor,
//Ele pode ser usado para iterar elementos
//Ele recebe três parâmetros, sendo o primeiro o item do callback
//E os outros sendo respectivamente o index e o array
valores.forEach(function(valor, index, array) {
    newArray[index] = valor
})

console.log(newArray)