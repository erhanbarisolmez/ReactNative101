import {StyleSheet, View} from 'react-native';
import React, { useEffect } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import { useUsers } from '../context/UsersContext';

const Home = () => {
  const {loadData} = useUsers();
  
  useEffect(()=>{
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <Form />
      <List />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B4F84',
  },
});
