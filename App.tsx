/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import 'react-native-gesture-handler';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import NewsScreen from './src/screens/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import AboutScreen from './src/screens/AboutScreen';
import FirstNews from './src/screens/NewsScreen/FirstNews';
import SearchBar from './src/components/SearchBar';
import Colors from './src/constants/Colors';
import {StyleSheet, View} from 'react-native';
import SecondNews from './src/screens/NewsScreen/SecondNews';
import ThirdNews from './src/screens/NewsScreen/ThirdNews';
import EventsScreen from './src/screens/EventsScreen';
import WeatherScreen from './src/screens/WeatherScreen';
import LoginScreen from './src/screens/LoginScreen';
import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import SignInScreen from './src/screens/SignInScreen';

// import {ScrollView} from 'react-native-gesture-handler';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const TopTabComponent = () => {
  if (async () => await EncryptedStorage.getItem('user_session')) {
    return (
      <View style={[style.flexContent, style.mainBacground]}>
        <View style={[style.container]}>
          <SearchBar />
        </View>

        <TopTab.Navigator
          screenOptions={() => {
            return {
              tabBarStyle: {
                backgroundColor: style.mainBacground.backgroundColor, // Change this to white
                elevation: 0,
                left: 9,
              },
              tabBarLabelStyle: {
                // Adjust the text color as needed
                fontFamily: 'Roboto-Medium',
                fontSize: 20,
                textTransform: 'capitalize',
              },
              tabBarIndicatorStyle: {
                backgroundColor: Colors.primary300,
                width: 20,
                left: 35,
                top: 40,
                height: 4,
                borderRadius: 2,
              },
            };
          }}>
          <TopTab.Screen
            options={{
              tabBarActiveTintColor: Colors.fontPrimary,
              tabBarInactiveTintColor: Colors.fontSecondary,
              tabBarLabelStyle: {
                fontSize: 20,
                fontFamily: 'Roboto-Medium',

                textTransform: 'capitalize',
              },
            }}
            name="News"
            component={NewsScreen}
          />
          <TopTab.Screen
            options={{
              tabBarActiveTintColor: Colors.fontPrimary,
              tabBarInactiveTintColor: Colors.fontSecondary,
              tabBarLabelStyle: {
                left: 8,
                // right: 0.1,
                marginRight: 12,
                fontSize: 20,
                fontFamily: 'Roboto-Medium',

                textTransform: 'capitalize',
              },
            }}
            name="Events"
            component={EventsScreen}
          />
          <TopTab.Screen
            options={{
              tabBarActiveTintColor: Colors.fontPrimary,
              tabBarInactiveTintColor: Colors.fontSecondary,
              tabBarLabelStyle: {
                left: 11,
                // right: 0.1,
                fontSize: 20,
                fontFamily: 'Roboto-Medium',

                textTransform: 'capitalize',
              },
            }}
            name="Weather"
            component={WeatherScreen}
          />
        </TopTab.Navigator>
      </View>
    );
  }
};

export const MainTabs = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={() => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: style.mainBacground.backgroundColor,
            elevation: 0,
            borderColor: 'transparent',
          },
        })}>
        <Tab.Screen
          name="Home"
          component={TopTabComponent}
          options={{
            tabBarShowLabel: false,
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused}) => {
              const color = focused ? Colors.primary300 : Colors.secondary300;
              return <Icon name="home" size={32} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="BottomTab"
          component={AboutScreen}
          options={{
            tabBarShowLabel: false,
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused}) => {
              EncryptedStorage.setItem('user_session', JSON.stringify(''));
              const color = focused ? Colors.primary300 : Colors.secondary300;
              return <Icon name="gift" size={32} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <View style={[style.flexContent, style.mainBacground]}>
        <Stack.Navigator
          initialRouteName="MainTabs"
          screenOptions={() => ({
            headerShown: false,
            tabBarStyle: {
              height: 60,
              position: 'absolute',
              bottom: 16,
              right: 16,
              left: 16,
              borderRadius: 16,
            },
          })}>
          {/* {!session && <Stack.Screen name="Login" component={LoginScreen} />} */}
          {/* Add other screens here */}
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="MainTabs" component={MainTabs} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen name="FirstNews" component={FirstNews} />
          <Stack.Screen name="SecondNews" component={SecondNews} />
          <Stack.Screen name="ThirdNews" component={ThirdNews} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

const style = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  flexContent: {
    flex: 1,
  },
  mainBacground: {
    backgroundColor: Colors.secondary900,
  },
});

export default App;
