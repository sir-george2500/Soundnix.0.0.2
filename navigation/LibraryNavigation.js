import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import LibraryUploadScreen from '../app/screens/LibraryScreen/LibraryUploadScreen';
import LibrarySearch from '../app/screens/LibraryScreen/LibrarySearch';
import colors from '../app/config/colors';
import Icon from '../app/components/Icon';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import AlbumScreen from '../app/screens/AlbumScreen';


const Tab = createMaterialTopTabNavigator();

const IconSize = { size :30}


function LibraryNavigator(){


    return(
        <Tab.Navigator
      initialRouteName="Library"
      screenOptions={{
        tabBarActiveTintColor: colors.dark,
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: {
          marginTop:StatusBar.currentHeight,
          height:60,
          padding:10,
          backgroundColor:colors.primary,
          textSize:20, },
      }}
    >
      <Tab.Screen
        name="LibrarySearch"
        component={LibraryScreenNavigator}
        options={{
          title: ({ color, focused }) => (
            <Ionicons
              size={25}
              name={focused ? 'md-library' : 'ios-library-outline'}
              color={focused ? colors.black : '#272727'}
            />
          )}}
      />

      <Tab.Screen
        name="Upload"
        component={LibraryUploadScreenNavigator}
        options={{
          title: ({ color, focused }) => (
            <Ionicons
              size={25}
              name={focused ? 'add-circle' : 'add-circle-outline'}
              color={focused ? colors.black : '#272727'}
            />
          ),
        }}
      />
   
    </Tab.Navigator>
    )
}

export default  LibraryNavigator;




const LibraryStack = createStackNavigator();

function LibraryScreenNavigator() {
      return (
            <LibraryStack.Navigator
            
            screenOptions={{
              headerStyle:{
                backgroundColor: colors.dark,
               
          },
          headerTitleStyle:{
            color:colors.light,
            fontWeight:"bold",
            marginTop:-10
          },
          headerBackTitleStyle:{
            color:colors.white
          },
          headerTintColor: colors.white
          
            }}
            >
              <LibraryStack.Screen
                name="NScreen"
                component={LibrarySearch}
                options={{ headerTitle: 'Library Screen',
               }}
              />
        
              <LibraryStack.Screen
                name="AlbumScreen"
                component={AlbumScreen}
                options={{ headerTitle: 'Album',}}
              />
            </LibraryStack.Navigator>
          );
        }



  const LibraryUploadScreenStack = createStackNavigator();

  function LibraryUploadScreenNavigator(){
    return (
     <LibraryUploadScreenStack.Navigator 
     screenOptions={{
      headerStyle:{
        backgroundColor: colors.dark,
       
  },
  headerTitleStyle:{
    color:colors.light,
    fontWeight:"bold",
    marginTop:-10
  },
  headerBackTitleStyle:{
    color:colors.white
  },
  headerTintColor: colors.white
  
    }}
     >

      <LibraryUploadScreenStack.Screen
       name="LibraryUploadScreen"
       component={LibraryUploadScreen}
       options={{ headerTitle: 'Create Your Own',}}
      />

     </LibraryUploadScreenStack.Navigator>
    )
  }

const styles = StyleSheet.create({})