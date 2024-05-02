import {Router } from 'express';
import usersRouter from './users.routes';
import productsRouter from './products.routes';
import authRouter from './auth.routes';
import languageRouter from './language.routes';
import ordersRouter from './order.routes';

const router = Router();

router.use('/users', usersRouter);
router.use('/products', productsRouter);
router.use('/language', languageRouter);
router.use('/', authRouter);
router.use('/orders', ordersRouter)

export default router;
