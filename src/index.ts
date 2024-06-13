interface CustomStorage<T> {
    [key: string]: T;
}

abstract class AbstractLocalStorage<T> {
    protected storage: CustomStorage<T> = {};
    abstract setItem(key: string, value: T): void;
    abstract getItem(key: string): T | null;
    abstract clearItem(key: string): void;
    abstract clear(): void;
}

class LocalStorage<T> extends AbstractLocalStorage<T> {
    setItem(key: string, value: T) {
        this.storage[key] = value;
    }

    getItem(key: string): T | null {
        return this.storage[key] || null;
    }

    clearItem(key: string) {
        delete this.storage[key];
    }

    clear() {
        this.storage = {};
    }
}

type SuccessCallback = (latitude: number, longitude: number) => void;
type target = {
    latitude: number;
    longitude: number;
};

type GetCurrentPosition = {
    (successFn: SuccessCallback): void;
    (successFn: SuccessCallback, errorFn: ErrorCallback): void;
    (
        successFn: SuccessCallback,
        errorFn: ErrorCallback,
        optionsObj: PositionOptions
    ): void;
};
type watchPosition = {
    (successFn: SuccessCallback): void;
    (successFn: SuccessCallback, errorFn: ErrorCallback): void;
    (
        successFn: SuccessCallback,
        errorFn: ErrorCallback,
        optionsObj: PositionOptions
    ): void;
};

class GeolocationAPI {
    private target: target = {
        latitude: 0,
        longitude: 0,
    };
    getCurrentPosition: GetCurrentPosition = (
        successFn: SuccessCallback,
        errorFn?: ErrorCallback,
        optionsObj?: PositionOptions
    ) => {
        if (errorFn && optionsObj) {
            this.getCurrentPosition(successFn, errorFn, optionsObj);
        } else if (errorFn) {
            this.getCurrentPosition(successFn, errorFn);
        } else {
            this.getCurrentPosition(successFn);
        }
    };

    watchPosition: watchPosition = (
        successFn: SuccessCallback,
        errorFn?: ErrorCallback,
        optionsObj?: PositionOptions
    ) => {
        if (errorFn && optionsObj) {
            this.watchPosition(successFn, errorFn, optionsObj);
        } else if (errorFn) {
            this.watchPosition(successFn, errorFn);
        } else {
            this.watchPosition(successFn);
        }
    };
}
