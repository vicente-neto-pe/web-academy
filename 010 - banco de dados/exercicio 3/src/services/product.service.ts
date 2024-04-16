import { prisma } from "../app";

export class ProductService{

    async getProducts(){
        const products = await prisma.produto.findMany();
        return products;
    }

    async getProductById(id: number){
        const product =  await prisma.produto.findUnique({where: {id}});
        return product;
    }
}