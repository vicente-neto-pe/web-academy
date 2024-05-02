import { Product } from "@prisma/client";
import { prismaCliente } from "../..";
import { CreateOrdertDTO } from "./createOrder.dto";


    /** 
 * #swagger.tags = ['Orders']
 * #swagger.path = '/orders'
 * #swagger.method = 'get'
 * #swagger.description = 'Retrieve all orders'
 */
    const readAllOrders = async() =>{
        return await prismaCliente.order.findMany();
    }

    const readOrderById = async(id:number)=>{
        return await prismaCliente.order.findUnique({where:{id}});
    }

    const createOrder = async(order:CreateOrdertDTO)=> {
        return await prismaCliente.order.create({data:order})
    }

    const deleteOrder=async (orderId:number)=>{
        return await prismaCliente.order.delete({where:{id:orderId}})
    }

    const updateOrder =async (orderId:number, order:CreateOrdertDTO)=>{
        return await prismaCliente.order.update({where:{id:orderId}, data:order})
    }

    const endOrder = async (userId: string, products: Product[]) => {
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

      export const orderService = { readAllOrders, readOrderById, createOrder, deleteOrder, updateOrder, endOrder };