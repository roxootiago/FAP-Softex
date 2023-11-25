import { Application } from "./application"

const app = new Application()
const vehicles = app.createVehicle()
const clonedVehicles = app.cloneVehicle(vehicles)

for (const vehicle of clonedVehicles) {
  console.log(vehicle.represent())
}
