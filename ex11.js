let minhaFila = [3, 7, 9, 1, 0];
let novaFila;

function remover() {
 for (i = -1;i < minhaFila.length;i++){
    console.log(`ordem de remoção: ${minhaFila.shift()}`)
 }
}

remover()