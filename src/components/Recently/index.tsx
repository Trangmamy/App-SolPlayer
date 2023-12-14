import React from 'react';
import {Button, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {sizes, spacing} from '../../themes';

const Recently = ({title = '', onPress = () => {}, buttonTitle = 'Button'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: spacing.l,
    marginRight: spacing.m,
    marginTop: spacing.l,
    marginBottom: 10,
  },
  title: {
    width: 200,
    fontSize: sizes.h2,
    fontWeight: '500',
    color: '#fff',
    opacity: 0.75,
  },
  button: {
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: sizes.h3,
    textAlign: 'center',
  },
});
export default Recently;
