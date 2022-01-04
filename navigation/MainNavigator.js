import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
const Drawer = createDrawerNavigator();
const AuthStack = createNativeStackNavigator();
const MainNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen
        name="HomeTab"
        component={BottomTabNavigator}
        options={{ headerShown: false, title: 'Home' }}
      />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
