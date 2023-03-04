import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

const TextInputExample = () => {
  return (
    <View style={styles.container}>
        <TextInput style={styles.input} autoCapitalize="none" clearTextOnFocus={true} keyboardType={'numeric'}/>
        
    </View>
  )
}

export default TextInputExample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        padding:20
    },
    input: {
        margin:12,
        padding:10,
        width: '100%',
        height: 40,
        borderWidth:2,
        borderColor: 'brown',
        fontSize: 20,

    }
})