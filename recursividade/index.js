function contar(max) {
    if(max >= 10) return;
    max++
    console.log(max)
    contar(max)
}

contar(0)