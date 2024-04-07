export class Product {
    static nextId = 1;
    id;
    name;
    price;
    manufacturer;
    constructor(name, price, manufacturer) {
        this.id = Product.nextId++;
        this.name = name;
        this.price = price;
        this.manufacturer = manufacturer;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    getManufacturer() {
        return this.manufacturer;
    }
}
