
import express, { Request, Response } from 'express'
import cors from 'cors'
import { productRoutes } from './modules/products/products.route'
import { orderRoute } from './modules/orders/order.route'

const app = express()
const port = 3000
app.use(express.json())
app.use(cors())


// ! products route
app.use('/api',productRoutes)

// ! order route 
app.use("/api",orderRoute)

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})
export default app