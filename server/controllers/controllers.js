import {User,Settings} from "../products/product.model.js"

//This method is used to Delete Products from the database
export const deleteProducts = async(req,res) => {
    try
    {
        console.log("Initiated Delete");
        User.find
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
export const getSettings = async(req,res) => {
    try
    {
        const products = await Settings.find({});
        console.log(products);
        
        res.send("Settings Hot Flamey");
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

export const postSettings = async(req,res) => {
    try
    {
        const product = req.body;
        const mySettings = new Settings(product);
        
        console.log(product);
        await mySettings.save();
        res.send("I am settings!")
    }
    catch(error)
    {
        res.status(404).json({success:false, messsage:`Post Error detected: ${error}`})
    }

}