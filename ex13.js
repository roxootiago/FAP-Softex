let fila =  [15, 8, 10, 25, 12, 30, 5, 20, 18, 7]
const numeroProcurado = fila[7]

console.log(numeroProcurado)

function searchNumber (array,Elemento) {
    let inicio = 0
    let fim = fila.length - 1

    while(inicio <= fim) {
        const meio = Math.floor((inicio + fim) /2)

        if(fila[meio] == numeroProcurado) {
            return meio
        } 

        if(fila[meio] > numeroProcurado) {
            fim = meio - 1
        } else {
            inicio = meio + 1
        }
    }

    return -1
}

const buscaBinaria = searchNumber(fila,numeroProcurado)

if (buscaBinaria !== -1) {
    console.log(`o elemento  ${numeroProcurado} foi encontrado no índice: ${buscaBinaria}`)
} else {
    console.log(`o elemento ${numeroProcurado} não foi encontrado`)
}