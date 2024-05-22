
import express, { Request, Response } from 'express'
import cors from 'cors'
import { productRoutes } from './modules/products/products.route'

const app = express()
const port = 3000
app.use(express.json())
app.use(cors())

app.use('/api',productRoutes)
app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})
export default app