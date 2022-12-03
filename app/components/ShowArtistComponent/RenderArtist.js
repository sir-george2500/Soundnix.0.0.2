import { StyleSheet,Text, View,FlatList,TouchableOpacity} from 'react-native'
import React from 'react'
import ShowArtist from './ShowArtist'
import colors from '../../config/colors';

 function RenderArtist({data}) {
   console.log(data.title)
    
  return (
    <View  style={styles.container}>
          
     <View  style={styles.TitleContainer}>
     <Text  style={styles.Title}>{data.title}</Text>
     <View  style={styles.viewAllButton}>
     <TouchableOpacity>
       <Text style={styles.viewAllButtonText}>VIEW ALL</Text>
     </TouchableOpacity>
     </View>
   </View>
      
    
        <FlatList
       data={data.follow}
       renderItem={({item}) => <ShowArtist data={item}/>}
       keyExtractor={(item) => item.id }
       showsHorizontalScrollIndicator={false}
       horizontal
      />
    </View>
  )
}

export default RenderArtist;

const styles = StyleSheet.create({
    container:{
        margin:10,
       },
       viewAllButtonText:{
        color:colors.brandColor, 
        marginRight:10,
        fontSize:14,
        fontWeight:"bold"
       },
       Title:{
        color:colors.light,
        fontSize:20,
        fontWeight:"bold"
        
        },
        TitleContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginLeft:0,
        
        },
})