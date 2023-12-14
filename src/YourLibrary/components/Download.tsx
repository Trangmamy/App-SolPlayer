import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {LIKED_SONG} from 'data/index';

export const Download = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const filterSongs = () => {
    return LIKED_SONG.filter(song =>
      song.title.toLowerCase().includes(searchText.toLowerCase()),
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/icons/back.png')} />
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 24,
            color: '#fff',
            opacity: 0.75,
            paddingLeft: 20,
          }}>
          Downloads
        </Text>
      </View>
      <Text
        style={{
          fontSize: 16,
          color: '#fff',
          opacity: 0.5,
          paddingVertical: 10,
        }}>
        210 songs downloaded
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={styles.searchBox}>
          <Image source={require('../../assets/icons/search.png')} />
          <TextInput
            placeholder="Search "
            onChangeText={text => setSearchText(text)}
            value={searchText}
            //placeholderTextColor={'#a9abaa'}
            //clearButtonMode="while-editing"
            autoCapitalize="none"
            style={{
              fontSize: 16,
              color: 'white',
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
          />
        </View>
        <Image source={require('../../assets/icons/haichieu.png')} />
      </View>
      <FlatList
        data={filterSongs()}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity>
              <View style={styles.BoxListSong}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.location}>{item.location}</Text>
                </View>
                <Image
                  source={require('../../assets/icons/more_vert.png')}
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
    padding: 15,
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
  image: {
    margin: 10,
    resizeMode: 'cover',
    width: 32,
    height: 32,
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    opacity: 0.75,
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    margin: 10,
    flex: 1,
  },
});
