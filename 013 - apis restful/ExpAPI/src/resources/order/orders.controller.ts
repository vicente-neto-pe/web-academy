import { Request, Response } from "express";
import { CreateOrdertDTO } from "./createOrder.dto";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { OrderService } from "./orders.service";
import { Product } from "@prisma/client";
import { ProductService } from "../products/products.service";

export class OrderController {

  constructor(private orderService: OrderService, private productService: ProductService) {
  }

  create = async (req: Request, res: Response) => {
    const order = req.body as CreateOrdertDTO;
    try {
      const newOrder = await this.orderService.createOrder(order);
      res.status(StatusCodes.CREATED).json(newOrder);
    } catch (e) {
      console.log(e);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const order = req.body as CreateOrdertDTO;
      const id = req.params.id;
      const updatedOrder = await this.orderService.updateOrder(parseInt(id), order);
      if(updatedOrder) return res.json(updatedOrder);
      res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
    } catch (e) {
      console.log(e);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
  };
  readAll = async (req: Request, res: Response) => {
    try {
      const orders = await this.orderService.readAllOrders();
      res.json(orders);
    } catch (e) {
      console.log(e);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
  };
  readOne = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const order = await this.orderService.readOrderById(parseInt(id));
      if(!order) return res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
      res.json(order);
    } catch (e) {
      console.log(e);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
  };
  remove = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const response = await this.orderService.deleteOrder(parseInt(id));
      if(response) return res.json(response);
      res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
    } catch (e) {
      console.log(e);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
  };

  addProductToCart(req: Request, res: Response) {
    const {productId, quantity}  = req.body;
    if(!req.session.cart) req.session.cart = [];
    req.session.cart?.push({productId, quantity});
    res.json({productId, quantity});
  }

  checkout=async(req:Request, res:Response)=>{
    const user_id = req.session.uid;
    if(!user_id) return res.status(401).json({msg:"Unauthorized"});
    const products: Product[] = [];
    const cart = req.session.cart || [];
    for(const item of cart){
      const product = await this.productService.readProductById(item.productId.toString());
      if(!product) throw new Error("Product not found");
      if(product.stock < item.quantity) throw new Error("Insufficient stock");
      product.stock -= item.quantity;
      await this.productService.updateProduct(product.id, product);
      products.push(product);
    }
    const order = await this.orderService.createOrder({user_id});
    await this.orderService.endOrder(user_id, products);
    req.session.cart = [];
    res.json(order);
  }
}
