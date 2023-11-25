export abstract class Vehicle {
    constructor (
        protected modelo: string,
        protected marca: string,
        protected cor: string,
        protected numeroRodas: number
    ) {}

    abstract clone (): Vehicle
    abstract represent(): string
}