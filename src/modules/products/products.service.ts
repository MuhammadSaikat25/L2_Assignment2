import TProduct from "./products.interface";
import { productModel } from "./products.model";

// ! service for post a new products
const postAProductsInToDB = async (product: TProduct) => {
  const result = await productModel.create(product);
  return result;
};
// ! server get all products
const getAllProductsFromDB = async (searchTerm: String) => {
  if (searchTerm) {
    const result = await productModel.find({
      name: { $regex: searchTerm, $options: "i" },
    });
    return result;
  }
  const result = await productModel.find();
  return result;
};
// !service for getting a single products by id
const getProductBYIdFromDB = async (id: string) => {
  const result = await productModel.findById(id);
  return result;
};
// !service for delete a single products by id
const deleteProductByIdFromDB = async (id: string) => {
  const result = await productModel.deleteOne({ _id:id });
  return result;
};

export const productService = {
  postAProductsInToDB,
  getAllProductsFromDB,
  getProductBYIdFromDB,
  deleteProductByIdFromDB,
};
