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

export default function sign_up() {
  const [user, setUser] = useState('');
  const [tempID, setID] = useState('');
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
    </SafeAreaView>
  )
}
//<Button title = "sign_up_button" onPress = {() => signUp(user,["Empty Array"])}></Button>
const styles = StyleSheet.create({
  sign_up:{flexDirection:"row",backgroundColor:"green"}
})