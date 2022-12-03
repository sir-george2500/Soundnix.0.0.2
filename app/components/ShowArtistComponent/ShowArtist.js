import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import colors from '../../config/colors';
import IconVerify from '../IconVerify';

// 'https://ichef.bbci.co.uk/news/976/cpsprodpb/6C73/production/_104536772_bob_getty.jpg.webp'

function ShowArtist({data}) {
    console.log(data.artistNumnerOfFollower);
  return (
    <View style={styles.ShowArtistComponentContainer}>
    <View style={styles.imageContainer}>
      <Image 
      style={styles.image} 
      source={{uri:data.imageUri}}/>
        {
            data.verify && (
                
                <IconVerify IconName="checkbox-marked-circle"
                 IconSize={24} 
                 iconColor={colors.brandColor}
                 style={styles.verify}
                 />
            )
        }
    
    </View>
    <Text style={styles.artistText} numberOfLines={1}>{data.artistName}</Text>
    <View  style={styles.artistFollowerContainer}>
    <Text style={styles.artistFollower}>{data.artistNumnerOfFollower}</Text>
    <Text style={styles.artistFollowerText}>follwers</Text>
    </View>
    
    </View>
  )
}

export default ShowArtist;

const styles = StyleSheet.create({
imageContainer:{
    width:100,
    height:100,
    borderRadius:50,
    borderWidth:1,
    borderColor:colors.brandColor,
},

artistFollowerText:{
 color:colors.light,
 marginLeft:4,
},
artistFollower:{
 color:colors.brandColor,
 fontWeight:"bold"
},

artistFollowerContainer:{
  flexDirection:"row",
  marginRight:10,
},

verify:{
marginTop:-35,
marginLeft:74,
backgroundColor:colors.black,
borderRadius:50,
},

ShowArtistComponentContainer:{
marginTop:10,
marginRight:5,
alignItems:"center",
justifyContent:"center",

width:150,
 height:150,
},

artistText:{
    color:colors.light,
    fontSize:16,
    fontWeight:'bold'
    
},

image:{
    width:'100%',
    height:'100%',
    borderRadius:50,
   
     
}
})