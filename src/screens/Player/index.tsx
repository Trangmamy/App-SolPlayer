import React, {useEffect, useState, useRef, useMemo} from 'react';
import {
  Animated,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Slider from '@react-native-community/slider';
import {ListRecently} from 'components/ListRecently';
import {RELEASES} from 'data/index';
import {LIST_SONG} from 'data/index';
import SoundPlayer from 'react-native-sound';
import Icon from 'react-native-vector-icons/AntDesign';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation, useRoute} from '@react-navigation/native';

SoundPlayer.setCategory('Playback');

export const Player = () => {
  const navigation = useNavigation();
  const {
    params: {songId},
  } = useRoute();
  console.log('🚀 ~ file: index.tsx:26 ~ Player ~ songId:', songId);
  const soundPlayer = useRef<any>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  useEffect(() => {
    console.log('🚀 ~ file: index.tsx:34 ~ useEffect ~ songId:', songId);
    if (!songId) return;
    const song = LIST_SONG.find(x => x.id === songId);
    soundPlayer.current = new SoundPlayer(
      song.urlMp3,
      SoundPlayer.MAIN_BUNDLE,
      error => {
        console.log('error', error);
        setIsLoading(false);
        setDuration(soundPlayer.current.getDuration());
        setIsPlaying(true);
        soundPlayer.current.play(success => {
          console.log('sdsds', success);
        });
      },
    );
    const intervalId = setInterval(() => {
      soundPlayer.current.getCurrentTime(seconds => {
        setCurrentTime(seconds);
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
      soundPlayer.current.release();
    };
  }, [songId]);

  const onPlay = () => {
    if (isLoading) return;
    setIsPlaying(true);
    soundPlayer.current.play();
  };

  const onPause = () => {
    if (isLoading) return;
    setIsPlaying(false);
    soundPlayer.current.pause();
  };
  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(
      remainingSeconds,
    ).padStart(2, '0')}`;
  };
  const skipToNextSong = () => {
    if (currentSongIndex < LIST_SONG.length - 1) {
      const nextSongIndex = currentSongIndex + 1;
      playNewSong(nextSongIndex);
    }
  };
  const skipToPreviousSong = () => {
    if (currentSongIndex > 0) {
      const previousSongIndex = currentSongIndex - 1;
      playNewSong(previousSongIndex);
    }
  };

  const playNewSong = newSongIndex => {
    // Dừng bài hát hiện tại (nếu có)
    soundPlayer.current.stop();
    soundPlayer.current.release();

    const newSong = LIST_SONG[newSongIndex];
    soundPlayer.current = new SoundPlayer(
      newSong.urlMp3,
      SoundPlayer.MAIN_BUNDLE,
      error => {
        console.log('error', error);
        setIsLoading(false);
        setDuration(soundPlayer.current.getDuration());
        setIsPlaying(true);
        soundPlayer.current.play(success => {
          console.log('sdsds', success);
        });
      },
    );

    setCurrentSongIndex(newSongIndex);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',

            paddingBottom: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
              navigation.goBack();
            }}>
            <Image source={require('../../assets/icons/back.png')} />
          </TouchableOpacity>
          <Image
            source={require('../../assets/icons/more_vert.png')}
            style={{marginRight: 20}}
          />
        </View>
        {/*Ảnh background  */}
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 15,
          }}>
          <Image
            source={require('../../assets/images/bg_song.png')}
            style={{
              width: 350,
              height: 350,
              borderRadius: 15,
              resizeMode: 'cover',
            }}
          />
        </View>
        {/*Phần dưới */}
        <View style={styles.wapper}>
          <View style={styles.box}>
            <Image source={require('../../assets/icons/cast.png')} />
            <Text style={{paddingLeft: 5, color: '#fff'}}>
              Connect to a device
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.txt}>Inside Out</Text>
            <Text style={styles.text}>The Chainsmokers, Cha...</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image source={require('../../assets/icons/favorite.png')} />
            <Image
              source={require('../../assets/icons/download_in.png')}
              style={{marginHorizontal: 10}}
            />
            <Image source={require('../../assets/icons/share.png')} />
          </View>
        </View>
        <Slider
          style={{width: '100%', height: 40}}
          value={currentTime}
          minimumValue={0}
          maximumValue={duration}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onSlidingComplete={() => {}}
        />
        <View style={styles.BroadcastTime}>
          <Text style={styles.progressLabelText}>
            {formatTime(currentTime)}
          </Text>
          <Text style={styles.progressLabelText}>{formatTime(duration)}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            paddingHorizontal: 50,
            paddingBottom: 10,
          }}>
          <Image source={require('../../assets/icons/shuffle.png')} />
          <TouchableOpacity onPress={skipToPreviousSong}>
            <Image source={require('../../assets/icons/skip-left.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            disabled={isLoading}
            onPress={() => (isPlaying ? onPause() : onPlay())}
            activeOpacity={isLoading ? 1 : 0}>
            {isPlaying ? (
              <Icon name="pause" size={30} color={'gray'} />
            ) : (
              <Icon name="play" size={30} color={'gray'} />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={skipToNextSong}>
            <Image source={require('../../assets/icons/skip-right.png')} />
          </TouchableOpacity>
          <Material name="repeat" size={25} color={'gray'} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 20, color: '#fff', opacity: 0.25}}>
            Up Next
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>Queue</Text>
            <Image source={require('../../assets/icons/navigate_next.png')} />
          </View>
        </View>
        <View style={styles.boxSing}>
          <Image
            source={require('../../assets/images/recently2.png')}
            style={{width: 48, height: 48}}
          />
          <View style={{paddingLeft: 10}}>
            <Text style={{color: '#fff', fontSize: 16}}>Young</Text>
            <Text style={styles.text}>The Chainsmokers </Text>
          </View>
        </View>
        <Text
          style={{
            color: '#fff',
            fontSize: 20,
            opacity: 0.75,
            paddingVertical: 10,
          }}>
          Songs similar to this
        </Text>
        <ListRecently list={RELEASES} />
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
  wapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  box: {
    flexDirection: 'row',
    padding: 5,
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: '#888',
  },
  txt: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    opacity: 0.75,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    opacity: 0.5,
  },
  boxSing: {
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    padding: 16,
    marginVertical: 10,
  },
  BroadcastTime: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabelText: {
    color: '#fff',
    fontWeight: '500',
  },
});
