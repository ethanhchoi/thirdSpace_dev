import {Chatrooms} from "../products/product.model.js"

//This method is used to Delete Products from the database
export const deleteChatrooms = async(req,res) => {
    try
    {
        const chatrooms = req.body;
        console.log("Initiated Delete");
        User.findByIdAndDelete(chatrooms._id);
    }
    catch(error)
    {
        res.status(404).json({success:false,message:`Failed to delete ${error}`});
    }
}

//This method will be used to put and override the user
export const putChatrooms = async(req,res) => {
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

export const getChatrooms = async(req,res) => {
    try
    {
        console.log("Backend Server!");
        const chatroomData = await Chatrooms.find({});
        console.log(chatroomData);
        
        res.send("HOT");
    }
    catch(error)
    {
        res.status(404).json({success:false,messsage:`Get Error detected: ${error}`})
    }    
}

export const postChatrooms = async(req,res) => {
    try
    {
        const product = req.body;
        const myChatrooms = new Chatrooms(product);
        
        console.log(product);
        await myChatrooms.save();
        res.send("I am Chatrooms!")
    }
    catch(error)
    {
        res.status(404).json({success:false, messsage:`Post Error detected: ${error}`})
    }

}