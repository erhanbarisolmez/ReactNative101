import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// screens
import HomeScreen from './components/screen/Home';
import UsersScreen from './components/screen/Users';
import UserDetail from './components/screen/UserDetail';
import HeaderLogo from './components/screen/components/HeaderLogo';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FF7C6E',
          },
          headerTintColor: '#FAFFED',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Anasayfa',
            headerTitle: props => <HeaderLogo {...props} />,
          }}
        />
        <Stack.Screen
          name="Users"
          component={UsersScreen}
          options={{
            title: 'Kullanıcılar',
            headerRight: () => (
                <Button
                  onPress={() => alert('This is a button!')}
                  title="Right"
                  color="#C63BFF"
                />
              ),
              headerLeft: () => (
                <Button
                  onPress={() => alert('This is a button!')}
                  title="Left"
                  color="#C63BFF"
                />
              ),
          }}
        />
        <Stack.Screen
          name="UserDetail"
          component={UserDetail}
          options={({route}) => ({title: route.params.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
