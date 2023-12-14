import React, {useEffect, useRef} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import PagerView from 'react-native-pager-view';
import {sizes} from 'src/themes';
import {ForYou} from './components/ForYou';
import {Relax} from './components/Relax';
import {useNavigation} from '@react-navigation/native';
import {Modalize} from 'react-native-modalize';

interface DataItem {
  key: string;
  title: string;
}

export const DemoTab = () => {
  const pagerRef = useRef<PagerView | null>(null);

  const data: DataItem[] = [
    {key: '1', title: 'For you'},
    {key: '2', title: 'Relax'},
    {key: '3', title: 'Workout'},
    {key: '4', title: 'Travel'},
    {key: '5', title: 'Focus'},
    {key: '6', title: 'Energize'},
  ];

  const renderItem = ({item}: {item: DataItem}) => (
    <TouchableOpacity onPress={() => navigateToPage(item.key)}>
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  const navigateToPage = (pageKey: string) => {
    const pageIndex = data.findIndex(item => item.key === pageKey);
    if (pagerRef.current) {
      pagerRef.current.setPage(pageIndex);
    }
  };
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.MainHeader}>
        <View style={styles.HeaderLeft}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '300',
              alignItems: 'center',
              color: '#fff',
              opacity: 0.75,
            }}>
            Hi Logan,
          </Text>
          <Text style={styles.HeaderText}>Good Evening</Text>
        </View>
        <View style={styles.HeaderRight}>
          <Image source={require('../../assets/icons/bell.png')} />
          <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
            <Image
              source={require('../../assets/images/avata.png')}
              style={{marginHorizontal: 20}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
      <PagerView
        ref={pagerRef}
        style={styles.pager}
        initialPage={0}
        scrollEnabled={false}
        // onPageScroll={e => console.log(e)}
        // onPageSelected={e => console.log(e)}
        //                   onPageScrollStateChanged={e => console.log(e)}
      >
        {data.map((item, index) => {
          console.log('index', index);
          switch (index) {
            case 0:
              return <ForYou />;
            case 1:
              return <Relax />;
            case 2:
              return <Page3 />;
            case 3:
              return <Page4 />;
            case 4:
              return <Page5 />;
            case 5:
              return <Page6 />;
          }
        })}
      </PagerView>
    </SafeAreaView>
  );
};

const Page3 = () => {
  return <View key={3} style={{flex: 1, backgroundColor: '#1E1E1E'}}></View>;
};
const Page4 = () => {
  return <View key={4} style={{flex: 1, backgroundColor: '#1E1E1E'}}></View>;
};
const Page5 = () => {
  return <View key={5} style={{flex: 1, backgroundColor: '#1E1E1E'}}></View>;
};
const Page6 = () => {
  return <View key={6} style={{flex: 1, backgroundColor: '#1E1E1E'}}></View>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    padding: 15,
  },
  pager: {
    flex: 100,
    alignSelf: 'stretch',
  },
  item: {
    padding: 10,
  },
  itemText: {
    fontSize: 18,
    color: '#fff',
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    // Các styles chung cho mọi trang
  },
  pageText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
  },
  MainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  HeaderLeft: {},
  HeaderText: {
    fontSize: sizes.h2,
    fontWeight: '500',
    alignItems: 'center',
    color: '#fff',
    opacity: 0.75,
  },
  HeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
