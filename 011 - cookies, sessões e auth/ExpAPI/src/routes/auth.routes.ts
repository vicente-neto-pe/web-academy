import { Router } from "express";
import { authController } from "../resources/auth/auth.controller";

const authRouter = Router({ mergeParams: true });

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
authRouter.post('/logout', authController.logout);

export default authRouter;