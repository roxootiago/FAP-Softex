/* eslint-disable prettier/prettier */
import { CarFactory } from '../factories/car-factory';
import { MotocycleFactory } from '../factories/motocycle-factory';
import { randomNumbers } from '../util/random-numbers';
import { Vehicle } from '../vehicle/vehicle';

export function randomCarAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const motocycleFactory = new MotocycleFactory();

  const car1 = carFactory.getVehicle('Prisma');
  const car2 = carFactory.getVehicle('Onix');
  const car3 = carFactory.getVehicle('Voyage');
  const car4 = carFactory.getVehicle('Gol');
  const motocycle1 = motocycleFactory.getVehicle('Honda Elite 125');
  const motocycle2 = motocycleFactory.getVehicle('Yamaha NMax 160');
  const motocycle3 = motocycleFactory.getVehicle('Shineray SH Worker');

  const cars = [car1, car2, car3, car4, motocycle1, motocycle2, motocycle3];

  return cars[randomNumbers(cars.length)];
}
