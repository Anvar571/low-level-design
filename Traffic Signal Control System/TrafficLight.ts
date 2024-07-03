import {Signal} from "./Signal";

export interface TrafficLightModule {
    id: number | string;
    current_signal: Signal;
    redDuration: number;
    yellowDuration: number;
    greenDuration: number;
}

export class TrafficLight {
    constructor(private traffic: TrafficLightModule) {}

    public get getId() {
        return this.traffic.id;
    }

    public get getRedDuration() {
        return this.traffic.redDuration;
    }

    public get getYellowDuration() {
        return this.traffic.yellowDuration;
    }

    public get getGreenDuration() {
        return this.traffic.greenDuration;
    }

    public get getCurrentSignal() {
        return this.traffic.current_signal;
    }

    public set setCurrentSignal(value: Signal) {
        this.traffic.current_signal = value;
    }
}