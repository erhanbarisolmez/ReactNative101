import {View, Text, StyleSheet, SafeAreaView, FlatList, Button} from 'react-native';
import React, {useState} from 'react';

const ArrayState = () => {
  const [users, setUsers] = useState([
    {id: 1, name: 'Ahmet'},
    {id: 2, name: 'Hasan'},
  ]);
  const handlePress = () => {
    setUsers((prev)=>[{id:Math.floor(Math.random()* 1000), name: Math.floor(Math.random() * 1000)},...prev,]);
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
      />
      <Button title='Add' color='green' onPress={handlePress}></Button>
    </SafeAreaView>
  );
};
export default ArrayState;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFFED',
  },
  item: {
    width: 300,
    padding: 20,
    backgroundColor: 'beige',
    padding: 10,
    borderWidth: 1,
    borderColor: 'pink',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
