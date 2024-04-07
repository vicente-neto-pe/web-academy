import { Product } from "./product.js";

export class TV extends Product{

private screenSize: number;
private resolution: string;

constructor(name: string, price: number, manufacturer: string, screenSize: number, resolution: string){
    super(name, price, manufacturer);
    this.screenSize = screenSize;
    this.resolution = resolution;
}

getScreenSize(): number {
    return this.screenSize;
}

getResolution(): string {
    return this.resolution;
}

}