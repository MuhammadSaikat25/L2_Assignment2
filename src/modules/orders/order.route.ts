

import express from 'express'
import { orderController } from './order.controller'
const route =express.Router()
route.post('/orders',orderController.postOrder)
route.get('/orders',orderController.getAllOrder)

export const orderRoute=route