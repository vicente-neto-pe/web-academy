import { Request, Response } from "express";
import { CreateProductDTO } from "./createProduct.dto";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { productService } from "./products.service";




  const create = async (req: Request, res: Response) => {
    /*
      #swagger.summary = 'Adiciona um novo produto na base.'
      #swagger.parameters['body'] = {
        in: 'body',
        schema: { $ref: '#/definitions/CreateProduct' }
      }
      #swagger.responses[200] = {
        schema: { $ref: '#/definitions/Product' }
      }
    */

    const product = req.body as CreateProductDTO;
    try {
      const newProduct = await productService.createProduct(product);
      res.status(StatusCodes.CREATED).json(newProduct);
    } catch (e) {
      console.log(e);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
  };

  const update = async (req: Request, res: Response) => {
    /* 
      #swagger.summary = 'Atualiza um produto na base.'
      #swagger.parameters['body'] = {
        in: 'body',
        schema: { $ref: '#/definitions/CreateProduto' }
      }
      #swagger.responses[200] = {
        schema: { $ref: '#/definitions/Produto' }
      }
    */
    try {
      const product = req.body as CreateProductDTO;
      const id = req.params.id;
      const updatedProduct = await productService.updateProduct(id, product);
      if (updatedProduct) return res.json(updatedProduct);
      res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
    } catch (e) {
      console.log(e);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
  };
  const readAll = async (req: Request, res: Response) => {

    /*
      #swagger.summary = 'Returns a user by id'
      #swagger.parameters = 'Returns a user by id'
      #swagger.responses = 'Returns a user by id'
    */
    try {
      const products = await productService.readAllProducts();
      res.json(products);
    } catch (e) {
      console.log(e);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
  };
  const readOne = async (req: Request, res: Response) => {
    /*
      #swagger.summary = 'Returns a product by id'
      #swagger.parameters = 'Returns a product by id'
      #swagger.responses = 'Returns a product by id'
    */
    try {
      const id = req.params.id;
      const product = await productService.readProductById(id);
      if (!product) return res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
      res.json(product);
    } catch (e) {
      console.log(e);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
  };
  const remove = async (req: Request, res: Response) => {
    /*
      #swagger.summary = 'Remove a product by id'
      #swagger.parameters['id'] = { description: 'ID of the product.' }
      #swagger.responses[200] = {
        description: 'Product removed.'
      }
    */
    const id = req.params.id;
    try {
      const response = await productService.deleteProduct(id);
      if (response) return res.json(response);
      res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
    } catch (e) {
      console.log(e);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
  };


  export const productController = { create, update, readAll, readOne, remove };