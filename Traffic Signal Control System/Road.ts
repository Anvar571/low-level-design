import { TrafficLight } from "./TrafficLight";

export interface RoadModule {
    id: string;
    name: string;
    traffic_light?: TrafficLight;
}

export class Road {

    constructor(private road: RoadModule) {
    }
    
    public get getName() {
        return this.road.name;
    }

    public get getId() {
        return this.road.id;
    }

    public get getTrafficLight() {
        return this.road.traffic_light;
    }

    public set setId(value: string) {
        this.road.id = value;
    }

    public setTrafficLight(value: TrafficLight) {
        this.road.traffic_light = value;
    }
}
