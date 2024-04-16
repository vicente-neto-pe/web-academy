import { Request, Response } from "express";
import { ProductService } from "../services/product.service";

export class ProductController {
  constructor(private productService: ProductService) {}

  getAllProducts=(req:Request, res: Response)=> {
    this.productService.getProducts().then((products) => {
      res.json(products);
    });
  }

  getProductById=(req: Request, res: Response)=> {
    const { id } = req.params;
    this.productService.getProductById(parseInt(id)).then((user) => {
      res.json(user);
    });
  }

  
}
