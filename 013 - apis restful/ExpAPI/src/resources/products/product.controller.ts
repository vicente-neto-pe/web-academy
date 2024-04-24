import { Request, Response } from "express";
import { CreateProductDTO } from "./createProduct.dto";
import { ProductService } from "./products.service";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

export class ProductController {
  private productService: ProductService;

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  create = async (req: Request, res: Response) => {
    const product = req.body as CreateProductDTO;
    try {
      const newProduct = await this.productService.createProduct(product);
      res.status(StatusCodes.CREATED).json(newProduct);
    } catch (e) {
      console.log(e);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const product = req.body as CreateProductDTO;
      const id = req.params.id;
      const updatedProduct = await this.productService.updateProduct(id, product);
      if(updatedProduct) return res.json(updatedProduct);
      res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
    } catch (e) {
      console.log(e);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
  };
  readAll = async (req: Request, res: Response) => {
    try {
      const products = await this.productService.readAllProducts();
      res.json(products);
    } catch (e) {
      console.log(e);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
  };
  readOne = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const product = await this.productService.readProductById(id);
      if(!product) return res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
      res.json(product);
    } catch (e) {
      console.log(e);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
  };
  remove = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const response = await this.productService.deleteProduct(id);
      if(response) return res.json(response);
      res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
    } catch (e) {
      console.log(e);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
  };
}
