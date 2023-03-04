import {StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import useStore from '../store/useStore';

const Form = () => {
  const [name, setName] = useState('');
  const addUser = useStore((state) => state.addUser);
  const handleSubmit = () => {
    if (!name) {
      return false;
    }
    addUser({name}); // id için  uuid-npm (npm i uuid, npm react-native-get-random-values)
    setName('');
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        returnKeyType="go"
        value={name}
        onChangeText={text => setName(text)}
        onEndEditing={handleSubmit}
        placeholder="Enter username"
      />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    borderWidth: 2,
    width: '100%',
    height: 50,
    padding: 10,
    fontSize: 18,
    borderColor: '#ddd',
  },
});