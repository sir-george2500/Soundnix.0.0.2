import { StyleSheet, Text, View,FlatList, Image, SafeAreaView } from 'react-native'
import React from 'react'
import colors from '../config/colors';
import Screen from '../components/Screen';
import Album from '../components/Album';
import AlbumCategory from '../components/AlbumCategory';
import SearchInput from '../components/SearchInput';
import ListItemSeperator from '../components/ListItemSeperator';

  const acdata=[{
    id: '1',
    title: 'Happy Vibes',
    albums: [
      {
        id: '1',
        imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
        artistsHeadline: 'Taylor Swift, Kygo Objective C, Avicii'
      }, {
        id: '2',
        imageUri: 'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
        artistsHeadline: 'Post Malone, Drake, Eminem'
      },
      {
        id: '3',
        imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
        artistsHeadline: 'Journey, Escape, Avicii'
      },
      {
        id: '4',
        imageUri: 'https://i.pinimg.com/originals/a2/0d/37/a20d37791f8ad5cd54734cd3af559cc9.jpg',
        artistsHeadline: 'Bob Marley, Cardi B, Stas Mihailov'
      },
    ]
  }, {
    id: '2',
    title: 'Popular Playlists',
    albums: [
      {
        id: '5',
        imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
        artistsHeadline: 'Taylor Swift, Kygo Objective C, Avicii'
      }, {
        id: '6',
        imageUri: 'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
        artistsHeadline: 'Post Malone, Drake, Eminem'
      },
      {
        id: '7',
        imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
        artistsHeadline: 'Journey, Escape, Avicii'
      },
    ]
  },{
    id: '3',
    title: 'Shows to try',
    albums: [
      {
        id: '8',
        imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
        artistsHeadline: 'Taylor Swift, Kygo Objective C, Avicii'
      }, {
        id: '9',
        imageUri: 'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
        artistsHeadline: 'Post Malone, Drake, Eminem'
      },
      {
        id: '10',
        imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
        artistsHeadline: 'Journey, Escape, Avicii'
      },
    ]
  }, {
    id: '4',
    title: 'Workout',
    albums: [
      {
        id: '11',
        imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
        artistsHeadline: 'Taylor Swift, Kygo Objective C, Avicii'
      }, {
        id: '12',
        imageUri: 'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
        artistsHeadline: 'Post Malone, Drake, Eminem'
      },
      {
        id: '13',
        imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
        artistsHeadline: 'Journey, Escape, Avicii'
      },
    ]
  },
  ]
 function HomeScreen() {
  return (
  <>
      <SafeAreaView  style={styles.bottomSafe}>
      <View  style={styles.viewContainer}>
        <View  style={styles.topViewContainer}>
        <Image   style={styles.logo}  source={require('../assets/symbol.png')}/>
        <SearchInput br={6} m={4} width="85%" icon="magnify" />
        </View>
      </View>
      </SafeAreaView>
    <Screen style={styles.container}>
     {/* <Album {...album}/> */}
     <FlatList 
     data={acdata}
     renderItem={({item})  => <AlbumCategory data={item}/> }
     keyExtractor={(item) => item.id}
     />
     {/* <AlbumCategory data={data}/> */}
    </Screen>
  </>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:-30,
    // backgroundColor:colors.black,
    // flex:1,
    // alignItems:"center",
    // justifyContent:"center",
  },

  viewContainer:{
    backgroundColor:colors.white,
    flexDirection:"row",
    height:85,

  },

  logo:{
    marginTop:10,
   width:45,
   height:40,
   resizeMode: 'contain'
  },

 topViewContainer:{
  marginTop:30,
  flexDirection:"row",
 },

 bottomSafe:{
  marginBottom:30,
 }


 
})


export default HomeScreen;