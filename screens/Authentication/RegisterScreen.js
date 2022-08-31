
import{ useNavigation } from '@react-navigation/core'
import { render } from 'react-dom'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../../firebase'
import HomeScreen from '../HomeScreen'
import LoginScreen from './LoginScreen'


const RegisterScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {
    auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Registered with:', user.email);
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
  }


  return (
   
    //<KeyboardAvoidingView
    //style={styles.container}
    //behavior="padding"
  //>
    <View style={styles.container}>
       <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={handleSignUp}
        style={styles.buttonReg}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
     
      </View>
    </View>
    //</KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: '80%'
  },
   buttonReg: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 20,
    marginTop: 5,
    alignItems: 'center',
  },
  buttonLog: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 20,
    marginTop: 5,
    alignItems: 'center',
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})

