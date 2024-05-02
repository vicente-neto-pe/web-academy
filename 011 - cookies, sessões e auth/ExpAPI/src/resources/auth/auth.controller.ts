import { User } from "@prisma/client";
import { Role } from "../role/role.constants";
import { Request, Response } from "express";
import { authService } from "./auth.service";
import { usersService } from "../users/users.service";

const login = async (req: Request, res: Response) => {
  /*
    #swagger.summary = 'Autentica um usuário.'
    #swagger.parameters['body'] = {
      in: 'body',
      schema: { $ref: '#/definitions/Login' }
    }
    #swagger.responses[200] = {
      description: 'Usuário autenticado'
    }
  */
    const { email, password } = req.body;
    try {
      const user = await authService.checkAuth({ email, password });
      console.log(user)
      if (!user)
        return res.status(401).json({
          msg: "Email e/ou senha incorretos",
        });
      req.session.uid = user.id;
      req.session.roleId = user.role_id;
      res.status(200).json({ msg: "Usuário autenticado" });
    } catch (e) {
        console.log(e); 
      res.status(500).json(e);
    }
  };

  const logout = async (req: Request, res: Response) => {
    /*
      #swagger.summary = 'Desloga um usuário.'
      #swagger.responses[200] = {
        description: 'Usuário deslogado'
      }
    */
    try {
      const response = await authService.logout();
      res.json(response);
    } catch (e) {
      console.log(e);
      res.status(500).json("Internal server error");
    }
  };

  const register = async (req: Request, res: Response) => {
    /*
      #swagger.summary = 'Cria um usuário.'
      #swagger.parameters['body'] = {
        in: 'body',
        schema: { $ref: '#/definitions/User' }
      }
      #swagger.responses[201] = {
        description: 'Usuário criado.'
      }
    */
    const usuario = req.body as User;
    try {
      if (await usersService.readOneByEmail(usuario.email)) return res.status(400).json({ msg: "Email informado já está sendo usado" });
      const newUsuario = await usersService.create({
        ...usuario,
        role_id: Role.CLIENT,
      });
      res.status(201).json(newUsuario);
    } catch (e: any) {
        console.log(e);
      res.status(500).json(e.errors);
    }
  };

  export const authController = {register, login, logout}
