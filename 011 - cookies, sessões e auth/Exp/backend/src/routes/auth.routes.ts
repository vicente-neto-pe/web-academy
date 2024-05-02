import { Router } from "express";
import { UserController } from "../resources/users/users.controller";
import { UsersService } from "../resources/users/users.service";
import { AuthController } from "../resources/auth/auth.controller";
import { userService } from "./users.routes";
import { AuthService } from "../resources/auth/auth.service";

const authRouter = Router({ mergeParams: true });
export const authService = new AuthService();
const authController = new AuthController(authService, userService);

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
authRouter.post('/logout', authController.logout);

export default authRouter;