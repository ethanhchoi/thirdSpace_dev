import {Stack } from "expo-router";

export default function RootLayout() {
  return(
    <Stack>
      <Stack.Screen name = "index" options={{headerShown:false}}/>
      <Stack.Screen name = "(auth)" options={{headerShown:false}}/>
      <Stack.Screen name = "(chatroom)" options = {{headerShown:false}}/>
    </Stack>);
    
}
// Experiment with this and (auth) _layout
//when I come back 