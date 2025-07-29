import uuid from 'react-native-uuid'
//import * as env from "react-native-dotenv"
//import Config from "react-native-config"

async function testFunction2()
{
    //Works
    let tempVal = "E9F128BF";
    console.log("testfunction 2 ran");
    let update_map:Object = {"username":"Tengo","isAuth":false,"listOfFriends":["Gill","Chicken","dat"],"tags":["ReinDeerr","Hammy"],"chatroomList":["t45t54t45t"],"eventsCreated":1}
    let tempVal2 = await updateUser("USER",tempVal,update_map);
    console.log(tempVal2);
}
async function testFunction()
{
    //Works
    let output = await createUser("Skibidi",[]);
    console.log(output);
}
async function testFunction1()
{
    let output = await getUser("USER","72437CF2");
    console.log(output);
}
async function testFunction3()
{
    //Works
    //Goal: Test Create a chatroom and see what it looks like on a datasheet
    let results = await createChatroom("POINIYBOHOU",["Ethan43443"],5,5)
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
    //Worked
    //Deletes user
    let tempID = "e12e707e-6771-43a0-9c73-00d309017db4";
    let tempType = "USER";
    let result = deleteUser(tempType,tempID);
    console.log(result);
}
async function testFucntion7()
{
    //Test getting a chatroom
    let tempID = "486EBE91";
    let tempType = "CHATROOM";
    let result = getChatroom(tempType,tempID);
    console.log(result);
}
async function testFunction8()
{
    //Test getting a chatroom
    let tempID = "EFBAA756";
    let tempType = "CHATROOM";
    let result = deleteChatroom(tempType,tempID);
    console.log("Result");console.log(result);
}
async function testFunction4()
{
    let endDate:Date = new Date("April 15, 2025 10:24:00"); 
    let startDate:Date = new Date("April 14, 2025 18:24:00");
    //Goal: Test Create an event and see what it looks like on a datasheet
    let results = await createEvent("EVENT","werw","WERWERSDF in the ass",false,20,["Running","Gooning","Relaxing","Computer Science"],
        startDate,endDate,["Bombordino werw","Tim Cheese","John Pork","The Lion"],["38347294"],0,10,false)
    console.log(results)
}
//Gets an event
async function testFunction9()
{
    let tempID = "D84A87B20C";
    let tempType = "EVENT";
    let result = getEvent(tempType,tempID);
    console.log("Result:");console.log(result);
}
//Deletes an event
async function testFunction10()
{
    let tempID = "6f90f4b2ff";
    let tempType = "EVENT";
    let result = deleteEvent(tempType,tempID);
    console.log("Result:");console.log(result);
}
async function testFunction11()
{
    //Goal: Update a chatroom to match it's parameters it wants to change. 
    let tempID = "945582DA";
    let tempType = "CHATROOM";
    let userID = "";
    let update_map:Object = {"chatroomName":"BallsStickyWoot","userLimit":6}
    let result = updateChatroom(tempType,tempID,userID,update_map);
    console.log("result\n",result);
}
async function testFunction12()
{
    //Goal: Allow a user to join a chatroom and make sure the chatroom's limits aren't too big
    let tempID = "945582DA";
    let tempType = "CHATROOM";
    let userID = "EOWJFNW";
    let userStatus = 'JOIN'
    let result = attendChatroom(tempType,tempID,userID,userStatus);
    console.log("result\n",result);
}
async function testFunction13()
{
    //Goal: Allow a user to join an event and make sure the event's limits aren't too big
    let eventID = "E8F36A77";
    let eventType = "EVENT"
    let userID = "OWJENRFIW"
    let userStatus = 'JOIN'
    let result = attendEvent(eventType,eventID,userID,userStatus);
    console.log("result",result);
    //Next time we need to enforce Public/Private? But that doesn't make sense why would we do public vs private
}
async function testFunction14()
{
    //Goal: Allow a user to leave a chatroom
    let eventID = "FBFF94E3";
    let chatType = "CHATROOM"
    let userID = "PENIS"
    let userStatus = 'LEAVE'
    attendChatroom(chatType,eventID,userID,userStatus)
    
}
async function testFunction15()
{
    //Goal: Allow a user to leave an event
    let eventID = "E8F36A77";
    let eventType = "EVENT"
    let userID = "TESTEST"
    let userStatus = 'LEAVE'
    let result = attendEvent(eventType,eventID,userID,userStatus);
    console.log("result",result);
    
}
async function testFunction16()
{
    //Goal: Allow functional messaging between one user to another
    
}
async function testFunction17()
{
    //Goal: Updating an Event
    let result = updateEvent("EVENT","E8F36A77",{"endTime":new Date().toString(),"eventTitle":"Chicken Tenders"});
    console.log("result\n",result);
}
//Creating types
const maxCapacity = 3200;
type userSettings =
{
    "productID":number,
    "blockedPeopleList":Set<String>,
    "loadingScreenSettings":number[],
}
//I can debate on How the loading screen settings even work

