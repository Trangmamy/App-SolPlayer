import {useNavigation} from '@react-navigation/native';
import {PLAYLIST} from 'data/index';
import React from 'react';
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

export const Playlist = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.location}>{item.location}</Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
            Playlists
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            color: '#fff',
            opacity: 0.5,
            paddingVertical: 10,
          }}>
          12 playlists
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
              autoCapitalize="none"
              style={{
                fontSize: 16,
                color: 'white',
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}
            />
          </View>
          <Image source={require('../../assets/icons/add.png')} />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../assets/icons/haichieu.png')}
            style={{width: 20, height: 20, marginRight: 5}}
          />
          <Text style={{color: '#fff', fontSize: 16, opacity: 0.75}}>
            Recents
          </Text>
        </View>
        <FlatList
          data={PLAYLIST}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.container}
        />
      </ScrollView>
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
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#fff',
  },
  location: {
    fontSize: 12,
    color: '#888',
  },
});
