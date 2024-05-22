import TProduct from "./products.interface";
import { productModel } from "./products.model";


const postAProductsInToDB=async(product:TProduct)=>{
    const result=await productModel.create(product)
    return result
}


export const productService={
    postAProductsInToDB
}