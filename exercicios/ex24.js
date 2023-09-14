class Pessoa {
  static myname() {
    return `Tiago`
  }

  static myFullName() {
    return `${this.myname()} Rôxo`
  }
}

console.log(Pessoa.myname());
console.log(Pessoa.myFullName());



