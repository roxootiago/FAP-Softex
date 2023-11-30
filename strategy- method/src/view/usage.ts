import { CalculatorController } from "../controller/control-calc"

const controller = new CalculatorController()
const operation = controller.calculate(5, 2, "+")
const operation2 = controller.calculate(5, 2, "#")

console.log(operation)
console.log(operation2)
