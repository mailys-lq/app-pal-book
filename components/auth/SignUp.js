// INSCRIPTION //

import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import axios from 'axios';
import ButtonGreen from '../UX/ButtonGreen';

const SignUp = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation()

  useEffect(() => {
    
  }, [])

  // const handleSignUp = async () => {
    
  //   const url = `http://api-pal.test/api/user`
    
  //   console.log(url)
  //   const response = await axios.post(url)
  //   console.log(response.data)

  // }

  const handleSignUp = async (event) => {
    console.log(name)
    console.log(email)
    console.log(password)
    try {
      const response = await axios.post(`http://api-pal.test/api/user`, {
        name,
        email,
        password
      });
      // alert(` You have created: ${JSON.stringify(response.data)}`);

      // console.log(response)
      // if (response.status === 201) {
      //   alert(` You have created: ${JSON.stringify(response.data)}`);
      //   setName('');
      //   setEmail('');
      //   setPassword('');
      // } else {
      //   throw new Error("An error has occurred");
      // }
    } catch (error) {
      console.log(error)
      alert("An error has occurred");
    }
  };


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Nom et prénom"
          value={name}
          onChangeText={text => setName(text)}
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
