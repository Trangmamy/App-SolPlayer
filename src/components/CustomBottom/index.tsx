import {Portal} from '@gorhom/portal';
import {useCallback, useEffect, useMemo, useRef} from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity, View} from 'react-native';
import {Modalize} from 'react-native-modalize';
import Entypo from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Iconlibrary from 'react-native-vector-icons/MaterialIcons';

export const CustomBottom = (props: any) => {
  const {state, descriptors, navigation} = props;
  const modalizeRef = useRef<Modalize>();

  useEffect(() => {
    modalizeRef.current?.open();
  }, []);

  const Icon = useCallback((key: string, isFocused: boolean) => {
    switch (key) {
      case 'Home':
        return isFocused ? (
          <Entypo name="home-variant" size={24} color="white" />
        ) : (
          <Entypo name="home-variant-outline" size={24} color="gray" />
        );
      case 'Search':
        return isFocused ? (
          <Ionicons name="search" size={24} color="white" />
        ) : (
          <Ionicons name="search" size={24} color="gray" />
        );
      case 'YourLibrary':
        return isFocused ? (
          <Iconlibrary name="library-music" size={24} color="white" />
        ) : (
          <Iconlibrary name="library-music" size={24} color="gray" />
        );
    }
  }, []);

  return (
    <Portal>
      <View style={styles.container}>
        {state.routes.map((route: any, index: number) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          return (
            <TouchableOpacity
              key={label + index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={styles.button}>
              <View style={styles.containerButton}>
                {Icon(route.name, isFocused)}
                <Text style={{color: isFocused ? '#fff' : '#f7f7f7'}}>
                  {label}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </Portal>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#000',
    height: 50,
    paddingVertical: 10,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
