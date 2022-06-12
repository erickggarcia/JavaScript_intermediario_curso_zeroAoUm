const pessoa = {
    nome: 'Erick',
    idade: 27,
    sexo: 'masculino'
}

function mostraNome() {
    console.log(this.nome)
    console.log(this.idade + ' anos')
}


mostraNome.apply(pessoa)