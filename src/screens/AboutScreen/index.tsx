/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import EncryptedStorage from 'react-native-encrypted-storage';
import {getUserSesssion} from '../../store/SessionStore';
const AboutScreen = () => {
  const navigation = useNavigation();
  const [session, setSession] = useState();
  async function fetchData() {
    try {
      const requestOptions = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${await EncryptedStorage.getItem(
            'user_session',
          )}`,
        },
      };
      const response = await fetch(
        'http://10.0.2.2:3000/api/v1/news',
        requestOptions,
      );
      const data = await response.json();
      console.log(data, 'dari about screen');
      console.log(data.message);

      // if ((data.message = ' Unauthorized')) {
      //   navigation.navigate('LoginScreen');
      // }

      // useEffect(() => {
      //   if (session === null) {
      //     navigation.navigate('LoginScreen');
      //   }
      //   console.log('kenapa about login lagi?', session);
      // }, []);

      return data;
    } catch (error) {
      console.error(error);
      return 0;
    }
  }
  useEffect(() => {
    fetchData();

    // retrieveUserSession();
  }, []);
  // console.log(session);

  useEffect(() => {
    if (session === null) {
      navigation.navigate('LoginScreen');
    }
    console.log('kenapa about login lagi?', session);
  }, [session]);
  console.log('sesi di about', session);
  // if (!session) {
  //   navigation.navigate('LoginScreen');
  // }

  const [news, setNews] = useState({
    id: '',
    title: '',
    body: '',
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setNews(json));
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Masih Maintenance:)</Text>
      <Text>Kata Yuda:)</Text>
      <Text>{news.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 55,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitle: {
    fontFamily: 'Caveat',
    textAlign: 'center',
    fontSize: 30,
  },
});

export default AboutScreen;
