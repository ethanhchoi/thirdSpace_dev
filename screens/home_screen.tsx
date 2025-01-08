import { StatusBar } from "expo-status-bar";
import {ScrollView, StyleSheet,Text, View,Button, } from "react-native";
import {Link, Tabs, useRouter} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
//index.tsx = Home Screen

interface user {
  name:string,
  ID:number
};
const newFunction = (props:user) =>{
  
}

export default function HScreen() {
  //This is just an example of the layout of the "home screen"
  const router = useRouter();
  //Logo / Dropdown
  //ScrollView/FlatList Horizontal
  //ScrollView/FlatList Vertical
  return (
      <ScrollView>
        <View style={{flex:2, backgroundColor:"blue"}}>
          <Text>HI</Text>
          </View>
        <View style={{flex:3, backgroundColor:"green"}}>
          <Text style = {styles.goofyText}>Dcck</Text>
          <Button title = "Anal Beads" onPress = {() => router.push("../(chatroom)")}></Button>
        </View>
        <View style={{flexGrow:5, backgroundColor:"purple"}}>
          <Text style = {styles.interText}>Something is off..</Text>
        </View>
      </ScrollView>
  );
}
const styles = StyleSheet.create({
  interText:{
    fontFamily:"Inter",
    fontSize:20
  },
  goofyText:{
    fontFamily:"GoofyAhhText",
    fontSize:20
  }
});