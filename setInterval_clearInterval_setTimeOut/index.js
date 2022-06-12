function mostraHora() {
    const data = new Date()
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

function funcaoDoIntervalo() {
    console.log(mostraHora())
}

const timer = setInterval(() => {
    funcaoDoIntervalo()
}, 1000)

setTimeout(() => {
    clearInterval(timer)
}, 5000)