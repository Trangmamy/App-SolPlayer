import {Mixes} from 'components/Mixes';
import Recently from 'components/Recently';
import {NEW_MIXES, PLAYLISTS} from 'data/index';
import React from 'react';
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {sizes, spacing} from 'src/themes';

export const Relax = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            color: '#fff',
            opacity: 0.75,
            fontSize: sizes.h2,
            fontWeight: '600',
            marginBottom: 20,
          }}>
          Today Refreshing Song - Recommendations
        </Text>
        <ScrollView horizontal={true}>
          <View
            style={{
              width: 288,
              height: 400,
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: 8,
              padding: 10,
              marginRight: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../../../assets/images/relax1.png')} />
              <View
                style={{
                  paddingLeft: 10,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#fff',
                    opacity: 0.75,
                  }}>
                  Peace
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '500',
                    color: '#fff',
                    opacity: 0.5,
                  }}>
                  22 songs
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: 25,
                  }}>
                  <Image
                    source={require('../../../assets/icons/favorite.png')}
                    style={{width: 24, height: 24}}
                  />
                  <Image
                    source={require('../../../assets/icons/more_vert.png')}
                    style={{marginHorizontal: 25}}
                  />
                  <Image
                    source={require('../../../assets/icons/play_arrow.png')}
                    style={{
                      width: 50,
                      height: 50,
                      marginHorizontal: 20,
                    }}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
              }}>
              <Image
                source={require('../../../assets/images/relax1a.png')}
                style={{marginRight: 10}}
              />
              <View style={{paddingRight: 120}}>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#fff',
                  }}>
                  Weightless
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#fff',
                    opacity: 0.5,
                  }}>
                  Marconi Union
                </Text>
              </View>
              <Image
                source={require('../../../assets/icons/more_vert.png')}
                style={{alignItems: 'flex-end', paddingTop: 20}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
              }}>
              <Image
                source={require('../../../assets/images/relax1b.png')}
                style={{marginRight: 10}}
              />
              <View style={{paddingRight: 120}}>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#fff',
                  }}>
                  Weightless
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#fff',
                    opacity: 0.5,
                  }}>
                  Marconi Union
                </Text>
              </View>
              <Image
                source={require('../../../assets/icons/more_vert.png')}
                style={{alignItems: 'flex-end', paddingTop: 20}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
              }}>
              <Image
                source={require('../../../assets/images/relax1c.png')}
                style={{marginRight: 10}}
              />
              <View style={{paddingRight: 120}}>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#fff',
                  }}>
                  Weightless
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#fff',
                    opacity: 0.5,
                  }}>
                  Marconi Union
                </Text>
              </View>
              <Image
                source={require('../../../assets/icons/more_vert.png')}
                style={{alignItems: 'flex-end', paddingTop: 20}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
              }}>
              <Image
                source={require('../../../assets/images/relax1d.png')}
                style={{marginRight: 10}}
              />
              <View style={{paddingRight: 120}}>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#fff',
                  }}>
                  Weightless
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#fff',
                    opacity: 0.5,
                  }}>
                  Marconi Union
                </Text>
              </View>
              <Image
                source={require('../../../assets/icons/more_vert.png')}
                style={{alignItems: 'flex-end', paddingTop: 20}}
              />
            </View>
            <View
              style={{
                width: 60,
                height: 30,
                borderRadius: 55,
                position: 'absolute',
                right: 15,
                bottom: 20,
                backgroundColor: '#f0f0f0',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#000', fontSize: 12}} onPress={() => {}}>
                See All
              </Text>
            </View>
          </View>

          <View
            style={{
              width: 288,
              height: 400,
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: 8,
              padding: 10,
              marginRight: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../../../assets/images/relax2.png')} />
              <View style={{paddingLeft: 10}}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#fff',
                    opacity: 0.75,
                  }}>
                  Peace
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '500',
                    color: '#fff',
                    opacity: 0.5,
                  }}>
                  22 songs
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: 25,
                  }}>
                  <Image
                    source={require('../../../assets/icons/favorite.png')}
                    style={{width: 24, height: 24}}
                  />
                  <Image
                    source={require('../../../assets/icons/more_vert.png')}
                    style={{marginHorizontal: 25}}
                  />
                  <Image
                    source={require('../../../assets/icons/play_arrow.png')}
                    style={{
                      width: 50,
                      height: 50,
                      marginHorizontal: 20,
                    }}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
              }}>
              <Image
                source={require('../../../assets/images/relax2a.png')}
                style={{marginRight: 10}}
              />
              <View style={{paddingRight: 120}}>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#fff',
                  }}>
                  Weightless
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#fff',
                    opacity: 0.5,
                  }}>
                  Marconi Union
                </Text>
              </View>
              <Image
                source={require('../../../assets/icons/more_vert.png')}
                style={{alignItems: 'flex-end', paddingTop: 20}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
              }}>
              <Image
                source={require('../../../assets/images/relax2b.png')}
                style={{marginRight: 10}}
              />
              <View style={{paddingRight: 120}}>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#fff',
                  }}>
                  Weightless
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#fff',
                    opacity: 0.5,
                  }}>
                  Marconi Union
                </Text>
              </View>
              <Image
                source={require('../../../assets/icons/more_vert.png')}
                style={{alignItems: 'flex-end', paddingTop: 20}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
              }}>
              <Image
                source={require('../../../assets/images/relax2c.png')}
                style={{marginRight: 10}}
              />
              <View style={{paddingRight: 120}}>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#fff',
                  }}>
                  Weightless
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#fff',
                    opacity: 0.5,
                  }}>
                  Marconi Union
                </Text>
              </View>
              <Image
                source={require('../../../assets/icons/more_vert.png')}
                style={{alignItems: 'flex-end', paddingTop: 20}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
              }}>
              <Image
                source={require('../../../assets/images/relax2d.png')}
                style={{marginRight: 10}}
              />
              <View style={{paddingRight: 120}}>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#fff',
                  }}>
                  Weightless
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#fff',
                    opacity: 0.5,
                  }}>
                  Marconi Union
                </Text>
              </View>
              <Image
                source={require('../../../assets/icons/more_vert.png')}
                style={{alignItems: 'flex-end', paddingTop: 20}}
              />
            </View>
            <View
              style={{
                width: 60,
                height: 30,
                borderRadius: 55,
                position: 'absolute',
                right: 15,
                bottom: 20,
                backgroundColor: '#f0f0f0',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#000', fontSize: 12}} onPress={() => {}}>
                See All
              </Text>
            </View>
          </View>

          <View
            style={{
              width: 288,
              height: 400,
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: 8,
              padding: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../../../assets/images/relax3.png')} />
              <View style={{paddingLeft: 10}}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#fff',
                    opacity: 0.75,
                  }}>
                  Peace
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '500',
                    color: '#fff',
                    opacity: 0.5,
                  }}>
                  22 songs
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: 25,
                  }}>
                  <Image
                    source={require('../../../assets/icons/favorite.png')}
                    style={{width: 24, height: 24}}
                  />
                  <Image
                    source={require('../../../assets/icons/more_vert.png')}
                    style={{marginHorizontal: 25}}
                  />
                  <Image
                    source={require('../../../assets/icons/play_arrow.png')}
                    style={{
                      width: 50,
                      height: 50,
                      marginHorizontal: 20,
                    }}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
              }}>
              <Image
                source={require('../../../assets/images/relax3a.png')}
                style={{marginRight: 10}}
              />
              <View style={{paddingRight: 120}}>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#fff',
                  }}>
                  Weightless
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#fff',
                    opacity: 0.5,
                  }}>
                  Marconi Union
                </Text>
              </View>
              <Image
                source={require('../../../assets/icons/more_vert.png')}
                style={{alignItems: 'flex-end', paddingTop: 20}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
              }}>
              <Image
                source={require('../../../assets/images/relax3b.png')}
                style={{marginRight: 10}}
              />
              <View style={{paddingRight: 120}}>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#fff',
                  }}>
                  Weightless
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#fff',
                    opacity: 0.5,
                  }}>
                  Marconi Union
                </Text>
              </View>
              <Image
                source={require('../../../assets/icons/more_vert.png')}
                style={{alignItems: 'flex-end', paddingTop: 20}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
              }}>
              <Image
                source={require('../../../assets/images/relax3c.png')}
                style={{marginRight: 10}}
              />
              <View style={{paddingRight: 120}}>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#fff',
                  }}>
                  Weightless
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#fff',
                    opacity: 0.5,
                  }}>
                  Marconi Union
                </Text>
              </View>
              <Image
                source={require('../../../assets/icons/more_vert.png')}
                style={{alignItems: 'flex-end', paddingTop: 20}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
              }}>
              <Image
                source={require('../../../assets/images/relax3d.png')}
                style={{marginRight: 10}}
              />
              <View style={{paddingRight: 120}}>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#fff',
                  }}>
                  Weightless
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#fff',
                    opacity: 0.5,
                  }}>
                  Marconi Union
                </Text>
              </View>
              <Image
                source={require('../../../assets/icons/more_vert.png')}
                style={{alignItems: 'flex-end', paddingTop: 20}}
              />
            </View>
            <View
              style={{
                width: 60,
                height: 30,
                borderRadius: 55,
                position: 'absolute',
                right: 15,
                bottom: 20,
                backgroundColor: '#f0f0f0',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#000', fontSize: 12}} onPress={() => {}}>
                See All
              </Text>
            </View>
          </View>
        </ScrollView>

        <Text
          style={{
            fontSize: sizes.h2,
            fontWeight: '500',
            color: '#fff',
            opacity: 0.75,
            marginLeft: spacing.l,
            marginTop: spacing.l,
          }}>
          Mixes for you
        </Text>
        <Mixes list={NEW_MIXES} />
        <Recently title="Playlists" buttonTitle="See more" onPress={() => {}} />
        <Mixes list={PLAYLISTS} />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
});
