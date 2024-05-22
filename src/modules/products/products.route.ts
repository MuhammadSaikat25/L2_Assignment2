

import express from 'express'
import { productController } from './products.controller'
const route=express.Router()


route.post("/products",productController.postProduct)

export const productRoutes = route;