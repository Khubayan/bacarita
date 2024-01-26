/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
// App.js
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';

// halaman
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import BookmarksScreen from './screens/BookmarksScreen';
import ChapterList from './screens/ChapterList';
import IsiContent from './screens/IsiContent';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'green',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon
                style={{top: 2}}
                name="user"
                size={30}
                color={color}
              />
            ),
            headerShown: false,
            // tabBarLabel: '',
          }}
        />
        <Tab.Screen
          name="Bookmarks"
          component={BookmarksScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon
                style={{top: 2}}
                name="bookmark"
                size={30}
                color={color}
              />
            ),
            headerShown: false,
            // tabBarLabel: '',
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon name="home" size={40} color={color} />
            ),
            headerShown: false,
            // tabBarLabel: '',
          }}
        />
        <Tab.Screen
          name="Previous"
          component={ChapterList}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon
                style={{top: 2}}
                name="history"
                size={30}
                color={color}
              />
            ),
            headerShown: false,
            // tabBarLabel: '',
          }}
        />
        <Tab.Screen
          name="Continue"
          component={IsiContent}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon
                style={{top: 2}}
                name="book"
                size={30}
                color={color}
              />
            ),
            headerShown: false,
            // tabBarLabel: '',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
