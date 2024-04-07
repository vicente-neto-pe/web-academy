import { Observer } from "../Obrserver.js";
import { cart } from "../main.js";

export class CartComponent implements Observer {
  private htmlElement = document.getElementById("cart") as HTMLDivElement;


  constructor() {
    cart.addObserver(this);
  }
  update = () => {
    const totalPrice = cart.getTotalPrice() || 0;
    this.htmlElement.innerHTML = `
    <h2 class="position-relative">Carrinho <span class="position-absolute top-0 badge rounded-pill bg-danger">${cart.getProducts().length}</span></h2>
    <h3>Valor Total: R$ ${totalPrice}</h3>
    `
  };
}
