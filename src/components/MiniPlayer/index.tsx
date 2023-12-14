import {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
  Alert,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const {height} = Dimensions.get('window');

const AnimatedButton = Animated.createAnimatedComponent(TouchableHighlight);

export const MiniPlayer = () => {
  const [isExpand, setIsExpand] = useState(false);
  const animate = new Animated.Value(40);

  const onPressPlayer = () => {
    setIsExpand(!isExpand);

    if (isExpand) {
      animate.setValue(height);
    } else {
      animate.setValue(40);
    }
  };

  return (
    <AnimatedButton style={[styles.button, {height}]} onPress={onPressPlayer}>
      <View style={styles.container}>
        <Image source={require('src/assets/images/recently1.png')} />
        <View style={{marginLeft: -50}}>
          <Text style={{color: '#fff', fontSize: 16}}>Inside Out</Text>
          <Text style={{color: 'rgba(255, 255, 255, 0.5)', fontSize: 16}}>
            The Chainsmokers, Charlee{' '}
          </Text>
        </View>
        <Icon name="caretright" size={25} color={'#fff'} />
      </View>
    </AnimatedButton>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 49,
    padding: 4,
  },
});
