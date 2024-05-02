import { User } from "@prisma/client";
import { prismaCliente } from "../..";
import { LoginDto } from "./dto/login.dto";
import bcrypt from "bcryptjs";
import { Role } from "../role/role.constants";


  const checkAuth = async (credentials: LoginDto): Promise<User | null> => {
    const { email, password } = credentials;
    const user = await prismaCliente.user.findUnique({where: {email}});
    if (!user) return null;
    const ok = await bcrypt.compare(password, user.password);
    return ok ? user : null;
  };


  const checkIsAdmin = async (userId: string) => {
    const user = await prismaCliente.user.findUnique({where: {id: userId}});
    if (!user) return false;
    return user.role_id === Role.ADMIN;
  }
  const checkIsAuth= async (userId: string) => {
    const user = await prismaCliente.user.findUnique({where: {id: userId}});
    return !!user;
  
}
const logout = async () => {
  return { msg: "Usuário deslogado" };
}

export const authService = {checkIsAuth, checkIsAdmin, checkAuth, logout}