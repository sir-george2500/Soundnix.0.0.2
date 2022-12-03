import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchInput from '../components/SearchInput'
import Screen from '../components/Screen'
import GenreCategory from '../components/GenreComponents/GenreCategory'

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
    
  ]},]
const data =[{
  id:'1',
  title:'Popular Genre',
  songGenre:[
    {
      id : '1',
      name: 'Hip-Co',
      imageUri:'https://images.unsplash.com/photo-1485579149621-3123dd979885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', 
    },
    {
      id : '2',
      name: 'Hip-Hop',
      imageUri:'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 
    },
    {
      id : '3',
      name: 'Trap-Co',
      imageUri:'https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', 
    },
    {
      id : '4',
      name: 'Afro-Sound',
      imageUri:'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', 
    },
    {
      id : '16',
      name: 'Afro-pop',
      imageUri:'https://plus.unsplash.com/premium_photo-1668418188837-d40b734ed6d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 
    },
  ]

},{
  id:'2',
  title:'Love Genre',
  songGenre:[
    {
      id : '1',
      name: 'R&B',
      imageUri:'https://images.unsplash.com/photo-1535146851324-6571dc3f2672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fFIlMjZifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60', 
    },
    {
      id : '2',
      name: 'POP',
      imageUri:'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8UG9wJTIwbXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60', 
    },
    {
      id : '3',
      name: 'Hip-Pop',
      imageUri:'https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', 
    },
    {
      id : '4',
      name: 'Hip-Life',
      imageUri:'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', 
    },
    {
      id : '19',
      name: 'Classic',
      imageUri:'https://images.unsplash.com/photo-1558584673-c834fb1cc3ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2xhc3NpYyUyMG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60', 
    }
  ]

},{
  id:'3',
  title:'Knowledge Genre',
  songGenre:[
    {
      id : '1',
      name: 'Raggie',
      imageUri:'https://ichef.bbci.co.uk/news/976/cpsprodpb/6C73/production/_104536772_bob_getty.jpg.webp', 
    },
    {
      id : '2',
      name: 'SpokenWords',
      imageUri:'https://www.crea.nl/wp-content/uploads/2022/06/cursus-theater-2223-spokenword-840x400-1.jpg', 
    },
    {
      id : '3',
      name: 'Rock',
      imageUri:'https://musicindustryhowtoimages.s3.amazonaws.com/wp-content/uploads/2022/03/06100159/What-Is-Rock-Music.jpg', 
    },
    {
      id : '4',
      name: 'Country',
      imageUri:'https://www.cmuse.org/wp-content/uploads/2020/06/Characteristics-of-Country-Music.jpg', 
    },
    {
      id : '19',
      name: 'Gospel',
      imageUri:'https://media.istockphoto.com/id/514929924/photo/he-hath-done-this.jpg?s=612x612&w=0&k=20&c=oCDTGhJyA_4NGjvEAxEOWxx9nY0IevaxsH3gjWe4otY=', 
    }
  ]

},{
  id:'4',
  title:'Artistic Genre',
  songGenre:[
    {
      id : '1',
      name: 'Drill',
      imageUri:'https://scontent-cdg2-1.xx.fbcdn.net/v/t39.30808-6/312209327_677691173927146_5573760918534429449_n.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=LOLAyh9S5pcAX9qMgRu&_nc_ht=scontent-cdg2-1.xx&oh=00_AfAX_gcNdF_3X1ksB6S9hWQZnHMbftKFAe49mBPfdm37yQ&oe=637EAC29', 
    },
    {
      id : '2',
      name: 'Electronics',
      imageUri:'https://images.unsplash.com/photo-1477233534935-f5e6fe7c1159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', 
    },
    {
      id : '3',
      name: 'Instrumental',
      imageUri:'https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 
    },
    {
      id : '5',
      name: 'Carribean',
      imageUri:'https://www.allatsea.net/7-top-types-of-caribbean-music/barbados-2-scaled', 
    },
    {
      id : '19',
      name: 'Jazz',
      imageUri:'https://i.ytimg.com/vi/YAgFLTm1Iig/maxresdefault.jpg', 
    }
  ]

}]

export default function SearchScreen() {

  return (
    <Screen>
          <>
          <View>
            <SearchInput  br={12} m={10} width="94%" icon="magnify"/> 
          </View>
          <FlatList 
     data={data}
     renderItem={({item})  => <GenreCategory data={item}/> }
     keyExtractor={(item) => item.id} />
          
          </>
          

    </Screen>
    
  )
}

const styles = StyleSheet.create({})