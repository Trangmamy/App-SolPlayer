import {useNavigation} from '@react-navigation/native';
import {Mixes} from 'components/Mixes';
import Recently from 'components/Recently';
import {
  ARTISTS_FOLLOWING,
  DETAIL_SONG,
  FROM_ARTISTS,
  MAROON,
  SONGS,
} from 'data/index';
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const ChiTietSong = ({route}) => {
  const {songId} = route.params;
  console.log('🚀 ~ file: ChiTiet.tsx:19 ~ ChiTietSong ~ songId:', songId);
  const songDetail = DETAIL_SONG.find(x => x.id === songId);
  const listSongsOfAlbum = SONGS.filter(x => x.idAlbum === songId);
  console.log(
    '🚀 ~ file: ChiTiet.tsx:28 ~ ChiTietSong ~ listSongsOfAlbum:',
    listSongsOfAlbum,
  );
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <Image source={songDetail?.image} style={styles.backgroundImage} />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../assets/icons/back.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.artistText}>MAROON 5</Text>
          <Text style={styles.artistTypeText}>Artist</Text>
        </View>

        <View style={styles.body}>
          <Text
            style={{
              color: 'white',
              fontSize: 12,
              opacity: 0.75,
            }}>
            2.3 L monthly listeners
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 10,
            }}>
            <Text style={styles.btn}>Follow</Text>
            <Image
              source={require('../../assets/icons/share.png')}
              style={{marginRight: 200}}
            />
            <Image
              source={require('../../assets/icons/play_arrow.png')}
              style={{width: 50, height: 50}}
            />
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 24,
                opacity: 0.75,
              }}>
              Popular releases
            </Text>
            <Text style={{color: 'white', fontSize: 16}}>See more</Text>
          </View>
          <FlatList
            data={MAROON}
            keyExtractor={item => item.id.toString()}
            renderItem={({item, index}) => {
              return (
                <View style={styles.BoxListSong}>
                  <Image source={item.image} style={styles.image} />
                  <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.location}>{item.location}</Text>
                  </View>
                  <Image source={require('../../assets/icons/more_vert.png')} />
                </View>
              );
            }}
          />
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              opacity: 0.75,
              paddingVertical: 10,
            }}>
            Artist Playlists
          </Text>
          <Mixes list={FROM_ARTISTS} />
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              opacity: 0.75,
              paddingVertical: 10,
            }}>
            Similar artists
          </Text>
          <FlatList
            data={ARTISTS_FOLLOWING}
            horizontal={true}
            keyExtractor={item => item.title}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      width: 64,
                      height: 64,
                      margin: 10,
                    }}
                    source={item.image}
                  />
                  <Text
                    style={{
                      color: '#fff',
                      opacity: 0.75,
                      fontSize: 12,
                      fontWeight: 'bold',
                      width: 50,
                      alignItems: 'center',
                      marginBottom: 10,
                    }}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
  },
  header: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  icon: {
    resizeMode: 'contain',
  },
  artistText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    opacity: 0.75,
    left: 130,
    top: 80,
  },
  artistTypeText: {
    color: 'white',
    fontSize: 12,
    opacity: 0.75,
    left: 10,
    top: 100,
  },
  body: {
    backgroundColor: '#1E1E1E',
    padding: 20,
  },
  btn: {
    backgroundColor: '#fff',
    opacity: 0.75,
    color: '#000',
    fontSize: 16,
    width: 74,
    height: 36,
    borderRadius: 25,
    textAlign: 'center', // Căn giữa theo chiều ngang
    textAlignVertical: 'center', // Căn giữa theo chiều dọc
    lineHeight: 36, // Cung cấp khoảng trắng dọc giữa các dòng
  },
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
