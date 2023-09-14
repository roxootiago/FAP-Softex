class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    saudacao() {
        return `Olá, ${this.nome}`
    }
}

const pessoa1 = new Pessoa('Tiago')
console.log(pessoa1.saudacao())