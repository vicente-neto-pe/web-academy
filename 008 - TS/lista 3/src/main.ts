import { CartComponent } from "./presentation/cartUIComponent.js";
import { ProductList } from "./presentation/productList.js";
import { ProductForm } from "./presentation/productForm.js";
import { Cart } from "./domain/cart.js";

export const cart = new  Cart();
export const cartComponent = new CartComponent();
export const productList = new ProductList();
export const productForm = new ProductForm();
