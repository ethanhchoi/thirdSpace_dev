import express from 'express'
import dotenv from 'dotenv';
import {connectDB} from "./config/db.js";
import routes from "./routes/routes.js"
import cors from "cors"
dotenv.config();
const app = express();

//Express, MongoDB, React Native, Cors
//MERC?

const PORT = process.env.PORT || 5000;
//const db = connectDB();
//Allows us to accept JSON data in req.body
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();

app.use("/",routes);
app.listen(5000,"0.0.0.0", ()=> {
    console.log("Console host started listening at http://localhost:" + PORT);
});