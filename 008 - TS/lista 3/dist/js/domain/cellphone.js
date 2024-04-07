import { Product } from "./product.js";
export class Cellphone extends Product {
    memorySize;
    constructor(name, price, manufacturer, memorySize) {
        super(name, price, manufacturer);
        this.memorySize = memorySize;
    }
    getMemorySize() {
        return this.memorySize;
    }
}
