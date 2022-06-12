const myObj = {
    X:'x',
    Y:'y'
}

localStorage.setItem('myKeys', JSON.stringify(myObj))
const myNewKey = localStorage.getItem('myKeys')
console.log(JSON.parse(myNewKey))