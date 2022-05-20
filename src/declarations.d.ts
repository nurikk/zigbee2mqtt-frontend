declare module "*.png" {
    const content: string;
    export default content;
}



declare module "*?url" {
    const value: string;
    export default value;
}

declare module "*?raw" {
    const value: string;
    export default value;
}


declare module "@toolz/local-storage" {
    type LocalStorage = {
        getItem<T>(key: string): T;
        setItem<T>(key: string, value: T): void;
        remove(key: string): void;
    }
    export const local: LocalStorage;
}