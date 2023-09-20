/* Objetos naturais */
class Smartphone {
    constructor(teclado, camera, modelo) {
      this.teclado = teclado;
      this.camera = camera;
      this.modelo = modelo;
    }
  
    ligar() {
      return `${this.modelo} está sendo ligado`;
    }
  
    digitar() {
      return `${this.modelo} está usando o ${this.teclado}`;
    }
  
    fotografar() {
      return `${this.modelo} está usando a ${this.camera}`;
    }
  }
  
  let xiaomi = new Smartphone("xiaomiKeyboard", "xiaomiCamera", "Xiaomi S11");
  console.log(`Modelo: ${xiaomi.modelo}
  Câmera: ${xiaomi.camera}
  Teclado: ${xiaomi.teclado}`);
  console.log(xiaomi.ligar());
  console.log(xiaomi.digitar());
  console.log(xiaomi.fotografar());



class Guitarra {
    constructor(marca,estilo,modelo) {
        this.marca = marca
        this.estilo = estilo
        this.modelo = modelo
        this.ligada = false
    }

    ligar() {
        this.ligada = true
        return `${this.modelo} está ligada`
    }

    connectPedal() {
        if(this.ligada == true) {
        return `${this.modelo} está conectada ao pedal`
        } else {
            return `não é possível conectar ao pedal pois a guitarra está desconectado`
        }
    }

    desligar() {
        this.desligada = false
        return `${this.modelo} foi desligada`
    }

    info() {
        return `Modelo: ${this.modelo}
Estilo: ${this.estilo}
Marca: ${this.marca}`
    } 
}

let RGA = new Guitarra('Ibanez','RGA','RGA42FM-BLF')
console.log(RGA.connectPedal())
console.log(RGA.ligar())
console.log(RGA.connectPedal())
console.log(RGA.info())

/* Objetos abstratos */
class Musica {
    constructor(campoHarmonico,instrumento,escala) {
        this.campoHarmonico = campoHarmonico
        this.instrumento = instrumento
        this.escala = escala
    }

    campo() {
        return `a música está utilizando o campo harmônico de ${this.campoHarmonico}`
    }

    inst() {
        return `a música está sendo tocada por ${this.instrumento}`
    }

    esc() {
        return `a música está utilizando a escala ${this.escala}`
    }
}

let mpb = new Musica ('Am','Violão','Maior natural')
console.log(mpb.campo())
console.log(mpb.inst())
console.log(mpb.esc())

class Pedido {
    constructor(produto,quantidade,formPag) {
        this.produto = produto
        this.quantidade = quantidade
        this.formPag = formPag
    }

    info() {
        return `Produto: ${this.produto}
Quantidade: ${this.quantidade}
Forma de pagamento: ${this.formPag}`
    }

    preparo() {
        return `${this.produto} está em preparo`
    }

    entrega() {
        return `${this.produto} saiu para entrega`
    }

}

let pizza = new Pedido('Pizza de Frango',2,'Pix')
console.log(pizza.info())
console.log(pizza.preparo())
console.log(pizza.entrega())