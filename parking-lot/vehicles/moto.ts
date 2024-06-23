import { Vehicle, VehicleType } from "./vehicle";

export class Motorcycle extends Vehicle {
  private autoNumber: string;
  constructor(number: string) {
    super();
    this.autoNumber = number;
  }

  public getNumber(): string {
    return this.autoNumber;
  }

  public get getType(): VehicleType {
    return VehicleType.MOTO;
  };
}