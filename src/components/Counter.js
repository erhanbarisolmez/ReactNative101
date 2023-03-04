import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [amount, setAmount] = useState(1)
  useEffect(() => {
    console.log('Component mount değişti');
  },[])
  useEffect(() => {
    console.log('count veya amount state değişti');
  },[count, amount])
  // useEffect(()=> {
  //   console.log('amount state değişti');
  // }, [amount])
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <Button color='#FF7C6E' title='Artır' onPress={() => setCount(count + amount)}></Button>
      <Text style={styles.text}>Amount: {amount}</Text>
      <View style={styles.twoButton}>
      <Button color="green" title= "1" onPress={()=> setAmount(1)}></Button>
      <Button color="green" title= "5" onPress={()=> setAmount(5)}></Button>
      </View>
    

    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'beige',
    justifyContent: 'center',
    alignItems:'center'
  },
  text:{
    fontSize: 36
  },
  twoButton:{
    width:60,
    flexDirection:'row',
    justifyContent: 'space-around'
  }
 
})