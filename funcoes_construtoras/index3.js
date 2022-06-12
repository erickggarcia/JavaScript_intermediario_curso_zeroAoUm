pessoa = {
    idade: 10,
    bar: function(nome) {
        return 'Olá ' + nome + ' vc tem ' + this.idade + ' anos'
    }
}

pessoa2 = {
    idade: 20
}

pessoa.bar('Joao')
console.log(pessoa.bar('Joao'))
console.log(pessoa.bar.call(pessoa2, 'Matheus'))
console.log(pessoa.bar.apply(pessoa2, ['Luis']))