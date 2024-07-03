import { Road } from "./Road";
import { Signal } from "./Signal";
import { TrafficController } from "./TrafficController";
import { TrafficLight } from "./TrafficLight";

export class TrafficSignalSystemDemo {
    public static run() {
        const trafficControll = TrafficController.getInstance();

        const road1 = new Road({
            id: "MR1",
            name: "Tashkent street",
        });
        const road2 = new Road({
            id: "MR2",
            name: "Mirobod street",
        });

        trafficControll.setRoad(road1);
        trafficControll.setRoad(road2);

        const traffic1 = new TrafficLight({
            id: 1,
            current_signal: Signal.RED,
            redDuration: 1000,
            yellowDuration: 2000,
            greenDuration: 2300,
        });

        road1.setTrafficLight(traffic1);

        trafficControll.setTrafficLightToRoad(road1, traffic1);
    }
}

TrafficSignalSystemDemo.run();