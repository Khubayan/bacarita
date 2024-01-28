import {FlatList, Pressable} from 'react-native';
import ItemList from './ItemList';
import {useNavigation} from '@react-navigation/native';

const ItemLists = (allNews: any) => {
  const navigation = useNavigation();
  const handlePressNavigation = (newsData: any) => {
    navigation.navigate('FirstNews', newsData);
  };
  return (
    <>
      {allNews.map((news: any, index: number) => (
        <Pressable
          key={index} // Don't forget to add a unique key to each child in a list
          onPress={() => {
            handlePressNavigation(news);
          }}>
          <ItemList
            itemImageLocalPath={require('../assets/images/meta.jpg')}
            itemTitle={news ? JSON.stringify(news.title_berita) : 'loading...'}
            itemDate="November 20, 2023"
            itemBadge={{name: 'Techno'}}
          />
        </Pressable>
      ))}
    </>
  );
};

export default ItemLists;
