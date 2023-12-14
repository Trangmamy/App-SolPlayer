import {useNavigation} from '@react-navigation/native';
import {ARTISTS_FOLLOWING} from 'data/index';
import React, {useState} from 'react';
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
import {SafeAreaView} from 'react-native-safe-area-context';

export const ArtistsFollowing = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
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
          Artists Following
        </Text>
      </View>
      <Text
        style={{
          fontSize: 16,
          color: '#fff',
          opacity: 0.5,
          paddingVertical: 10,
        }}>
        8 artists following
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
        data={ARTISTS_FOLLOWING}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={3}
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
  item: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    borderRadius: 8,
    marginBottom: 5,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#fff',
  },
});
