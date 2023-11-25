import {Vehicle} from "./vehicle"


export class Motocycle extends Vehicle {
    constructor(
        modelo: string,
        marca: string,
        cor: string,
        numeroRodas: number,
        protected cilindradas: number
    ) 
    
    {
        super (modelo,marca,cor,numeroRodas)
    }

    clone(): Vehicle {
        return new Motocycle(this.modelo,this.marca,this.cor,this.numeroRodas,this.cilindradas)
    }

    represent(): string {
        return `Modelo: ${this.modelo}
Marca: ${this.marca}
Cor: ${this.cor}
Cilindradas: ${this.cilindradas}`
    }
}