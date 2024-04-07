import { Product } from "./product.js";

export class Cellphone extends Product {

private memorySize: number;

constructor(name: string, price: number, manufacturer: string, memorySize: number){
    super(name, price, manufacturer);
    this.memorySize = memorySize;
}

getMemorySize(): number {
    return this.memorySize;
}

}