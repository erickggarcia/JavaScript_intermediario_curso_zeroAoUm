function Produto(nome, produto, estoque) {
    this.nome = nome
    this.produto = produto
    let valorPrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return valorPrivado
        },
        set: function(valor) {
            valorPrivado = valor
            if(typeof valorPrivado !== "boolean") {
                console.error('Deu erro!')
                return;
            }
        }
    })
}

const p1 = new Produto('Refrigerante', 'Bebida', true)
p1.estoque = false
console.log(p1.estoque)