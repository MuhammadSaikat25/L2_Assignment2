

import express from 'express'
import { productController } from './products.controller'
const route=express.Router()


route.post("/products",productController.postProduct)
route.get("/products",productController.getAllProducts)
route.get("/products/:productId",productController.getProductById)

export const productRoutes = route;