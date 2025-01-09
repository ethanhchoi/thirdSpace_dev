import { StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native'
import HScreen from "../screens/home_screen"
import { useFonts} from 'expo-font';
import { SplashScreen} from 'expo-router';
import { useEffect, useState } from 'react';
import Start_screen from "@/screens/start_screen"
export default function index() {
  const [isReady,setIsReady] = useState(false)//loadedState
  //Need to wait until these fonts load first before the screen loads.
  //Plus this is used to load in the fonts
  var loggedIn = true;

  //Consider using this for a function called loadFunction(); void
  const [loaded,error] = useFonts(
      {
      "Inter":require("../assets/fonts/Inter-VariableFont_opsz,wght.ttf"),
      "GoofyAhhText":require("../assets/fonts/PlaywriteIEGuides-Regular.ttf")
    });
    useEffect(()=>{
      if(error)
        throw error;
      if(loaded)
      {
        SplashScreen.hideAsync().then(()=>{
          setIsReady(true);
        });
      }
    },[loaded,error]);

    if(!isReady)
    {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }
    
    if(!loggedIn)
    {
      return (<Start_screen/>);
    }
    return (
      <SafeAreaView style = {styles.centerText}>
        <StatusBar barStyle = "dark-content"/>
        <HScreen/>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create(
  {
    addFontGoofy:{fontFamily:"GoofyAhhText"},
    box:{
      borderWidth:2,
      borderColor:"black",
      margin:10,
    },
    centerText:{flex:1,
      justifyContent:'center',
      backgroundColor:"#F57759"
      },
    safeView:{flex:1,
      margin:0,
      padding:0
    }
  });