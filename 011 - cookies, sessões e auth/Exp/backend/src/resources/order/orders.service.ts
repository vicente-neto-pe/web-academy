import { Product } from "@prisma/client";
import { prismaCliente } from "../..";
import { CreateOrdertDTO } from "./createOrder.dto";

export class OrderService{

    
    readAllOrders = async() =>{
        return await prismaCliente.order.findMany();
    }

    readOrderById = async(id:number)=>{
        return await prismaCliente.order.findUnique({where:{id}});
    }

    createOrder = async(order:CreateOrdertDTO)=> {
        return await prismaCliente.order.create({data:order})
    }

    deleteOrder=async (orderId:number)=>{
        return await prismaCliente.order.delete({where:{id:orderId}})
    }

    updateOrder =async (orderId:number, order:CreateOrdertDTO)=>{
        return await prismaCliente.order.update({where:{id:orderId}, data:order})
    }

    endOrder = async (userId: string, products: Product[]) => {
        for (const product of products) {
          await prismaCliente.orderProduct.create({
            data: {
              order: {
                create: {
                  user_id: userId
                }
              },
              product: {
                connect: { id: product.id }
              }
            }
          });
        }
      }

      
}