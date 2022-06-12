function random(min, max) {
    return Math.floor(Math.random(min * max) + min)
}

function mostraMensagem(msg, timer) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') return reject(new Error('Deu pau!'))
        setTimeout(() => {
            resolve(msg)
        }, timer)
    })
}

async function executa() {
   try {
    const valor1 = await mostraMensagem('Mensagem 1', random(1000, 3000))
    console.log(valor1)
    const valor2 = await mostraMensagem('Mensagem 2', random(1000, 3000))
    console.log(valor2)
    const valor3 = await mostraMensagem(2, random(1000, 3000))
    console.log(valor3)
    const valor4 = await mostraMensagem('Mensagem 4', random(1000, 3000))
    console.log(valor4)
   }
   catch(error) {
       console.error(error)
   }
}

executa()