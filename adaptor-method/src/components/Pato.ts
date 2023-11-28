interface Pato {
  grasnar(): void
  voar(): void
}

class PatoSelvagem implements Pato {
  grasnar(): void {
    console.log("Quack! Quack!")
  }

  voar(): void {
    console.log("Voando como um pato selvagem.")
  }
}

interface Galinha {
  cacarejar(): void
  voarCurto(): void
}

class AdaptadorPato implements Galinha {
  constructor(private pato: Pato) {}

  cacarejar(): void {
  }

  voarCurto(): void {
  }
}

class AdaptadorPatoDemo {
  static run(): void {
    const patoSelvagem: Pato = new PatoSelvagem()
    const adaptador: Galinha = new AdaptadorPato(patoSelvagem)

    console.log("Interagindo com a Galinha adaptada:")
    adaptador.cacarejar()
    adaptador.voarCurto()
  }
}

AdaptadorPatoDemo.run()
