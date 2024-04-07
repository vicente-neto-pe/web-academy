import { Product } from "./product.js";
export class TV extends Product {
    screenSize;
    resolution;
    constructor(name, price, manufacturer, screenSize, resolution) {
        super(name, price, manufacturer);
        this.screenSize = screenSize;
        this.resolution = resolution;
    }
    getScreenSize() {
        return this.screenSize;
    }
    getResolution() {
        return this.resolution;
    }
}
