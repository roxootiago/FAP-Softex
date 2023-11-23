class MinhaClasse {
    constructor() {
      // Declare um objeto com chaves predefinidas (sem valores iniciais) como atributo da classe
      this.meuObjeto = {
        chave1: undefined,
        chave2: undefined
      };
    }
  }
  
  // Criar uma instância da classe
  const minhaInstancia = new MinhaClasse();
  
  // Acessar as chaves predefinidas do objeto
  console.log(minhaInstancia.meuObjeto.chave1); // Saída: undefined
  console.log(minhaInstancia.meuObjeto.chave2); // Saída: undefined
  