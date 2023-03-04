import {Button, FlatList, StyleSheet, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import Item from './Item';
import Loading from '../../navigation/components/Loading';
import axios from 'axios';
import Error from '../../navigation/components/Error';
const data = [
  {
    id: 1,
    name: 'Ahmet',
  },
  {
    id: 2,
    name: 'Osman',
  },
  {
    id: 3,
    name: 'Ali',
  },
  {
    id: 4,
    name: 'Hasan',
  },
  {
    id: 5,
    name: 'Mehmet',
  },
];
const UsersScreen = ({navigation}) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)
  useEffect (() => {
    // axios('https://jsonplaceholder.typicode.com/users')
    // .then((res)=> setUsers(res.data))
    // .catch((err) => setError(err.message) )
    // .finally(() => setLoading(false))
    const getData = async () => {
      try {
       const {data} = await axios(
         'https://jsonplaceholder.typicode.com/users'
         );

       setUsers(data);    
      } catch (error) {
       setError(error.message)
      }
      setLoading(false);
     }
    getData();
  }, []);

  if(loading){
    return <Loading text='Loading...'/>
  }
  if (error) {
    return <Error message={error} /> 
  }
  return (
    
    <View style={styles.flatList}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Item item={item.id} name={item.name} />}
      />
    
        <Button
        color="#FF7C6E"   
        title="Geri"
        onPress={() => navigation.goBack()}
      />
     </View>
  );
};
 
export default UsersScreen;

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
  },
});
