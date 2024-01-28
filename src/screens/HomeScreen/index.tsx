/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {View, Text, StyleSheet, Pressable} from 'react-native';
// import SearchBar from '../components/SearchBar';
import Colors from '../../constants/Colors';
import CardText from '../../components/CardText';
import ItemList from '../../components/ItemList';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import Badge from '../../components/Bagdge';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import {getUserSesssion} from '../../store/SessionStore';
import axios from 'axios';
import ItemLists from '../../components/ItemLists';

// import {useEffect} from 'react';
// import {AppRootParamList} from '../types/NavigationTypes';

async function fetchData() {
  try {
    const response = await axios.get('http://10.0.2.2:3000/api/v1/news');
    const data = response.data;
    return data;
  } catch (e: any) {
    console.log(e);
    return 0;
  }
}
let relog = true;

const NewsScreen = () => {
  const navigation = useNavigation();
  const handlePressNavigation = (newsData: any) => {
    navigation.navigate('FirstNews', newsData);
  };

  //news
  const [allNews, setAllNews] = useState({
    message: [false],
  });

  useEffect(() => {
    const fetchDataAndSetData = async () => {
      const fetchedData = await fetchData();
      setAllNews(fetchedData);
    };

    // relog != relog;
    fetchDataAndSetData();
  }, [allNews]);

  // Relogin after 1 minute, why. I DON'T KNOW!!!!!!!!!!!!!!!!!!!!!. The token just gone, I have no idea why even i using package/lib for presistent store, not using AsyncStorage beacuse deprecated.
  useEffect(() => {
    const intervalId = setInterval(async () => {
      console.log('allnews', allNews);
      if (allNews.message[0] === false) {
        relog = true;
        console.log(allNews.message[0], 'oii');
      }
    }, 60000 * 60);
    console.log(relog, 'oii');

    return () => clearInterval(intervalId);
  }, [relog]);

  useEffect(() => {
    if (relog) {
      const relogin = async () => {
        console.log(await getUserSesssion(), 'nanti ilang');
        navigation.replace('LoginScreen');
        relog = false;
      };
      relogin();
    }
  }, [relog]);

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
            {/* This is not using Flatlist because React says that Flatlist shouldn't inside ScrollView or vice versa. Stackoverflow told me to do this, so be it:/ */}
            {allNews.message?.map((news: any, index: number) => (
              <Pressable
                key={index} // Don't forget to add a unique key to each child in a list
                onPress={() => {
                  handlePressNavigation(news);
                }}>
                <ItemList
                  itemImageLocalPath={require('../../assets/images/meta.jpg')}
                  itemTitle={
                    news ? JSON.stringify(news.title_berita) : 'loading...'
                  }
                  itemDate="November 20, 2023"
                  itemBadge={{name: news.tag_berita}}
                />
              </Pressable>
            ))}
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
// news
// const [allNews, setAllNews] = useState({
//   message: [
//     {
//       body_berita: 'Ini adalah body berita',
//       created_at: '2024-01-25T11:58:58.000Z',
//       gambar_berita: null,
//       id_berita: 0,
//       id_user: null,
//       tag_berita: 'Tech',
//       title_berita: 'Place holder, mles buat types ;/',
//     },
//   ],
// });

// useEffect(() => {
//   const fetchDataAndSetData = async () => {
//     const fetchedData = await fetchData();
//     setAllNews(fetchedData);
//   };

//   fetchDataAndSetData();
// }, []);

// const [allNews, settestCon] = useState({
//   message: [
//     {
//       body_berita: 'Ini adalah body berita',
//       created_at: '2024-01-25T11:58:58.000Z',
//       gambar_berita: null,
//       id_berita: 0,
//       id_user: null,
//       tag_berita: 'Tech',
//       title_berita: 'Loading.....',
//     },
//   ],
// });
// const [session, setSession] = useState('');

// useEffect(() => {
//   console.log(getUserSesssion(), 'bjir home screen');
//   // if (session === null) {
//   //   navigation.navigate('LoginScreen');
//   // }

//   // settestCon(fetchdata());
//   const intervalId = setInterval(() => {
//     // settestCon();
//     fetchdata();
//     console.log('This runs every 10 seconds', session, '<');
//   }, 5000);

//   if (testCon.message === 'Unauthorized') {
//     navigation.replace('LoginScreen');
//   }
//   return () => clearInterval(intervalId);
// }, [testCon.message]);
// const navigation = useNavigation();

// fetch news
