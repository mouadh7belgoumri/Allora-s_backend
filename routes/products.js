import express from 'express'
import {getProducts, getProduct, addProduct} from '../dbFunctions.js';
const productsRouter = express.Router();

const connectionData = {
    host: 'localhost',
    user: 'root',
    password: process.env.DATABASE_PASSWORD,
    database: 'Alloras'
}

productsRouter.get("/", async (req,res)=>{
    res.send(await getProducts(connectionData))
})

productsRouter.get('/:id', async (req, res)=>{
    const rows = await getProducts(connectionData);
    
    
    res.send(rows[req.params.id - 1])
})

productsRouter.post('/', async (req, res)=>{
    res.send(await addProduct(connectionData));
})



export default productsRouter;