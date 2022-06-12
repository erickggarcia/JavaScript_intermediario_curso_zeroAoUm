function random(min = 1000, max=3000) {
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}

function f1(callback) {
    setTimeout(() => {
        console.log('f1')
        if(callback) callback()
    }, random())
}

function f2(callback) {
    setTimeout(() => {
        console.log('f2')
        if(callback) callback()
    }, random())
}

function f3(callback) {
    setTimeout(() => {
        console.log('f3')
        if(callback) callback()
    }, random())
}

f1(func1)

function func1() {
    f2(func2)
}

function func2() {
    f3(func3)
}

function func3() {
    console.log('Olá mundo!')
}