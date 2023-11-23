import { Customer } from '../interfaces/customer'
import { Vehicle } from '../interfaces/vehicle/'

export interface CreateVehicleCustomer {
    createCustomer(): Customer
    createVehicle(): Vehicle;
}