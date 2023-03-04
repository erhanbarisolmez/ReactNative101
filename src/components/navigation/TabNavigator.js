import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Home,User  } from '../../svg/icons';
import { UsersStackNavigator, HomeStackNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
    <Tab.Navigator
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
    <Tab.Screen
      name="HomeTab"
      component={HomeStackNavigator}
      options={{
        title: 'Home',
        tabBarIcon: () => {
          return <Home />;
        },
      }}
    />
    <Tab.Screen
      name="UsersTab"
      component={UsersStackNavigator}
      options={{
        title: 'Users',
        tabBarIcon: () => {
          return <User fill="black" color="black" />;
        },
      }}
    />
  </Tab.Navigator>
);

export default BottomTabNavigator;