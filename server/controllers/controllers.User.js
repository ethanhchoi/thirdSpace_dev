import {User} from "../products/product.model.js"
import mongoose from "mongoose"
//This method is used to Delete Products from the database
const ObjectId = mongoose.Types.ObjectId;
export const deleteProducts = async(req,res) => {
    try
    {
        const {_id} = req.body;
        console.log(`Initiated Delete of ${_id}`);
        if(ObjectId.isValid(_id))
        {
            console.log("The ID is verified")
        }
        //const newUser = await User.find({}).
        //console.log(newUser);
        await User.findByIdAndDelete(_id);
        res.status(200).json({success:true,message:`Successfully deleted ${_id}`});
    }
    catch(error)
    {
        res.status(404).json({success:false,message:`Failed to delete ${error}`});
    }
}

//This method will be used to put and override the user
export const putProducts = async(req,res) => {
    //const {_id} = req.body;
    //Pretend {_id made sense}
    let _id = "67880c889b89850dc44d8f95";
    try
    {
        console.log(`Initiated Replacement of ${_id}`);
        if(!ObjectId.isValid(_id))
        {
            console.log("The ID is unverified and does not exist")
        }
        await User.findByIdAndUpdate(_id,req.body);
        res.status(200).json({success:true,message:`Successfully updated ${_id}`});
    }
    catch(error)
    {
        res.status(404).json({success:false,message:`Failed to delete ${_id} due to: \n ${error}`});
    }
}

export const getProducts = async(req,res) => {
    try
    {
        console.log("Requested Get User");
        const products = await User.find({});
        res.status(200).json({success:true,message:"Successfully received the following products 1",data:products});
    }
    catch(error)
    {
        res.status(404).json({success:false,messsage:`Get Error detected: ${error}`})
    }    
}

export const postProducts = async(req,res) => {
    try
    {
        const newUser = new User(req.body);
        
        console.log(req.body);
        await newUser.save();
        res.send("Hello Back!")
    }
    catch(error)
    {
        res.status(404).json({success:false, messsage:`Post Error detected: ${error}`})
    }

}