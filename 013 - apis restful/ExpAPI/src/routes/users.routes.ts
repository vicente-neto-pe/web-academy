import { Router } from "express";
import { UserController } from "../resources/users/users.controller";
import { UsersService } from "../resources/users/users.service";

const usersRouter = Router({ mergeParams: true });
export const userService = new UsersService();
const userController = new UserController(userService);

usersRouter.get('/', userController.readAll);
usersRouter.get('/:cpf', userController.readOneById);
usersRouter.put('/:cpf', userController.update);
usersRouter.delete('/:cpf', userController.delete);
usersRouter.post('/', userController.create);


export default usersRouter;