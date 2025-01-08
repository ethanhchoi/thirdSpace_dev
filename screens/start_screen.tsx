import { StyleSheet, Text, View, SafeAreaView,Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';


export default function Start_screen() {
    const router = useRouter();
    return (
    <SafeAreaView>
        <View>
            <Button title = "Sign In" onPress = {() => {router.push("/sign_in")}}></Button>
            <Button title = "Sign Out" onPress = {() => {router.push("/sign_out")}}></Button>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create(
    {

    }
)