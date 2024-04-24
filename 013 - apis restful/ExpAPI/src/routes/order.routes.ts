import { Router } from "express";
import { OrderController } from "../resources/order/orders.controller";
import { OrderService } from "../resources/order/orders.service";
import { productService } from "./products.routes";

const ordersRouter = Router({ mergeParams: true });
const orderController = new OrderController(new OrderService, productService);

ordersRouter.get('/', orderController.readAll);
ordersRouter.post('/',  orderController.create);
ordersRouter.post('/addProduct', orderController.addProductToCart);
ordersRouter.post('/checkout', orderController.checkout);
ordersRouter.get('/:id', orderController.readOne);
ordersRouter.delete('/:id', orderController.remove);
ordersRouter.put('/:id', orderController.update);

export default ordersRouter;