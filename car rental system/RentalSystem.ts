import { Car } from "./Car";
import { Customer } from "./Customer";
import {Reservation} from "./Reservation";

export class RentalSystem {
    private cars: Car[] = [];
    private reservations: Reservation[] = [];

    private static instance: RentalSystem;
    private constructor() {}

    public static getInstane() {
        if (this.instance) return this.instance;
        return new RentalSystem();
    }

    addCar(car: Car) {}

    removeCar(car: Car) {}

    searchCars(value: string) {}

    makeReservation(customer: Customer, car: Car, start_date: DataTransfer, end_date: Date) {

    }

    processPayment(reservation: Reservation){}

    cancelReservation() {}
}