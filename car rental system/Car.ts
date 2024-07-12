export interface CarModule {
    model: string;
    year: string;
    license_plate: string;
    number: string;
    rental_price_per_day: string;
    status: CAR_STATUS;
}

export enum CAR_STATUS {
    
}

export class Car implements CarModule {
    constructor(private car: CarModule) {}

    public get model() {
        return this.car.model;
    }

    public get year() {
       return this.car.year;
    }
    
    public get license_plate() {
        return this.car.license_plate;
    }
    
    public get number() {
        return this.car.number;
    }

    public get rental_price_per_day() {
       return this.car.rental_price_per_day;
    }

    public get status() {
        return this.car.status;
    }
}