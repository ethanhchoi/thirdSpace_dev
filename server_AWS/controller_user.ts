import uuid from 'react-native-uuid'
//import WebSocket from 'ws';
//import * as env from "react-native-dotenv"
//import dotenv from 'dotenv';
//import Config from "react-native-config"
//import * from 'react-native-dotenv' 
/*
type userSettings =
{
    "productID":number,
    "blockedPeopleList":Set<String>,
    "loadingScreenSettings":number[],
}//I can debate on How the loading screen settings even work
//
type message = 
{
    messageContent:String,
    timeSent:Date,
    clientID:number,
    receiverID:number
}*/


async function testFunction2()
{
    let tempVal = 1097895652171076482;
    console.log("testfunction 2 ran")
    let tempVal2 = await updateUser(tempVal,"Ben",true,["Red","Blue","Green"],["SFDKJSEFJEWRE","WEFJEWFEJEWR","EWFINEWF"],[])
    console.log(tempVal2)
}
async function testFunction()
{
    let output = await createUser("Skibidi",[]);
    console.log(output);
}
async function testFunction3()
{
    //Goal: Test Create a chatroom and see what it looks like on a datasheet
    let results = await createChatroom("Hawk Tuah",[],5,8)
    console.log(results)
}
async function testFunction4()
{
    //Goal: Test Create a chatroom and see what it looks like on a datasheet
    let results = await createEvent("EVENT","TestEvent1","Headache in the ass",false,20,["Running","Gooning","Relaxing","Computer Science"],
        false,new Date("April 14, 2025 18:24:00"),new Date("April 15, 2025 10:24:00"),["Bombordino Croccodillo","Tim Cheese","John Pork","The Lion"],[38347294],0,5)
    console.log(results)
}
function sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
async function testFunction5(hostID:string,testerID:string)
{
    //Goal: Test Create a message and see what it looks like on a datasheet
    let server = await connectServer(hostID);
    let tempMessage = "La-la-la-lava, ch-ch-ch-chicken\nSteve's Lava Chicken, yeah, it's tasty as hell\nOoh, mamacita, now you're ringin' the bell\nCrispy and juicy, now you're havin' a snack\nOoh, super spicy, it's a lava attack. Ding!"
    await sleep(5000);
    console.log("Waiting")
    let results = await sendMessage(server,tempMessage,hostID,testerID);
    console.log(results)
}
async function testFunction6()
{
    
}

//USER Section
export async function createUser(username:string,tagList:string[]): Promise<Object> {  
    //Create ID as UUID because of Storage safety. Bytes are cool but not reliable
    //let generatedID = genNum(0,29999999999) + 100000000000;
    //This link will also be hidden and will have permissions set up 
    let link = "https://dk9j000yia.execute-api.us-east-2.amazonaws.com/prod/user"
    //Changing from V5 -> V4
    //Takes the Node and trunkates it down to 6 characters of the User's endID
    //Takes a chunk of the UUID gneeration so Its completely random
    let generatedID = String(uuid.v4()).split("-")[4].slice(0,8).toUpperCase()
    
    //Define success code? actually this should be defined everywhere?
    let statusCode = 200;
    const outData:object = {
        "userType":"USER",
        "productID":generatedID,
        "username":username,
        "isAuth":false,
        "listOfFriends":[],
        "tags":tagList,
        "chatroomList":[],
        "dateCreated":getCurrentDate(),
        "eventsCreated":0,
        "chatroomsCreated":0,
        "connectionID":"offline"
    }
    //Sets up the Fetch Request
    let fetchReq:object = {
        method:"POST",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(outData)
    }
    //Tries to Fetch towards the server
    let output = "";
    try
    {
        let req = await fetch(link,fetchReq);
        output = await req.json();
        console.log(output)
    }
    catch(error)
    {
        //This indicates that there was a problem with the code being fetched
        console.log("Error detected:",error);
        statusCode = 404;
    }
    //If this is created, then Also Create a user on the Google Cloud/FireBase which ever one we choose
    /*
    outPut{
        statusCode = 404
    }
    output[statusCode] == 404 -> Error
    */
    return statusCode;
}
export async function getUser(userType:string,userID:string): Promise<Object>
{
    //This link will hopefully be hidden when we launch
   const getUserLink = `https://dk9j000yia.execute-api.us-east-2.amazonaws.com/prod/user?userType=${userType}&productID=${userID}`;
   //Initialize the data to send to the server
   let fetchBody = {
    method:"GET",
    headers:{'Content-Type': 'application/json'},
   }
   let output = {}
   try
   {
      let fetchRes = await fetch(getUserLink,fetchBody)
      let userData = await fetchRes.json();
      output = userData;
   }
   catch(error)
   {
      console.log("Error detected",error)
      return output
   }
   console.log(output)
   return output
}
export async function deleteUser(): Promise<Object>
{
   //const getUserLink = f"https://dk9j000yia.execute-api.us-east-2.amazonaws.com/prod/user/{productID}";
   let contentBody = {
    "userType":"localUserType",
    "userID":"localStorageIDNumber"
   }
   //You know how Apps queue for deletion in 14 days or so
   //We could try pulling that off in the future
   let fetchBody = {
    method:"DELETE",
    headers:{'Content-Type': 'application/json'},
    body:contentBody
   }
   //let fetchRes = await fetch(getUserLink,fetchBody);
   //let userData = await fetchRes.json();
   return fetchBody;
}
export async function updateUser(productID:number,user:string,isAuth:boolean,friendList:string[],tagList:string[],chatList:string[]): Promise<Object>
{  
    //Try to make all of these paramaters optional
    //Create ID as UUID because of Storage safety. Bytes are cool but not reliable
    //
    const getUserLink = "https://dk9j000yia.execute-api.us-east-2.amazonaws.com/prod/user";
    let outData = {
        "productID":productID,
        "username":user,
        "isAuth":isAuth,
        "listOfFriends":friendList,
        "tags":tagList,
        "chatroomList":chatList
    };
    let fetchBody = {
        method:"PATCH",
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(outData)
    };
    let getData = await fetch(getUserLink,fetchBody);
    let fetchedData = await getData.json();//<-Investigate what this is
    return fetchedData//Investigate what this is
}
export async function createSettings(loadingScreenSettings:string[]): Promise<true>
{
    
    // const outData = {
    //     "Type":"SETTINGS",
    //     "blockedPeopleList":new Set(),
    //     "loadingScreenSettings":loadingScreenSettings};
    // let fetchReq = {
    //     method:"POST",
    //     headers:{'Content-Type': 'application/json'},
    //     body:JSON.stringify(outData)
    // }
    return true;
}
export async function getSettings()
{
    
}

