import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import RecordStackNavigator from './RecordStackNavigator';
import TimeSheetScreen from '../screens/TimeSheetScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation, route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'md-person-outline' : 'md-person-outline';
          } else if (route.name === 'My Record') {
            iconName = focused ? 'newspaper-outline' : 'newspaper-outline';
          } else if (route.name === 'My TimeSheet') {
            iconName = focused ? 'md-timer-outline' : 'md-timer-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        headerTitleAlign: 'center',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="My Record" options={{ headerShown: false }}>
        {() => <RecordStackNavigator />}
      </Tab.Screen>
      <Tab.Screen name="My TimeSheet" component={TimeSheetScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
