import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from "axios"
//Method will verify no existing user with equal user + valid password
function verifySignUp(user:string,pass:string)
{
  let myIPAddress = "http://192.168.1.151:5000"
  let myIPAddress2 = "";
  console.log("User:",user+"\n"+"Pass:",pass);
  console.log("I have been clicked: I want to reach IP:",myIPAddress+"/users");
  axios.get(myIPAddress+"/users").then((res)=>{
    console.log(res.data);
  }).catch(
    (error)=>{console.log("Error detected:",error)}
  );
}

export default function sign_up() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  return (
    <SafeAreaView>
      <View style = {styles.sign_up}>
        <Text>Username:</Text>
        <TextInput defaultValue = "" onChangeText={(user:string)=>{setUser(user)}}/>
      </View>
      <View style = {styles.sign_up}>
        <Text>Password:</Text><TextInput defaultValue = "" onChangeText={(pass:string)=>{setPass(pass)}}/>
      </View>
      <Button title = "sign_up_button" onPress = {() => verifySignUp(user,pass)}></Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sign_up:{flexDirection:"row",backgroundColor:"green"}
})