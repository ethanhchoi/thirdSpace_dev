import { StyleSheet, Text, View, SafeAreaView,Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import axios from "axios";

async function fetchUsers(){
    //const response = axios.post("http://localhost:5000",{"test_User":"testPants"})
            /*
            - Figure out posting information to the server via the frontend
            - Figure out more flows
            - Figure out animations
            */
    let myIPAddress = "http://192.168.1.151:5000"
    console.log("I have been clicked: I want to reach IP:",myIPAddress+"/users");
    const data = await axios.get(myIPAddress+"/users").then((res) => {
        console.log("res:",res.data);
    }).catch((error)=>{
        console.log("error detected:",error);
    })
}

export default function Start_screen() {
    const router = useRouter();
    return (
    <SafeAreaView>
        <View>
            <Button title = "Sign In" onPress = {() => {router.push("/sign_in")}}></Button>
            <Button title = "Sign Up" onPress = {() => {router.push("/sign_up")}}></Button>
            <Button title = "Forgot Password" onPress = {() => {router.push("/forgot_password")}}></Button>
            <Button title = "sendData button" onPress = {fetchUsers}></Button>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create(
    {

    }
)