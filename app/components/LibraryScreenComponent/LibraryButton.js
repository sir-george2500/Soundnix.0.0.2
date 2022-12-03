import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from '../Icon'
import colors from '../../config/colors';
import { MaterialCommunityIcons,Entypo } from '@expo/vector-icons';




 function LibraryButton({
borderColor,
color = "primary" ,
 elevation=0,
 ey=false,
 disable,
 mL,
 mR,
 title="playlist",
 iconName="playlist-plus", 
 onPress, 
 textColor, 
 }) {
  return (
    <TouchableOpacity
    style={[styles.button, {
        backgroundColor: colors[color],
        borderColor: colors[borderColor],
        borderWidth: 1,
        marginLeft:mL,
        marginRight:mR,
        elevation:elevation,
      }]}
      disabled={disable}
      onPress={onPress}
    >
    <View style={styles.buttonContainer}>
    {ey
        ?

        <Entypo name={iconName} size={30*0.5} color={colors.white} />
        :
        <MaterialCommunityIcons name={iconName} size={30*0.5}  color={colors.black}  /> 
    }
      <Text style={[styles.text,{color:colors[textColor]}]}>{title}</Text>
    </View>
    </TouchableOpacity>
  )
}
export default LibraryButton;
const styles = StyleSheet.create({

    button:{
        backgroundColor: colors.primary,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: 75,
        height:44,
        marginVertical: 10,
    },

    buttonContainer:{
     flexDirection:"row",
        
    },
 text: {
        marginTop:0,
        color: colors.black,
        fontSize: 9.0,
        textTransform: "uppercase",
        fontWeight: "bold",    
      },
})