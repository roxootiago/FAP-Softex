import { OperationStrategy } from "./calculator";

// estragégia concreta
export class Addition implements OperationStrategy {
    execute (num1:number,num2:number): number {
        return num1 + num2
    }
}
export class Subtraction implements OperationStrategy {
    execute (num1:number,num2:number): number {
        return num1 - num2
    }
}
export class Multiplication implements OperationStrategy {
    execute (num1:number,num2:number): number {
        return num1 * num2
    }
}
