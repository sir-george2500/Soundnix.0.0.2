import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../../components/Screen'
import ListItem from '../../components/AccountScreenComponent.js/ListItem'
import Icon from '../../components/Icon'
import ListItemSeparator from '../../components/ListItemSeperator'
import { useNavigation } from '@react-navigation/native'
import routes from '../../../navigation/routes'

export default function AccountScreen() {
  const navigation = useNavigation();

  const movetoProfileScreen=()=>{
    return navigation.navigate(routes.PROFILE)
  }
  return (
    <Screen>
      <View  style={styles.container}>
      <ListItem  
      onPress={movetoProfileScreen}
      IconComponent={<Icon name="account"/>} 
      title="George S Mulbah" 
      subTitle="gsmulbah2500@gmail.com"
      showMaterialIcon={true}
      mIconName="checkbox-marked-circle"
      />
      <ListItemSeparator 
  
      />
      <ListItem 
       IconComponent={<Icon name="bell"/>}
       title="Notification"
       onPress={()=>console.log("")}
      />
      <ListItemSeparator/>
      <ListItem 
       IconComponent={<Icon name="account-details"/>}
       title="Account Details"
       onPress={()=>console.log("")}
      />
      <ListItemSeparator/>
       <ListItem 
       IconComponent={<Icon name="cog"/>}
       title="Setting"
       onPress={()=>console.log("")}
      />
      <ListItemSeparator/>
       <ListItem 
       IconComponent={<Icon name="logout"/>}
       title="Log Out"
       onPress={()=>console.log("")}
      />

      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({

  container:{
    marginTop:-29,
  }
})