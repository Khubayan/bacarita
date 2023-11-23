/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>MOBILE PROGRAMMING KOK JAVA?:)</Text>
      <Text>KOK KOTLIN?:)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 55,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitle: {
    fontFamily: 'Caveat',
    textAlign: 'center',
    fontSize: 30,
  },
});

export default AboutScreen;
