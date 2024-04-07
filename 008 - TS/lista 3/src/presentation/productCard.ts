import { Bike } from "../domain/bike.js";
import { Cellphone } from "../domain/cellphone.js";
import { Product } from "../domain/product.js";
import { TV } from "../domain/tv.js";
import { cart, productList } from "../main.js";

export class ProductCard {
  private product: Product;
  private productListHTMLElement: HTMLUListElement = document.getElementsByTagName("ul")[0];

  constructor(product: Product) {
    this.product = product;
    this.appendCardToCardList(product);
  }

  appendCardToCardList(product: Product): void {
    const newCard: HTMLLIElement = document.createElement("li");
    newCard.id = product.getId().toString();
    newCard.innerHTML = `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${product.getName()}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Preço: ${product.getPrice()}</h6>
          <h6 class="card-subtitle mb-2 text-muted">Fabricante: ${product.getManufacturer()}</h6>
          ${this.renderOptionalAttributes()}
          <button  class="btn btn-primary deleteButton" data-student-id="${product.getId()}">Apagar</button>
        </div>
      </div>`;
    this.productListHTMLElement.appendChild(newCard);
    
      const deleteButtons:NodeListOf<HTMLButtonElement> = document.querySelectorAll(`.deleteButton[data-student-id="${this.product.getId()}"]`);  
      deleteButtons.forEach((button:HTMLButtonElement) => {
        button.addEventListener("click", () => {
          cart.removeProduct(this.product);
          productList.update();
        });
      });
  }

  renderOptionalAttributes() {
    switch (this.product.constructor.name) {
      case "Bike":
        return `
          <h6 class="card-subtitle mb-2 text-muted">Tamanho do pneu: ${(this.product as Bike).getTiresSize()}</h6>`;
      case "TV":
        return `
          <h6 class="card-subtitle mb-2 text-muted">Tamanho da tela: ${(this.product as TV).getScreenSize()}</h6>
          <h6 class="card-subtitle mb-2 text-muted">Resolução: ${(this.product as TV).getResolution()}</h6>`;
      case "Cellphone":
        return `
          <h6 class="card-subtitle mb-2 text-muted">Tamanho da memória: ${(this.product as Cellphone).getMemorySize()}</h6>`;
      default:
        return "";
    }
  }
}
