/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Icon from 'react-native-vector-icons/Ionicons';
import AboutScreen from './screens/AboutScreen';
import {IconMapping} from './types/AppTypes';

const Tab = createBottomTabNavigator();

// Navigation & Icon map
const iconMapping: IconMapping = {
  Home: {
    screenComponent: Home,
    active: 'home',
    inactive: 'home-outline',
  },
  AboutScreen: {
    screenComponent: AboutScreen,
    active: 'person',
    inactive: 'person-outline',
  },
};

const App = () => {
  return (
    <>
      {/* <StatusBar /> */}
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={() => ({
            headerShown: false,
            tabBarStyle: {
              height: 60,
              position: 'absolute',
              bottom: 16,
              right: 16,
              left: 16,
              borderRadius: 10,
            },
          })}>
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
          ))}
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
