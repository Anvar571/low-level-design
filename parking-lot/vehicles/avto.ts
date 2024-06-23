import { Vehicle, VehicleType } from "./vehicle";

export class Car extends Vehicle {
  private autoNumber: string;
  constructor(number: string) {
    super();
    this.autoNumber = number;
  }

  public getNumber(): string {
    return this.autoNumber;
  }

  public get getType() {
    return VehicleType.AVTO;
  }
}
