import {StyleSheet, Button, View, Text} from 'react-native';
import React, {useState} from 'react';

export default function ButtonExample() {
  const [name, setName] = useState('mehmet');
  const [age, setAge] = useState(29);
  const [isVisible, setIsVisible] = useState(true);
  return (
    <View style={styles.container}>
        <Button title={isVisible ? 'Gizle' : 'Göster'} onPress={() => setIsVisible(!isVisible)} />
      {isVisible && (
        <>
          <Text>İsmi : {name}</Text>
          <Text>Yaşı : {age}</Text>
          <Button title="İsmi Değiştir" onPress={() => setName('ahmet')} />
          <Button title="Yaşı Değiştir" onPress={() => setAge('30')} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
