import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';

const Form = () => {
  //   const [username, setUsername] = useState('');
  //   const [password, setPassword] = useState('');
  //   const [passwordconfirm, setPasswordConfirm] = useState('');
  //   const [email, setEmail] = useState('');
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    passwordconfirm: '',
  });

  const handleSubmit = () => {
    if (!form.username) {
      return false;
    }
    if (!form.email) {
      return false;
    }
    if (!form.password) {
      return false;
    }
    if (!form.passwordconfirm || form.password !== form.passwordconfirm) {
      return false;
    }
    console.log(form);
  };

  const handleChange = (text, input) => {
    setForm(prev => ({...prev, [input]: text}));
  };

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text>{JSON.stringify(form, null, 2)}</Text>
        <TextInput
          style={styles.input}
          placeholder="username"
          value={form.username}
          onChangeText={text => handleChange(text, 'username')}
        />
      </View>

      <View style={styles.item}>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="e-mail"
          value={form.email}
          onChangeText={text => handleChange(text, 'email')}
        />
      </View>

      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry
          value={form.password}
          onChangeText={text => handleChange(text, 'password')}
        />
      </View>

      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="password confirm"
          secureTextEntry
          value={form.passwordconfirm}
          onChangeText={text => handleChange(text, 'passwordconfirm')}
        />
      </View>

      <View style={styles.item}>
        <Button color="#382815" title="Register" onPress={handleSubmit} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
    backgroundColor: '#416D80',
    justifyContent: 'center',
  },
  item: {
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#152A33',
    padding: 10,
    fontSize: 24,
    width: '100%',
    color: '#152A33',
  },
});
export default Form;
