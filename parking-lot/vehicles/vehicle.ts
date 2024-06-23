export enum VehicleType {
  AVTO = 'avto',
  MOTO = 'moto',
  TRUCK = 'truck',
}

export abstract class Vehicle {

  public abstract getNumber(name: string): string;

  public abstract readonly getType: VehicleType;
}
