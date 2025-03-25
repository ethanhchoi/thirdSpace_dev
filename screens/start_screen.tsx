import { StyleSheet, Text, View, SafeAreaView,Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';

export default function Start_screen() {
    const router = useRouter();
    return (
    <SafeAreaView>
        <View>
            <Button title = "Sign In" onPress = {() => {router.push("/sign_in")}}></Button>
            <Button title = "Sign Up" onPress = {() => {router.push("/sign_up")}}></Button>
            <Button title = "Forgot Password" onPress = {() => {router.push("/forgot_password")}}></Button>
            <Button title = "Google sign in" onPress = {() => {router.push("/(auth)\test_sign_in_screen")}}></Button>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create(
    {

    }
)