import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import {AuthContext} from '../auth/AuthProvider'
import { getAuth} from '../app/api/firebase'
import * as auth from 'firebase/auth';
import React, { useContext, useState ,useEffect} from 'react'

const AuthRoute = () => {
    const {user,setUser} = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);
     
    const Auth = getAuth;
    //listening for OnStateChange 
  
    const onAuthStateChanged = (user) => {
      setUser(user);
      if (initializing) setInitializing(false);
    };
  
    useEffect(() => {
      const subscriber = auth.onAuthStateChanged(Auth,onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);
  
    if (initializing) return null;
  
    return (
     <NavigationContainer>
      {user ? <AppNavigator /> : <AuthNavigator />}
     </NavigationContainer>
    )
  }

export default AuthRoute