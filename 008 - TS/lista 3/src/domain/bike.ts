import { Product } from "./product.js";

export class Bike extends Product{
    private tiresSize: number;

    constructor(name: string, price: number, manufacturer: string, tiresSize: number){
        super(name, price, manufacturer);
        this.tiresSize = tiresSize;
        console.log(this)
    }

    getTiresSize(): number {
        return this.tiresSize;
    }
}
