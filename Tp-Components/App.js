import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LogIn from './src/Screens/LogIn.js';
import Screen1 from './src/Screens/Screen1.js';
import Screen2 from './src/Screens/Screen2.js';
import Screen3 from './src/Screens/Screen3.js';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LogIn} options={{ headerShown: false }}/>
        <Stack.Screen name="PageTabs" component={PageTabs} options={{ headerShown: false }}/>
      </Stack.Navigator>
  </NavigationContainer>

  );
};
const PageTabs = () => {
    return (
      
        <Tab.Navigator
        >
          <Tab.Screen name="Screen1" component={Screen1} />
          <Stack.Screen name="Screen2" component={Screen2}/>
          <Stack.Screen name="Screen3" component={Screen3}/>
        </Tab.Navigator>
      
    );
};

export default App;
