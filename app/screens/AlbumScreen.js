import { 
    View, 
    Text,
    StyleSheet, 
    FlatList
} from 'react-native'
import React, { useEffect } from 'react'
import Screen from '../components/Screen'
import { useRoute } from '@react-navigation/native'
import SongListItems from '../components/AlbumScreenComponents/SongListItems'
import AlbumHeader from '../components/AlbumScreenComponents/AlbumHeader'

export default function AlbumScreen() {

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
  },
  {
    id:'2',
    imageUri:'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
    title: 'Post Malone, Drake, Eminem',
    artist:'50 cents',
    numberOfLike:'23.2k',
    status: 'BUY',
    price: `$20`,
  },
  {
    id:'3',
    imageUri:'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
    title: 'Post Malone, Drake, Eminem',
    artist:'50 cents',
    numberOfLike:23,
    status: 'BUY',
    price: `$20`,
  },
  {
    id:'4',
    imageUri:'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
    title: 'Hello from the other side',
    artist:'50 cents',
    numberOfLike:23,
    status: 'BUY',
    price: `$20`,
  },
  {
    id:'5',
    imageUri:'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
    title: 'Post Malone, Hellow, Eminem',
    artist:'50 cents',
    numberOfLike:23,
    status: 'FREE',
    price: `$0`,
  }
],
}

    const route = useRoute()


    //One Console.log
    useEffect(()=>{
        console.log(route);
    })
  return (
    <Screen>
      {/* <SongListItems  data={album.songs[0]}/> */}
      <FlatList 
       data={album.songs}
       renderItem={({item}) => <SongListItems data={item}/>}
       ListHeaderComponent ={()=> <AlbumHeader data={album}/>}
      />
    </Screen>

  )
}

const styles = StyleSheet.create({

})