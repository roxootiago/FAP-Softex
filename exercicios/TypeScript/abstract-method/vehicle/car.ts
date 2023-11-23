import { Vehicle } from './vehicle';

export class Car implements Vehicle {
  constructor(private name: string) {}
  pickUp(customerName: string): void {
    console.log(`${customerName} está 
`);
  }
  stop(customerName: string): void {
    console.log(`${customerName} chegou ao destino`);
  }
}
