/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Icon from 'react-native-vector-icons/Ionicons';
import AboutScreen from './screens/AboutScreen';

const Tab = createBottomTabNavigator();

// Screen
const screens = ['Home', 'About'];

const App = () => {
  return (
    <>
      {/* <StatusBar /> */}
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({route}) => ({
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused}) => {
              let iconName;
              let routeName = route.name;

              if (routeName === screens[0]) {
                iconName = focused ? 'home' : 'home-outline';
              } else if (routeName === screens[1]) {
                iconName = focused ? 'person' : 'person-outline';
              }
              console.log(routeName);
              return <Icon name={iconName} />;
            },
          })}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="About" component={AboutScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
