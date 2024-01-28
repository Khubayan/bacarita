/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import Colors from '../constants/Colors';
import axios from 'axios';

async function fetchData() {
  try {
    const response = await axios.get('http://10.0.2.2:3000/api/v1/news');
    const data = response.data;
    return data;
  } catch (e: any) {
    console.log(e);
    return 0;
  }
  // try {
  //   const response = await fetch('http://10.0.2.2:3000/api/v1/news');
  //   const data = await response.json();
  //   console.log(data);
  //   return data;
  // } catch (error) {
  //   console.error(error);
  //   return 0;
  // }
}

// const limitTitleNews

const CardText = () => {
  const [allNews, setAllNews] = useState({
    message: [
      {
        body_berita: 'Ini adalah body berita',
        created_at: '2024-01-25T11:58:58.000Z',
        gambar_berita: null,
        id_berita: 0,
        id_user: null,
        tag_berita: 'Tech',
        title_berita: 'Place holder, mles buat types ;/',
      },
    ],
  });

  useEffect(() => {
    const fetchDataAndSetData = async () => {
      const fetchedData = await fetchData();
      setAllNews(fetchedData);
    };

    fetchDataAndSetData();
  }, []);

  return (
    <ScrollView
      pagingEnabled={true}
      contentContainerStyle={style.scrollContainer}>
      <FlatList
        horizontal
        pagingEnabled
        data={allNews.message}
        renderItem={({item}) => (
          <View style={style.container}>
            <Text style={style.newsTitle}>{item.title_berita}</Text>
            <View style={style.newsSubTitleContainer}>
              <Text style={style.newsSubTitle}>
                {item.created_at} - {item.tag_berita}
              </Text>
            </View>
          </View>
        )}></FlatList>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    width: 350,
    height: 200,
    backgroundColor: Colors.primary300,
    borderRadius: 15,
    marginRight: 15,
    paddingTop: 20,
    paddingLeft: 25,
    paddingRight: 15,
  },

  scrollContainer: {
    alignItems: 'center',
  },

  newsTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.fontTernary,
  },

  newsSubTitleContainer: {
    flex: 1,
    paddingBottom: 8,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',

    // backgroundColor: 'red',
  },

  newsSubTitle: {
    fontWeight: 'bold',
    color: Colors.fontTernary,
  },
});

export default CardText;
