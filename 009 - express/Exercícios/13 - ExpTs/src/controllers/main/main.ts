import { Request, Response } from 'express';
import { Product } from '../../models/product';
import { ProductService } from '../../services/productService';

const productService = new ProductService();

const homePage = (req: Request, res: Response) => {
  Promise.resolve(productService.getAllProducts()).then((products) => {
    res.render('main/home', {
      products,
    });
  });
};

const addProductPage = (req: Request, res: Response) => {
  res.render('main/addProduct');
};

const updateProductPage = (req: Request, res: Response) => {
  const id = req.params.id;
  Promise.resolve(productService.getProduct(id)).then((product:Product) => {
    res.render('main/updateProduct', {
      product,
    });
  })
};

const updateProductController = (req: Request, res: Response) => {
  Promise.resolve(productService.updateProductService(req.body)).then(() => {
    res.redirect('/');
  });
}

const addProductController = async (req: Request, res: Response) => {
  await productService.addProductService(req.body);
  res.redirect('/');
}

const deleteProductController = async (req: Request, res: Response) => {
  await productService.removeProduct(req.params.id);
  res.redirect('/');
}

export const mainController = { homePage, addProductPage, updateProductPage, updateProductController, addProductController, deleteProductController };
