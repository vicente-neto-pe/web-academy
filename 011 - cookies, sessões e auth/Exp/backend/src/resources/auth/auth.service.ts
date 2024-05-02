import { User } from "@prisma/client";
import { prismaCliente } from "../..";
import { UsersService } from "../users/users.service";
import { LoginDto } from "./dto/login.dto";
import bcrypt from "bcryptjs";
import { Role } from "../role/role.constants";
export class AuthService {

    constructor() {}

  checkAuth = async (credentials: LoginDto): Promise<User | null> => {
    const { email, password } = credentials;
    const user = await prismaCliente.user.findUnique({where: {email}});
    if (!user) return null;
    const ok = await bcrypt.compare(password, user.password);
    return ok ? user : null;
  };

  async register(email: string, password: string) {
    return "User registered";
  }
  async logout() {
    return "User logged out";
  }
  checkIsAdmin = async (userId: string) => {
    const user = await prismaCliente.user.findUnique({where: {id: userId}});
    if (!user) return false;
    return user.role_id === Role.ADMIN;
  }
  checkIsAuth= async (userId: string) => {
    const user = await prismaCliente.user.findUnique({where: {id: userId}});
    return !!user;
  }
}
