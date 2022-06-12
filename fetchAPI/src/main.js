document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if(tag === 'a') {
        e.preventDefault()
        carregaPagina(el)
    }
})

async function carregaPagina(el) {
    const href = el.getAttribute('href')

    try {
    const response = await fetch(href)
    if(response.status !== 200) throw new Error('Deu pau no programa')

    const html = await response.text()
    carregaResultado(html)
    } catch(e) {
        console.log(e)
    }
}

function carregaResultado(html) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = html
}