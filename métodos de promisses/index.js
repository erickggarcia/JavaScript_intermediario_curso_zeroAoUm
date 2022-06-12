function random(min, max) {
    return Math.floor(Math.random(min * max) + min)
}

function mostraMensagem(msg, timer) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') return reject(new Error('Deu pau'))
        setTimeout(() => {
            resolve(msg)
        }, timer)
    })
}

const promisses = [
    mostraMensagem('Mensagem1', random(1000, 3000)),
    mostraMensagem('Mensagem2', random(1000, 3000)),
    mostraMensagem('Mensagem3', random(1000, 3000)),
    mostraMensagem('bananinha', random(1000, 3000)),
    mostraMensagem('Mensagem5', random(1000, 3000))
]

//Promise.all só retorna se todas as prmisses forem resolve
Promise.all(promisses).then((res) => {
    console.log(res.join(' '))
}).catch((error => {
    console.error(error)
}))

Promise.race(promisses).then((res) => {
    console.log(res)
}).catch((error) => {
    console.error(error)
})