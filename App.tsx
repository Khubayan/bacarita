/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from './screens/Home';
import Icon from 'react-native-vector-icons/Ionicons';
import AboutScreen from './screens/AboutScreen';
import TestedScreenu from './screens/TestedScreen';
import SearchBar from './components/SearchBar';
import Colors from './constants/Colors';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const TopTabComponent = () => {
  return (
    <View style={[style.flexContent, style.mainBacground]}>
      <View style={[style.container]}>
        <SearchBar />
      </View>

      <TopTab.Navigator
        screenOptions={({route}) => {
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
          component={Home}
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
          component={TestedScreenu}
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
          component={TestedScreenu}
        />
      </TopTab.Navigator>
    </View>
  );
};

const MainTabs = () => {
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
        <Tab.Screen name="Home" component={TopTabComponent} />
        <Tab.Screen name="BottomTab" component={AboutScreen} />
      </Tab.Navigator>
    </>
  );
};

const App = () => {
  return (
    <View style={[style.container, style.flexContent, style.mainBacground]}>
      <NavigationContainer>
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
          <Stack.Screen name="MainTabs" component={MainTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
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

/* <Tab.Screen name="TopTab" component={TopTabComponent} />
          {Object.keys(iconMapping).map((routeName, index) => (
            <Tab.Screen
              key={index}
              name={routeName}
              component={iconMapping[routeName].screenComponent}
              options={{
                // eslint-disable-next-line react/no-unstable-nested-components
                tabBarIcon: ({focused}) => {
                  const iconName = focused
                    ? iconMapping[routeName].active
                    : iconMapping[routeName].inactive;
                  console.log(routeName, index); //log
                  return <Icon name={iconName} size={32} />;
                },
                tabBarShowLabel: false,
              }}
            />
          ))} */
