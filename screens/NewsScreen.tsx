/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {View, Text, StyleSheet} from 'react-native';
// import SearchBar from '../components/SearchBar';
import Colors from '../constants/Colors';
import CardText from '../components/CardText';

const NewsScreen = () => {
  return (
    <View style={style.container}>
      <View>
        <Text>Hello</Text>
      </View>
      <View>
        <Text>Genre</Text>
      </View>
      <View>
        <Text
          style={{fontSize: 30, color: Colors.fontPrimary, marginVertical: 4}}>
          Latest News
        </Text>
        <CardText />
      </View>
      <View>
        <Text>Around the world</Text>
      </View>
    </View>
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
});

export default NewsScreen;
