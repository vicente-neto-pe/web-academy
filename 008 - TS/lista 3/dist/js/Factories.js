import { Bike } from "./domain/bike";
import { Cellphone } from "./domain/cellphone";
import { TV } from "./domain/tv";
export class ProductFactory {
}
export class BikeFactory extends ProductFactory {
    createProduct(arg) {
        return new Bike("Mountain Bike", 500, "26", 5);
    }
}
export class CarFactory extends ProductFactory {
    createProduct(arg) {
        return new Cellphone("1", 4, "20000", 4);
    }
}
export class TVFactory extends ProductFactory {
    createProduct(arg) {
        return new TV("Sedan", 20000, "Manufacturer", 6, "Automatic");
    }
}
