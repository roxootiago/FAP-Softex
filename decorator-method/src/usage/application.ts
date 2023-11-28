import { FrangoAssado } from "../components/frangoAssado"
import { Pepperoni } from "../components/pepperoni"
import { QueijoMussarelaRalado } from "../components/queijoMussarelaRalado"
import { Sanduiche } from "../components/sanduiche"

let sanduiche: Sanduiche = new FrangoAssado()
sanduiche = new QueijoMussarelaRalado(sanduiche)
sanduiche = new Pepperoni(sanduiche)

let precoTotal = (total: number) => total.toFixed(2).replace(".", ",")

console.log(
  `Informações do pedido:\n${sanduiche.descricao()}\nTotal: R$${precoTotal(
    sanduiche.custo(),
  )}`,
)
