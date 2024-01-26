/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Colors from '../constants/Colors';

async function fetchData() {
  try {
    const response = await fetch('http://10.0.2.2:3000/api/v1/news');
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return 0;
  }
}

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
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
      contentContainerStyle={style.scrollContainer}>
      {/* <Image source={require('../assets/images/btc.jpg')} /> */}
      <View style={style.container}>
        <Text style={style.newsTitle}>
          {allNews ? allNews.message[0].body_berita : 'loading...'}
        </Text>
        <View style={style.newsSubTitleContainer}>
          <Text style={style.newsSubTitle}>November 20, 2023 - CNBC</Text>
        </View>
      </View>
      <View style={style.container}>
        <Text style={style.newsTitle}>
          Elon Musk reaffirms support for Dogecoin, Tesla holds...
        </Text>
        <View style={style.newsSubTitleContainer}>
          <Text style={style.newsSubTitle}>
            November 21, 2023 - Investing.com
          </Text>
        </View>
      </View>
      <View style={style.container}>
        <Text style={style.newsTitle}>
          Binance's Changpeng Zhao to step down as part of $4.3...
        </Text>
        <View style={style.newsSubTitleContainer}>
          <Text style={style.newsSubTitle}>November 22, 2023 - CNBC</Text>
        </View>
      </View>
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

    justifyContent: 'center',
    // alignContent: 'center',

    // backgroundColor: 'red',
  },

  newsSubTitle: {
    fontWeight: 'bold',
    color: Colors.fontTernary,
  },
});

export default CardText;
