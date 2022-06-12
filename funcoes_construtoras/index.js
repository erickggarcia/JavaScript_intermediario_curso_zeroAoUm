function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.metodo = function() {
        console.log('Olá! eu sou um método!')
    }
}

const p1 = new Pessoa('João', 'Xavier')
const p2 = new Pessoa('Lyvia', 'Rocha')
console.log(`O nome completo da pessoa é ${p1.nome} ${p1.sobrenome}`)
console.log(`O nome completo da pessoa é ${p2.nome} ${p2.sobrenome}`)
p1.metodo()