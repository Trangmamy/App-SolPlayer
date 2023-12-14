import React from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {setIsLogin} from '../../store/reducers/auth';
import {Container} from '../../components/Container';

export const SignUpScreen = () => {
  const distpatch = useDispatch();
  const login = () => {
    distpatch(setIsLogin({isLogin: true}));
  };
  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.Logo}>
          <View style={styles.header}>
            <Text style={styles.NameApp}>Musico</Text>
            <Image
              source={require('../../assets/icons/logo.png')}
              style={styles.ImgLogo}
            />
          </View>
          <Text style={styles.Just}>Just keep on vibin'</Text>
        </View>

        <View style={styles.boxSignUp}>
          <View style={styles.box1}>
            <TouchableOpacity
              onPress={login}
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.SignUp}>Sign up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <Image source={require('../../assets/icons/Phone.png')} />
            <Text style={styles.Text}>Continue with Phone Number</Text>
          </View>
          <View style={styles.box}>
            <Image source={require('../../assets/icons/Google.png')} />
            <Text style={styles.Text}>Continue with Google</Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.Text}>Log in</Text>
          </View>
        </View>
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#1E1E1E',
  },
  Logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
  },
  ImgLogo: {
    marginLeft: 10,
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  NameApp: {
    marginTop: 80,
    marginBottom: 20,
    fontSize: 40,
    fontWeight: '800',
    color: '#fff',
    opacity: 0.75,
  },
  Just: {
    fontSize: 20,
    fontWeight: '300',
    alignItems: 'center',
    color: '#fff',
    opacity: 0.5,
  },
  boxSignUp: {
    width: '100%',
    height: '40%',
  },
  box: {
    height: 60,
    margin: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 2,
    flexDirection: 'row',
  },
  Text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
    opacity: 0.75,
    marginLeft: 30,
  },
  box1: {
    height: 60,
    margin: 10,
    borderRadius: 30,
    backgroundColor: '#fff',
    opacity: 0.75,
  },
  SignUp: {
    color: '#000',
    fontWeight: '800',
    fontSize: 18,
  },
  box2: {
    height: 60,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 50,
  },
});
