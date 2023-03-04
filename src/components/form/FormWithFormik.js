import {View, TextInput, StyleSheet, Button, Text} from 'react-native';
import React from 'react';
import {useFormik} from 'formik';
import validationSchema from './validations';
const FormWithFormik = () => {
  const {values, errors,touched,isSubmitting, handleSubmit, handleChange, handleBlur} = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    onSubmit: async (values, bag) => {
        await new Promise((r) => setTimeout(r, 1000));

        if (values.email === "test@test.com") {
            return bag.setErrors({email: "Bu mail adresi zaten kullanılıyor."})
        }
        bag.resetForm();
      console.log(values);
    },
    validationSchema,
  });
  return (
    <View style={styles.container}>
      <View style={styles.item}><Text style={styles.header}>Register Page</Text></View>
      {/* <Text>{JSON.stringify(errors, null, 2)}</Text> */}
      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="username"
          value={values.username}
          onChangeText={handleChange('username')}
          onBlur= {handleBlur("username")}
          editable={!isSubmitting}
        />
                {errors.username && touched.username &&<Text style={styles.err}>{errors.username}</Text>}
      </View>

      <View style={styles.item}>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="e-mail"
          value={values.email}
          onChangeText={handleChange('email')}
          onBlur={handleBlur("email")}
          editable={!isSubmitting}

        />
                {errors.email && touched.email && <Text style={styles.err}>{errors.email}</Text>}

      </View>

      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry
          value={values.password}
          onChangeText={handleChange('password')}
          onBlur={handleBlur("password")}
          editable={!isSubmitting}
        />
                {errors.password && touched.password && <Text style={styles.err}>{errors.password}</Text>}

      </View>

      <View style={styles.item}>
        <TextInput
          style={styles.input}
          placeholder="password confirm"
          secureTextEntry
          value={values.passwordConfirm}
          onChangeText={handleChange('passwordConfirm')}
          onBlur={handleBlur("passwordConfirm")}
          editable={!isSubmitting}
        />
                {errors.passwordConfirm && touched.passwordConfirm &&<Text style={styles.err}>{errors.passwordConfirm}</Text>}

      </View>

      <View style={styles.item}>
        <Button color="#382815" title="Register" onPress={handleSubmit}  disabled={isSubmitting}/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
    backgroundColor: '#FFF3F3-',
    justifyContent: 'center',
  },
  header:{
    padding:10,
    fontSize:26,
    fontWeight:'bold',
    textAlign: 'right',
    color:'#807979',
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
    color: '#382815',
  },
  err:{
    color:'#FFA6A6',
    fontWeight:'bold',
    
  }
});
export default FormWithFormik;
