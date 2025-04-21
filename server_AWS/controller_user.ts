//CreateUSer(With Inputs)
//Delte User(with inputs)
//Update user(with Inputs)
//GetUser(inputs)
import { connect } from 'http2';
import {v5,v4,validate} from 'uuid'
//import * as env from "react-native-dotenv"
//import dotenv from 'dotenv';
//import Config from "react-native-config"
//import * from 'react-native-dotenv' 

//dotenv.config()
import WebSocket from "@react-native-community/websocket";
async function testFunction2()
{
    let tempVal = 1097895652171076482;
    console.log("testfunction 2 ran")
    let tempVal2 = await updateUser(tempVal,"Ben",true,["Red","Blue","Green"],["SFDKJSEFJEWRE","WEFJEWFEJEWR","EWFINEWF"],[])
    console.log(tempVal2)
}
async function testFunction()
{
    let output = await createUser("TestGoonerChatter",[]);
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
    let server = await connectServer(Number(hostID));
    let tempMessage = "La-la-la-lava, ch-ch-ch-chicken\nSteve's Lava Chicken, yeah, it's tasty as hell\nOoh, mamacita, now you're ringin' the bell\nCrispy and juicy, now you're havin' a snack\nOoh, super spicy, it's a lava attack. Ding!"
    await sleep(5000);
    console.log("Waiting")
    let results = await sendMessage(server,tempMessage,hostID,testerID);
    console.log(results)
}
async function testFunction6()
{
    //Goal: Test the user connection on a server
    //connectServer()
    //console.log(results)
}

