import express from 'express'
import {getProducts, getProduct, addProduct, DeleteAllProducts, DeleteOneProduct} from '../dbFunctions.js';
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
    const row = await getProduct(connectionData, req.params.id);
    console.log(row);
    
    res.send(row)
})

productsRouter.post('/', async (req, res)=>{
    res.send(await addProduct(connectionData, req));
})

productsRouter.delete('/', async (req, res)=>{
    res.send(await DeleteAllProducts(connectionData))
})

productsRouter.delete('/:id', async (req, res) => {
    res.send(await DeleteOneProduct(connectionData, req.params.id))
})

export default productsRouter;