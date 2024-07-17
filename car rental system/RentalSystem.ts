export class RentalSystem {
    private static instance: RentalSystem;
    private constructor() {}

    public static getInstane() {
        if (this.instance) return this.instance;
        return new RentalSystem();
    }
}