export async function createChatroom(chatroomName:string,userList:string[],userLimit:number,createdChatrooms:number): Promise<boolean>
{
    let link:string = "https://dk9j000yia.execute-api.us-east-2.amazonaws.com/prod/chatroom"
    let uuidv5:string = '1f6b32ef-25d9-40e0-bf14-230589397922'
    let chatroom_ID:number = genNum(500000000000000000, 699999999999999999) + 1000000000000000000
    //Look up how to generate Unique codes
    if(createdChatrooms>6)
    {
        console.log("The chatroom creation per user is full.")
        console.log("I cant create anymore chatrooms because im too full")
    }
    else
    {
        let chatroom_id = uuid.v4()
        let outData:object = {
        "chatType":"CHATROOM",//This makes sense if I want to add any future special rooms
        "productID":chatroom_ID,
        "chatroomName":chatroomName,
        "chatroom_ID":String(chatroom_id),
        "userList":userList,
        "userLimit":userLimit,
        "dateCreated":getCurrentDate(),
        //Not sure if we're gonna need Messages: "messages":[],
        "fileName":String(chatroom_id)+".txt"//We're going to add this in the Lambda Function to see If this file exists
    };
    let fetchReq = {
        method:"POST",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(outData)
    }
    try
    {
        //Fetch the data from the server
        let req = await fetch(link,fetchReq)
        //Convert it into Json() form
        let fetchData = await req.json()
        console.log(fetchData);
        return true;
    }
    catch(error)
    {
        console.log("Error detected:",error);
        return false;
    }}
    return true

}
export async function getChatroom(chatroom_ID:number): Promise<boolean>
{
    let link:string = "https://dk9j000yia.execute-api.us-east-2.amazonaws.com/prod/chatroom" 
    return true
}

//chatroom_settings:{chatroomName,users:{userID,dateJoined,chatStatus}, userLimit, dateCreated, canEnableGroupCall,listOfMessages}
export async function createEvent(eventType:string,eventTitle:string,description:string,isActive:boolean,
    maxCapacity:number,tags:string[],inPerson:boolean,startTime:Date,endTime:Date,listOfUsers:string[],
hostID:number[], eventCount:number,expectedUsers:number): Promise<boolean>
{   //District number is defined in the front
    let event_ID = genNum(700000000000000000,899999999999999999) + 1000000000000000000;
    let link:string = "https://dk9j000yia.execute-api.us-east-2.amazonaws.com/prod/events"
    let uuidv5:string = '1f6b32ef-25d9-40e0-bf14-230589397922'
    let allocated_time = 7;//7 - 9Days for regular accounts and 14 - 21 for clubs
    //Check time between startTime/endTime
    let validEvent = true
    //If this is greater than a week, or the allocated amount of time
    let outMessage = {
        "statusCode":400,
        "body":""
    }
    /*
    if(getDuration(startTime,endTime,"days") > allocated_time && eventType!="CLUB_EVENT")
    {
        
    }*/
    if(hostID.length > 3)
    {
        //Allow multi user host support but only up to 2.
        //ClubEvents can have a larger amount. Only large amounts of users who demand a need for more hosts can see in a future update.
        validEvent = false;
        outMessage["body"] = "Too many hosts"
        
    }
    /*
    if(eventCount < 4)
    {
        validEvent = false
    }
    else
    {
        return false;
    }
        */
        //Don't allow users to post if its past this point
    const outData = {
        "eventType":eventType,
        "productID":event_ID,
        "eventTitle":eventTitle,
        "desc":description,
        "startTime":startTime,
        "endTime":endTime,
        "eventID":uuid.v4(),
        "isActive":isActive,
        "maxCapacity":maxCapacity, //We can change this to -1 for infinite amount of people
        "tags":tags,
        "inPerson":inPerson,
        "listOfUsers":listOfUsers, //list of userIDs
        "hostID":hostID,  //This should be the userID's
        "eventCount":eventCount+1,//Maybe we can cut this out of necessary?
        "expectedUsers":expectedUsers //This is a number of expected users that are going to show up to the event
    };
    let fetchReq = {
        method:"POST",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(outData)
    };
    try
    {
        const req = await fetch(link,fetchReq);
        let fetchedData = await req.json();
        console.log(fetchedData);
        return true
    }
    catch(error)
    {
        console.log("Error detected:",error)
        return false;
    }
    //Again this is only temporary since Env variables dont work
    
}

