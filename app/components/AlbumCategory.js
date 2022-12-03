import { View, Text, StyleSheet, FlatList , TouchableOpacity} from 'react-native'
import React from 'react'
import colors from '../config/colors'
import Album from './Album'



export default function AlbumCategory({data,showtitle=true}) {
  
  return (
    <View  style={styles.container}>
      {showtitle && (
     <View  style={styles.TitleContainer}>
     <Text  style={styles.Title}>{data.title}</Text>
     <View  style={styles.viewAllButton}>
     <TouchableOpacity>
       <Text style={styles.viewAllButtonText}>VIEW ALL</Text>
     </TouchableOpacity>
     </View>
   </View>
      )
      }
      <FlatList
       data={data.albums}
       renderItem={({item}) => <Album albumData={item}/>}
       keyExtractor={(item) => item.id }
       showsHorizontalScrollIndicator={false}
       horizontal
      />    
    </View>
  )
}    


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