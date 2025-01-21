import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

function verifySignUp(user:string,pass:string)
{
  
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
      <View>
        <Text>Password:</Text><TextInput defaultValue = "" onChangeText={(pass:string)=>{setPass(pass)}}/>
      </View>
      <Button title = "sign_up_button" onPress = {() => verifySignUp(user,pass)}></Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sign_up:{flexDirection:"row"}
})