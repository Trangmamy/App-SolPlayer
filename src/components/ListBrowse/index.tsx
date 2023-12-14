import React from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {colors, shadow, sizes, spacing} from '../../themes';

const CARD_WIDTH = 160;
const CARD_HEIGHT = 80;
export const ListBrowse = ({list}: {list: any[]}) => {
  return (
    <View style={styles.container}>
      {list.map((item, index) => {
        return (
          <TouchableOpacity style={styles.cardContainer}>
            <View style={styles.imageBox}>
              <Image style={styles.image} source={item.image} />
            </View>
            <View style={styles.titleBox}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardContainer: {
    marginLeft: spacing.l,
    marginBottom: spacing.l,
    position: 'relative',
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 16,
    overflow: 'hidden',
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    resizeMode: 'cover',
  },
  titleBox: {
    position: 'absolute',
    bottom: CARD_HEIGHT - 75,
    width: CARD_WIDTH,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    opacity: 0.75,
  },
});
