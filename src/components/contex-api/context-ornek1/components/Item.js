import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useUsers} from '../context/UsersContext';

const Item = ({user}) => {
  const {removeUser} = useUsers();

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.text}>{user.name}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => removeUser(user.id)}>
          <Text style={styles.remove}>Sil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    backgroundColor: '#536EB8',
    borderBottomColor: '#2A2E38',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: '#141D38',
    fontSize: 18,
  },
  remove: {
    color: '#382C0E',
  },
});
