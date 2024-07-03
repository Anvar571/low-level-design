import { Road } from "./Road";
import { Signal } from "./Signal";
import { TrafficLight } from "./TrafficLight";

export class TrafficController {
    private roads: Road[] = [];
    private trafficLights: TrafficLight[] = [];
    private static instance: TrafficController;

    private constructor() {}

    public static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        return new TrafficController();
    }

    public setTraffic(traffic: TrafficLight) {
        const hasTraffic = this.trafficLights.find((val) => val.getId === traffic.getId);
        if(hasTraffic) throw new Error("This traffic already exists");
        this.trafficLights.push(traffic);
    }

    public viewRoads() {
        for(let road of this.roads) {
            console.log(`Road ${road.getName} trafficLight -> ${road.getTrafficLight?.getCurrentSignal}`);
        }
    }

    public setRoad(road: Road) {
        const hasRoad = this.roads.find((val) => val.getId === road.getId);
        if (hasRoad) throw new Error("This road already exists");
        this.roads.push(road);
    }

    public setTrafficLightToRoad(road: Road, traffic: TrafficLight): boolean {
        for (let rd of this.roads) {
            if (rd.getId === road.getId) {
                if (rd.getTrafficLight === traffic) throw new Error('This traffic already exists');
                rd.setTrafficLight(traffic);
                return true;
            }
        }
        return false;
    }

    public async startTrafficControll() {
        for (let road of this.roads) {
            try {
                let traffic = road.getTrafficLight;
                await this.sleep(traffic?.getRedDuration!);
                traffic?.changeSignal(Signal.YELLOW);
                await this.sleep(traffic?.getYellowDuration!);
                traffic?.changeSignal(Signal.GREEN);
                await this.sleep(traffic?.getGreenDuration!);
            } catch (error: any) {
                console.log(error.message);
            }
        }
    }

    private sleep(ms: number) {
        return new Promise(res => setTimeout(res, ms));
    }
}
