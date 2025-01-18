import express from 'express'
import dotenv from 'dotenv';
import {connectDB} from "./config/db.js";
import routes from "./routes/routes.js"

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;
//const db = connectDB();
//Allows us to accept JSON data in req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();

app.use("/",routes);
app.listen(5000, ()=> {
    console.log("Console host started listening at http://localhost:" + PORT);
});