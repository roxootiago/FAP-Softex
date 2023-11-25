<<<<<<< HEAD
function pessoa(nome,sobrenome,idade,genero) {
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.idade = idade,
    this.genero = genero,
    this.saudacao = function() {
        console.log(`Olá, ${this.nome}`)
    }
}

const pessoa1 = new pessoa("Tiago","Roxo",20,"masculino")

console.log(`Nome: ${pessoa1.nome}
Idade: ${pessoa1.idade}
Gênero: ${pessoa1.genero}`)

=======
function pessoa(nome,sobrenome,idade,genero) {
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.idade = idade,
    this.genero = genero,
    this.saudacao = function() {
        console.log(`Olá, ${this.nome}`)
    }
}

const pessoa1 = new pessoa("Tiago","Roxo",20,"masculino")

console.log(`Nome: ${pessoa1.nome}
Idade: ${pessoa1.idade}
Gênero: ${pessoa1.genero}`)

>>>>>>> origin/main
pessoa1.saudacao()