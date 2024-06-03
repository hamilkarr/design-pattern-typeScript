import Item from './item';
import Iterator from './iterator';
import Array from './array';

class ArrayIterator implements Iterator<Item> {
    private index: number;
    constructor(private array: Array) {
        this.index = -1;
    }
    next(): boolean {
        this.index++;
        return this.index < this.array.count;
    }
    current(): Item {
        return this.array.getItem(this.index);
    }
}
export default ArrayIterator;
