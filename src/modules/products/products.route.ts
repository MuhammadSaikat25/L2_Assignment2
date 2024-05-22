

import express from 'express'
import { productController } from './products.controller'
const route=express.Router()


route.post("/products",productController.postProduct)
route.get("/products",productController.getAllProducts)

export const productRoutes = route;