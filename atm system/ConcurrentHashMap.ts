
export class ConcurrentHashMap<K, V> {
    private map: Map<K, Promise<void>>;

    constructor() {
        this.map = new Map<K, Promise<void>>();
    }

    public set() {}

    public get() {}

    public delete() {}

    public has() {}
}