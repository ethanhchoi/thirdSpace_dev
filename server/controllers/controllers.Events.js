import {Events} from "../products/product.model.js"

//This method is used to Delete Products from the database
export const deleteEvents = async(req,res) => {
    try
    {
        const event = req.body;
        console.log("Initiated Delete");
        User.findByIdAndDelete(event._id);
    }
    catch(error)
    {
        res.status(404).json({success:false,message:`Failed to delete ${error}`});
    }
}

//This method will be used to put and override the user
export const putEvents = async(req,res) => {
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

export const getEvents = async(req,res) => {
    try
    {
        console.log("Backend Server!");
        const eventData = await Events.find({});
        console.log(eventData);
        
        res.send("HOT");
    }
    catch(error)
    {
        res.status(404).json({success:false,messsage:`Get Error detected: ${error}`})
    }    
}

export const postEvents = async(req,res) => {
    try
    {
        const product = req.body;
        const myEvents = new Events(product);
        
        console.log(product);
        await myEvents.save();
        res.send("I am Events!")
    }
    catch(error)
    {
        res.status(404).json({success:false, messsage:`Post Error detected: ${error}`})
    }

}