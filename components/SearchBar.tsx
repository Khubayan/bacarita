/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../constants/Colors';

const SearchBar = () => {
  return (
    <View style={style.container}>
      <View style={style.searchIcon}>
        <Icon name="search" size={32} color={Colors.secondary300} />
      </View>
      <TextInput
        style={style.searchPlaceholder}
        underlineColorAndroid="transparent"
        autoCorrect={false}
        placeholderTextColor={Colors.secondary300}
        placeholder="Search..."
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary500,
    borderRadius: 15,
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  searchIcon: {
    justifyContent: 'center',
  },
  searchPlaceholder: {
    fontFamily: 'Roboto-Medium',
    color: Colors.fontPrimary,
    borderBottomWidth: 0,
    flex: 1,
  },
});

export default SearchBar;
