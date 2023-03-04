import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';


const TabNavigation = () => {

  return (
    <NavigationContainer>
     <DrawerNavigator />
    </NavigationContainer>
  );
};

export default TabNavigation;

