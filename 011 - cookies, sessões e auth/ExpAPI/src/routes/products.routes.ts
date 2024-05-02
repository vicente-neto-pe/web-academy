import { Router } from "express";

import { productSchema } from "../resources/products/product.schema";
import validate from "../middlewares/validate";
import isAdmin from "../middlewares/isAdmin";
import { productController } from "../resources/products/product.controller";

const productsRouter = Router({ mergeParams: true });

productsRouter.get('/', 
// #swagger.tags = ['Products']
productController.readAll);
productsRouter.get('/:id',
// #swagger.tags = ['Products']
productController.readOne);
productsRouter.post('/',
// #swagger.tags = ['Products']
validate(productSchema), isAdmin,  productController.create);
productsRouter.delete('/:id',
// #swagger.tags = ['Products']
productController.remove);
productsRouter.put('/:id', 
// #swagger.tags = ['Products']
validate(productSchema), productController.update);

export default productsRouter;