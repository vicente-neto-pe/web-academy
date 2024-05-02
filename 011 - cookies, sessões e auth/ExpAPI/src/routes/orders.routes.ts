import { Router } from "express";
import { ordersController } from "../resources/order/orders.controller";

const ordersRouter = Router({ mergeParams: true });

ordersRouter.get('/', 
// #swagger.tags = ['Orders']
ordersController.readAll);
ordersRouter.post('/', 
// #swagger.tags = ['Orders']
ordersController.create);
ordersRouter.post('/addProduct', 
// #swagger.tags = ['Orders']
ordersController.addProductToCart);
ordersRouter.post('/checkout',
// #swagger.tags = ['Orders']
ordersController.checkout);
ordersRouter.get('/:id',
// #swagger.tags = ['Orders']
ordersController.readOne);
ordersRouter.delete('/:id', 
// #swagger.tags = ['Orders']
ordersController.remove);
ordersRouter.put('/:id', 
// #swagger.tags = ['Orders']
ordersController.update);

export default ordersRouter;