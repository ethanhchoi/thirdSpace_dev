import { StyleSheet, Text, View, Button} from 'react-native'
import { Tabs } from 'expo-router'
/*
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '650316695889-nekm0fjl4crls40g81cnsb69oel6dbml.apps.googleusercontent.com',
});
export default function test_sign_in_screen() {
  
    return (
    <View>
      <Text>setting_screen</Text>
      <GoogleSigninButton size = {GoogleSigninButton.Size.Wide}
      color = {GoogleSigninButton.Color.Dark}></GoogleSigninButton>
    </View>
  )
}
/*
async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const signInResult = await GoogleSignin.signIn();
  
    // Try the new style of google-sign in result, from v13+ of that module
    let idToken = signInResult.data?.idToken;
    /*
    if (!idToken) {
      // if you are using older versions of google-signin, try old style result
      idToken = signInResult.idToken;
    }
    if (!idToken) {
      throw new Error('No ID token found');
    }
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(signInResult.data.idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }
const styles = StyleSheet.create(
    {}
)
*/