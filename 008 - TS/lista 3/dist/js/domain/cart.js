export class Cart {
    products = [];
    totalPrice = 0;
    observers = [];
    addProduct(product) {
        this.products.push(product);
        this.notifyObservers();
    }
    removeProduct(product) {
        this.products = this.products.filter(p => p.getId() !== product.getId());
        this.notifyObservers();
    }
    getProducts() {
        return this.products;
    }
    getTotalPrice() {
        this.totalPrice = 0;
        this.products.forEach(product => {
            this.totalPrice += product.getPrice();
        });
        return this.totalPrice;
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    notifyObservers() {
        this.observers.forEach(observer => observer.update());
    }
}
