import { View, Text , StyleSheet,Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import { useNavigation } from '@react-navigation/native'
import routes from '../../navigation/routes'


 
 function Album({albumData}) {
  const navigation = useNavigation();
  
   const onPress = () => {
     navigation.navigate(routes.AlBUM_SCREEN,{id:albumData.id});
    console.log(albumData.id);
   }
 
  return (

      <TouchableWithoutFeedback onPress={onPress}>
    <View  style={styles.container}>
        
       <Image source={{uri:albumData.imageUri}} style={styles.img} /> 
      <Text style={styles.text}>{albumData.artistsHeadline}</Text>
        
    </View>
        </TouchableWithoutFeedback>
    
  )
}

export default Album;


const styles = StyleSheet.create({
 container:{
  width:155,
  margin:10,
 },
 img:{
 width:'100%',
 height:155,
 },

 text:{
  color:colors.light,
  marginTop:5,
}
})