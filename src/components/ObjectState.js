import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native'
import React, { useState } from 'react'

const ObjectState = () => {
  const [user, setUser] = useState({id: 1, name: 'Mehmet'});
  const handlePress = () => {
    setUser((prev) => ({ ...prev,name: 'Mete'}));
  }
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.border}>
      <Text style={styles.text}>ID: {user.id}</Text>
      <Text style={styles.text}>Name: {user.name}</Text>
    </View>
    <View style={styles.button}>
    <Button title='Click' color='#FF7C6E' onPress={handlePress}/>
    </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FAFFED'
    },
    border:{
        flex:0.1,
        width:'auto',
        border: 1,
        borderRadius:2,
        borderColor:'pink',
        backgroundColor:'beige',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        padding:10
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    button: {
        padding:10,
        width: 300, 
    }
})





export default ObjectState
