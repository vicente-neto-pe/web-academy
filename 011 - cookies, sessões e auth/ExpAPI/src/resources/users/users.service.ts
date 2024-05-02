import { User } from "@prisma/client";
import { prismaCliente } from "../..";
import bcrypt from "bcryptjs";

    const create=async(user: User)=> {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        return await prismaCliente.user.create({data: {...user, password: hashedPassword}});
    }
    const  readOneById=async(id: string) =>{
        return await prismaCliente.user.findUnique({where: {id}});
    }
    const  readOneByEmail=async(email:string) =>{
        return await prismaCliente.user.findUnique({where: {email}});
    }
    const readAll=async()=> {
        return await prismaCliente.user.findMany();
    }
    const update=async(id: string, user: User) => {
        return await prismaCliente.user.update({where: {id}, data: user});
    }
    const remove =async(id: string)=> {
        return await prismaCliente.user.delete({where: {id}});
    }

    export const usersService={create, readAll, remove, update, readOneByEmail, readOneById}