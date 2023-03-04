import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
 
// screens
import HomeScreen from '../screen/Home';
import UsersScreen from '../screen/Users';
import UserDetail from '../screen/UserDetail';
import { Button } from 'react-native';
import { Menu } from '../../svg/icons';
import DrawerButton from './components/DrawerButton';


// Home Stack
const HomeStack = createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{
      headerTitleAlign:'center'
      }}>
      <HomeStack.Screen 
      name="Home"
      component={HomeScreen} 
      options={() => ({
        headerLeft: () => <DrawerButton  />
      })} 
      />
    </HomeStack.Navigator>
  );
}
// Users Stack
const UsersStack = createNativeStackNavigator();

function UsersStackNavigator() {
  return (
    <UsersStack.Navigator
    screenOptions={{
        headerTitleAlign:'center'
    }}
    >
      <UsersStack.Screen name="Users" component={UsersScreen} />
      <UsersStack.Screen name="UserDetail" component={UserDetail} />
    </UsersStack.Navigator>
  );
}


export { UsersStackNavigator, HomeStackNavigator};

