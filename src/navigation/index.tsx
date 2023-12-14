import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SearchScreen} from '../screens/Search';
import {YourLibraryScr} from '../YourLibrary';
import {SignUpScreen} from '../screens/SignUp';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {Image, StatusBar, Text, View} from 'react-native';
import {DemoTab} from 'screens/DemoTab';
import {SearchTab} from 'screens/Search/SearchTab';
import {LikeSong} from 'src/YourLibrary/components/likeSong';
import {Download} from 'src/YourLibrary/components/Download';
import {Playlist} from 'src/YourLibrary/components/Playlists';
import {ArtistsFollowing} from 'src/YourLibrary/components/ArtistsFollowing';
import {ChiTietSong} from 'src/YourLibrary/components/ChiTiet';
import {Player} from 'screens/Player';
import {MyProfile} from 'screens/MyProfile';
import {Modalize} from 'react-native-modalize';
import {useEffect, useRef} from 'react';
import Entypo from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Iconlibrary from 'react-native-vector-icons/MaterialIcons';
import {MiniPlayer} from 'components/MiniPlayer';
import {TestBottom} from 'components/MiniPlayer/TestBottom';

const Stack = createNativeStackNavigator();

export const Router = () => {
  const {isLogin} = useSelector((state: RootState) => state.auth);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        {isLogin ? (
          <Stack.Screen
            options={{headerShown: false}}
            name="Tab"
            component={TabBottom}
          />
        ) : (
          <Stack.Screen
            options={{headerShown: false}}
            name="LoginScreen"
            component={SignUpScreen}
          />
        )}
        {GlobalScreens()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const Tab = createBottomTabNavigator();
const TabBottom = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#000',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            shadowOpacity: 4,
            shadowRadius: 4,
            elevation: 4,
            shadowOffset: {
              width: 0,
              height: -4,
            },
            borderTopWidth: 0,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={DemoTab}
          navigationKey="aa"
          options={{
            headerShown: false,
            tabBarLabelStyle: {color: 'white'},
            tabBarIcon: ({focused}) =>
              focused ? (
                <Entypo name="home-variant" size={24} color="white" />
              ) : (
                <Entypo name="home-variant-outline" size={24} color="gray" />
              ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerShown: false,
            tabBarLabelStyle: {color: 'white'},
            tabBarIcon: ({focused}) =>
              focused ? (
                <Ionicons name="search" size={24} color="white" />
              ) : (
                <Ionicons name="search" size={24} color="gray" />
              ),
          }}
        />
        <Tab.Screen
          name="YourLibrary"
          component={YourLibraryScr}
          options={{
            headerShown: false,
            tabBarLabelStyle: {color: 'white'},
            tabBarIcon: ({focused}) =>
              focused ? (
                <Iconlibrary name="library-music" size={24} color="white" />
              ) : (
                <Iconlibrary name="library-music" size={24} color="gray" />
              ),
          }}
        />
      </Tab.Navigator>
      {/* <MiniPlayer /> */}
    </>
  );
};

const GlobalScreens = () => {
  return (
    <Stack.Group screenOptions={{headerShown: false}}>
      <Stack.Screen component={SignUpScreen} name="SignUpScreen" />
      <Stack.Screen component={SearchTab} name="SearchTab" />
      <Stack.Screen component={LikeSong} name="likeSong" />
      <Stack.Screen component={Download} name="Download" />
      <Stack.Screen component={Playlist} name="Playlist" />
      <Stack.Screen component={ArtistsFollowing} name="ArtistsFollowing" />
      <Stack.Screen component={ChiTietSong} name="ChiTietSong" />
      <Stack.Screen component={Player} name="Player" />
      <Stack.Screen component={MyProfile} name="MyProfile" />
    </Stack.Group>
  );
};
