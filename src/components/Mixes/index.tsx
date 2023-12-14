import React from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {colors, shadow, sizes, spacing} from '../../themes';

const CARD_WIDTH = 120;
const CARD_HEIGHT = 120;
export const Mixes = ({list}: {list: any[]}) => {
  return (
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
                fontSize: 13,
                alignItems: 'center',
                width: 120,
              }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
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
