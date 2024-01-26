/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import {Pressable, StyleSheet, Text, View} from 'react-native';
import Colors from '../constants/Colors';
import {BadgeProps} from '../types/BadgeTypes';
import {useState} from 'react';

const Badge = ({name, isActive = true}: BadgeProps) => {
  const [badgeStatus, setBadgeStatus] = useState(isActive);

  const badgeStyles = {
    ...styles.badgeContainer,
    backgroundColor:
      badgeStatus === true ? Colors.primary300 : Colors.secondary300,
  };

  return (
    <Pressable
      onPress={() => {
        setBadgeStatus(!badgeStatus);
      }}>
      <View style={badgeStyles}>
        <Text style={styles.badgeText}>{name}</Text>
      </View>
    </Pressable>
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
