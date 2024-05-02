import { prismaCliente } from "../..";
import { Product } from "@prisma/client";
import { CreateProductDTO } from "./createProduct.dto";


    
    const readAllProducts = async() =>{
        return await prismaCliente.product.findMany();
    }

    const readProductById = async(id:string)=>{
        return await prismaCliente.product.findUnique({where:{id}});
    }

    const createProduct = async(product:CreateProductDTO)=> {
        return await prismaCliente.product.create({data:product})
    }

    const deleteProduct=async (productId:string)=>{
        return await prismaCliente.product.delete({where:{id:productId}})
    }

    const updateProduct =async (productId:string, product:CreateProductDTO)=>{
        return await prismaCliente.product.update({where:{id:productId}, data:product})
    }


    export const productService = { readAllProducts, readProductById, createProduct, deleteProduct, updateProduct };
