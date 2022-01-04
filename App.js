import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigator from './navigation/MainNavigator';

const AuthStack = createNativeStackNavigator();

export default function App() {
  // const [isSignedIn, setSignIn] = useState(false);
  return (
    <NavigationContainer>
      {/* {!isSignedIn ? (
        <>
          <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="SignIn" component={LoginScreen} />
          </AuthStack.Navigator>
        </>
      ) : ( */}
      <MainNavigator />
      {/* )} */}
    </NavigationContainer>
  );
}
