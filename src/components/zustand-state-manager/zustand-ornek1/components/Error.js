import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Error = ({message}) => {
  return (
    <View >
      <Text style={styles.errText}>Error: {message}</Text>
    </View>
  )
}

export default Error

const styles = StyleSheet.create({
    errText:{
        margin:40,
        padding:15,
        width:'90%',
        backgroundColor:'red',
        height:50,
        alignContent:'flex-end',
        textAlign:'center',
        color:'white'
    }
})