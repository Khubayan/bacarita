/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import {StyleSheet, Text, View} from 'react-native';
import Colors from '../constants/Colors';
import {BadgeProps} from '../types/BadgeTypes';

const Badge = ({name, isActive = true}: BadgeProps) => {
  const badgeStyles = {
    ...styles.badgeContainer,
    backgroundColor:
      isActive === true ? Colors.primary300 : Colors.secondary300,
  };

  return (
    <View style={badgeStyles}>
      <Text style={styles.badgeText}>{name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  badgeContainer: {
    // flex: 1,
    // flexDirection: 'row',
    marginTop: 7,
    paddingHorizontal: 10,
    paddingTop: 4,
    paddingBottom: 6,
    // backgroundColor: Colors.primary300,
    minWidth: 50,
    borderRadius: 30,
  },
  badgeText: {
    textAlign: 'center',
    color: Colors.fontTernary,
    fontWeight: 'bold',
  },
});

export default Badge;
