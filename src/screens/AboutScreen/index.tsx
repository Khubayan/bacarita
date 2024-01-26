/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AboutScreen = () => {
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
