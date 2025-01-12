import express from "express"
import User from "../products/product.model.js"
const routes = express.Router();

routes.delete("/", async(req,res) => {
    console.log("Initiated Delete")
});

routes.put("/api", async(req,res) => {
    console.log("Initiated Add")
    console.log(req.body);
});
routes.get("/", async(req,res) => {
    console.log("Backend Server!");
    const products = await User.find({});
    console.log(products);
    
    res.send("HOT");
})

routes.post("/", async(req,res) => {
    const product = req.body;
    console.log(product);
    const newUser = new User({
        username:"Hawk Tuah",
        email:"Cock"
    })
    //await newUser.save();
    res.send("Hello Back!")

})
export default routes;