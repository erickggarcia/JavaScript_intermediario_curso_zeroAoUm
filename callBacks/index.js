function operacao(operacao, num1, num2){
   return operacao(num1, num2)
}

function soma(a, b) {
    return a + b
}

function subtracao(a, b) {
    return a - b
}

function multiplicacao(a, b) {
    return a * b
}


function divisao(a, b) {
    return a / b
}

console.log(operacao(soma, 1, 2))
console.log(operacao(subtracao, 3, 2))
console.log(operacao(multiplicacao, 16, 2))
console.log(operacao(divisao, 8, 2))


