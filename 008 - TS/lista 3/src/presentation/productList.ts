import { Observer } from "../Obrserver.js";
import { Product } from "../domain/product.js";
import { cart } from "../main.js";
import { ProductCard } from "./productCard.js";

export class ProductList implements Observer {

  constructor() {
    cart.addObserver(this);
  }

  update = () => {
    const studentList: HTMLUListElement = document.getElementsByTagName("ul")[0];
    studentList.innerHTML = "";
    cart.getProducts().forEach((product: Product) => {
      new ProductCard(product);
    });
  };
}
