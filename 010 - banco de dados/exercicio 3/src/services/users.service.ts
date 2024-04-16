import { prisma } from "../app";
import { User } from "../models/user";
import { CreateUserDTO } from "./dto/createUser.dto";

export class UserService {
  async getUsers() {
    try{
      const users:User[] = await prisma.cliente.findMany();
      return users;
    }catch(err){
      console.log(err);
    }
  }

  async getUserByCPF(cpf: string) {
    try{
      const user:User|null = await prisma.cliente.findUnique({ where: { cpf } });
      return user;
    }catch(err){
      console.log(err);
    }
  }

  async createUser(user: CreateUserDTO) {
    try{
      const {endereco, ...userData} = user;
      if (endereco)  return await prisma.cliente.create({ 
        data: { 
          ...userData, 
          endereco: { create: endereco } 
        } 
      });
      return await prisma.cliente.create({ data: { ...user as User} });
    }catch(err){
      console.log(err);
    }
  }

  async deleteUser(cpf: string) {
    try{
      return await prisma.cliente.delete({ where: { cpf } });
    }catch(err){
      console.log(err);
    }
  }

  async updateUser(cpf: string, newUser: User) {
    try{
      return await prisma.cliente.update({ where: { cpf }, data: newUser });
    }catch(err){
      console.log(err);
    }
  }
}