//USER Section
export async function createUser(username:string,tagList:string[]): Promise<number> {  
    //Create ID as UUID because of Storage safety. Bytes are cool but not reliable
    let generatedID = genNum(0,299999999999999999) + 1000000000000000000;
    //let generatedID = 101;//Tester PreSet Value
    let link = "https://dk9j000yia.execute-api.us-east-2.amazonaws.com/prod/user"
    let uuidv5 = '1f6b32ef-25d9-40e0-bf14-230589397922'
    let statusCode = 200;
    const outData:object = {
        "userType":"USER",
        "productID":generatedID,
        "username":username,
        "isAuth":false,
        "userID":v5(generatedID.toString(),uuidv5),
        "listOfFriends":[],
        "tags":tagList,
        "chatroomList":[],
        "dateCreated":getCurrentDate(),
        "eventsCreated":0,
        "chatroomsCreated":0,
        "connectionID":""
    }
    let fetchReq:object = {
        method:"POST",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(outData)
    }
    //Attempts to Fetch the Server for new data
    try
    {
        let req = await fetch(link,fetchReq);
        let fetchData = await req.json();
        console.log(fetchData);
    }
    catch(error)
    {
        //This indicates that there was a problem with the code being fetched
        console.log("Error detected:",error);
        statusCode = 404;
    }
    return statusCode;
}
export async function getUser(userID:number)
{
   const getUserLink = "https://dk9j000yia.execute-api.us-east-2.amazonaws.com/prod/user/";
   let data = {
    "userID": userID
   };
   console.log(getUserLink)
   let fetchBody = {
    method:"GET",
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify(data)
   }
   let fetchRes = await fetch(getUserLink,fetchBody)
   let userData = await fetchRes.json();
   return userData;
}
export async function deleteUser(): Promise<Object>
{
   //const getUserLink = "https://dk9j000yia.execute-api.us-east-2.amazonaws.com/prod/user/"+String(productID);
   let contentBody = {
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
    // 
    //Create ID as UUID because of Storage safety. Bytes are cool but not reliable
    //
    const getUserLink = "https://dk9j000yia.execute-api.us-east-2.amazonaws.com/prod/user";
    let outData = {
        "productID":productID,
        "user":user,
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
export async function createSettings(userID:number,loadingScreenSettings:string[]): Promise<true>
{
    let generatedID = userID + 100000000000000000
    //We're just shifting the ID settings by 1
    const outData = {
        "Type":"SETTINGS",
        "productID":generatedID,
        "blockedPeopleList":new Set(),
        "loadingScreenSettings":loadingScreenSettings};
    let fetchReq = {
        method:"POST",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(outData)
    }
    try
    {
        let req = await fetch(process.env.REQ_LINK!,fetchReq);
        let fetchData = req.json();
        console.log(fetchData);
    }
    catch(error)
    {
        console.log("Error detected:",error)
    }
    return true;
    //return req.status
}
export async function getSettings()
{
    
}

export async function createChatroom(chatroomName:string,userList:string[],userLimit:number,createdChatrooms:number): Promise<boolean>
{
    let link:string = "https://dk9j000yia.execute-api.us-east-2.amazonaws.com/prod/chatroom"
    let uuidv5:string = '1f6b32ef-25d9-40e0-bf14-230589397922'
    let chatroom_ID:number = genNum(500000000000000000, 699999999999999999) + 1000000000000000000
    if(createdChatrooms>6)
    {
        console.log("The chatroom creation per user is full.")
        console.log("I cant create anymore chatrooms because im too full")
    }
    let outData:object = {
        "chatType":"CHATROOM",//This makes sense if I want to add any future special rooms
        "productID":chatroom_ID,
        "chatroomName":chatroomName,
        "chatroom_ID":v5(String(chatroom_ID),uuidv5),//Uses a concealed UUIDv5 that will be in the Environment Variables
        "userList":userList,
        "userLimit":userLimit,
        "dateCreated":getCurrentDate(),
        //Not sure if we're gonna need Messages: "messages":[],
        "fileName":v4()//We're going to add this in the Lambda Function to see If this file exists
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
    }

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
        "eventID":v5(String(event_ID),uuidv5),
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

//Server Management: 
export async function connectServer(temporaryID:number): Promise<WebSocket>
{
    let link:string = `wss://dzbebozzb9.execute-api.us-east-2.amazonaws.com/production?productID=${temporaryID}&timeJoined=${getCurrentDate()}`;
    console.log(link)
    const socket = new WebSocket(link);
    socket.onopen = () => {
        console.log("You have successfully connected with the server")
    }
    socket.onmessage = (event) => {
        console.log("Message has been sent:",event)
    }
    socket.onerror = (e) => {
        console.log("Error Detected: "+e)
    }
    socket.onclose = (e) => {
        console.log("Closed server")
    }

    //if(socket.bufferedAmount() ) If this amount exceeds 32KB Then say you've exceeded Limit.
    //Constantly get Char count when user is done typing when exceeding around the limit of 32kB
    //
    //if the user is not connected -> Route out of the server like back to homescreen but gets +1 saved message if user was typing
    //Ready State = Constants in the user's internet status
    //0 = Socket Just created + Connection not yet open
    //1 = Socket Open + Ready to Communicate
    //2 = Connection in Closing Proccess
    //3 = Connection closed/Couldnt be opened

    /*if(socket.readyState)
    {
        
    }*/
   return socket;
}
export async function sendMessage(server:WebSocket,message:string, clientID:string, receiverID:string): Promise<Object>
{
    const maxCapacity = 16000;
    let messageContent = {"clientID":clientID,"receiverID":receiverID,"message":message,"timeSent":getCurrentDate()}
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
function genNum(min:number,max:number)
{
    return Math.floor(Math.random() * (max - min)) + min;
}
function getCurrentDate()
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
        return -1
    return timeBetween/conversion_table[conversionType as keyof typeof conversion_table]
}
//testFunction();
//testFunction3();
console.log(getCurrentDate())
//testFunction();
//connectServer();
testFunction5("1205263312473943000","101")
//console.log(getDuration(new Date(),new Date("April 14, 2025 18:24:00"),"minutes"))