function Pessoa(nome, produto, estoque) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        produto: {
            enumerable: false,
            value: produto,
            writable: true,
            configurable: true
        },
        estoque: {
            enumerable: true,
            value: estoque,
            writable: false,
            configurable: true
        },
    })
}

const p1 = new Pessoa("Refrigerante", "Bebida", true)
p1.estoque = false
p1.nome = "Cerveja"
console.log(p1)