import { Button, StyleSheet, Text, TextInput, View} from 'react-native'
import React, { useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {createUser,connectServer,sendMessage,deleteUser,getUser} from "@/server_AWS/controller_user"
import uuid from "react-native-uuid"
function getFromAPI()
{
  let API_LINK = "https://dk9j000yia.execute-api.us-east-2.amazonaws.com/prod/user";
  fetch(API_LINK).then((res)=>res.json().then((data)=>{console.log(data)}));
}
let presetID = String("e12e707e-6771-43a0-9c73-00d309017db4")//uuid.v4())
//Issue: When I disconnect/close Server, it doesn't immediately close the server.
//Issue: When I connect to the server, I get error. I think this is because it checks if the ID exists already in the update. That's not correct logic...
//This issue also makes it so that connectionID won't update when a user joins 
export default function demoBreakRoom()
{
    let [tempUser, setUser] = useState("");
    let [userGet, getUserFromServer] = useState("");
    let [startServer,setStartServer] = useState<WebSocket|null>(null)
    useEffect(() => {
        const server = connectServer(presetID);
        setStartServer(server);
    }, [presetID]);
    //So we're gonna assume its Null or WebSocket 
    return(
        <View>
            <Button title = "Test: Sign up"></Button>
            <Button title = "Test: Sign In"></Button>
            <Button title = "get_data_from_API_Gateway" onPress = {getFromAPI}></Button>
            <Button title = "send_message_button" onPress = {() => 
            {
                console.log("send_message_button_was_called",presetID)
                console.log(sendMessage(startServer,"Hawkus tuahsa",String(presetID),"101"))
            }}/>
            <TextInput onChangeText = {setUser} value = {tempUser}></TextInput>
            <Button title = "createUser" onPress = {() => {
                console.log("Create a user: ",tempUser)
                console.log(createUser(tempUser,[]))
            }}></Button>
            <TextInput onChangeText = {getUserFromServer} value = {userGet}></TextInput>
            <Button title = "getUser" onPress={() => {
                console.log("Got a user",userGet)
                console.log(getUser("USER",userGet))
            }}/>     

        </View>
    )
}
/*
let [deleteUser, setDeleteUser] = useState("");
<TextInput onChangeText = {setDeleteUser} value = {deleteUser}></TextInput>
            <Button title = "deleteUser" onPress = {() => {
                console.log("Create a user: ",deleteUser)
                console.log(deleteUser(deleteUser,[]))
            }}></Button>
*/