import { User } from "@prisma/client";
import { Role } from "../role/role.constants";
import { UsersService } from "../users/users.service";
import { AuthService } from "./auth.service";
import { Request, Response } from "express";

export class AuthController {
  constructor(private authService: AuthService, private usersService: UsersService) {}

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
      const user = await this.authService.checkAuth({ email, password });
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

  logout = async (req: Request, res: Response) => {
    try {
      const response = await this.authService.logout();
      res.json(response);
    } catch (e) {
      console.log(e);
      res.status(500).json("Internal server error");
    }
  };

  register = async (req: Request, res: Response) => {
    const usuario = req.body as User;
    try {
      if (await this.usersService.readOneByEmail(usuario.email)) return res.status(400).json({ msg: "Email informado já está sendo usado" });
      const newUsuario = await this.usersService.create({
        ...usuario,
        role_id: Role.CLIENT,
      });
      res.status(201).json(newUsuario);
    } catch (e: any) {
        console.log(e);
      res.status(500).json(e.errors);
    }
  };
}
