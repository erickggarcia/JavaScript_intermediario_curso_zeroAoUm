function getNome(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        num1: 5,
        num2: 6,
        fala: function(assunto) {
               return `${nome} ${sobrenome} está falando sobre o assunto ${assunto}`
            },
        somar: function () {
            const resultado = Number(this.num1) + Number(this.num2)
            return resultado;
        }
    }
}

const pessoa = getNome('Erick', 'Garcia')
console.log(pessoa.fala('futebol'))
console.log(`O resultado da soma de ${pessoa.num1} + ${pessoa.num2} é igual à: ${pessoa.somar()}`)