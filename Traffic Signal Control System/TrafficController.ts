
export class TrafficController {
    private static instance: TrafficController;

    private constructor() {}

    public static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        return new TrafficController();
    }

    public setTraffic() {}
}
