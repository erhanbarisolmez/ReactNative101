import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { useCounter } from '../context/CounterContext';

const CounterState = () => {
  const {count, setCount} = useCounter();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <Button title="Arttır" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default CounterState;

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
});
