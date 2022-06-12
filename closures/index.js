function aprendendoClosures(nome) {
    return function() {
        return nome;
    }
}

const closure = aprendendoClosures("Pedro")
const closure2 = aprendendoClosures("Erick")


console.dir(closure())
console.dir(closure2())