class Pessoa {
  constructor(nome, idade) {
    this.idade = idade;
    this.nome = nome;
  }

  falar() {
    return `${this.nome} está falando`;
  }

  comer() {
    return `está comendo`;
  }
}

class Funcionario extends Pessoa {
  constructor(nome, idade, cargo, salario) {
    super(nome, idade);
    this.cargo = cargo;
    this.salario = salario;
  }

  trabalhar() {
    return `${this.nome} está trabalhando`;
  }
}

let funcionario1 = new Funcionario("Jose", 56, "Pedreiro", 2800);
console.log(funcionario1.falar());
