import { Router } from 'express';
import { mainController } from '../controllers/main/main';

const router = Router();

router.get('/', mainController.homePage);
router.get('/adicionar', mainController.addProductPage);
router.get('/atualizar/:id', mainController.updateProductPage);
router.post('/update_product', mainController.updateProductController);
router.post('/add_product', mainController.addProductController);
router.post('/delete_product/:id', mainController.deleteProductController);

export default router;