type message = 
{
    messageContent:String,
    timeSent:Date,
    clientID:number,
    receiverID:number
}
type User = {
    userType:string,
    productID:string,
    username:string,
    chatroomList?:string[],
    listOfFriends?:string[],
    tags?:string[],
    eventsCreated?:number,
    chatroomsCreated?:number,
    dateCreated?:Date,//<- Check if this works and if it's the right date type
}
type requestType = {
    method:"POST"|"DELETE"|"PATCH"|"GET"|"PUT",
    headers:{'Content-Type':'application/json'},
    body?:string
}
type Chatroom = {
    chatType:string,
    productID:string,
    chatroomName:string,
    userList:string[],
    userLimit:number,
    dateCreated:string
}
type Event = {
    eventType:string,
    productID:string,
    eventTitle:string,
    desc:string,
    startTime:Date,
    endTime:Date,
    isActive:boolean,
    maxCapacity:string,
    tags:string[],
    listOfUsers:string[],
    hostID:string
}
type Result = {
    status:number,
    data:object
};
var output:Result;
var request:requestType = {method:"GET",headers:{'Content-Type':'application/json'}};
var searchUser:User;

//USER Section
export async function createUser(username:string,tagList:string[]): Promise<Object> {  
    //Create ID as UUID because of Storage safety. Bytes are cool but not reliable
    //This link will also be hidden and will have permissions set up 
    let link = "https://dk9j000yia.execute-api.us-east-2.amazonaws.com/prod/user"
    //Takes a chunk of the UUID gneeration so Its completely random
    let generatedID = String(uuid.v4()).split("-")[4].slice(0,8).toUpperCase()
    let statusCode = 200;
    const outData:object = {
        "userType":"USER",
        "productID":generatedID,
        "username":username,
        "listOfFriends":[],
        "tags":tagList,
        "chatroomList":[],
        "dateCreated":getCurrentDate(),
        "eventsCreated":0,
        "chatroomsCreated":0,
        "connectionID":"offline"
    }
    //Sets up the Fetch Request
    request.method = "POST"
    request.body = JSON.stringify(outData);
    //Tries to Fetch towards the server
    let output = "";
    try
    {
        let req = await fetch(link,request);
        output = await req.json();
        console.log(output)
    }
    catch(error)
    {
        //This indicates that there was a problem with the code being fetched
        console.log("Error detected:",error);
        statusCode = 404;
    }
    return statusCode;
}
export async function getUser(userType:string,userID:string): Promise<Object>
{
    //This link will hopefully be hidden when we launch
   const getUserLink = `https://dk9j000yia.execute-api.us-east-2.amazonaws.com/prod/user?userType=${userType}&productID=${userID}`;
   //Initialize the data to send to the server
   request.method = "GET";
   let output = {}
   try
   {
      let fetchRes = await fetch(getUserLink,request)
      let userData = await fetchRes.json();
      output = userData;
      toUser(userData)
   }
   catch(error)
   {
      console.log("Error detected",error)
      return output
   }
   console.log(output)
   return output
}
function toUser(userData:any)
{
    //See if this is actually 'safe' enough to do we assume it's any
    searchUser.username=String(userData["username"]);
    searchUser.userType=String(userData["userType"]);
    searchUser.productID=String(userData["productID"]);
    searchUser.tags=userData['tags'];
    searchUser.listOfFriends=userData['listOfFriends'];
    searchUser.chatroomsCreated = userData['chatroomsCreated'];
    searchUser.dateCreated = userData['dateCreated'];
    searchUser.eventsCreated = userData['eventsCreated'];
}
export async function deleteUser(userType:string,productID:string): Promise<Object>
{
   const getUserLink = `https://dk9j000yia.execute-api.us-east-2.amazonaws.com/prod/user`;///${productID}`;
   let content:object = {
    "userType":userType,//"localUserType":
    "productID":productID//"localStorageIDNumber"
   }
   let output = "";
   //You know how Apps queue for deletion in 14 days or so
   //We could try pulling that off in the future
   request.method="DELETE"
   request.body = JSON.stringify(content);
   try
   {
    let fetchRes = await fetch(getUserLink,request);
    let userData = await fetchRes.json();
    output = userData;
   }
   catch(error)
   {
    console.log(error)
   }
   console.log(output);
   return output;
}
export async function updateUser(userType:string,productID:string,userInfo:Object)
{  
    //Add userType when I come back
    //Try to make all of these paramaters optional
    //Create ID as UUID because of Storage safety. Bytes are cool but not reliable
    //user:string,isAuth:boolean,friendList:string[],tagList:string[],chatList:string[]
    const getUserLink = "https://dk9j000yia.execute-api.us-east-2.amazonaws.com/prod/user";

    let outData:object = {
        "userType":userType,
        "productID":productID,
        "userInfo":userInfo
    }
    request.method="PATCH";
    request.body = JSON.stringify(outData);
    try
    {
        let getData = await fetch(getUserLink,request);
        let fetchedData = await getData.json();
        console.log("fetchedData",fetchedData);
        return fetchedData;
    }
    catch(error)
    {
        console.log("Error detected",error);
        //statusCode=404;
    }
    
    //Investigate what this is
}
export async function setSettings(): Promise<true>
{
    //I would like this to be able to toggle/update any setting that is changed
    return true;
}

