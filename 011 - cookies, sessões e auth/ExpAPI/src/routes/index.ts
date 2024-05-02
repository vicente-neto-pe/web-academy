import {Router } from 'express';
import usersRouter from './users.routes';
import productsRouter from './products.routes';
import authRouter from './auth.routes';
import languageRouter from './language.routes';
import ordersRouter from './orders.routes';

const router = Router();

router.use('/', // #swagger.tags = ['Auth']
authRouter);
router.use('/users', 
// #swagger.tags = ['Users']
usersRouter);
router.use('/products', productsRouter);
router.use('/language',
// #swagger.tags = ['Language']
 languageRouter);
router.use('/orders', ordersRouter);

export default router;
