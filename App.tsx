import 'react-native-screens';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import {Router} from './src/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {PortalProvider} from '@gorhom/portal';

export default () => {
  return (
    <SafeAreaProvider style={{flex: 1, backgroundColor: '#FCFCFC'}}>
      <Provider store={store}>
        <PortalProvider>
          <GestureHandlerRootView style={{flex: 1}}>
            <Router />
          </GestureHandlerRootView>
        </PortalProvider>
      </Provider>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
