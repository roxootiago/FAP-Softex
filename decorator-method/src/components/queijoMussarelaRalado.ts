import { Sanduiche } from "./sanduiche"

export class QueijoMussarelaRalado implements Sanduiche {
  constructor(private sanduiche: Sanduiche) {}

  custo(): number {
    return this.sanduiche.custo() + 2.00
  }

  descricao(): string {
    return `${this.sanduiche.descricao()} + Queijo Mussarela Ralado`
  }
}
