import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Item = ({name, id, navigate}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('UserDetail', {id})}>
        <Text style={styles.text}>{name }</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'beige',
    borderBottomWidth: 1,
    borderColor: 'pink',
    borderRadius: 2,
  },
  text: {
    fontSize: 24,
  },
});
