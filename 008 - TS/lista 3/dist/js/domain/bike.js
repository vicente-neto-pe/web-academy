import { Product } from "./product.js";
export class Bike extends Product {
    tiresSize;
    constructor(name, price, manufacturer, tiresSize) {
        super(name, price, manufacturer);
        this.tiresSize = tiresSize;
        console.log(this);
    }
    getTiresSize() {
        return this.tiresSize;
    }
}
