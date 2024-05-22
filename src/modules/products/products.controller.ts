import { Request, Response } from "express";
import { productService } from "./products.service";

//!  Post a new product controller
const postProduct = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const result = await productService.postAProductsInToDB(body);
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
// ! get all products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm;
    const result = await productService.getAllProductsFromDB(
      searchTerm as string
    );
    res.status(200).json({
      success: true,
      message: `Products matching search term ${searchTerm} fetched successfully!`,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const productController = {
  postProduct,
  getAllProducts,
};
