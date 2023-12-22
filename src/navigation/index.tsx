import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SearchScreen} from '../screens/Search';
import {YourLibraryScr} from '../YourLibrary';
import {SignUpScreen} from '../screens/SignUp';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {View} from 'react-native';
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
import {CustomBottom} from 'components/CustomBottom';
import {MiniPlayer} from 'components/Player';
import {MiniPlayer2} from 'components/MiniPlayer2';

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
  const modalizeRef = useRef<Modalize>();

  useEffect(() => {
    modalizeRef.current?.open();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{headerShown: false}}
        tabBar={props => <CustomBottom {...props} />}>
        <Tab.Screen name="Home" component={DemoTab} navigationKey="aa" />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="YourLibrary" component={YourLibraryScr} />
      </Tab.Navigator>
      {/* <MiniPlayer /> */}
      <MiniPlayer2 />
    </View>
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
