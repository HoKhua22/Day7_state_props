import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecordScreen from '../screens/RecordScreen';
import RecordDetail from '../screens/RecordDetail';
import CreateRecord from '../screens/CreateRecord';

const RecordStack = createNativeStackNavigator();

const RecordStackNavigator = () => {
  return (
    <RecordStack.Navigator
      mode="modal"
      screenOptions={{ headerTitleAlign: 'center' }}
    >
      <RecordStack.Screen name="My Records" component={RecordScreen} />
      <RecordStack.Screen name="Record Detail" component={RecordDetail} />
      <RecordStack.Screen
        name="CreatePost"
        component={CreateRecord}
        options={{ title: 'Create Record' }}
      />
    </RecordStack.Navigator>
  );
};

export default RecordStackNavigator;
