import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import axios from 'axios';
import ButtonGreen from '../UX/ButtonGreen';
import useJwt from './useJwt';
import AsyncStorage from '@react-native-async-storage/async-storage';


// import { API_LARAVEL_URL } from '@env';


const SignIn = () => {
  
  const { createJwt, decodeJwt, jwtExpired, haveJwt, jwt, jwtDecode } = useJwt();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isConnect, setIsConnect] = useState(false);
  const navigation = useNavigation()

  const handleSignIn = async () => {
    const url = `https://api-pal.herokuapp.com/api/user`;

    await axios.get('https://api-pal.herokuapp.com/api/user')
    .then((res) => {
      res.data.some(async function(user) {
        if(user.email == email && user.password == password){
          await createJwt(email, user.id); 
          const jwt = process.env['JWT_TOKEN'] + user.id;
          await storeJwtOnStorage(jwt)
          await navigation.navigate( 'HomeBook' );
          return 
        } else {
          alert('Email ou mot de passe éronné, veuillez réessayer')
        }
      });
    })
    .catch((error) => {
      console.error('coucou error')
      console.error(error)
    })
  };

  const storeJwtOnStorage = async (token) => {
    try {
      AsyncStorage.getItem(
        'US48', (err, result) => {
          if(result){
            AsyncStorage.mergeItem(
              'US48',
            )              
          } else {
            AsyncStorage.setItem(
              'US48',
            )    
          }
      });
    } catch (e) {
      console.log('impossible de stoker le jwt dans le storage : ', e);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Mot de passe"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
      <ButtonGreen backgroundGreen={true} nameButton="Connexion" pressButton={handleSignIn}/>

      </View>
    </KeyboardAvoidingView>
  )
}

export default SignIn; 

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
