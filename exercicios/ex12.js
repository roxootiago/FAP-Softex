class Pessoa {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  info() {
    return `meu nome é ${this.name} e tenho ${this.age} anos`;
  }
}

class Filho extends Pessoa {
    constructor(name,nameSon,age){
        super(name)
        this.nameSon = nameSon
        this.age = age
    }

    info() {
        return `meu nome é ${this.nameSon} e tenho ${this.age} anos e sou filho de ${this.name}`;
    }
}


people = new Pessoa ('Maria',50)
console.log(people)
console.log(people.info())

filho = new Filho ("Maria",'Tiago',20)
console.log(filho.info())

