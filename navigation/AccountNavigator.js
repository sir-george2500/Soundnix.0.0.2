import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../app/screens/Account/AccountScreen';
import routes from './routes';
import AccountDetails from '../app/screens/Account/AccountDetails';

const AccountStack = createStackNavigator();

function AccountNavigator() {

  return (
     <AccountStack.Navigator>
       <AccountStack.Screen 
        name="AccountScreen"
        component={AccountScreen}
        options={{ headerTitle: 'Account' }}
       />

       <AccountStack.Screen 
        name={routes.PROFILE}
        component={AccountDetails}
        options={{ headerTitle: 'Account',
                   headerShown:false,
      }}
       />
       
       </AccountStack.Navigator>
        
  )
}
export default AccountNavigator;

