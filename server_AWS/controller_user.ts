//CreateUSer(With Inputs)
//Delte User(with inputs)
//Update user(with Inputs)
//GetUser(inputs)
import {v5,validate} from 'uuid'
//import * as env from "react-native-dotenv"
//import dotenv from 'dotenv';
//import Config from "react-native-config"
//import * from 'react-native-dotenv' 

//dotenv.config()
async function testFunctions2()
{
    let tempVal = 1097895652171076482;
    console.log("testfunction 2 ran")
    //let tempVal2 = await updateUser(tempVal,"Ben",true,["Balls","Men","Green"],["SFDKJSEFJEWRE","WEFJEWFEJEWR","EWFINEWF"],[])
    //console.log(tempVal2)
}
async function testFunction()
{
    let output = await createUser("SigmaBoy",[]);
    console.log(output);
}
async function testFunction3()
{
    //Goal: Test Create a chatroom and see what it looks like on a datasheet
    let results = await createChatroom("TestChatters",[],5,new Date())
    console.log(results)
}

export async function createUser(user:string,tagList:string[]): Promise<boolean> {  
    let generatedID = genNum(1000000000000000,10999999999999999);
    //Create ID as UUID because of Storage safety. Bytes are cool but not reliable
    //v5(genID_nameSpace,hidden_UUIDV5) 
    //Can create a UUID Based on a scrabble value
    //Encryping a password to send to AWS
    //Can consider sync contacts if needed/wanted
    let link = "https://dk9j000yia.execute-api.us-east-2.amazonaws.com/prod/user"
    let uuidv5 = '1f6b32ef-25d9-40e0-bf14-230589397922'
    const outData:object = {
        "userType":"USER",
        "productID":generatedID,
        "user":user,
        "isAuth":false,
        "userID":v5(generatedID.toString(),uuidv5),
        "listOfFriends":[],
        "tags":tagList,
        "chatroomList":[]}
    let fetchReq:object = {
        method:"POST",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(outData)
    }
    try
    {
        let req = await fetch(link,fetchReq);
        let fetchData = await req.json();
        console.log(fetchData);
    }
    catch(error)
    {
        console.log("Error detected:",error)
    }
    return true;
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
export async function createChatroom(chatroomName:string,userList:string[],userLimit:number,dateCreated:Date): Promise<boolean>
{
    let link:string = "https://dk9j000yia.execute-api.us-east-2.amazonaws.com/prod/user"
    let uuidv5:string = '1f6b32ef-25d9-40e0-bf14-230589397922'
    let chatroom_ID:number = genNum(1200000000000000000,1299999999999999999)
    let outData:object = {
        "userType":"USER",
        "productID":chatroom_ID,
        "chatroomName":chatroomName,
        "chatroom_ID":v5(String(chatroom_ID),uuidv5),
        "userList":userList,
        "userLimit":userLimit,
        "dateCreated":dateCreated,
        //"fileName":"" We're going to add this in the Lambda Function to see If this file exists
    };
    let fetchReq = {
        method:"POST",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(outData)
    }
    try
    {
        const req = await fetch(link,fetchReq)
        let fetchData = req.json();
        console.log(fetchData);
        return true;
    }
    catch(error)
    {
        console.log("Error detected:",error);
        return false;
    }

}
//chatroom_settings:{chatroomName,users:{userID,dateJoined,chatStatus}, userLimit, dateCreated, canEnableGroupCall,listOfMessages}
export async function createEvent(eventTitle:string,description:string,date:TimeRanges,isActive:boolean,
    maxCapacity:number,tags:string[],inPerson:boolean,listOfUsers:string[]): Promise<boolean>
{
    let event_ID = genNum(1500000000000000000,1549999999999999999)
    const outData = {
        "Type":"EVENT",
        "productID":event_ID,
        "eventTitle":eventTitle,
        "desc":description,
        "date":date,
        "eventID":v5(String(event_ID),process.env.NAMESPACE!),
        "isActive":isActive,
        "maxCapacity":maxCapacity,
        "tags":tags,
        "inPerson":inPerson,
        "listOfUsers":listOfUsers
    }
    let fetchReq = {
        method:"POST",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(outData)
    };
    try
    {
        const req = await fetch(process.env.REQ_LINK!,fetchReq);
        console.log(req);
        return true
    }
    catch(error)
    {
        console.log("Error detected:",error)
        return false;
    }
}
//All Get User Functions
export async function getAllUsers()
{
   const getUserLink = "https://dk9j000yia.execute-api.us-east-2.amazonaws.com/prod/user";
   let fetchBody = {
    method:"GET",
    headers:{'Content-Type': 'application/json'}
   }
   let fetchRes = await fetch(getUserLink,fetchBody)
   let userData = await fetchRes.json();
   return userData["information"];
}
export async function getSpecificUser(productID:number)
{
   const getUserLink = "https://dk9j000yia.execute-api.us-east-2.amazonaws.com/prod/user/"+String(productID);
   console.log(getUserLink)
   let fetchBody = {
    method:"GET",
    headers:{'Content-Type': 'application/json'}
   }
   let fetchRes = await fetch(getUserLink,fetchBody)
   let userData = await fetchRes.json();
   return userData;
}
export async function getSettings()
{
    
}
function genNum(min:number,max:number)
{
    return Math.floor(Math.random() * (max - min)) + min;
}
//All Get Chatroom function
//All Get Messages Function
export async function getChatroom()
{
    
}
//Server Management: 
export async function connectServer()
{
    const socket = new WebSocket(process.env.SOCKET_LINK!);
    socket.onopen = () => {

    }
    socket.onmessage = () => {

    }
    socket.onerror = () => {

    }
    socket.onclose = () => {

    }
    socket.addEventListener("open",(event)=>{
        socket.send("User is Active")
    })
    //if(socket.bufferedAmount() ) If this amount exceeds 32KB Then say you've exceeded Limit.
    //Constantly get Char count when user is done typing when exceeding around the limit of 32kB
    //
    //if the user is not connected -> Route out of the server like back to homescreen but gets +1 saved message if user was typing
    //Ready State = Constants in the user's internet status
    //0 = Socket Just created + Connection not yet open
    //1 = Socket Open + Ready to Communicate
    //2 = Connection in Closing Proccess
    //3 = Connection closed/Couldnt be opened

    if(socket.readyState)
    {
        
    }
}
export async function sendMessage(server:WebSocket,message:string)
{
    const maxCapacity = 32000;
    if(new Blob([message]).size > maxCapacity)
    {

    }
}
//Create a 
//CreateUSer(With Inputs)
//Delte User(with inputs)
//Update user(with Inputs)
//GetUser(inputs)

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

testFunction3();