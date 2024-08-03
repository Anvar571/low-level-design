
export class ConcurrentHashMap<K, V> {
    private map: Map<K, PromiseConstructor>;

    constructor() {
        this.map = new Map<K, PromiseConstructor>();
    }

    public set(key: K, value: PromiseConstructor) {
        const res = this.get(key);
        if (!res) {
            this.map.set(key, value);
        }
    }

    public get(key: K) {
        const res = this.map.get(key);
        if (res) res;
        return null;
    }

    public delete(key: K) {
        const res = this.get(key);
        if (res) this.map.delete(key);
        return null;
    }

    public has(key: K): boolean {
        const res = this.get(key);
        if (res) true;
        return false;
    }
}

// bizda bitta promise bor shuni bajarilib bo'ldimi yoki yo'qligini qanday bilsak bo'ladi