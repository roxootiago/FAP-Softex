class Cliente {
    constructor () {
        this.nome = ""
    }

    get gNome () {
        return this.nome
    }

    set sNome (value) {
        this.nome = value
    }
}

function Cadastrar () {
    let nomeCliente = document.getElementById('nameId')

const cliente1 = new Cliente()
cliente1 = new Cliente()
cliente1.nome = nomeCliente.value
window.alert(`Cliente: ${cliente1.nome} cadastrado com sucesso`)
}
