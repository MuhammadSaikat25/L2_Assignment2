import { Request, Response } from "express";
import { orderService } from "./order.service";
import { productModel } from "../products/products.model";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

// ! create order
const postOrder = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    // ! checking is order's products(Id) are there in products collection.
    const checkingProducts = await productModel.aggregate([
      { $match: { _id: new ObjectId(body.productId) } },
    ]);

    if (checkingProducts.length !== 0) {
      const result = await orderService.postOrderInToDB(body);
      res.status(200).json({
        success: true,
        message: "Order created successfully!",
        data: result,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "productId is not valid ",
        data: null,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const orderController = {
  postOrder,
};
