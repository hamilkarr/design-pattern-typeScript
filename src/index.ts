interface SStorage<T> {
    [key: string]: T;
}

abstract class LocalStorage<T> {
    private storage: SStorage<T> = {};
    setItem(key: string, value: T) {}
    getItem(key: string) {}
    clearItem(key: string) {}
    clear() {}
}
