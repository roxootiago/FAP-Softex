<<<<<<< HEAD
class Aluno {
    private name: string;
    nota1: number
    nota2: number
    media: number

    public constructor(name: string, nota1: number, nota2:number) {
        this.name = name;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

    calcularMedia() {
        this.media = (this.nota1 + this.nota2) / 2;
        if (this.media > 7) {
            return `O aluno ${this.name} está aprovado`
        }  else if (this.media >= 4) {
            return `O aluno ${this.name} está em recuperação`
        } else {
            return `O aluno ${this.name} está reprovado`
        }
    }
}

let aluno = new Aluno('Tiago',7,7);
=======
class Aluno {
    private name: string;
    nota1: number
    nota2: number
    media: number

    public constructor(name: string, nota1: number, nota2:number) {
        this.name = name;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

    calcularMedia() {
        this.media = (this.nota1 + this.nota2) / 2;
        if (this.media > 7) {
            return `O aluno ${this.name} está aprovado`
        }  else if (this.media >= 4) {
            return `O aluno ${this.name} está em recuperação`
        } else {
            return `O aluno ${this.name} está reprovado`
        }
    }
}

let aluno = new Aluno('Tiago',7,7);
>>>>>>> origin/main
console.log(aluno.calcularMedia());