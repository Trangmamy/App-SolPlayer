import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ListBrowse} from '../../components/ListBrowse';
import {BROWSE} from '../../data';
import {useNavigation} from '@react-navigation/native';

export const SearchScreen = () => {
  const navigation = useNavigation();
  const [artists, setArtists] = useState([
    {
      name: 'Childish Gambino',
      image: require('../../assets/images/artists1.png'),
    },
    {
      name: 'Marvin Gaye',
      image: require('../../assets/images/artists2.png'),
    },
    {
      name: 'Kanye West',
      image: require('../../assets/images/artists3.png'),
    },
    {
      name: 'Justin Beiber',
      image: require('../../assets/images/artists4.png'),
    },
    {
      name: 'Charlie Puth',
      image: require('../../assets/images/artists5.png'),
    },
    {
      name: 'Imagine Dragons',
      image: require('../../assets/images/artists6.png'),
    },
    {
      name: 'Kygo',
      image: require('../../assets/images/artists7.png'),
    },
    {
      name: 'Taylor Swift',
      image: require('../../assets/images/artists8.png'),
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('SearchTab')}>
          <View style={styles.searchBox}>
            <Image source={require('../../assets/icons/search.png')} />
            <Text style={{paddingStart: 10}}>
              Search songs, artist, album o...
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../assets/icons/trending_up.png')}
            style={{
              height: 24,
              width: 24,
              marginHorizontal: 10,
              alignItems: 'center',
            }}
          />
          <Text style={{color: '#fff', opacity: 0.75, fontSize: 16}}>
            Trending artists
          </Text>
        </View>
        <FlatList
          horizontal={true}
          data={artists}
          keyExtractor={item => item.name}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{justifyContent: 'center', alignItems: 'center'}}>
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
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
          style={{flex: 1}}></FlatList>
        <Text
          style={{
            color: '#fff',
            opacity: 0.75,
            fontSize: 16,
            marginLeft: 10,
            marginVertical: 10,
          }}>
          Browse
        </Text>
        <ListBrowse list={BROWSE} />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    padding: 10,
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    opacity: 0.75,
    borderRadius: 8,
    paddingHorizontal: 10,
    alignItems: 'center',
    margin: 10,
    height: 40,
  },
});
