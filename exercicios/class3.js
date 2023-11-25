<<<<<<< HEAD
class Pessoa {
    constructor(nome,sobrenome,idade,sexo,email,telefoneFixo,telefoneMovel){
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
        this.sexo = sexo
        this.email = email
        this.telefoneFixo = telefoneFixo
        this.telefoneMovel = telefoneMovel
        this.endereco = {
            cidade: undefined,
            bairro: undefined,
            logradouro: undefined,
            numero: undefined
        }
        this.status = false
    }

    ativarStatus() {
        if (this.status == false) {
            console.log( `O cliente ${this.nome} foi ativado com sucesso`)
            this.status = true
        } else {
            console.log (`O cliente ${this.nome} já se encontra ativo no sistema`)
        }
    }

    get Cliente() {
        return `Nome completo: ${this.nome} ${this.sobrenome}
Idade: ${this.idade}
Sexo: ${this.sexo}
Email: ${this.email}
Telefone: ${this.telefoneMovel}
Endereço: ${this.endereco.cidade} - ${this.endereco.bairro}
Logradouro: ${this.endereco.logradouro} - ${this.endereco.numero}`}

    set Cidade(cidade){
    this.endereco.cidade = cidade
}

set Bairro(bairro) {
    this.endereco.bairro = bairro
}

set Logradouro (logradouro) {
    this.endereco.logradouro = logradouro
}

set Numero (numero) {
    this.endereco.numero = numero
}
}

let pessoa1 = new Pessoa ('Tiago','Silva',20,'M','tiago.roxo@hotmail.com',undefined,81983222962)
pessoa1.ativarStatus()
pessoa1.ativarStatus()
console.log(pessoa1.Cliente)

pessoa1.Cidade = "Olinda"
pessoa1.Bairro = "Cidade Tabajara"
pessoa1.Logradouro = "Rua 1"
pessoa1.Numero = '000'
=======
class Pessoa {
    constructor(nome,sobrenome,idade,sexo,email,telefoneFixo,telefoneMovel){
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
        this.sexo = sexo
        this.email = email
        this.telefoneFixo = telefoneFixo
        this.telefoneMovel = telefoneMovel
        this.endereco = {
            cidade: undefined,
            bairro: undefined,
            logradouro: undefined,
            numero: undefined
        }
        this.status = false
    }

    ativarStatus() {
        if (this.status == false) {
            console.log( `O cliente ${this.nome} foi ativado com sucesso`)
            this.status = true
        } else {
            console.log (`O cliente ${this.nome} já se encontra ativo no sistema`)
        }
    }

    get Cliente() {
        return `Nome completo: ${this.nome} ${this.sobrenome}
Idade: ${this.idade}
Sexo: ${this.sexo}
Email: ${this.email}
Telefone: ${this.telefoneMovel}
Endereço: ${this.endereco.cidade} - ${this.endereco.bairro}
Logradouro: ${this.endereco.logradouro} - ${this.endereco.numero}`}

    set Cidade(cidade){
    this.endereco.cidade = cidade
}

set Bairro(bairro) {
    this.endereco.bairro = bairro
}

set Logradouro (logradouro) {
    this.endereco.logradouro = logradouro
}

set Numero (numero) {
    this.endereco.numero = numero
}
}

let pessoa1 = new Pessoa ('Tiago','Silva',20,'M','tiago.roxo@hotmail.com',undefined,81983222962)
pessoa1.ativarStatus()
pessoa1.ativarStatus()
console.log(pessoa1.Cliente)

pessoa1.Cidade = "Olinda"
pessoa1.Bairro = "Cidade Tabajara"
pessoa1.Logradouro = "Rua 1"
pessoa1.Numero = '000'
>>>>>>> origin/main
console.log(pessoa1.Cliente)