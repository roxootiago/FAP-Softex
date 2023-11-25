import {Vehicle} from "./vehicle"

export class Car extends Vehicle {
    constructor(
        modelo: string,
        marca: string,
        cor: string,
        numeroRodas: number,
        protected numeroPortas: number
    ) 
    
    {
        super (modelo,marca,cor,numeroRodas)
    }

    clone(): Vehicle {
        return new Car(this.modelo,this.marca,this.cor,this.numeroRodas,this.numeroPortas)
    }

    represent(): string {
        return `Modelo: ${this.modelo}
Marca: ${this.marca}
Cor: ${this.cor}
Número de portas: ${this.numeroPortas}`
    }
}