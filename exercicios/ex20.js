function banco(conta, titular) {
  this.saldo = 0;
  this.conta = conta;
  this.titular = titular;
  this.deposito = deposito;
  this.saque = saque;
  this.extrato = extrato
  const data = new Date();

  function deposito(valor) {
    novoDeposito = this.saldo += valor;
    return `----- Bem-vindo ao Banco Softex --------
    Depósito confirmado com sucesso!
    Titular: ${this.titular}
    Conta: ${this.conta}
    Valor do depósito: R$${valor}
    Data: ${data.getDate()}/${data.getMonth()}/${data.getFullYear()}
    Hora: ${data.getHours()}:${data.getMinutes()}`;
  }

  function saque(valor) {
    novoSaque = this.saldo -= valor;
    return `----- Bem-vindo ao Banco Softex --------
    Saque confirmado com sucesso!
    Titular: ${this.titular}
    Conta: ${this.conta}
    Valor do saque: R$${valor}
    Data: ${data.getDate()}/${data.getMonth()}/${data.getFullYear()}
    Hora: ${data.getHours()}:${data.getMinutes()}`;
  }

  function extrato() {
    return `----- Bem-vindo ao Banco Softex --------
    Titular: ${this.titular}
    Conta: ${this.conta}
    Valor: R$${this.saldo}
    Data: ${data.getDate()}/${data.getMonth()}/${data.getFullYear()}
    Hora: ${data.getHours()}:${data.getMinutes()}`;
  }
  
}

let minhaConta = new banco(5004, "Tiago");

console.log(minhaConta.deposito(50));
console.log(minhaConta.deposito(50));
console.log(minhaConta.saque(20));
console.log(minhaConta.extrato())