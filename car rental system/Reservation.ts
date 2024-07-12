import { Car } from "./Car";
import { Customer } from "./Customer";

export interface ReservationModule {
    id?: number;
    customer: Customer,
    car: Car,
    start_date: Date;
    end_date: Date;
    total_price: string;
}

export class Reservation implements ReservationModule {
    constructor(private reservation: ReservationModule) {
        this.reservation.id = 1;
    }

    public get customer() {
        return this.reservation.customer;
    }
    public get car() {
        return this.reservation.car;
    }
    public get start_date() {
        return this.reservation.start_date;
    }
    public get end_date() {
        return this.reservation.end_date;
    }
    public get total_price() {
        return this.reservation.total_price;
    }
}