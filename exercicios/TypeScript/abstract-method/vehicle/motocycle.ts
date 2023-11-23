import { Vehicle } from './vehicle';

export class Motocycle implements Vehicle {
  constructor(private name: string) {}
  pickUp(customerName: string): void {
    console.log(`${customerName} está a `);
  }
  stop(): void {
    console.log(`${this.name} chegou ao destino`);
  }
}
