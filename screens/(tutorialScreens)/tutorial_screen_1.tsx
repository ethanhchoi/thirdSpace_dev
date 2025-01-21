import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Tutorial_Next_Button} from "@/constants/buttons"
export const tutorial_screen = () => {
  return (
    <View>
      <Text style = {styles.tutorial_screen_1_style}>loading_screen_1</Text>
      <Tutorial_Next_Button setColor = "nbnnbnb"/>
    </View>
  )
}



const styles = StyleSheet.create({
  tutorial_screen_1_style:{fontFamily:"Times New Roman"}
})