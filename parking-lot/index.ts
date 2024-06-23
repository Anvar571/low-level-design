import { LevelImpl } from "./Level";
import { ParkingLotImpl } from "./ParkingLot";
import { Car } from "./vehicles/avto";
import { Motorcycle } from "./vehicles/moto";
import { Truck } from "./vehicles/truck";

export class Main {
  public static run () {
      let parkingLot = ParkingLotImpl.getInstance();
      parkingLot.addLevel(new LevelImpl(1, 100));
      parkingLot.addLevel(new LevelImpl(2, 80));

      const car = new Car("ABC123");
      const truck = new Truck("XYZ789");
      const motorcycle = new Motorcycle("M1234");
      const car2 = new Car('BD1234');

      // Park vehicles
      parkingLot.parkVehicle(car);
      parkingLot.parkVehicle(truck);
      parkingLot.parkVehicle(motorcycle);
      parkingLot.parkVehicle(car2)

      // Display availability
      // parkingLot.displayAvailability();
      // parkingLot.displayLevels();

      // Unpark vehicle
      // parkingLot.unparkVehicle(motorcycle);

      // Display updated availability
      // parkingLot.displayAvailability();
  }
}

Main.run();