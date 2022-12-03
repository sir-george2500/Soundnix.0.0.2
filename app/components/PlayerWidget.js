import { View, Text , StyleSheet,Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import { useNavigation } from '@react-navigation/native'
import Icon from './Icon'

const data ={
    id:'4',
    imageUri:'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
    title: 'Hello from the other side',
    artist:'50 cents',
    numberOfLike:23,
    status: 'BUY',
    price: `$20`,
  }

export default function PlayerWidget() {
  return (
    <View style={styles.container}>
        <>
       <Image source={{uri:data.imageUri}} style={styles.img} />

       <View style={styles.firstContainer}>
       <Text style={styles.title} numberOfLines={1}>{data.title}</Text>
    
       </View>
       <View style={styles.secondContainer}>
       <Text style={styles.artist}>|{data.artist}</Text>
        </View>
       <View  style={styles.thirdContainer}>
       <Icon name="cards-heart-outline" backgroundColor={colors.dark} marginTop={-5}/>
        </View>
        <View  style={styles.thirdContainer}>
        <Icon m={false}  name="caretright" size={35} backgroundColor={colors.dark} iconColor={colors.white} marginTop={-6} />
        </View>
        </>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
    flexDirection:"row",
    position: 'absolute',
    bottom: 62,
    backgroundColor: colors.dark,
    width: '100%',
  
       
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
      fontSize:12,
      marginTop:-10,
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