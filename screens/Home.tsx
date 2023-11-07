/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import Colors from '../constants/Colors';

const Home = () => {
  return (
    <View style={style.container}>
      <View>
        <SearchBar />
      </View>
      <View>
        <Text>Hello</Text>
      </View>
      <View>
        <Text>Genre</Text>
      </View>
      <View>
        <Text>Latest News</Text>
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
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default Home;
