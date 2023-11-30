import { Addition, Subtraction,Multiplication } from "../model/app"
import { OperationStrategy } from "../model/calculator"

export class CalculatorController {
    private strategies: { [key: string]: OperationStrategy}

    constructor() {
        this.strategies = {
            '+': new Addition(),
            '-': new Subtraction(),
            '*': new Multiplication()
        }
    }

    calculate(num1: number, num2:number, operator:string):string | number{
        if (operator in this.strategies) {
            const strategy: OperationStrategy = this.strategies[operator]
            const result: number = strategy.execute(num1,num2)
            return `${result}`
        } else {
           return `Operação inválida!`
        }
    }
}