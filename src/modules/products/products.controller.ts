import { Request, Response } from "express";
import { productService } from "./products.service";
import productValidateSchema from "./products.validation";

//!  Post a new product controller
const postProduct = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const {error,value}=productValidateSchema.validate(body)
    const result = await productService.postAProductsInToDB(body);
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success:false,
      message:'Please provide correct value',
      data:null
    })
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
// ! get product by id
const getProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await productService.getProductBYIdFromDB(id);

    res.status(200).json({
      success: true,
      message: "Product fetched  successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
// ! delete product by id
const deleteProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await productService.deleteProductByIdFromDB(id);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (error) {
    console.log(error);
  }
};

// ! update product
const updateProduct=async(req:Request,res:Response)=>{
  try {
    const id=req.params.productId
    const updateData=req.body
    const result=await productService.updateProductById(id,updateData)
    res.status(200).json({
      success:true,
      message: "Product updated successfully!",
      data:result
    })
  } catch (error) {
    console.log(error)
  }
}
export const productController = {
  postProduct,
  getAllProducts,
  getProductById,
  deleteProductById,
  updateProduct
};
