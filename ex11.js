let minhaFila =  [3, 7, 9, 1, 0]
let novaFila

function remover () {
    if (minhaFila.lentgh === 0) {
        return null
    }
    return minhaFila.shift()
}

console.log(minhaFila)
remover()
remover()
remover()
console.log(minhaFila)
remover()
remover()
console.log(remover())