

import express from 'express'
import { orderController } from './order.controller'
const route =express.Router()
route.post('/orders',orderController.postOrder)

export const orderRoute=route