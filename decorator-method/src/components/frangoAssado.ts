import { Sanduiche } from "./sanduiche";

export class FrangoAssado implements Sanduiche {
    custo(): number {
        return 4.50
    }

    descricao(): string {
        return `Sanduíche de frango assado`
    } 
}