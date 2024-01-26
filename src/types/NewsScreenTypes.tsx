/* eslint-disable prettier/prettier */

import {ImageSourcePropType} from 'react-native';
import {BadgeProps} from './BadgeTypes';

/* eslint-disable prettier/prettier */
export interface ItemListProps {
  itemImageLocalPath: ImageSourcePropType;
  itemTitle: string;
  itemDate: string;
  itemBadge: BadgeProps;
}
