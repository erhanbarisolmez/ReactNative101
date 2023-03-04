import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import ThemeContext from '../context/ThemeContext';
import LangContext from '../context/LangContext';

const Settings = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const [lang, setLang] = useContext(LangContext);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Active Theme: {theme}</Text>
      <Button 
        title='Toggle Theme'
        onPress={toggleTheme} />
      <Text style={{ marginTop: 14 }}>Change Language</Text>
      <Text style={styles.text}>Active Langue: {lang}</Text>
      <View style={styles.buttons}>
          <Button title="tr-TR" onPress={() => setLang("tr-Tr") } />
          <Button title="en-US" onPress={() => setLang("en-US") } />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    padding: 10,
  },
  buttons: {
    flexDirection: 'row'
  }
});
export default Settings;
