import mongoose from "mongoose"

const schema_user = new mongoose.Schema({
     username:{
        type:String,
        required:true
     },
     //We can debate whether we need an email or a phone hnumbe 
     email:{
        type:String,
        required:true
     },
     /*
     listOfFriends:{
        type:Buffer,
        required:true
     },
     listOfChatrooms:{
        type:Buffer,
        required:true
     }
        */

})

const User = mongoose.model('User',schema_user);

export default User;