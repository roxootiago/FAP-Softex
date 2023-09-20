const pessoa = {
  nome: "Tiago",
  idade: 20,
  saudacao: function () {
    let sobrenome = "Silva";
    console.log(`Olá, ${this.nome} ${sobrenome}
Idade: ${this.idade}`);
  }
/*   saudacao:  () =>  {
    let nome = "tiago"
        console.log('Olá,', ' ',this.nome)
    } */
};

pessoa.saudacao();
