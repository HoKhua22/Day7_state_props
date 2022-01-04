import React, { useState, useLayoutEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import DATA from '../data/data';
import Item from '../components/Item';

const RecordScreen = ({ navigation, route }) => {
  const [selectedId, setSelectedId] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('CreatePost')}>
          <AntDesign name="pluscircleo" size={24} color="red" />
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <Foundation name="list" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        navigation={navigation}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
export default RecordScreen;
