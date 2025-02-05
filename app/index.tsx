import {StyleSheet, Text, View, SafeAreaView, StatusBar, Platform} from 'react-native'
import HScreen from "../screens/home_screen"
import {useFonts} from 'expo-font';
import {SplashScreen} from 'expo-router';
import {useEffect, useState} from 'react';
import Start_screen from "@/screens/start_screen"
import * as loading_screen from "@/screens/(loadingScreens)/loading_screen" 


export default function index() {
  //Need to wait until these fonts load first before the screen loads.
  //Plus this is used to load in the fonts
  const [isReady,setIsReady] = useState(false)
  var loggedIn = false;

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
        <SafeAreaView style = {styles.centerText}>
          <loading_screen.loading_screen_1/>
        </SafeAreaView>
      );
    }
    
    if(!loggedIn)
    {
      return (<Start_screen/>);
    }
    return (
      <SafeAreaView style = {styles.centerText}>
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