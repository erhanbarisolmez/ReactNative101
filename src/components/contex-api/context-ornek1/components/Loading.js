import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loading = ({message}) => {
  return (
    <View>
      <Text>{message}</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({})