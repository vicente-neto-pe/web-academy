import { Bike } from "../domain/bike.js";
import { Cellphone } from "../domain/cellphone.js";
import { TV } from "../domain/tv.js";
import { cart, cartComponent, productList } from "../main.js";

export class ProductForm {
  form = document.querySelector("form") as HTMLFormElement;
  private productTypes = {
    bike: this.renderBikeFormFields(),
    tv: this.renderTVFormFields(),
    cellPhone: this.renderCellphoneFormFields(),
  };

  constructor() {
    this.form.addEventListener("submit", (e: Event) => {
      e.preventDefault();
      const inputValues = this.getInputValues();
      const productType = document.querySelector<HTMLSelectElement>("select")?.value;
      switch (productType) {
        case "bike":
          cart.addProduct(new Bike(inputValues.name, parseInt(inputValues.price), inputValues.manufacturer, parseInt(inputValues.tiresSize)));
          break;
        case "tv":
          cart.addProduct(new TV(inputValues.name, parseInt(inputValues.price), inputValues.manufacturer, parseInt(inputValues.screenSize), inputValues.resolution));
          break;
        case "cellPhone":
          cart.addProduct(new Cellphone(inputValues.name, parseInt(inputValues.price), inputValues.manufacturer, parseInt(inputValues.screenSize)));
          break;
      }
    });

    const productTypeInput = document.querySelector("select") as HTMLSelectElement;
    productTypeInput.addEventListener("change", () => {
      console.log(productTypeInput.value);
      this.updateOptionalFields(productTypeInput.value as "bike" | "tv" | "cellPhone");
    });
  }

  getInputValues() {
    const inputValues: { [key: string]: string } = {};
    const inputs = this.form.querySelectorAll("input");
    inputs.forEach((input) => {
      inputValues[input.id] = input.value;
    });
    return inputValues;
  }

  updateOptionalFields(productType: "bike" | "tv" | "cellPhone") {
    const optionalFieldsContainer = document.querySelector("#optionalFields") as HTMLDivElement;
    optionalFieldsContainer.innerHTML = this.productTypes[productType];
  }

  renderTVFormFields() {
    return `
      <div class="mb-3">
        <label for="screenSize" class="form-label">Tamanho da tela</label>
        <input type="number" class="form-control" id="screenSize" required min="0"/>
      </div>
      <div class="mb-3">
        <label for="resolution" class="form-label">Resolução</label>
        <input type="text" class="form-control" id="resolution" required />
      </div>
    `;
  }

  renderBikeFormFields() {
    return `
      <div class="mb-3">
        <label for="tiresSize" class="form-label">Tamanho do aro</label>
        <input type="number" class="form-control" id="tiresSize" required min="0"/>
      </div>
    `;
  }

  renderCellphoneFormFields() {
    return `
      <div class="mb-3">
        <label for="screenSize" class="form-label">Memória</label>
        <input type="number" class="form-control" id="screenSize" required min="0"/>
      </div>
    `;
  }
}
