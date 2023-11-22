/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import Colors from '../constants/Colors';
import Badge from './Bagdge';
import {ItemListProps} from '../types/NewsScreenTypes';

const ItemList = (props: ItemListProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexItem}>
        <View>
          <Image style={styles.itemImage} source={props.itemImageLocalPath} />
        </View>
        <View>
          <Text style={styles.itemTitle}>{props.itemTitle}</Text>
          <View style={styles.itemTextContainer}>
            <Badge
              name={props.itemBadge.name}
              isActive={props.itemBadge.isActive}
            />
            <Text style={styles.itemDate}>{props.itemDate}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    // height: 500,
    // width: '100%',
    paddingVertical: 8,
    backgroundColor: Colors.secondary900,
  },
  flexItem: {
    // flex: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    // borderTopColor: 'transparent',
    // borderRightColor: 'transparent',
    // borderLeftColor: 'transparent',
    borderBottomColor: Colors.primary300,
    // borderRadius: 2,
    borderBottomWidth: 2,
    paddingBottom: 4,
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
  },
  itemImage: {
    width: 480 / 4,
    height: 270 / 4,
    marginRight: 10,
    borderRadius: 4,
  },
  itemTitle: {
    width: 200,
    fontWeight: 'bold',
    color: Colors.fontPrimary,
    textShadowColor: Colors.secondary500,
    textShadowRadius: 9,
  },
  itemTextContainer: {
    // flex: 1,
    flexDirection: 'row',
  },
  itemDate: {
    marginTop: 9,
    marginLeft: 10,
    color: Colors.fontPrimary,
  },
});

export default ItemList;
