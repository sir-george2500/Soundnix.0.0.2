import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,

} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import routes from '../../navigation/routes';
import AppButton from '../components/AppButton';
import Constants from "expo-constants";

import Screen from '../components/Screen';

import colors from "../config/colors";

function WelcomeScreen({navigation}) {
  return (
    
   
      <SafeAreaView style={styles.screen}>
        <View style={styles.container}>
      <Image
              style={styles.logo}
              source={require('../assets/welcome.png')}
          />
      
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" 
        color="black" 
        textColor="primary" 
        onPress={()=>navigation.navigate(routes.LOGIN)}
        elevation={10}
         />
        <AppButton title="Register" color="transparent" textColor="black" borderColor="black" onPress={()=>navigation.navigate(routes.REGISTER)} />
      </View>
        </View>
      </SafeAreaView>
      

  );
}

const styles = StyleSheet.create({

  screen: {
    paddingTop: Constants.statusBarHeight,
     flex: 1,
    backgroundColor:colors.primary
  },

  container: {
   padding:5, 
   backgroundColor:colors.primary,
   flex:1,
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    top:50,
    padding: 20,
    width: "100%",
  },
    logo: {
      width: 300,
      height: 300,
      alignSelf: 'center',
      marginTop: 50,
      marginBottom:20,
  }
  ,
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;