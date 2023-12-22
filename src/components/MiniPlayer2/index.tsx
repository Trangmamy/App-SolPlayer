import {useEffect, useRef, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {StyleSheet, Dimensions} from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'store/index';
import {GiantPlayer} from './MaxPlayer';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {setIsMini} from 'store/reducers/player';
import {LIST_SONG} from 'data/index';
import SoundPlayer from 'react-native-sound';
import Icon from 'react-native-vector-icons/AntDesign';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';

const {height: h} = Dimensions.get('window');
const MIN_HEIGHT = 80;
const MAX_HEIGHT = MIN_HEIGHT + h;

export const MiniPlayer2 = () => {
  const inset = useSafeAreaInsets();
  const dispatch = useDispatch();
  const {songId, isMini} = useSelector((state: RootState) => state.player);

  const height = useSharedValue(MIN_HEIGHT);

  const handlePress = () => {
    dispatch(setIsMini({isMini: false}));
  };

  useEffect(() => {
    if (isMini) {
      height.value = withTiming(MIN_HEIGHT, {duration: 350});
    } else {
      height.value = withTiming(MAX_HEIGHT, {duration: 350});
    }
  }, [isMini]);

  const soundPlayer = useRef<any>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  useEffect(() => {
    if (!songId) return;
    const song: any = LIST_SONG.find(x => x.id === songId);
    soundPlayer.current = new SoundPlayer(
      song.urlMp3,
      SoundPlayer.MAIN_BUNDLE,
      error => {
        console.log('error', error);
        setIsLoading(false);
        setDuration(soundPlayer.current.getDuration());
        setIsPlaying(true);
        soundPlayer.current.play((success: any) => {
          console.log('sdsds', success);
        });
      },
    );
    const intervalId = setInterval(() => {
      soundPlayer.current.getCurrentTime((seconds: any) => {
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
  const formatTime = (seconds: any) => {
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

  const playNewSong = (newSongIndex: any) => {
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
        soundPlayer.current.play((success: any) => {
          console.log('sdsds', success);
        });
      },
    );

    setCurrentSongIndex(newSongIndex);
  };

  if (!songId) return null;

  return (
    <Animated.View style={[styles.container, {height}]}>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.miniPlayer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              paddingHorizontal: 20,
              paddingVertical: 10,
              backgroundColor: '#444444',
            }}>
            <Image
              source={require('../../assets/images/recently1.png')}
              style={{height: 60, width: 60}}
            />
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
        </View>
      </TouchableOpacity>

      {!isMini && (
        <View
          style={[
            styles.containerGaint,
            {paddingTop: inset.top + MIN_HEIGHT + 10},
          ]}>
          <GiantPlayer
            songId={songId}
            currentTime={currentTime}
            duration={duration}
            formatTime={formatTime}
            isLoading={isLoading}
            isPlaying={isPlaying}
            onPause={onPause}
            onPlay={onPlay}
            skipToNextSong={skipToNextSong}
            skipToPreviousSong={skipToPreviousSong}
          />
        </View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: '#1E1E1E',
  },
  miniPlayer: {
    height: MIN_HEIGHT,
  },
  containerGaint: {
    flex: 1,
    height: h,
    backgroundColor: '#1E1E1E',
    paddingHorizontal: 15,
  },
});
