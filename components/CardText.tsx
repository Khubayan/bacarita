/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Colors from '../constants/Colors';

const CardText = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
      contentContainerStyle={style.scrollContainer}>
      <View style={style.container}>
        <Text>helo</Text>
      </View>
      <View style={style.container}>
        <Text>helo</Text>
      </View>
      <View style={style.container}>
        <Text>helo</Text>
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
  },

  scrollContainer: {
    alignItems: 'center',
  },
});

export default CardText;
