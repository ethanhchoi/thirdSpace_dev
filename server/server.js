import express from 'express'
import dotenv from 'dotenv';
import cors from "cors";
import {connectDB} from "./db/db.js";
import {MongoClient} from "mongodb";

dotenv.config();


const app = express();

const PORT = process.env.PORT || 5000;
//const db = connectDB();
//Allows us to accept JSON data in req.body
app.use(express.json());
app.get("/", async(req,res) => {
    console.log("Backend Server!");
    res.send("HOT");
})

app.post("/", async(req,res) => {
    console.log("HI");
    res.send("Hello Back!")

})

app.listen(5000, ()=> {
    console.log("Console host started listening at http://localhost:" + PORT);
    connectDB();
});