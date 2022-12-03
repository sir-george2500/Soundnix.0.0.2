import { 
  StyleSheet, 
  Text, 
  View , 
  ImageBackground ,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import Screen from '../../components/Screen'
import colors from '../../config/colors'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import AlbumCategory from '../../components/AlbumCategory';
import ListItemSeperator from '../../components/ListItemSeperator';
import IconVerify from '../../components/IconVerify';
import RenderArtist from '../../components/ShowArtistComponent/RenderArtist';


const data=[{
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
},
]
const userfollowdata=[{
  id: '1',
  title: 'followers',
  follow: [
    { 
      id: '2',
      imageUri: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/50_Cent_AKA_Curtis_Jackson_%28cropped%29.jpg',
      artistName: 'Journey',
      artistNumnerOfFollower:'2M',
      verify:true,
    },
    {
      id: '3',
      imageUri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRg99-46ZMOMIl53Ccr3v2UTUuwtPRru5l4NZr8r7jwMp-RJmIb',
      artistName: 'Journey',
      artistNumnerOfFollower:'210K',
      verify:false,
    },
    {
      id: '4',
      imageUri: 'https://stylecaster.com/wp-content/uploads/2022/02/eminem-net-worth.png',
      artistName: 'Journey',
      artistNumnerOfFollower:'3M',
      verify:false,
    },
  ]
 },
 
 {
  id: '2',
  title: 'following',
  follow: [
    { 
      id: '2',
      imageUri: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTUzMDQ5MDQ5NDIxODQ5NjA3/cardi-b-arrives-at-the-2017-mtv-video-music-awards-at-the-forum-on-august-27-2017-in-inglewood-california-photo-by-gregg-deguire_getty-images-500.jpg',
      artistName: 'Journey',
      artistNumnerOfFollower:'2M',
      verify:true,
    },
    {
      id: '3',
      imageUri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRg99-46ZMOMIl53Ccr3v2UTUuwtPRru5l4NZr8r7jwMp-RJmIb',
      artistName: 'Journey',
      artistNumnerOfFollower:'210K',
      verify:false,
    },
    {
      id: '4',
      imageUri: 'https://stylecaster.com/wp-content/uploads/2022/02/eminem-net-worth.png',
      artistName: 'Journey',
      artistNumnerOfFollower:'3M',
      verify:false,
    },
  ]
 }

]


export default function AccountDetails() {
  return (

    <Screen>
     <View  style={styles.container}>
    
     <ImageBackground source={{uri:'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8UG9wJTIwbXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60'}} resizeMode="cover" 
      style={{width:'100%' , height:'100%',}}
      >
        <View style={styles.uploadIconContainer}>
         <TouchableOpacity>
         <Entypo name="camera" size={24} color="black" />
         </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.profileImageContainer}>
      <View style={styles.profileImage}>
      <View  style={styles.BorderProfile}>
            <Image source={{uri:'https://images.unsplash.com/photo-1535146851324-6571dc3f2672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fFIlMjZifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'}} 
             style={{width:'100%' , height:'100%', borderRadius:50}} 
             />
        </View>
      </View>
         <View  style={styles.userDetails}>
        <Text   style={styles.userName}>George S Mulbah</Text>
       
         <IconVerify style={styles.verify} 
         iconColor={colors.brandColor}
         IconName="checkbox-marked-circle"
         IconSize={20}
         />
         </View>
        <View  style={styles.userFollower_followingContainer}>
         <View  style={styles.userFollower}>
        <Text   style={styles.userNumberOffollowers}>2M</Text>
        <Text   style={styles.userNumberOffollowersText}>followers</Text>
        </View>
        <View>
            <Text style={styles.userFollowerDot}>.</Text>
        </View>
        <View  style={styles.userFollower}>
        <Text   style={styles.userNumberOffollowersText}>following</Text>
        <Text   style={styles.userNumberOffollowing}>0</Text>
        </View>  
        </View>
      </View>     
     </View>
    <ListItemSeperator T={165} bgColor={colors.light}/>
     
      {/* Playlist Section */} 
     <FlatList 
     data={data}
     renderItem={({item})  => <AlbumCategory data={item} showtitle={true}/> }
     keyExtractor={(item) => item.id}
     style={{marginTop:180,}}
      ListFooterComponent={
      <FlatList
         data={userfollowdata} 
      renderItem={({item}) => <RenderArtist data={item}/>}
      keyExtractor={(item) => item.id }
      showsHorizontalScrollIndicator={false}
      />
    }
     />
    </Screen>
   
  )
}

const styles = StyleSheet.create({
container:{
    height:150,
    backgroundColor:"red",
},


playlistContainer:{
  backgroundColor:colors.black,

  height:"100%",
  marginTop:170,


}
,

userNumberOffollowing:{
    color:colors.brandColor,
    fontWeight:"bold",
    marginLeft: 10,
    marginTop:1.2,
},

userFollowerDot:{
color:colors.brandColor,
marginLeft:10,
marginRight:5,
fontSize:20,
fontWeight:"bold",
marginTop:-9,

},
userFollower_followingContainer:{
 marginTop:10,
 flexDirection:"row",
},

verify:{
    marginTop:5,
},
userNumberOffollowersText:{
    marginLeft:5,
    color:colors.light
},
userNumberOffollowers:{

color:colors.brandColor,
fontWeight:"bold",
marginLeft: 10,
},
userFollower:{
flexDirection:"row"
},
userDetails:{
marginTop:10,
marginLeft:10,
flexDirection:"row"
},


userName:{
color:colors.light,
fontSize:20,
fontWeight:"bold"
}
,
profileImage:{
height:115,
width:115,
marginTop:-60,
marginLeft:20,
backgroundColor:colors.black,
borderRadius:0.5*115,
borderWidth:2.5,
alignItems:"center",
justifyContent:"center",
borderColor: colors.black
},
BorderProfile:{
    height:100,
    width:100,
    backgroundColor:"red",
    borderColor: colors.brandColor,
    borderRadius:0.5*100,
    borderWidth:1,
   
   
}
,

uploadIconContainer:{
    backgroundColor:colors.medium,
    width:50,
    height:50,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:25,
    position:"relative",
    opacity:0.4,
    top:20,
    marginLeft:230,


},

profileImageContainer:{
    backgroundColor:colors.black,
    height:160,
}
    
})