//Connects the user to the server
export function connectServer(userID:string):WebSocket
{
    let link:string = `wss://dzbebozzb9.execute-api.us-east-2.amazonaws.com/production?productID=${userID}&timeJoined=${getCurrentDate()}`;
    console.log(link)
    const socket = new WebSocket(link);
    socket.onopen = () => {
        console.log("You have successfully connected with the server")
    }
    socket.onmessage = (event) => {
        console.log("Message has been sent:",event)
    }
    socket.onerror = (e) => {
        console.log("Error Detected: "+JSON.stringify(e))
    }
    socket.onclose = (e) => {
        console.log("Closed server")
    }

    //if(socket.bufferedAmount() ) If this amount exceeds 32KB Then say you've exceeded Limit.
    //Constantly get Char count when user is done typing when exceeding around the limit of 32kB
    //if the user is not connected -> Route out of the server like back to homescreen but gets +1 saved message if user was typing
    //Ready State = Constants in the user's internet status
    //0 = Socket Just created + Connection not yet open
    //1 = Socket Open + Ready to Communicate
    //2 = Connection in Closing Proccess
    //3 = Connection closed/Couldnt be opened
    
   return socket;
}
export async function sendMessage(server:(WebSocket|null),message:string, clientID:string, receiverID:string): Promise<Object>
{
    //We could do receiverID? or chatroomID? or count it both as the same thing
    const maxCapacity = 3200;
    //Min(of a Max capacity) of a write is 1KB. 
    //Basically, anything billed as < 1KB counts as 1kB
    //Do like sendChatroom | sendPrivate
    //sendMethod:str
    //Type: Union  "sendChatroom"|"sendPrivate"
    //sendChatroom should cpature everyone in the chatroom at that time + active and send
    let messageContent = {"clientID":clientID,"receiverID":receiverID,"message":message,"timeSent":getCurrentDate()}
    if(server==null)
    {
        return 0;
    }
    //Message has Threshold limit of 16kb
    if(new Blob([message]).size < maxCapacity)
    {
        try
        {
            server.send(JSON.stringify({"action":"sendPrivate","message":messageContent}));
            return{
                "statusCode":200,
                "Message":"MessageSent"
            };
        }
        catch(e)
        {
            return{
                "statusCode":404,
                "Message":`Message to ${receiverID}\n Error detected \n`+e
            };
        }
        
    }
    else
    {
        return{
            "statusCode":404,
            "Message":"Message exceeded max capacity"
        };
    }
}
/*
export function updateSettings(settingsID,dailyLimit,loadingScreenSettings)
{  
    // 
    //Create ID as UUID because of Storage safety. Bytes are cool but not reliable
    //
    outData = {
        "Type":"USER",
        "productID":productID,
        "user":user,
        "isAuth":isAuth,
        "userID":userID,
        "listOfFriends":friendList,
        "tags":tagList,
        "chatroomList":chatList}
    return outData
}

export function deleteUser(userID,userName)
{
    let fetch_req = {
        
    }
    //fetch()

}*/
function genNum(min:number,max:number):number
{
    return Math.floor(Math.random() * (max - min)) + min;
}
function getCurrentDate():string
{
    let createDate = new Date();
    return String(createDate.getMonth()+1) +"/"+ String(createDate.getDate())+"/"+ String(createDate.getFullYear()) + " " 
    + createDate.getHours()+":"+createDate.getMinutes()
}
function getDuration(startTime:Date,endTime:Date,conversionType:string):number
{
    let conversion_table = {"days":8.64e7,"hours":3.6e6,"minutes":6.0e4}
    let timeBetween:number = (endTime.getTime() - startTime.getTime())
    if(!(conversionType in conversion_table))
        return -1;
    return timeBetween/conversion_table[conversionType as keyof typeof conversion_table]
}
//testFunction();
//testFunction3();
console.log(getCurrentDate())
//testFunction();
//console.log(getDuration(new Date(),new Date("April 14, 2025 18:24:00"),"minutes"))