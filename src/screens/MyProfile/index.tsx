import React, {useState} from 'react';
import {Alert, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconbox from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const MyProfile = () => {
  const navigation = useNavigation();
  const showLogoutConfirmation = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout of Musico?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: () => handleLogout(),
        },
      ],
      {cancelable: false},
    );
  };

  const handleLogout = () => {
    navigation.navigate('SignUpScreen');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.title}>My Profile</Text>
          </TouchableOpacity>
          <View style={styles.edit}>
            <Icon name="pencil" size={18} color={''} />
            <Text style={{fontSize: 16, marginLeft: 5}}>Edit</Text>
          </View>
        </View>
        <View style={{alignItems: 'center', marginBottom: 20}}>
          <Image source={require('../../assets/images/AvataMain.png')} />
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginTop: 10,
              color: 'rgba(255, 255, 255, 0.75)',
            }}>
            Logan Jimmy
          </Text>
        </View>
        <Text style={styles.one}>Email</Text>
        <Text style={styles.two}>jim_logan01@gmail.com</Text>
        <Text style={styles.one}>Phone Number</Text>
        <Text style={styles.two}>8844662200</Text>
        <View style={styles.header}>
          <View style={styles.box}>
            <Image source={require('../../assets/icons/favorite.png')} />
            <Text style={styles.two}>120 songs</Text>
          </View>
          <View style={styles.box}>
            <Image source={require('../../assets/icons/music.png')} />
            <Text style={styles.two}>12 playlists</Text>
          </View>
          <View style={styles.box}>
            <Image source={require('../../assets/icons/account.png')} />
            <Text style={styles.two}>3 artists</Text>
          </View>
        </View>
        <View>
          <Text style={styles.title}>Settings</Text>
          <View style={styles.header}>
            <Text style={styles.one}>Music Language(s)</Text>
            <Text style={styles.three}>English, Tamil</Text>
          </View>
          <View style={styles.header}>
            <Text style={styles.one}>Streaming Quality</Text>
            <Text style={styles.three}>HD</Text>
          </View>
          <View style={styles.header}>
            <Text style={styles.one}>Download Quality</Text>
            <Text style={styles.three}>HD</Text>
          </View>
          <View style={styles.header}>
            <View>
              <Text style={styles.one}>Equalizer</Text>
              <Text style={styles.two}>Adjust audio settings</Text>
            </View>
            <Image source={require('../../assets/icons/navigate_next.png')} />
          </View>
          <View style={styles.header}>
            <Text style={styles.one}>Auto-Play</Text>
            <Iconbox name="toggle-on" size={30} color={'gray'} />
          </View>
          <View style={styles.header}>
            <Text style={styles.one}>Show Lyrics on Player</Text>
            <Iconbox name="toggle-on" size={30} color={'gray'} />
          </View>
          <View style={styles.header}>
            <View>
              <Text style={styles.one}>Connect to a Device</Text>
              <Text style={styles.two}>
                Listen to and control music on your devices
              </Text>
            </View>
            <Image source={require('../../assets/icons/navigate_next.png')} />
          </View>
        </View>
        <View>
          <Text style={styles.title}>Others</Text>
          <View style={styles.header}>
            <Text style={styles.one}>Help & Support</Text>
            <Image source={require('../../assets/icons/navigate_next.png')} />
          </View>
          <View style={styles.header}>
            <Text style={styles.one}>Logout</Text>
            <TouchableOpacity onPress={showLogoutConfirmation}>
              <Image source={require('../../assets/icons/navigate_next.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  edit: {
    flexDirection: 'row',
    height: 30,
    width: 75,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  one: {
    fontSize: 18,
    color: '#fff',
    marginTop: 5,
  },
  two: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.5,
    marginTop: 5,
  },
  three: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
  box: {
    width: 100,
    height: 70,
    borderRadius: 8,
    marginTop: 20,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  title: {
    color: '#fff',
    fontSize: 26,
    paddingVertical: 20,
  },
});
