import { prismaCliente } from "../..";
import { Product } from "@prisma/client";
import { CreateProductDTO } from "./createProduct.dto";

export class ProductService{

    
    readAllProducts = async() =>{
        return await prismaCliente.product.findMany();
    }

    readProductById = async(id:string)=>{
        return await prismaCliente.product.findUnique({where:{id}});
    }

    createProduct = async(product:CreateProductDTO)=> {
        return await prismaCliente.product.create({data:product})
    }

    deleteProduct=async (productId:string)=>{
        return await prismaCliente.product.delete({where:{id:productId}})
    }

    updateProduct =async (productId:string, product:CreateProductDTO)=>{
        return await prismaCliente.product.update({where:{id:productId}, data:product})
    }


}