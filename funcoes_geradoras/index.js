function* geradora1() {
    const n1 = 1
    const n2 = 2
    yield n1 + n2

    const n3 = 3
    const n4= 4
    yield n3 + n4

    const n5 = 5
    const n6 = 6
    yield n5 + n6
}

const geradora = geradora1()
/*console.log(geradora.next().value)
console.log(geradora.next().value)
console.log(geradora.next().value)*/

//Podemos usar o forOf, que já sabe qual o next da função geradora:

for(let valor of geradora) {
    console.log(valor)
}