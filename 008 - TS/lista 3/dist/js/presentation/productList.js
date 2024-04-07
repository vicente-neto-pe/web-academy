import { cart } from "../main.js";
import { ProductCard } from "./productCard.js";
export class ProductList {
    constructor() {
        cart.addObserver(this);
    }
    update = () => {
        const studentList = document.getElementsByTagName("ul")[0];
        studentList.innerHTML = "";
        cart.getProducts().forEach((product) => {
            new ProductCard(product);
        });
    };
}
