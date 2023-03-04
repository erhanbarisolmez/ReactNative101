import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { UsersStackNavigator } from './StackNavigator';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
    screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerType: 'back',
        swipeEnabled: true,
        drawerStyle: {
            width:150
        }
    }}
    >
    <Drawer.Screen name="Home" component={TabNavigator} />
    <Drawer.Screen name="UsersDrawer" component={UsersStackNavigator} options={{title:'Users'}}/>
  </Drawer.Navigator>
  )
}

export default DrawerNavigator