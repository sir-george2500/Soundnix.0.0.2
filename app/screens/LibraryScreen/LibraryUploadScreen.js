import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../../components/Screen'
import AppButton from '../../components/AppButton'

import colors from '../../config/colors'
import LibraryButton from '../../components/LibraryScreenComponent/LibraryButton'
import SearchInput from '../../components/SearchInput'
import PlaylistComponent from '../../components/LibraryScreenComponent/PlaylistComponent'


const album ={
  id : '11',
  name:'Good Vibe',
  creator : 'Cool-Kid',
  numberOfLikes:38,
  status:"FREE",
  price : "$0",
  imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
  artistHeadline:'Taylor Swift, Kygo Objective C, Avicii',
  songs:[{
    id:'1',
    imageUri:'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
    title: 'Post Malone, Drake, Eminem',
    artist:'50 cents',
    numberOfLike:'23.2',
    status: 'BUY',
    price: `$20`,
  },]
}
export default function LibraryUploadScreen() {
  return (
    <Screen>
      <View  style={styles.container}>
        <View style={styles.libraryButton}>
         <LibraryButton  style={styles.playlistbutton}/>
         <LibraryButton 
         color='transparent'
         elevation={4} 
         ey={true} 
         iconName="plus" 
         mR={20}
          title='Album' 
          textColor='white' borderColor='white'/>
        </View>

        <SearchInput br={6} m={4} width="92%" icon="magnify"/>
        <PlaylistComponent  data={album.songs[0]} />


      </View>
        
    </Screen>
    
  )
}

const styles = StyleSheet.create({
  playlistbutton:{
  flex:1
  },
  container:{
   marginLeft:15,
  },

  libraryButton:{
    flexDirection:"row",
    justifyContent:"space-between"

  }
})