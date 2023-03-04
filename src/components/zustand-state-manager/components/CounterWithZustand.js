import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useStore from '../store/useStore';

const CounterWithZustand = () => {
  const count = useStore((state) => state.count);
  const increase = useStore((state) => state.increase)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <Button title='Arttır' onPress={increase} />
     </View>
  );
};

export default CounterWithZustand;

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
