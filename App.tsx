/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Icon from 'react-native-vector-icons/Ionicons';
import AboutScreen from './screens/AboutScreen';
import {ScreenComponents, IconMapping} from './types/AppTypes';

const Tab = createBottomTabNavigator();

const screenComponents: ScreenComponents = {
  Home,
  AboutScreen,
};

const iconMapping: IconMapping = {
  AboutScreen: {active: 'person', inactive: 'person-outline'},
  Home: {active: 'home', inactive: 'home-outline'},
};

const App = () => {
  return (
    <>
      {/* <StatusBar /> */}
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarStyle: {
              height: 60,
              position: 'absolute',
              bottom: 16,
              right: 16,
              left: 16,
              borderRadius: 10,
            },
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused}) => {
              const routeName = route.name;
              const iconName = focused
                ? iconMapping[routeName]?.active
                : iconMapping[routeName]?.inactive;
              console.log(routeName);
              return <Icon name={iconName} size={32} />;
            },
          })}>
          {Object.keys(screenComponents).map((screenName, index) => (
            <Tab.Screen
              key={index}
              name={screenName}
              component={screenComponents[screenName]}
              options={{tabBarShowLabel: false}}
            />
          ))}
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
