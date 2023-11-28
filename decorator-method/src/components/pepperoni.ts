import { Sanduiche } from "./sanduiche";

export class Pepperoni implements Sanduiche {
    constructor (private sanduiche: Sanduiche) {}

    custo(): number {
        return this.sanduiche.custo() + 0.99
    } 

    descricao(): string {
        return `${this.sanduiche.descricao()} + Pepperoni`
    }
}