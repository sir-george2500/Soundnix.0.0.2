import { View, Text , StyleSheet,Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import { useNavigation } from '@react-navigation/native'
import Icon from '../Icon'




 
 function SongListItems({data}) {

  return (

     
    <View style={styles.container}>
        <>
       <Image source={{uri:data.imageUri}} style={styles.img} />

       <View style={styles.firstContainer}>
       <Text style={styles.title} numberOfLines={1}>{data.title}</Text>
       <Text style={styles.artist}>{data.artist}</Text>
       </View>
       <View style={styles.secondContainer}>
           <Icon name="cards-heart-outline" backgroundColor={colors.dark} marginTop={-5}/>
           <Text style={styles.Likes}>{data.numberOfLike}</Text>
        </View>
       <View  style={styles.thirdContainer}>
           <Text style={styles.status}>{data.status}</Text>
        </View>
        <View  style={styles.thirdContainer}>
        <Icon m={false}  name="caretright" size={35} backgroundColor={colors.dark} iconColor={colors.white} />
        </View>
        <View style={styles.lastContainer}>
       <Icon name="dots-vertical" backgroundColor={colors.dark} size={50} />  
        </View>
        </>
    </View>
       
    
  )
}

export default SongListItems;


const styles = StyleSheet.create({
 container:{
    flexDirection:"row",
    padding:10,
    border:10,
    margin:10,
    borderWidth:0.2,
    borderRadius:2,
    borderColor:colors.light
 },
 img:{
 width:60,
 height:60,
 },
 title:{
  color:colors.brandColor,
  marginTop:5,
},
 artist:{
  color:colors.light,
  fontSize:12
},
 Likes:{
  color:colors.light,
  fontSize:12,
  position:"relative",
  marginTop:-12
},
lastContainer:{
   marginLeft:-10, 
   marginTop:3,
},
firstContainer:{
    width:'36%',
    paddingLeft:10,
    paddingTop:10,
   },
   secondContainer:{
    justifyContent:"center",
    alignItems:"center",
    
   },
   status:{
    color:colors.light,
    borderWidth:0.3,
    borderRadius:2,
    borderColor:colors.light,
    paddingLeft:2,
    fontSize:10,
    marginTop:-10
   },
   thirdContainer:{
    justifyContent:"center",
    alignItems:"center",
    marginLeft:0,
   }


})


























// import { StyleSheet, Text, View,Image } from 'react-native'
// import React from 'react'

//  function SongListItems({songData}) {
//   return (
//     <View>
//       {/*Image Uri*/}
//       <Image style={styles.imageUri} source={{uri:songData.imageUri}}/> 
//       {/* Title */}
//       <Text style={styles.title}>{songData.title}</Text>
//       {/*Song Data artist */}
//       <Text style={styles.artist}>{songData.artist}</Text>
//       {/*Number of Like */}
//       <Text style={styles.Like}>{songdata.numberOfLike}</Text>   
//       {/*Status*/}
//       <Text style={styles.status}>{songData.status}</Text>
//       {/* Kebab Menu Icon */}
      

//     </View>
//   )
// }

// export default SongListItems;

// const styles = StyleSheet.create({
//  imageUri:{},
//  title:{},
//  artist:{},
//  numberOfLike:{},
//  status:{},
// })