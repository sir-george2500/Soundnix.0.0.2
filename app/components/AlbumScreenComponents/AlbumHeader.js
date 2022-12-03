import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../config/colors';


function AlbumHeader({data}) {
  
  return (
    <View style={styles.container}> 
        <Image style={styles.image} source={{uri:data.imageUri}}/>
        <Text style={styles.name}>{data.name}</Text>
        <View style={styles.creatorContainer}>
         <Text style={styles.creator}>By : {data.creator}</Text>
         <Text style={styles.Likes}>{data.numberOfLikes} Likes</Text>
         <Text style={styles.status}>{data.status}</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.button}>
          <Text style={styles.buttonText}>Play</Text>
          </View>
        </TouchableOpacity>
        </View>
  )
}

export default AlbumHeader;

const styles = StyleSheet.create({
container :{
 alignItems:"center",
},

image:{
  width:175,
  height:175,
  margin:15,
},
name:{
  fontWeight:'bold',
  color:colors.white,
  fontSize:20,
},

Likes:{
 color:colors.white,
 marginLeft:10,
},

status:{
color:colors.white,
marginLeft:10,
    borderWidth:0.3,
    borderRadius:2,
    borderColor:colors.light,
    marginTop:4,
    paddingLeft:2,
    fontSize:10,
    alignItems:"center",
    justifyContent:"center"
 
},
creatorContainer:{
  flexDirection:"row",
}
,
creator:{
  color:colors.white,
  marginLeft:10
},
button:{
  backgroundColor: colors.brandColor,
    height: 40,
    marginTop:10,
    width: 105,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',   
},
buttonText:{
  fontSize:20,
  fontWeight:"bold"

}
})