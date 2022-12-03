import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import AlbumGenre from './AlbumGenre'
import colors from '../../config/colors';

 function GenreCategory({data}) {
   
  return (
    <View>
      <View  style={styles.container}> 
      <Text style={styles.title}>{data.title}</Text>
      <FlatList
       data={data.songGenre}
       renderItem={({item}) => <AlbumGenre songGenre={item} />}
       keyExtractor={(item) => item.id }
       showsHorizontalScrollIndicator={false}
       horizontal
      />    
    </View>
    </View>
  )
}
export default GenreCategory;
const styles = StyleSheet.create({
    container:{
        margin:10,
       },
    title:{
        color:colors.light,
        margin:10,
        fontSize:18,
        fontWeight:'bold'
      }
})