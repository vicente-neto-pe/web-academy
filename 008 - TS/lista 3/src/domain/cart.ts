import { Observer } from "../Obrserver.js";
import { Product } from "./product.js";

export class Cart <T extends Product>{
    private products: T[] = [];
    private totalPrice: number = 0;
    private observers: Observer[] = [];

    addProduct(product: T){
        this.products.push(product);
        this.notifyObservers();
    }

    removeProduct(product: Product){
        this.products = this.products.filter(p => p.getId() !== product.getId());
        this.notifyObservers();
    }

    getProducts(){
        return this.products;
    }
    
    getTotalPrice(){
        this.totalPrice = 0;
        this.products.forEach(product => {
            this.totalPrice += product.getPrice();
        });
        return this.totalPrice;
    }

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    private notifyObservers(): void {
        this.observers.forEach(observer => observer.update());
    }
}