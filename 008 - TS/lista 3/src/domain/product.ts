export abstract class Product{
    private static nextId: number = 1;

    private id: number;
    private name: string;
    private price: number;
    private manufacturer: string;

    constructor(name: string, price: number, manufacturer: string){
        this.id = Product.nextId++;
        this.name = name;
        this.price = price;
        this.manufacturer = manufacturer;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }

    getManufacturer(): string {
        return this.manufacturer;
    }    
}
