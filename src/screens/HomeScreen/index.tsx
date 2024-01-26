/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {View, Text, StyleSheet, Pressable} from 'react-native';
// import SearchBar from '../components/SearchBar';
import Colors from '../../constants/Colors';
import CardText from '../../components/CardText';
import ItemList from '../../components/ItemList';
import {ScrollView} from 'react-native-gesture-handler';
import Badge from '../../components/Bagdge';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
// import {useEffect} from 'react';
// import {AppRootParamList} from '../types/NavigationTypes';

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

const NewsScreen = () => {
  const navigation = useNavigation();

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(json => console.log(json));
  // }, []);

  // any :/
  const handlePressNavigation = (pageName: any) => {
    navigation.navigate(pageName);
  };

  // const handlePressBadge = () => {

  // }

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
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.container}>
        {/* <View>
          {allNews ? (
            <Text>{JSON.stringify(allNews.message[0].title_berita)}</Text> // Displaying fetched data as JSON string
          ) : (
            <Text>Loading...</Text> // Placeholder while data is being fetched
          )}
        </View> */}
        <View style={style.badgeContainer}>
          <Badge name="All" />
          <Badge name="Finance" isActive={false} />
          <Badge name="Sport" isActive={false} />
          <Badge name="Lifestyle" isActive={false} />
        </View>
        <View>
          <Text style={[style.titleSection, style.mainTitle]}>Latest News</Text>
          <CardText />
        </View>
        <View>
          <View style={[style.titleSection, style.flexRow]}>
            <Text style={style.titleColor}>Around the world</Text>
            <Text>See All</Text>
          </View>
          <View>
            <Pressable
              onPress={() => {
                handlePressNavigation('FirstNews');
              }}>
              <ItemList
                itemImageLocalPath={require('../../assets/images/meta.jpg')}
                itemTitle={
                  allNews
                    ? JSON.stringify(allNews.message[0].title_berita)
                    : 'loading...'
                }
                itemDate="November 20, 2023"
                itemBadge={{name: 'Techno'}}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                handlePressNavigation('SecondNews');
              }}>
              <ItemList
                itemImageLocalPath={require('../../assets/images/btc.jpg')}
                itemTitle="Binance's Changpeng Zhao to step down as part of $4.3..."
                itemDate="November 22, 2023"
                itemBadge={{name: 'Crypto'}}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                handlePressNavigation('ThirdNews');
              }}>
              <ItemList
                itemImageLocalPath={require('../../assets/images/doge.jpg')}
                itemTitle="Elon Musk reaffirms support for Dogecoin, Tesla holds..."
                itemDate="November 21, 2023"
                itemBadge={{name: 'Crypto'}}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary900,
    // backgroundColor: 'black',
    flex: 1,
    // paddingVertical: 30,
    paddingHorizontal: 16,
  },

  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  titleSection: {
    // fontSize: 30,

    marginVertical: 4,
    marginTop: 30,
    marginBottom: 10,
  },
  mainTitle: {
    color: Colors.fontPrimary,
    fontSize: 30,
    fontWeight: 'bold',
  },
  titleColor: {
    color: Colors.fontPrimary,
    fontWeight: 'bold',
  },
  badgeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default NewsScreen;
