import React, { useState } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import DATA from '../data/data';

const CreateRecord = ({ navigation, route }) => {
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');
  const [job, setJob] = useState('');
  const [foreman, setForeman] = useState('');
  const [engineer, setEngineer] = useState('');
  const [location, setLocation] = useState('');
  const [effort, setEffort] = useState('');
  const [payId, setPayID] = useState('');
  const [kilo, setKilo] = useState('');
  const [quantity, setQuantity] = useState('');
  const [value, setValue] = useState('');
  const [commend, setCommend] = useState('');

  const addNewItem = (
    date,
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
    commend
  ) => {
    const newRecord = {
      id: DATA.length + 1,
      date: date,
      status: status,
      job: job,
      foreman: foreman,
      engineer: engineer,
      location: location,
      effort: effort,
      payId: payId,
      kilo: kilo,
      quantity: quantity,
      value: value,
      commend: commend,
    };
    DATA.push(newRecord);
    return navigation.navigate('My Records');
  };

  return (
    <View style={{ padding: 5 }}>
      <TextInput placeholder="Date" value={date} onChangeText={setDate} />
      <TextInput placeholder="Status" value={status} onChangeText={setStatus} />
      <TextInput placeholder="Job" value={job} onChangeText={setJob} />
      <TextInput
        placeholder="Foreman"
        value={foreman}
        onChangeText={setForeman}
      />
      <TextInput
        placeholder="Engineer"
        value={engineer}
        onChangeText={setEngineer}
      />
      <TextInput
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        placeholder="Effort Hours"
        value={effort}
        onChangeText={setEffort}
      />
      <TextInput placeholder="Pay ID" value={payId} onChangeText={setPayID} />
      <TextInput placeholder="Kilogram" value={kilo} onChangeText={setKilo} />
      <TextInput
        placeholder="Quantity"
        value={quantity}
        onChangeText={setQuantity}
      />
      <TextInput placeholder="Value" value={value} onChangeText={setValue} />
      <TextInput
        placeholder="Commend"
        value={commend}
        onChangeText={setCommend}
      />
      <Button
        title="Done"
        onPress={() =>
          addNewItem(
            date,
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
            commend
          )
        }
      />
    </View>
  );
};

export default CreateRecord;
