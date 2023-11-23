class Pessoa {
  constructor(nome, idade) {
    this.idade = idade;
    this.nome = nome;
  }

  get Nome() {
    return this.nome;
  }

  set Nome(x) {
    this.nome = x;
  }
}

let pessoa1 = new Pessoa("Tiago", 20);
console.log(pessoa1.Nome);
pessoa1.Nome = "Luiz";
console.log(pessoa1.Nome);
