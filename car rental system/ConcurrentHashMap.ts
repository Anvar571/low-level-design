export class ConcurrentHashMap<K, V> {
    private map: Map<K, V>;
    private locks: Map<K, Promise<void>>;

    constructor() {
        this.map = new Map<K, V>();
        this.locks = new Map<K, Promise<void>>();
    }

    private async acquireLock(key: K): Promise<void> {
        let release: () => void;
        const lock = new Promise<void>((resolve) => {
          release = resolve;
        });
        const existingLock = this.locks.get(key);
    
        this.locks.set(key, (existingLock ? existingLock.then(() => lock) : lock).then(() => {
          this.locks.delete(key);
          release();
        }));
        return this.locks.get(key);
    }

    public async set(key: K, value: V) {
        await this.acquireLock(key);
        this.map.set(key, value);
    }

    public async get(key: K) {
        await this.acquireLock(key);
        this.map.get(key);
    }

    public async delete(key: K) {
        await this.acquireLock(key);
        this.map.delete(key);
    }

    public async has() {}
}