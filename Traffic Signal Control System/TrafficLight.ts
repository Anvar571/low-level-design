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

    public changeSignal(value: Signal) {
        this.traffic.current_signal = value;
    }

    // vaqtlar transportlarning harakatiga qarab sozlanishi kerak
    public setRedDuration(value: number) {
        this.traffic.redDuration = value;
    }

    public setYellowDuration(value: number) {
        this.traffic.yellowDuration = value;
    }

    public setGreenDuration(value: number) {
        this.traffic.greenDuration = value;
    }
}