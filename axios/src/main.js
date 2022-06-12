/*
fetch('pessoas.json')
.then(resposta => resposta.json())
.then(json => carregaPessoasNaTela(json))

function carregaPessoasNaTela(json) {
    const table = document.createElement('table')

    for(let pessoa of json) {
        const tr = document.createElement('tr')
        const td1 = document.createElement('td')
        const td2 = document.createElement('td')

        table.appendChild(tr)
        tr.appendChild(td1)
        tr.appendChild(td2)

        td1.innerHTML = pessoa.nome
        td2.innerHTML = pessoa.idade
    }

    const resultado = document.querySelector('.resultado')
    resultado.appendChild(table)
}
*/
axios('pessoas.json').then(resposta => carregaPessoasNaTela(resposta.data))

function carregaPessoasNaTela(json) {
    const table = document.createElement('table')

    for(let pessoa of json) {
        const tr = document.createElement('tr')
        const td1 = document.createElement('td')
        const td2 = document.createElement('td')

        table.appendChild(tr)
        tr.appendChild(td1)
        tr.appendChild(td2)

        td1.innerHTML = pessoa.nome
        td2.innerHTML = pessoa.idade
    }

    const resultado = document.querySelector('.resultado')
    resultado.appendChild(table)
}