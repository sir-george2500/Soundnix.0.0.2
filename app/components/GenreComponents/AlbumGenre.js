import { StyleSheet, Text, TouchableOpacity, View ,Image, ImageBackground} from 'react-native'
import React from 'react'
import colors from '../../config/colors';



 function AlbumGenre({songGenre}) {
    
  return (
    <TouchableOpacity>
        <View style={styles.container}>

      <ImageBackground source={{uri:songGenre.imageUri}} resizeMode="cover" 
      style={styles.image}
      imageStyle={{borderRadius:6,opacity:1}}
      >
      <Text style={styles.genreName}>{songGenre.name}</Text>
      <View></View>
      </ImageBackground>
        </View>

    </TouchableOpacity>
  )
}

export default AlbumGenre;

const styles = StyleSheet.create({
 container:{
    width:150,
    height:100, 
    marginLeft:10, 
   
 },
     
genreName :{
padding:10,
fontSize:20,
color: colors.white,
fontWeight:"bold",
textShadowColor:colors.dark
},

line:{
    width:'100%',
    height:2,
    backgroundColor:"yellow",
    bottom:-56,
  
    borderRadius:0
}
,
image:{
 width:150,
 height:100,
 position:'absolute',
 borderRadius:10,
 backgroundColor:colors.light,
flex: 1,
// transform: [{rotate:'180deg'}]
}
})