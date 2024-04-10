import { Product } from '../models/product';
import { CreateProductDTO } from './dto/createProductDTO';

export class ProductService{
    resource = process.env.BACKEND_URL + '/produtos';
    
    getAllProducts = async () => {
      const response = await fetch(this.resource);
      const responseBody = await response.json();
      return responseBody;
    };
    
    getProduct = async (id: string) => {
      const response = await fetch(`${this.resource}/${id}`);
      return await response.json();
    };
    
    addProductService = async (product: CreateProductDTO) => {
      const response = await fetch(`${this.resource}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      return response.status;
    };
    
    removeProduct = async (id: string) => {
      const response = await fetch(`${this.resource}/${id}`, {
        method: 'DELETE',
      });
      return response.status;
    };
    
    updateProductService = async (product: Product) => {
      const response = await fetch(`${this.resource}/${product.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      return response.status;
    };
}

