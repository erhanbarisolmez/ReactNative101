import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import  propTypes  from 'prop-types';

const Message = ({bgColor, message}) => {
  return (
    <View style={[styles.container, {backgroundColor:bgColor}]}>
      <Text style={styles.text}>{message}</Text>
    </View>
  )
}
Message.propTypes = {
    bgColor: propTypes.string,
    message: propTypes.string,

};

Message.defaultProps = {
    bgColor:'#D1C03F',
}

export default Message

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 12,
        borderWidth:1,
        borderColor: '#000',
        margin:10,
    },
    text : {
        fontSize:18,
        color:'black',
        fontWeight: "400"
    }
})