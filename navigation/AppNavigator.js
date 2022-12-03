import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "../app/components/Icon";
import colors from "../app/config/colors";
import AccountScreen from "../app/screens/Account/AccountScreen";
import HomeScreen from "../app/screens/HomeScreen";
import SearchScreen from './../app/screens/SearchScreen'
import AlbumScreen from './../app/screens/AlbumScreen';
import LibraryNavigator from "./LibraryNavigation";
import AccountNavigator from "./AccountNavigator";


const Tab = createBottomTabNavigator();

const IconSize = { size :30}


const AppNavigator = () => (

      <Tab.Navigator
        screenOptions={{
            headerStyle:{
                  backgroundColor: colors.primary,
            },
            tabBarHideOnKeyboard:true,
            headerTitleAlign: 'center',
            headerShown:false,
            tabBarActiveTintColor: colors.dark,
            tabBarStyle:{
                  height:60,
                  padding:10,
                  backgroundColor:colors.primary,
                  textSize:20,
                 
            }
        }}
      >
            <Tab.Screen name="Home"   
             component={HomeNavigator} 
             options = {{
                  tabBarIcon:({}) =>
                  <Icon name="home" size={IconSize.size}  iconColor={colors.white}/>
            }}

            />
            <Tab.Screen name="Search" 
             component={SearchNavigator}
             options = {{
                  tabBarIcon:({color}) =>
                  <Icon name="magnify" size={IconSize.size} iconColor={colors.white}/>
            }}
                 
            />
            <Tab.Screen name="Library"   
              component={LibraryNavigator} 
              options = {{
                  tabBarIcon:({color}) =>
                  <Icon name="music-box-multiple" size={IconSize.size} iconColor={colors.white}/>
            }}
            />
            <Tab.Screen name="Account"   
             component={AccountNavigator} 
             options = {{
                  tabBarIcon:({color}) =>
                  <Icon name="account" size={IconSize.size} iconColor={colors.white}/>
            }}
            />


      </Tab.Navigator>
)

const HomeStack = createStackNavigator();

function HomeNavigator() {
      return (
            <HomeStack.Navigator>
              <HomeStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                   headerTitle: 'Home',
                   headerShown:false,
               }}
              />
        
              <HomeStack.Screen
                name="AlbumScreen"
                component={AlbumScreen}
                options={{ headerTitle: 'Album' }}
              />
            </HomeStack.Navigator>
          );
        }

        const SearchStack = createStackNavigator();

function SearchNavigator() {
      return (
            <SearchStack.Navigator>
              <SearchStack.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{ headerTitle: 'Search' }}
              />
        
             
            </SearchStack.Navigator>
          );
        }

export default AppNavigator;