import express from "express"

const router = express.Router();

router.get("/", async (req,res) => {
    console.log(req);
    res.send(`I have been received by ${res.status(200).json({success:true,data:{"meep":5}})}`)
});

router.post("/",createProducts); 

router.delete("/:id",deleteProduct);
//Updating all fields = .put() method else use .patch() to update some 

router.put("/:id", updateProduct);

export default router;