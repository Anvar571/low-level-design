// Level klassi to'xtash joyidagi darajani ifodalaydi
// va to'xtash joylari ro'yxatini o'z ichiga oladi.
// U darajadagi mashinalarni to'xtash va to'xtash joyidan chiqarish bilan shug'ullanadi.
import { ParkingSpot } from "./parking-spot";
import { Vehicle } from "./vehicles/vehicle";

export interface Level {
  parkVehicle(): any;
  upParking(): any;
  levels(): any;
}

export class LevelImpl {
  private parkingSpot: ParkingSpot[] = [];

  constructor(private floor: number, private numSpots: number) {
    for (let i = 1; i <= numSpots; i++) {
      this.parkingSpot.push(new ParkingSpot(i));
    }
  }

  public parkVehicle(vehicle: Vehicle) {
    for (let spot of this.parkingSpot) {
      if (spot.isAviable()) {
        spot.park(vehicle);
        return true;
      }
    }
    return false;
  }

  public upParking(vehicle: Vehicle) {
    for (let spot of this.parkingSpot) {
      if (!spot.isAviable()) {
        spot.unpark();
        return true
      }
    }
  }

  public isFull(): boolean {
    for (let spot of this.parkingSpot) {
      if (spot.isAviable()) {
        return false;
      }
    }
    return true;
  }

  public levels() {
    for (let spot of this.parkingSpot) {
      console.log(`Spot ${spot.getSpotNumber}: ${spot.isAviable() ? "Available" : "Occupied"}`);
    }
  }
}