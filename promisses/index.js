function random(min, max) {
    return Math.floor(Math.random(min * max) + min)
}

function mostraMensagem(msg, timer) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') return reject(new ReferenceError('Deu pau no juvenal'))
        setTimeout(() => {
            resolve(msg)
        }, timer)
    })
}

/*
mostraMensagem('Mensagem 1', random(1000, 3000)).then((msg) => {
    console.log(msg)
    return mostraMensagem('Mensagem 2', random(5000, 10000)).then((msg) => {
        console.log(msg)
    }).catch((e) => {
        console.error(e)
    })
})
*/

Promise.resolve()
.then(() => mostraMensagem('mensagem 1', random(1000, 3000)))
.then((msg) => console.log(msg))
.then(() => mostraMensagem(true, random(5000, 10000)))
.then((msg) => console.log(msg))
.catch((e) => console.error(e))