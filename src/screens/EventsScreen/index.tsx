/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import {Pressable, StyleSheet, Text, View} from 'react-native';
import CardDate from '../../components/CardDate';
import Colors from '../../constants/Colors';
import DatesData from '../../store/DateStore';
import Card from '../../components/Card';
import {ScrollView} from 'react-native-gesture-handler';
import ItemList from '../../components/ItemList';
import {useState} from 'react';
const EventsScreen = () => {
  const [hello, setHello] = useState('Hello');
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text>{hello}</Text>
        <View style={styles.cardDateDirectionRow}>
          {Object.values(DatesData).map((date, index) => (
            <CardDate
              key={index}
              dateTime={date.dateTime}
              dateName={date.dateName}
              isActive={date.isActive}
              setter={setHello}
            />
          ))}
        </View>
        <View style={styles.cardStyle}>
          <Card />
        </View>
        <View style={styles.listItemContainer}>
          <View>
            <Text style={styles.listItemContainerTitle}>Technology Events</Text>
          </View>
          <Pressable>
            <ItemList
              itemImageLocalPath={require('../../assets/images/blockchain.jpg')}
              itemTitle="Paris Blockchain Summit IV 2023"
              itemDate="November 25, 2023"
              itemBadge={{name: 'Event'}}
            />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: Colors.secondary900,
  },

  cardDateDirectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 12,
  },
  cardStyle: {
    marginTop: 25,
  },

  listItemContainer: {
    marginTop: 50,
  },
  listItemContainerTitle: {
    fontFamily: 'Montserrat',
    color: Colors.fontPrimary,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
    marginBottom: 6,
  },
});

export default EventsScreen;
