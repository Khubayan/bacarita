/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import {StyleSheet, Text, View} from 'react-native';
import Colors from '../constants/Colors';
import {CardDateProps} from '../types/CardDateTypes';

const CardDate = (props: CardDateProps) => {
  const cardDateActiveStyle = {
    ...styles.container,
    backgroundColor: props.isActive ? Colors.secondary500 : Colors.secondary900,
  };

  return (
    <View style={cardDateActiveStyle}>
      <Text style={styles.cardDateDate}>{props.dateTime}</Text>
      <Text style={styles.cardDateDayName}>{props.dateName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: Colors.secondary500,
    paddingVertical: 12,
    paddingHorizontal: 6,
    width: 50,
    borderRadius: 4,
    // justifyContent: 'center',
    alignItems: 'center',
  },

  cardDateDate: {
    // textAlign: 'center',\
    fontWeight: '400',
    fontSize: 25,
    color: Colors.fontPrimary,
  },

  cardDateDayName: {
    fontSize: 12,
    fontWeight: '400',
  },
});

export default CardDate;
