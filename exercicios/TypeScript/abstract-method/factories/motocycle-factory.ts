import { Vehicle } from '../vehicle/vehicle';
import { VehicleFactory } from './vehicle-factory';
import { Motocycle } from '../vehicle/motocycle';

export class MotocycleFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Motocycle(vehicleName);
  }
}
