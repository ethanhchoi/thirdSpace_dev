import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
//Method will verify no existing user with equal user + valid password
import {createUser,connectServer,sendMessage} from "@/server_AWS/controller_user"
async function signUp(user:string,tags:string[])
{
  console.log(user,tags);
  //console.log(createUser(user,tags));  
  //We'd connect the 2nd device through to the server
}

export default async function sign_up() {
  const [user, setUser] = useState('');
  const [tempID, setID] = useState('');
  let presetID = 1205263312473943000
  let startServer = await connectServer(presetID);
  return (
    <SafeAreaView>
      <View style = {styles.sign_up}>
        <Text>Username:</Text>
        <TextInput defaultValue = "" onChangeText={(user:string)=>{setUser(user)}}/>
      </View>
      <View style = {styles.sign_up}>
        <Text>TemporaryID:</Text>
        <TextInput defaultValue = "" onChangeText={(user:string)=>{setID(tempID)}}/>
      </View>
      <Button title = "sign_up_button" onPress = {() => signUp(user,["Empty Array"])}></Button>
      <Button title = "send_message_button" onPress = {() => sendMessage(startServer,"Hawkus tuahsa",String(presetID),"101")}></Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sign_up:{flexDirection:"row",backgroundColor:"green"}
})