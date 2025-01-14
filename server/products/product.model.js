import mongoose from "mongoose"

const ObjectId = mongoose.ObjectId;


const schema_user = new mongoose.Schema({
     username:{
      type:String,
      required:true
     },
     isAuth:{
      type:Boolean,
      required:true
     },
     userID:{
      type:ObjectId,
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
     listOfFriends:[
      {
         friendID:{
            type:ObjectId,
            required:true
         },
         friendStatus:{
            type:String,
            required:true
         }
         /* Consider Adding these, Not Necessary but we can also just program it ourselves
         commonFriends:{
         type:Array,
         required:true
         },
         commonChats:{
            type:Array,
            required:true
         }
         */
      }],
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
   dailyLimit:[{
      startTime:{
         type:Date,
         required:false
      },
      endTime:{
         type:Date,
         required:false}
      }]
   ,
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
   },
   settings_ID:{
      type:ObjectId,
      required:true
   }
})

const chatroom_settings = new mongoose.Schema({
   chatroomID:{
      type:ObjectId,
      required:true
   },
   chatroomName:{
      type:String,
      required:true
   },
   userCount:{
      type:Number,
      required:true
   },
   userLimit:{
      type:Number,
      required:true
   }
   ,
   dateCreated:{
      type:Date,
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
const event_schema = new mongoose.Schema({
   eventTitle:{
      type:String,
      required:true
   },
   minCapacity:{
      type:Number,
      required:false
   },
   maxCapacity:{
      type:Number,
      required:true
   },
   tags:{
      type:Array,
      required:true
   },
   inPerson:{
      type:Boolean,
      required:true
   },
   listOfUsers:{
      type:Array,
      required:true
   }

})

const User = mongoose.model('user',schema_user);
const Settings = mongoose.model('settings',settings_schema);
const Chatrooms = mongoose.model('chatrooms',chatroom_settings);
const Events = mongoose.model('events',event_schema);

export {User,Settings,Chatrooms, Events};