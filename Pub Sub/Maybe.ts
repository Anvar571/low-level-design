
export class Maybe<T> {
    private constructor(private value: T | null) {
    }

    static nothing<T>(): Maybe<T> {
        return new Maybe<T>(null);
    }

    static just<T>(value: T): Maybe<T> {
        return new Maybe(value);
    }

    public map<U>(fn: (value: T) => U): Maybe<U> {
        if (this.value) {
            return Maybe.just(fn(this.value));
        } else {
            return Maybe.nothing();
        }
    }

    public byDefault<T>(byDefault: T) {
        return this.value ? this.value : byDefault;
    }
}