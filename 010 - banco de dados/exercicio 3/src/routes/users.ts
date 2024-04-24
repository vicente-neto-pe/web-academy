import { UserController } from "../controllers/user.controller";
import { Router } from "express";
import { UserService } from "../services/users.service";

const userRouter = Router({ mergeParams: true });
const userService = new UserService();
const userController = new UserController(userService);

userRouter.get('/', userController.getAllUsers);
userRouter.get('/:cpf', userController.getUserByCPF);
userRouter.put('/:cpf', userController.updateUser);
userRouter.delete('/:cpf', userController.deleteUser);
userRouter.post('/', userController.createUser);

export default userRouter;