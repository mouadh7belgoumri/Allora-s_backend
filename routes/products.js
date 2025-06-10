import express from 'express'
import {getProducts, getProduct, addProduct} from '../dbFunctions.js';
const router = express.Router();

const connectionData = {
    host: 'localhost',
    user: 'root',
    password: process.env.DATABASE_PASSWORD,
    database: 'products'
}

router.get("/", async (req,res)=>{
    res.send(await getProducts(connectionData))
})

router.get('/:id', async (req, res)=>{
    const rows = await getProducts(connectionData);
    
    
    res.send(rows[req.params.id - 1])
})

router.post('/', async (req, res)=>{
    res.send(await addProduct(connectionData));
})



export default router;