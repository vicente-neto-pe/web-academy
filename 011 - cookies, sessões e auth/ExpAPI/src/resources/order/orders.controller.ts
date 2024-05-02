import { Request, Response } from "express";
import { CreateOrdertDTO } from "./createOrder.dto";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { Product } from "@prisma/client";
import { orderService } from "./orders.service";
import { productService } from "../products/products.service";


  const create = async (req: Request, res: Response) => {
    /*
      #swagger.tags = ['Orders']
      #swagger.summary = 'Adiciona um novo pedido na base.'
      #swagger.parameters['body'] = {
        in: 'body',
        schema: { $ref: '#/definitions/CreateOrder' }
      }
      #swagger.responses[200] = {
        schema: { $ref: '#/definitions/Order' }
      }
    */
    const order = req.body as CreateOrdertDTO;
    try {
      const newOrder = await orderService.createOrder(order);
      res.status(StatusCodes.CREATED).json(newOrder);
    } catch (e) {
      console.log(e);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
  };

  const update = async (req: Request, res: Response) => {
    /* 
      #swagger.summary = 'Atualiza um pedido na base.'
      #swagger.parameters['body'] = {
        in: 'body',
        schema: { $ref: '#/definitions/CreateOrder' }
      }
      #swagger.responses[200] = {
        schema: { $ref: '#/definitions/Order' }
      }
    */
    try {
      const order = req.body as CreateOrdertDTO;
      const id = req.params.id;
      const updatedOrder = await orderService.updateOrder(parseInt(id), order);
      if(updatedOrder) return res.json(updatedOrder);
      res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
    } catch (e) {
      console.log(e);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
  };

  const readAll = async (req: Request, res: Response) => {
    /* 
      #swagger.summary = 'Retorna todos os pedidos.'
      #swagger.responses[200] = {
        schema: { $ref: '#/definitions/Order' }
      }
    */
    try {
      const orders = await orderService.readAllOrders();
      res.json(orders);
    } catch (e) {
      console.log(e);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
  };

  const readOne = async (req: Request, res: Response) => {
    /* 
      #swagger.summary = 'Retorna um pedido por id.'
      #swagger.parameters['id'] = { description: 'ID do pedido.' }
      #swagger.responses[200] = {
        schema: { $ref: '#/definitions/Order' }
      }
    */
    try {
      const id = req.params.id;
      const order = await orderService.readOrderById(parseInt(id));
      if(!order) return res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
      res.json(order);
    } catch (e) {
      console.log(e);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
  };

  const remove = async (req: Request, res: Response) => {
    /* 
      #swagger.summary = 'Remove um pedido da base.'
      #swagger.parameters['id'] = { description: 'ID do pedido.' }
      #swagger.responses[200] = {
        schema: { $ref: '#/definitions/Order' }
      }
    */
    const id = req.params.id;
    try {
      const response = await orderService.deleteOrder(parseInt(id));
      if(response) return res.json(response);
      res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
    } catch (e) {
      console.log(e);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
  };

  const addProductToCart = async (req: Request, res: Response)=> {
    /* 
      #swagger.summary = 'Adiciona um produto ao carrinho.'
      #swagger.parameters['body'] = {
        in: 'body',
        schema: { $ref: '#/definitions/AddProductToCart' }
      }
      #swagger.responses[200] = {
        schema: { $ref: '#/definitions/Product' }
      }
    */
    const {productId, quantity}  = req.body;
    if(!req.session.cart) req.session.cart = [];
    req.session.cart?.push({productId, quantity});
    res.json({productId, quantity});
  }

  const checkout=async(req:Request, res:Response)=>{
    /* 
      #swagger.summary = 'Finaliza a compra.'
      #swagger.responses[200] = {
        schema: { $ref: '#/definitions/Order' }
      }
    */
    const user_id = req.session.uid;
    if(!user_id) return res.status(401).json({msg:"Unauthorized"});
    const products: Product[] = [];
    const cart = req.session.cart || [];
    for(const item of cart){
      const product = await productService.readProductById(item.productId.toString());
      if(!product) throw new Error("Product not found");
      if(product.stock < item.quantity) throw new Error("Insufficient stock");
      product.stock -= item.quantity;
      await productService.updateProduct(product.id, product);
      products.push(product);
    }
    const order = await orderService.createOrder({user_id});
    await orderService.endOrder(user_id, products);
    req.session.cart = [];
    res.json(order);
  }


  export const ordersController = {create, update, readAll, readOne, remove, addProductToCart, checkout};

