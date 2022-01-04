import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const RecordDetail = ({ route, navigation }) => {
  const {
    id,
    status,
    job,
    foreman,
    engineer,
    location,
    effort,
    payId,
    kilo,
    quantity,
    value,
    commend,
  } = route.params;

  return (
    <View>
      <View style={[styles.card, styles.cardContent]}>
        <Text style={{ color: '#808080' }}>SQR Quantity {'\n'} Record No</Text>
        <Text>{id}</Text>
      </View>
      <View style={[styles.card, styles.cardContent]}>
        <Text style={{ color: '#808080' }}>
          SQR Quantity {'\n'} Record Status
        </Text>
        <Text>{status}</Text>
      </View>
      <View style={[styles.card, styles.cardContent]}>
        <Text style={{ color: '#808080' }}>Job</Text>
        <Text>{job}</Text>
      </View>
      <View style={[styles.card, styles.cardContent]}>
        <Text style={{ color: '#808080' }}>Foreman</Text>
        <Text>{foreman}</Text>
      </View>
      <View style={[styles.card, styles.cardContent]}>
        <Text style={{ color: '#808080' }}>Engineer</Text>
        <Text>{engineer}</Text>
      </View>
      <View style={[styles.card, styles.cardContent]}>
        <Text style={{ color: '#808080' }}>Location</Text>
        <Text>{location}</Text>
      </View>
      <View style={[styles.card, styles.cardContent]}>
        <Text style={{ color: '#808080' }}>Total Effort</Text>
        <Text>{effort}</Text>
      </View>
      <View>
        <Text style={{ marginLeft: 25, fontSize: 17, fontWeight: 'bold' }}>
          Pay Item Details
        </Text>
        <View style={[styles.card, styles.cardContent]}>
          <Text style={{ color: '#808080' }}>
            UoM <Text style={{ color: '#000000' }}>Kilogram</Text>
          </Text>
          <Text style={{ color: '#808080' }}>
            Rate <Text style={{ color: '#000000' }}>{kilo}</Text>
          </Text>
          <Text style={{ color: '#808080' }}>
            Quantity <Text style={{ color: '#000000' }}>{quantity}</Text>
          </Text>
          <Text style={{ color: '#808080' }}>
            Proposed Value <Text style={{ color: '#000000' }}>{value}</Text>
          </Text>
          <Text style={{ color: '#808080' }}>
            Comment <Text style={{ color: '#000000' }}>{commend}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 10,
    marginHorizontal: 25,
    borderRadius: 4,
    padding: 10,
  },
  cardChild: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 10,
    marginHorizontal: 25,
    borderRadius: 4,
    padding: 10,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
});
export default RecordDetail;
