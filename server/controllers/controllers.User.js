import {User} from "../products/product.model.js"

//This method is used to Delete Products from the database
export const deleteProducts = async(req,res) => {
    try
    {
        const products = req.body;
        console.log("Initiated Delete");
        User.findByIdAndDelete(products._id);
    }
    catch(error)
    {
        res.status(404).json({success:false,message:`Failed to delete ${error}`});
    }
}

//This method will be used to put and override the user
export const putProducts = async(req,res) => {
    console.log("Initiated Add")
    try
    {
        console.log("Isuccessful");
        //findByIdAndUpdate
    }
    catch(error)
    {
        res.status(404).statusMessage("You suck");
    }
}

export const getProducts = async(req,res) => {
    try
    {
        console.log("Backend Server!");
        const products = await User.find({});
        console.log(products);
        
        res.send("HOT");
    }
    catch(error)
    {
        res.status(404).json({success:false,messsage:`Get Error detected: ${error}`})
    }    
}

export const postProducts = async(req,res) => {
    try
    {
        const product = req.body;
        const newUser = new User(product);
        
        console.log(product);
        await newUser.save();
        res.send("Hello Back!")
    }
    catch(error)
    {
        res.status(404).json({success:false, messsage:`Post Error detected: ${error}`})
    }

}