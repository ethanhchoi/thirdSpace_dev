import { StyleSheet, Text, View } from 'react-native'

export default function chatroom_select() {
  return (
    <View style = {styles.chat}>
      <Text>chatroom_select</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  chat:{margin: 10,
    justifyContent: 'center',
    backgroundColor:'green'}
  }
)