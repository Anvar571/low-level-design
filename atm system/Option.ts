
export interface Option<T> {
    Some: () => T;
    None: () => void;
}
