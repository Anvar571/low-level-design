// this class parking lot exists singleton pattern
/**
 * ParkingLot klassi to'xtash joyining faqat bitta nusxasi mavjudligini ta'minlash uchun 
 * Singleton naqshiga amal qiladi. U darajalar ro'yxatini yuritadi va transport vositalarini 
 * to'xtatish va parkdan chiqarish usullarini taqdim etadi.
 */

import { LevelImpl } from "./Level";
import { Vehicle } from "./vehicles/vehicle";

export class ParkingLotImpl {
  private static instance: ParkingLotImpl | null;
  private levels: LevelImpl[] = [];

  private constructor() {}

  public static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    return new ParkingLotImpl();
  }

  public addLevel(level: LevelImpl) {
    this.levels.push(level);
  }

  public parkVehicle(vehicle: Vehicle) {
    for (let level of this.levels) {
      if (!level.isFull()) {
        level.parkVehicle(vehicle);
        return true;
      }
    }
    return false;
  }

  public unparkVehicle(vehicle: Vehicle) {
    for (let level of this.levels) {
      if (level.upParking(vehicle)) {
        return true;
      }
    }
    return false;
  }

  public displayLevels() {
    console.log(this.levels, 'levels');
  }

  public displayAvailability() {
    for (let level of this.levels) {
      level.levels();
    }
  }
}