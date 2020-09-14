export class CircularBuffer<T> {
    maxSize: number;
    buffer: T[];
    constructor(maxSize: number) {
        this.maxSize = maxSize;
        this.buffer = [];
    }

    add(item: T): void {
        if (this.buffer.length >= this.maxSize) {
            this.buffer.shift();
        }
        this.buffer.push(item);
    }
    clear(): void {
        this.buffer = [];
    }
}