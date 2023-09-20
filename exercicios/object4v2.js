const saudacao = {
    mensagem: function() {
        return `Olá, ${this.nome} ${this.sobrenome}`
    }
}

const pessoa1 = {
    
    nome: 'Tiago',
    sobrenome: 'Roxo'
}

const pessoa2 = {
    nome: 'Natasha',
    sobrenome: 'Ferraz'
}

console.log(saudacao.mensagem.call(pessoa1))
console.log(saudacao.mensagem.apply(pessoa2))