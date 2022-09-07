// INSCRIPTION //

import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import axios from 'axios';
import ButtonGreen from '../UX/ButtonGreen';
import useJwt from './useJwt';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = () => {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation()
  const { createJwt, decodeJwt, jwtExpired, haveJwt, jwt, jwtDecode } = useJwt();

  useEffect(() => {
    
  }, [])


  const handleSignUp = async (event) => {
      axios.post('https://api-pal.herokuapp.com/api/user', {
        
        "firstname": firstname,
        "lastname": lastname, 
        "email": email,
        "password": password
      })
      .then(async (res) => {
        const jwt = process.env['JWT_TOKEN'] + res.data.id;
        await storeJwtOnStorage(jwt)
        navigation.navigate( 'HomeBook' );
      })
      .catch((error) => {
        console.error(error)
      })

  };


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Nom"
          value={lastname}
          onChangeText={text => setLastname(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Prénom"
          value={firstname}
          onChangeText={text => setFirstname(text)}
          style={styles.input}
        />
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
        <ButtonGreen backgroundGreen={true} nameButton="Inscription" pressButton={handleSignUp}/>

      </View>
    </KeyboardAvoidingView>
  )
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
})
