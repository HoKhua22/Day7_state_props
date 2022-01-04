import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { USER } from '../data/user';
const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const clearState = () => {
    setUsername('');
    setPassword('');
  };

  const login = (username, password) => {
    const user = {
      username: username,
      password: password,
    };
    USER.push(user);
    clearState();
    return navigation.navigate('HomeTab', {
      screen: 'Home',
      params: { username: username, password: password },
    });
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        source={require('../assets/userIcon.png')}
        style={{
          tintColor: 'blue',
          height: 100,
          width: 100,
          alignContent: 'center',
        }}
      />
      <View style={{ flexDirection: 'row', margin: 20 }}>
        <TextInput
          style={styles.input}
          placeholder="User name"
          underlineColorAndroid="transparent"
          placeholderTextColor="#000000"
          autoCapitalize="none"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={{ flexDirection: 'row', margin: 20 }}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#000000"
          autoCapitalize="none"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => login(username, password)}
      >
        <Text style={styles.submitButtonText}> Login </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  labelText: {
    color: '#000000',
    fontSize: 15,
  },
  input: {
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
    width: 300,
  },
  submitButton: {
    backgroundColor: 'red',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default LoginScreen;
