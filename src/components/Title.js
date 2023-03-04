import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {PropTypes} from 'prop-types';
const Title = (props) => {
  return (
    <View>
      <Text style={[styles.title, {color: props.color}]}>{props.title}</Text>
    </View>
  )
}

Title.PropTypes = {
  title: PropTypes.string.isRequired
};

Title.defaultProps={
  text: "varsayılan başlık"
}
export default Title
const styles = StyleSheet.create({
    title:{
      flexDirection:'row',
        color: 'white',
        fontWeight:700,
        fontSize: 26,
    }
})

