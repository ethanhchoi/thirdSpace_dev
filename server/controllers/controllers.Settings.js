import {Settings} from "../products/product.model.js"

//This method is used to Delete Products from the database
export const deleteSettings = async(req,res) => {
    try
    {
        const settings = req.body;
        console.log("Initiated Delete");
        User.findByIdAndDelete(settings._id);
    }
    catch(error)
    {
        res.status(404).json({success:false,message:`Failed to delete ${error}`});
    }
}

//This method will be used to put and override the user
export const putSettings = async(req,res) => {
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

export const getSettings = async(req,res) => {
    try
    {
        console.log("Backend Server!");
        const Settings = await User.find({});
        console.log(Settings);
        
        res.send("HOT");
    }
    catch(error)
    {
        res.status(404).json({success:false,messsage:`Get Error detected: ${error}`})
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