import { User } from "@prisma/client";
import { prismaCliente } from "../..";
import bcrypt from "bcryptjs";

export class UsersService {
    async create(user: User) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        return await prismaCliente.user.create({data: {...user, password: hashedPassword}});
    }
    async readOneById(id: string) {
        return await prismaCliente.user.findUnique({where: {id}});
    }
    async readOneByEmail(email:string) {
        return await prismaCliente.user.findUnique({where: {email}});
    }
    async readAll() {
        return await prismaCliente.user.findMany();
    }
    async update(id: string, user: User) {
        return await prismaCliente.user.update({where: {id}, data: user});
    }
    async delete(id: string) {
        return await prismaCliente.user.delete({where: {id}});
    }
}