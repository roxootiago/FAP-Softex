class Aluno {
    constructor(nome,idade) {
        this.nome = nome
        this.idade = idade
        this.statusAluno = false
        // this.arrayAluno = []
    }

    ativarStatus() {
        if (this.statusAluno == false) {
            console.log( `O aluno ${this.nome} foi ativado com sucesso`)
            this.statusAluno = true
            // this.arrayAluno.push(this.nome)
        } else {
            console.log (`O aluno ${this.nome} já se encontra ativo no sistema`)
        }
    }

    get Aluno () {
        return this.nome
    }

    set Aluno(Aluno) {
        this.nome = Aluno
    }

    /* get arrayPessoa(){
        return this.arrayAluno
    } */

}

const aluno1 = new Aluno('Tiago',20)
const aluno2 = new Aluno('Julia',22)
const alunos = [aluno1,aluno2]
aluno1.ativarStatus()
aluno1.ativarStatus()

aluno1.Aluno = "Maria"
aluno1.ativarStatus()
console.log(aluno1.Aluno)
aluno2.ativarStatus()

console.log(alunos)
console.log(`Nome primeiro aluno: ${aluno1.nome}
Nome segundo aluno: ${aluno2.nome}`)

