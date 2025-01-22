import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const loading_screen_1 = () => {
  return (
    <View>
      <Text style = {styles.loading_screen_1_style}>loading_screen_1</Text>
    </View>
  )
}
//Can add quotes to these things
export const loading_screen_2 = () => {
  return (
    <View>
      <Text>loading_screen_2</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  loading_screen_1_style:{fontFamily:"Times New Roman"},
  loading_screen_2_style:{}
})