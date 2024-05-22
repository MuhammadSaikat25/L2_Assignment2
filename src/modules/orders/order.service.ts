import TOrder from "./order.interface";
import { orderModel } from "./order.model";

// ! post a order into db
const postOrderInToDB = async (order: TOrder) => {
  const result = await orderModel.create(order);
  return result;
};
//! get all order
const getAllOrderFromDB = async (email: string) => {
  if (email) {
    const result = await orderModel.find({ email });
    return result;
  }
  const result = await orderModel.find();
  return result;
};

export const orderService = {
  postOrderInToDB,
  getAllOrderFromDB,
};
