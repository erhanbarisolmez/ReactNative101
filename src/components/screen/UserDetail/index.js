import {StyleSheet, Text, View, Button} from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import Loading from '../../navigation/components/Loading';
import axios from 'axios';
import Error from '../../navigation/components/Error';
const UserDetail = ({ route, navigation }) => {
  const {id} = route.params;

  const [userId,setUserId] = useState(id);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setUserId((id) => (id + 1 === 11 ? 1 : id+1))}
         title="Next" 
         />
      ),
    });
  }, [navigation]);

  useEffect(() => {

    getData();
  }, [userId]);
 
  const getData = async() => {
    try {
      const {data} = await axios(
        `https://jsonplaceholder.typicode.com/users/${userId}`
       
        );
        console.log(data);
      setUser(data);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }

  if(loading){
    return <Loading text='Loading User' /> 
 
  }

  if(error){
    return <Error message={error}/> 
  }

  return (
    <View style={styles.container}>
      <Text>User ID: {userId}</Text>
         <Text style={styles.text}>User Detail</Text>
        <Text style={styles.text}>{JSON.stringify(user, null, 2)}</Text>
    </View>
  );
};

export default UserDetail;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAFFED',
  },
  text: {
    fontSize: 20,
  },
});
