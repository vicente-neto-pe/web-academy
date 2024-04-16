import { Request, Response } from "express";
import { UserService } from "../services/users.service";

export class UserController {
  constructor(private userService: UserService) {}

  getAllUsers=(req:Request, res: Response)=> {
    this.userService.getUsers().then((users) => {
      res.json(users);
    }).catch(error => {
      res.status(500).json({ error: 'Internal server error' });
    });
  };

  getUserByCPF=(req: Request, res: Response)=> {
    const { cpf } = req.params;
    this.userService.getUserByCPF(cpf).then((user) => {
      res.json(user);
    }).catch(error => {
      res.status(500).json({ error: 'Internal server error' });
    });
  };

  updateUser=(req: Request, res: Response)=> {
    const user = req.body;
    const { cpf } = req.params;
    this.userService.updateUser(cpf, user).then((user)=>{
      res.json(user);
    }).catch(error => {
      res.status(500).json({ error: 'Internal server error' });
    });
  };

  deleteUser=(req: Request, res: Response)=> {
    const { cpf } = req.params;
    this.userService.deleteUser(cpf).then((user)=>{
      res.json(user);
    }).catch(error => {
      res.status(500).json({ error: 'Internal server error' });
    });
  
  }

  createUser=(req: Request, res: Response)=> {
    const user = req.body;
    console.log(user);
    this.userService.createUser(user).then((user)=>{
      res.json(user);
    }).catch((error) => {
      console.log(error)
      res.status(500).json({ error: 'Internal server error' });
    });
  };
}

