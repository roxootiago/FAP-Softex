class Cliente {
  #nome = "";
  #sobrenome = "";
  #email = "";
  #dataNascimento = "";
  #sexo = "";

  constructor(nome) {
    this.nome = nome;
    this.sobrenome = this.sobrenome;
    this.email = this.email;
  }

  get gNome() {
    return this.nome;
  }

  set sNome(value) {
    this.nome = value;
  }
}

let nomeCliente = document.getElementById("fname");
let cliente1 = new Cliente(nomeCliente);
function Cadastrar() {
  cliente1.nome = nomeCliente.value;

  if (cliente1.nome.length === 0) {
    window.alert("Digite algo no campo nome");
  } else {
    alert(`Cliente ${nomeCliente.value} cadastrado com sucesso`);
  }
}
