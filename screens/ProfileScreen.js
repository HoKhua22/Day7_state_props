import React from 'react';
import { View, Text, Image } from 'react-native';
import { USER } from '../data/user';
const ProfileScreen = ({ navigation, route }) => {
  const User = USER.map((data, index) => {
    if (USER.length - index == 1) {
      return (
        <View key={index}>
          <Text
            style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}
          >
            Your name is : {data.username}
          </Text>
        </View>
      );
    }
  });
  return (
    <View>
      <Image
        source={require('../assets/profile.png')}
        style={{ resizeMode: 'cover', width: 400 }}
      />
      <View>{User}</View>
    </View>
  );
};

export default ProfileScreen;
