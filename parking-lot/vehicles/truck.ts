import { Vehicle, VehicleType } from "./vehicle";

export class Truck extends Vehicle {
  private autoNumber: string;
  constructor(number: string) {
    super();
    this.autoNumber = number;
  }

  public getNumber(): string {
    return this.autoNumber;
  }
  public get getType(): VehicleType {
    return VehicleType.TRUCK;
  };
}