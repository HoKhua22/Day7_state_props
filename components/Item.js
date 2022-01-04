import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  View,
  Alert,
  Button,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 15,
    marginHorizontal: 25,
    borderRadius: 4,
  },
  recordContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

export default ({ item, onPress, navigation }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Record Detail', {
            id: item.id,
            status: item.status,
            job: item.job,
            foreman: item.foreman,
            engineer: item.engineer,
            location: item.location,
            effort: item.effort,
            payId: item.payId,
            kilo: item.kilo,
            quantity: item.quantity,
            value: item.value,
            commend: item.commend,
          });
        }}
      >
        <View style={styles.recordContainer}>
          <View>
            <Text style={{ fontWeight: 'bold' }}>{item.id}</Text>
            <Text>SQR Quantity Record</Text>
            <Text>Pay Item</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text>
              {' '}
              <Ionicons name="warning-outline" size={24} color="tomato" />{' '}
              {'\t'}
              <Text style={{ color: 'blue', fontWeight: 'bold' }}>Draft</Text>
            </Text>

            <Text>{item.date}</Text>
            <Text style={{ color: 'red' }}>{item.payId}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
