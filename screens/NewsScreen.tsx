/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {View, Text, StyleSheet, Pressable} from 'react-native';
// import SearchBar from '../components/SearchBar';
import Colors from '../constants/Colors';
import CardText from '../components/CardText';
import ItemList from '../components/ItemList';
import {ScrollView} from 'react-native-gesture-handler';
import Badge from '../components/Bagdge';
import {useNavigation} from '@react-navigation/native';

const NewsScreen = () => {
  const navigation = useNavigation();

  const handlePressNavigation = () => {
    navigation.navigate('MainNewsPage');
  };

  // const handlePressBadge = () => {

  // }

  return (
    <ScrollView>
      <View style={style.container}>
        {/* <View>
          <Text>Hello</Text>
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
            <Pressable onPress={handlePressNavigation}>
              <ItemList
                itemImageLocalPath={require('../assets/images/meta.jpg')}
                itemTitle="Facebook-parent Meta breaks up its Responsible AI team"
                itemDate="November 20, 2023"
                itemBadge={{name: 'Techno'}}
              />
            </Pressable>
            <ItemList
              itemImageLocalPath={require('../assets/images/btc.jpg')}
              itemTitle="Binance's Changpeng Zhao to step down as part of $4.3..."
              itemDate="November 22, 2023"
              itemBadge={{name: 'Crypto'}}
            />
            <ItemList
              itemImageLocalPath={require('../assets/images/doge.jpg')}
              itemTitle="Elon Musk reaffirms support for Dogecoin, Tesla holds..."
              itemDate="November 21, 2023"
              itemBadge={{name: 'Crypto'}}
            />
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
