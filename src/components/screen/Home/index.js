import React, {useState, useLayoutEffect} from 'react';
import {View, Text, Button} from 'react-native';
export default function HomeScreen({navigation}) {
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="update" />
      ),
    });
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFFED',
      }}>
      <Text>{count}</Text>
      <Text>Home Screen</Text>
      <Button
        color="#FF7C6E"
        title="Kullanıcılar "
        onPress={() => navigation.navigate('UsersTab')}></Button>
    </View>
  );
}
