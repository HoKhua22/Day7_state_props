import React from 'react';
import { Text, View } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';


const HomeScreen = ({ navigation, route }) => {
  const { username } = route.params;
  const { password } = route.params;
  
  console.log('routess', username);
  

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text>User name: {username}</Text>
      <Text>Password: {password}</Text>
    </View>
  );
};

export default HomeScreen;
