import { StyleSheet, Text, View, SafeAreaView,Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import {MMKV} from "react-native-mmkv"
//import {NetInfo} from "@react-native-community/netinfo"
function loadContent(wifiStatus:boolean)
{
    if(wifiStatus)
    {
        //Then load everything else else note thres no wifi
    }
    //This assumes theres wifi
    //This function's goal is to load in everything and establishing everything
    //Wifi Connection, (Valid)Google Account, Messaging Server
}
export default function Start_screen() {
    const router = useRouter();
    //Ensure user is connected to internet let connection = NetInfo.fetch();
    //connection.isConnected();
    return (
    <SafeAreaView>
        <View>
            <Button title = "Sign In" onPress = {() => {router.push("/sign_in")}}></Button>
            <Button title = "Sign Up" onPress = {() => {router.push("/sign_up")}}></Button>
            <Button title = "Forgot Password" onPress = {() => {router.push("/forgot_password")}}></Button>
            <Button title="DemoBreakRoom" onPress = {()=>{router.push("/demoBreakRoom")}}></Button>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create(
    {

    }
)