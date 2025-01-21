import { StyleSheet, Text, View, Button, TextInput} from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

function verifySignIn(username:string,password:string)
{
  console.log("I am the username:",username,"I am the password:",password)
}

export default function sign_in() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  //Consider using passwordRules in TextInput - OnlyIOS
  //We found an account with the name: 
  return (
    <SafeAreaView>
      <View style = {styles.sign_in}>
        <Text>Username:</Text>
        <TextInput defaultValue = "" onChangeText={(user:string)=>{setUser(user)}}/>
      </View>
      <View>
        <Text>Password:</Text><TextInput defaultValue = "" onChangeText={(pass:string)=>{setPass(pass)}}/>
      </View>
      <Button title = "sign_in_button" onPress = {() => verifySignIn(user,pass)}></Button>
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  sign_in:{flexDirection:"row"}
})