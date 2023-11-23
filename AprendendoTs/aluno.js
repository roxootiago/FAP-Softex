var Aluno = /** @class */ (function () {
    function Aluno(name, nota1, nota2) {
        this.name = name;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }
    Aluno.prototype.calcularMedia = function () {
        this.media = (this.nota1 + this.nota2) / 2;
        if (this.media > 7) {
            return "O aluno ".concat(this.name, " est\u00E1 aprovado");
        }
        else if (this.media >= 4) {
            return "O aluno ".concat(this.name, " est\u00E1 em recupera\u00E7\u00E3o");
        }
        else {
            return "O aluno ".concat(this.name, " est\u00E1 reprovado");
        }
    };
    return Aluno;
}());
var aluno = new Aluno('Tiago', 7, 7);
console.log(aluno.calcularMedia());
