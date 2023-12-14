import React, {useRef} from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {colors, shadow, sizes, spacing} from '../../themes';
import {Modalize} from 'react-native-modalize';

const CARD_WIDTH = 80;
const CARD_HEIGHT = 80;
export const ListRecently = ({list}: {list: any[]}) => {
  return (
    <View>
      <FlatList
        data={list}
        horizontal
        decelerationRate="fast"
        keyExtractor={i => i.name}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                marginLeft: spacing.l,
                marginRight: index === list.length - 1 ? spacing.l : 0,
              }}>
              <View style={[styles.card, shadow.dark]}>
                <View style={styles.imageBox}>
                  <Image source={item.image} style={styles.image} />
                </View>
              </View>
              <Text
                style={{
                  color: '#fff',
                  opacity: 0.5,
                  fontSize: 15,
                  alignItems: 'center',
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginVertical: 10,
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    resizeMode: 'cover',
    alignItems: 'center',
  },
});
