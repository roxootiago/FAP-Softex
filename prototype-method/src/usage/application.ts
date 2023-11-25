import { Vehicle } from "../abstract/vehicle"
import { Car } from "../abstract/car"
import { Motocycle } from "../abstract/motocycle"

export class Application {
  createVehicle(): Vehicle[] {
    const vehicles: Vehicle[] = []
    const vehicle1: Vehicle = new Car("Fiesta", "Ford", "Azul", 4, 4)
    const vehicle2: Vehicle = new Car("Gol","Volkswagen","Vermelho",4,2)
    const vehicle3: Vehicle = new Motocycle("CBR500R","Honda","Preto",2,500)      
    const vehicle4: Vehicle = new Motocycle("Ninja 300","Kawsaqi","Verde",2,300)      

    vehicles.push(vehicle1,vehicle2,vehicle3,vehicle4)
    
    return vehicles
  }

  cloneVehicle (vehicles: Vehicle[]): Vehicle[] {

    const clonedVehicles: Vehicle[] = []

    for (const vehicle of vehicles) {
      clonedVehicles.push(vehicle.clone())
  }
  return clonedVehicles
}
}

