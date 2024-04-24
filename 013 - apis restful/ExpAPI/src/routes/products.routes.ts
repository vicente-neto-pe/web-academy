import { Router } from "express";
import { ProductController } from "../resources/products/product.controller";
import { ProductService } from "../resources/products/products.service";
import { productSchema } from "../resources/products/product.schema";
import validate from "../middlewares/validate";
import isAdmin from "../middlewares/isAdmin";

const productsRouter = Router({ mergeParams: true });
export const productService = new ProductService();
const productController = new ProductController(productService);

productsRouter.get('/', productController.readAll);
productsRouter.get('/:id', productController.readOne);
productsRouter.post('/',validate(productSchema), isAdmin,  productController.create);
productsRouter.delete('/:id', productController.remove);
productsRouter.put('/:id', validate(productSchema), productController.update);

export default productsRouter;