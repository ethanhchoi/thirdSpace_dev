import express from 'express';
import {connectDB} from './db/db.js';
import dotenv from 'dotenv';
import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//Allows us to accept JSON data in req.body
app.use(express.json());

app.use("/api/products",productRoutes)

app.listen(5000, ()=> {
    console.log("Console host started listening at http://localhost:" + PORT);
    connectDB();
});