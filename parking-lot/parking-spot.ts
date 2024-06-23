// ParkingSpot klassi individual to'xtash joyini ifodalaydi 
// va mavjudligi va to'xtab turgan avtomobilni kuzatib boradi.

import { Vehicle, VehicleType } from "./vehicles/vehicle";

export class ParkingSpot {
  private vehicle: Vehicle | null = null;

  constructor(private spotNumber: number) { }

  isAviable(): boolean {
    return this.vehicle === null;
  }

  park(vehicle: Vehicle) {
    if (this.isAviable()) {
      this.vehicle = vehicle;
      return true;
    }
    return false;
  }

  public get getVehicleType(): VehicleType | undefined {
    return this.vehicle?.getType;
  }

  public get getSpotNumber(): number {
    return this.spotNumber;
  }

  public get getParkedVehicle() {
    return this.vehicle;
  }

  unpark() {
    const vehicle = this.vehicle;
    this.vehicle = null;
    return vehicle;
  }
}