export async function createChatroom(chatroomName:string,userList:string[],userLimit:number,createdChatrooms:number): Promise<boolean>
{
    //I'll private this link using local env(not without TS)
    let link:string = "https://dk9j000yia.execute-api.us-east-2.amazonaws.com/prod/chatroom"
    let setUserLimit:number = 6;
    if(createdChatrooms>setUserLimit)
    {
        //This indicates too many people per room max = 6
        console.log("The chatroom creation per user is full.")
        return false;
    }
    else
    {
        let gen_id = uuid.v4()
        let outData:object = {
        "chatType":"CHATROOM",//This makes sense if I want to add any future special rooms
        "productID":String(gen_id.slice(1,5) + gen_id.slice(19,23)).toUpperCase(),
        "chatroomName":chatroomName,
        "userList":userList,
        "userLimit":userLimit,
        "dateCreated":getCurrentDate()
        }
        let fetchReq = 
        {
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(outData)
        }
        request.method="POST";
        request.body=JSON.stringify(outData);
        try
        {
            //Fetch the data from the server
            let req = await fetch(link,fetchReq);
            let fetchData = await req.json()
            console.log(fetchData);
        }
        catch(error)
        {
            console.log("Error detected:",error);
            return false;
        }
        return true
    }
}
export async function getChatroom(chatType:string,chatroom_ID:string): Promise<boolean>
{
    let link:string = `https://dk9j000yia.execute-api.us-east-2.amazonaws.com/prod/chatroom?chatType=${chatType}&productID=${chatroom_ID}`;
    request.method="GET";
    try
    {
        let req = await fetch(link,request);
        let output = await req.json();
        console.log(output);
    }
    catch(e)
    {
        console.log(e);
    }
    return true
}
export async function attendChatroom(chatType:string,chatroom_ID:string,userID:string,chatStatus:string): Promise<boolean>
{
    let link:string = "https://dk9j000yia.execute-api.us-east-2.amazonaws.com/prod/chatroom";
    const body = {
        "chatType":chatType,
        "productID":chatroom_ID,
        "userID":userID,//This should be the local UserID
        "chatStatus":chatStatus
    }
    /*
    if(localAmountOfRoomsJoined > chatroomLimit)
    {
        return "Exceeded the chatroom number limit"
    }*/
    request.method="PATCH";
    request.body=JSON.stringify(body);
    try
    {
        let req = await fetch(link,request);
        let output = await req.json();
        console.log(output);
    }
    catch(e)
    {
        console.log(e);
    }
    return true;
}
export async function deleteChatroom(chatType:string,chatroom_ID:string): Promise<boolean>
{
    //chatType = Chatroom type
    //chatroom_ID = The chatroom we want to delete
    //The filename can serve as a confirmation that only the host will have in order to delete the room
    let link:string = "https://dk9j000yia.execute-api.us-east-2.amazonaws.com/prod/chatroom";
    const body = {
        "chatType":chatType,
        "productID":chatroom_ID
    }
    request.method="DELETE";
    request.body=JSON.stringify(body);
    try
    {
        let req = await fetch(link,request);
        let output = await req.json();
        console.log(output);
    }
    catch(e)
    {
        console.log(e);
    }
    return true;
}
export async function updateChatroom(chatType:string,chatroom_ID:string,userID:string,update_map:Object)
{
    //If userID is leader of the chatroom / has permission to do so
    //Iniitate the body
    let output = {"status":200,"body":""};
    //Check if update_map has content
    if(Object.keys(update_map).length >= 0)
    {
        let link = "https://dk9j000yia.execute-api.us-east-2.amazonaws.com/prod/chatroom";;
        let body = {
            "chatType":chatType,
            "productID":chatroom_ID,
            "update_map":update_map
        }
        request.method="PATCH";
        request.body=JSON.stringify(body);
        //Does this user have permission to edit and update the chatroom
        //if userID == chatroom_ID.host() -> then let the code run
        try
        {
            let req = await fetch(link,request);
            let output = await req.json();
            console.log(output);
        }
        catch(e)
        {
            console.log("Error detected",e);
        }
    }
    else
    {
        output["status"] = 456;//Squid Game reference
        output["body"] = "Did not pass anything into the update_method";

    }
}
//chatroom_settings:{chatroomName,users:{userID,dateJoined,chatStatus}, userLimit, dateCreated, canEnableGroupCall,listOfMessages}
export async function createEvent(eventType:string,eventTitle:string,description:string,isActive:boolean,
    maxCapacity:number,tags:string[],startTime:Date,endTime:Date,listOfUsers:string[],
hostID:string[], eventCount:number): Promise<boolean>
{   //District number is defined in the front
    let userLimit = {"USER":7,"CLUB":14};
    let link:string = "https://dk9j000yia.execute-api.us-east-2.amazonaws.com/prod/events"
    let allocated_time = 7;//7 - 9Days for regular accounts and 14 - 21 for clubs
    /*
    if(userLimit[String(eventType)]) //Checks duration < 7. {USER->7,CLUB->14}
    {

    }
    */
    let eventID = String(uuid.v4()).toUpperCase();
    const outData = {
        "eventType":eventType,
        "productID":eventID.slice(2,8) + eventID.slice(9,11),//hidden values generated of an ID
        "eventTitle":eventTitle,//Title of Event
        "desc":description,
        "startTime":startTime.toString(),
        "endTime":endTime.toString(),
        "isActive":isActive,//the event is considered to be active or cancelled?
        "maxCapacity":maxCapacity,//The max capacity of an event
        "tags":tags,
        "listOfUsers":listOfUsers, //list of userIDs
        "hostID":hostID //This should be the userID's
    };
    request.method="POST";
    request.body=JSON.stringify(outData);
    try
    {
        const req = await fetch(link,request);
        let fetchedData = await req.json();
        console.log(fetchedData);
        return true
    }
    catch(error)
    {
        console.log("Error detected:",error)
        return false;
    }
}
export async function getEvent(eventType:string,eventID:string)
{
    let link:string = `https://dk9j000yia.execute-api.us-east-2.amazonaws.com/prod/events?eventType=${eventType}&productID=${eventID}`
    request.method="GET";
    try
    {
        const req = await fetch(link,request);
        let fetchedData = await req.json();
        console.log("Event Content");
        console.log(fetchedData);
        return true;
    }
    catch(error)
    {
        console.log("Error detected:",error)
        return false;
    }
}
export async function deleteEvent(eventType:string,eventID:string)
{
    let link:string = `https://dk9j000yia.execute-api.us-east-2.amazonaws.com/prod/events`
    let body = {
        "eventType":eventType,
        "productID":eventID
    }
    request.body = JSON.stringify(body);
    request.method = "DELETE";
    try
    {
        const req = await fetch(link,request);
        let fetchedData = await req.json();
        console.log(fetchedData);
        return true;
    }
    catch(error)
    {
        console.log("Error detected",error);
        return false;
    }
}
export async function updateEvent(eventType:string,eventID:string,eventInfo:Object)
{
    let link:string = `https://dk9j000yia.execute-api.us-east-2.amazonaws.com/prod/events`;
    let body = {
        'eventType':eventType,
        'productID':eventID,
        'update_list':eventInfo
    }
    request.method="PUT";
    request.body=JSON.stringify(body)
    try
    {
        //We try fetching content
        const req = await fetch(link,request);
        let fetchedData = await req.json();
        console.log(fetchedData);
        return true;
    }
    catch(error)
    {
        console.log(error);
    }
}
export async function attendEvent(eventType:string,eventID:string,userID:string,eventStatus:string)
{
    //eventType = type of Event
    let link:string = `https://dk9j000yia.execute-api.us-east-2.amazonaws.com/prod/events`;
    let body = {
        "eventType":eventType,
        "productID":eventID,
        "userID":userID,
        "eventStatus":eventStatus
    }
    request.method="PATCH";
    request.body=JSON.stringify(body)
    try
    {
        let req = await fetch(link,request);
        let result = await req.json();
        console.log(result);
    }
    catch(error)
    {
        console.log("Error detected",error);
        return false;
    }
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
function genNum(min:number,max:number):number
{
    return Math.floor(Math.random() * (max - min)) + min;
}
function getCurrentDate():string
{
    let createDate = new Date();
    return createDate.toLocaleString("en-US");//String(createDate.getMonth()+1) +"/"+ String(createDate.getDate())+"/"+ String(createDate.getFullYear()) + " " 
    //+ createDate.getHours()+":"+createDate.getMinutes()
}
//Timer variable
function getDuration(startTime:Date,endTime:Date,conversionType:string):number
{
    let conversion_table = {"days":8.64e7,"hours":3.6e6,"minutes":6.0e4}
    let timeBetween:number = (endTime.getTime() - startTime.getTime())
    if(!(conversionType in conversion_table))
        return -1;
    return timeBetween/conversion_table[conversionType as keyof typeof conversion_table]
}
console.log(getCurrentDate())
//testFunction15();
testFunction14();
//testFunction4();
//testFunction2();
//console.log(getDuration(new Date(),new Date("April 14, 2025 18:24:00"),"minutes"))