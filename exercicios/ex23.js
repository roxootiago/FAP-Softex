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
