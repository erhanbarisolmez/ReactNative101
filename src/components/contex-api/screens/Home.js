import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import LangContext from '../context/LangContext';

const Home = ({navigation}) => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const  [lang, setLang] = useContext(LangContext);

     return (
    <View style={styles.container}>
      <Text style={styles.text}>Active Theme: {theme} </Text>
       <View style={styles.buttons}>
      <Button 
        title='Toggle Theme'
        onPress={toggleTheme} />
     </View>

      <Text style={styles.text}>Active Langue: {lang} </Text>

      <View style={styles.buttons}>
          <Button title="tr-TR" onPress={() => setLang("tr-Tr") } />
          <Button title="en-US" onPress={() => setLang("en-US") } />
      </View>

      <View style={[styles.buttons, styles.buttonsSettings]}>
      <Button  
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
     />
     </View>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text: {
        fontSize: 20,
        padding:10,
    },
    buttons: {
        flexDirection: 'row',

    },
    buttonsSettings: {
        
        marginTop:40,
        width:100,
        alignContent:'center',
        justifyContent:"center"
    }
})