import {FlatList, StyleSheet} from 'react-native';
import Item from './Item';
import Message from './Message';
import Loading from './Loading';
import Error from './Error';
import { useEffect } from 'react';
import useStore from '../store/useStore';
const List = () => {
  const users = useStore((state) => state.users);
  const loading = useStore((state) => state.loading);
  const error = useStore((state) => state.error);

  const fetchUsers = useStore((state)=> state.fetchUsers)
  useEffect(()=> {
    fetchUsers();
  }, [])

  if (loading) {
    return <Loading message={"Loading..."}/>;
  }

  if (error) {
    return <Error message={error} />;
  }
  return (
    <>
      {users.length === 0 && !loading && <Message message={'No Item'} />}
      <FlatList
        style={styles.list}
        data={users}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Item user={item} />}
      />
    </>
  );
};

export default List;

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});