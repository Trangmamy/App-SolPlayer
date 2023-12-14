import {useNavigation} from '@react-navigation/native';
import {LIKED_SONG} from 'data/index';
import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const YourLibraryScr = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: '#fff',
            paddingLeft: 5,
          }}>
          Your Library
        </Text>
        <View style={{flexDirection: 'row', height: 130}}>
          <TouchableOpacity
            style={styles.Menu}
            onPress={() => navigation.navigate('likeSong')}>
            <View style={styles.Menu}>
              <Image source={require('../assets/icons/favorite.png')} />
              <Text style={styles.Txt}>Liked Songs</Text>
              <Text style={styles.text}>120 songs</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Menu}
            onPress={() => navigation.navigate('Download')}>
            <View style={styles.Menu}>
              <Image source={require('../assets/icons/download.png')} />
              <Text style={styles.Txt}>Downloads</Text>
              <Text style={styles.text}>210 songs</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', height: 130}}>
          <TouchableOpacity
            style={styles.Menu}
            onPress={() => navigation.navigate('Playlist')}>
            <View style={styles.Menu}>
              <Image source={require('../assets/icons/music.png')} />
              <Text style={styles.Txt}>Playlists</Text>
              <Text style={styles.text}>12 playlists</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Menu}
            onPress={() => navigation.navigate('ArtistsFollowing')}>
            <View style={styles.Menu}>
              <Image source={require('../assets/icons/account.png')} />
              <Text style={styles.Txt}>Artists</Text>
              <Text style={styles.text}>3 artists</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <Text style={{fontSize: 24, color: '#fff', opacity: 0.75}}>
            Recently Played
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: '#fff',
              alignItems: 'center',
              paddingTop: 8,
            }}>
            See more
          </Text>
        </View>
        <FlatList
          data={LIKED_SONG}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => {
            return (
              <View style={styles.BoxListSong}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.location}>{item.location}</Text>
                </View>
                <Image source={require('../assets/icons/more_vert.png')} />
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    padding: 15,
  },
  Menu: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: '#363636',
    padding: 5,
    margin: 8,
  },
  Txt: {color: '#fff', fontWeight: 'bold', fontSize: 16, paddingVertical: 5},
  text: {color: '#fff', fontSize: 12, opacity: 0.5},
  BoxListSong: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },
  image: {margin: 10, resizeMode: 'cover', width: 32, height: 32},
  textContainer: {flex: 1},
  title: {fontSize: 16, color: '#fff'},
  location: {color: 'gray'},
});
