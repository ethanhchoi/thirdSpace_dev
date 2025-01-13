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
     password:{
      type:String,
      required:true
     },
     listOfFriends:{
      type:Array,
      required:true
     },
     chatroomList:{
      type:Array,
      required:true
     },
     college:{
      type:String,
      required:true
     }
})
const settings_schema = new mongoose.Schema({
   dailyLimit:{
      type:TimeRanges,
      required:false
   },
   blockedPeopleList:{
      type:Array,
      required:true
   },
   loadingScreenSettings:{
      enableDisable:{
         type:Boolean,
         required:true
      },
      sensitiveTopics: {
         type:Array,
         required:true
      }
   }
})

const chatroom_settings = new mongoose.Schema({
   chatroomID:{
      type:Number,
      required:true
   },
   chatroomName:{
      type:String,
      required:true
   },
   peopleCount:{
      type:Number,
      required:true
   },
   dateCreated:{
      type:Timestamp,
      required:true
   },
   timeLeft:{
      type:Date,
      required:true
   },
   canEnableGroupCall:{
      type:Boolean,
      required:true
   },
   isOpen:{
      type:Boolean,
      required:true
   }
   
})

/*
const chatroom_settings = new mongoose.Schema({

})
*/
const User = mongoose.model('user',schema_user);
const Settings = mongoose.model('settings',settings_schema);

export {User,Settings};