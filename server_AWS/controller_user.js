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
export async function createUser(user,tagList)//pass,tagList)
{  
    let generatedID = genNum(1000000000000000,10999999999999999)
    //Create ID as UUID because of Storage safety. Bytes are cool but not reliable
    //Encryping a password to send to AWS
    const outData = {
        "Type":"USER",
        "productID":generatedID,
        "user":user,
        "isAuth":false,
        "userID":v5(generatedID.toString(),process.env.UUIDV5),
        "listOfFriends":[],
        "tags":tagList,
        "chatroomList":[]}
    console.log("User:",user,"tagList:",tagList);
    let fetchReq = {
        method:"POST",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(outData)
    }
    try
    {
        let req = await fetch(process.env.REQ_LINK,fetchReq);
        let fetchData = await req.json();
        console.log(fetchData);
    }
    catch(error)
    {
        console.log("Error detected:",error)
    }
    return "Successfully ran data";
}
export async function createSettings(userID,dailyLimit,loadingScreenSettings)
{
    let generatedID = userID + 100000000000000000
    //We're just shifting the ID settings by 1
    const outData = {
        "Type":"SETTINGS",
        "productID":generatedID,
        "dailyLimit":dailyLimit,
        "blockedPeopleList":new Set(),
        "loadingScreenSettings":loadingScreenSettings};
    let fetchReq = {
        method:"POST",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(outData)
    }
    try
    {
        let req = await fetch(process.env.REQ_LINK,fetchReq);
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
//@terpmail.umd.edu
export async function createChatroom(chatroomName,userList,userLimit,dateCreated,canEnableGroupCall)
{
    let chatroom_ID = genNum(1200000000000000000,1299999999999999999)
    let outData = {
        "Type":"CHATROOM",
        "productID":chatroom_ID,
        "chatroomName":chatroomName,
        "chatroom_ID":v5(generatedID,process.env.NAMESPACE),
        "userList":userList,
        "userLimit":userLimit,
        "dateCreated":dateCreated,
        "enableCall":canEnableGroupCall,
        "listOfMessages":[]}
    let fetchReq = {
        method:"POST",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(outData)
    }
    try
    {
        const req = await fetch(process.env.REQ_LINK,fetchReq)
        console.log(req.status); 
    }
    catch(error)
    {
        console.log("Error detected:",error);
    }

}
//chatroom_settings:{chatroomName,users:{userID,dateJoined,chatStatus}, userLimit, dateCreated, canEnableGroupCall,listOfMessages}
export async function createEvent(eventTitle,description,date,isActive,maxCapacity,tags,inPerson,listOfUsers)
{
    let event_ID = genNum(1500000000000000000,1549999999999999999)
    const outData = {
        "Type":"CHATROOM",
        "productID":event_ID,
        "eventTitle":eventTitle,
        "desc":description,
        "date":date,
        "eventID":v5(event_ID,process.env.NAMESPACE),
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
        const req = await fetch(process.env.REQ_LINK,fetchReq);
        console.log(req)
    }
    catch(error)
    {
        console.log("Error detected:",error)
    }
    return outData;
}
export async function getUsers()
{
    console.log("called function getUsers")
    /*
    A single operation can retrieve up to 16 MB of data, which can contain as many as 100 items. 
    BatchGetItem returns a partial result if the response size limit is exceeded, the table’s provisioned throughput is exceeded, more than 1MB per partition is requested, or an internal processing failure occurs.
    If a partial result is returned, the operation returns a value for UnprocessedKeys. You can use this value to retry the operation starting with the next item to get.
    */
   const getUserLink = "https://dk9j000yia.execute-api.us-east-2.amazonaws.com/prod/user"
   let fetchBody = {
    method:"GET",
    headers:{'Content-Type': 'application/json'}
   }
   
   let fetchRes = await fetch(getUserLink,fetchBody)
   let userData = await fetchRes.json();
   
        //    .then(data=>{reqInfo = data});
   //This grabs the information from a list
   //console.log(reqInfo["information"][0])
   //const userData = await reqInfo["information"][0];
   //console.log(userData)
   return userData;
}
let retData = getUsers();
/*
getUsers().then(
    data => {
        console.log(data)
        retData = data});
*/
console.log(retData);
function genNum(min,max)
{
    return Math.floor(Math.random() * (max - min)) + min;
}

//Create a 
//CreateUSer(With Inputs)
//Delte User(with inputs)
//Update user(with Inputs)
//GetUser(inputs)

export function updateUser(productID,user,userID,isAuth,tagList,chatList)
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