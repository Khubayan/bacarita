/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import {Image} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../constants/Colors';

const Card = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.eventMainImage}
        source={require('../assets/images/blockchain.jpg')}
      />
      <View style={styles.eventMainImageOverlay} />
      <View style={styles.eventContainerMainTitle}>
        <Text style={styles.eventMainTitle}>Crypto Fest 2023 CRYPTOPIA</Text>
        <View style={styles.eventContainerMainDescribe}>
          <Text style={styles.eventMainDescribe}>
            Unleash the Future!. Explore groundbreaking tech, connect with
            industry leaders. Don't miss out on the excitement
          </Text>
          <View style={styles.eventDateContainer}>
            <Text style={styles.eventDateText}>Start at November, 24 2023</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'yellow',
    flex: 1,
    // height: 720,
    // width: 7,
    // justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 32,
    // paddingLeft: 200,
    // paddingRight: 80,
  },

  eventMainImageOverlay: {
    position: 'absolute',
    backgroundColor: 'rgba(108, 68, 233, .2)',
    width: 360,
    height: 440,
    borderRadius: 32,
  },

  eventMainImage: {
    // overflow: 'visible',
    // flex: 1,
    width: 360,
    height: 425,
    borderRadius: 32,
  },
  eventContainerMainTitle: {
    position: 'absolute',
    right: 30,
    top: 220,
    // textbreakstrategy: 'simple',
    // backgroundColor: 'red',
  },
  eventMainTitle: {
    // backgroundColor: 'red',
    // paddingRight: 20,
    // marginTop: 20,
    // marginRight: 26,
    textAlign: 'right',
    color: Colors.fontTernary,
    fontSize: 40,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    textShadowColor: Colors.primary300,
    textShadowOffset: {width: 2, height: 2}, // Shadow offset (width, height)
    textShadowRadius: 5,
  },
  eventContainerMainDescribe: {
    // backgroundColor: 'red',
    paddingLeft: 40,
  },
  eventMainDescribe: {
    color: Colors.fontTernary,
    fontFamily: 'Montserrat',
    letterSpacing: 2,
    textShadowColor: Colors.primary300,
    textShadowOffset: {width: 2, height: 2}, // Shadow offset (width, height)
    textShadowRadius: 5,
    fontWeight: 'bold',
    // textAlign: 'auto',
    // fontSize: 3,
  },
  eventDateContainer: {
    alignSelf: 'center',
    marginTop: 9,
    backgroundColor: Colors.primary300,
    // backgroundColor: 'red',
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 8,
  },
  eventDateText: {
    color: Colors.fontTernary,
    fontFamily: 'Montserrat',
    fontWeight: '900',
  },
});

export default Card;
