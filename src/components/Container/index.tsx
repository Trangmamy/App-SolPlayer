import {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Container = (props: any) => {
  return (
    <SafeAreaView style={{flex: 1}} edges={['bottom', 'left', 'right', 'top']}>
      {props.children}
    </SafeAreaView>
  );
};
