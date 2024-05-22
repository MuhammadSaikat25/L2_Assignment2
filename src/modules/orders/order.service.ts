import TOrder from "./order.interface";
import { orderModel } from "./order.model";

const postOrderInToDB=async(order:TOrder)=>{
    const result=await orderModel.create(order)
    return result
}

export const orderService={
    postOrderInToDB
}