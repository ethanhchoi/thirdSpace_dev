import mongoose from "mongoose"


const ObjectId = mongoose.Types.ObjectId;
const Timestamp = mongoose.Types.ObjectId;


const schema_user = new mongoose.Schema({
     username:{
      type:String,
      required:true
     },
     isAuth:{
      type:Boolean,
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
            required:true,
            enum:["new friend","friend","close friend"]
         }
      }],
     chatroomList:[//Look to see if this is ok
      {
      chatroom_ID:{
         type:ObjectId,
         required:true
      }
      }],
     college:{
      type:String,
      required:true,
      enum:["University at Maryland"]
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
   settingsID:{
      type:ObjectId,
      required:true
   }
})

const chatroom_settings = new mongoose.Schema({
   chatroomName:{
      type:String,
      required:true
   },
   users:[{
      userID:{
         type:ObjectId,
         required:true
      },
      dateJoined:{
         type:Timestamp,
         required:true
      },
      chatStatus:{
         type:String,
         required:true,
         enum:["member","chat leader"]
      }
   }],
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