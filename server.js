import express from 'express'
import productsRouter from './routes/products.js'
const app = express();
app.use(express.json());
app.get('/', (req, res)=>{
    console.log(req.method);
    res.send({msg: "welcome"})
})

app.use('/api/products', productsRouter);



app.listen(process.env.PORT, ()=>{
    console.log(`server running at http://localhost:${process.env.PORT}`);
    
})