import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {PropTypes} from 'prop-types';

const User = (data,props) => {
  return (
    <View>
        <Text>
          {
            JSON.stringify(data,null,2)
          }
        </Text>
        <Text style={styles.text}>{props.text}</Text>
    </View>
  )
}
User.PropTypes={
  data: PropTypes.array
}
export default User

const styles = StyleSheet.create({
  text:{
    fontWeight:700,
    color:'#fff',
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:0
  }
})