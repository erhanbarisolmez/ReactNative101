import {createContext, useContext, useState} from 'react';
// uuid
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

const UsersContext = createContext();

export const UsersContextProvider = ({children}) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=> res.json())
    .then((data) => setUsers(data))
    .catch((err) => setError(err.message))
    .finally(()=> setLoading(false))
  }
  const addUser = data => {
    setUsers(prev => [{...data, id: uuidv4()}, ...prev]);
  };

  const removeUser = id => {
    const cloned = [...users];
    const index = cloned.findIndex(user => user.id === id);
    cloned.splice(index, 1);
    setUsers(cloned);
  };

  const values = {
    users,
    loading,
    error,
    setError,
    addUser,
    removeUser,
    loadData,
  };

  return (
    <UsersContext.Provider value={values}>{children}</UsersContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UsersContext);

  if (context === undefined) {
    throw new Error('useUsers hook must be call inside usersContextProvider');
  }
  return context;
};
