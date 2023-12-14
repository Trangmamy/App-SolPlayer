import {useNavigation} from '@react-navigation/native';
import {LIST_SONG, SONG} from 'data/index';
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const SearchTab = () => {
  const [searchText, setSearchText] = useState('');
  const filterSongs = () => {
    return LIST_SONG.filter(song =>
      song.title.toLowerCase().includes(searchText.toLowerCase()),
    );
  };
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/icons/arrow_back.png')}
            style={{marginTop: 10}}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Search songs, artist, album o..."
          onChangeText={text => setSearchText(text)}
          value={searchText}
          placeholderTextColor={'#a9abaa'}
          clearButtonMode="while-editing"
          autoCapitalize="none"
          style={{
            fontSize: 16,
            color: 'white',
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        />
      </View>
      <Text style={{color: '#fff', opacity: 0.75, fontSize: 16, padding: 10}}>
        Recent searches
      </Text>
      <FlatList
        data={filterSongs()}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.navigate('Player', {songId: item.id})}>
              <View style={styles.BoxListSong}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.location}>{item.location}</Text>
                </View>
                <Image
                  source={require('../../assets/icons/close.png')}
                  style={{alignItems: 'center', marginRight: 10}}
                />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    padding: 10,
  },
  image: {
    margin: 10,
    resizeMode: 'cover',
  },
  BoxListSong: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: '#fff',
  },
  location: {
    color: 'gray',
  },
});
