import { Router } from "express";
import { usersController } from "../resources/users/users.controller";
const usersRouter = Router({ mergeParams: true });

usersRouter.get('/', usersController.readAll);
usersRouter.get('/:cpf', usersController.readOneById);
usersRouter.put('/:cpf', usersController.update);
usersRouter.delete('/:cpf', usersController.remove);
usersRouter.post('/', usersController.create);


export default usersRouter;