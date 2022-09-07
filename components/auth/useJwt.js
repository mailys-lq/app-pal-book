
import JWT from 'expo-jwt';
import { useState } from "react";

export default function useJwt() {

  const [haveJwt, setHaveJwt] = useState(false);
  const [jwt, setJwt] = useState('');
  const [jwtDecode, setJwtDecode] = useState('');
  const [jwtExpired, setJwtExpired] = useState(false);
  const JWT_TOKEN = process.env['JWT_TOKEN'];
  /**
   * Permet de créer un jwt depuis le mail du user
   */
  const createJwt = (email, id) => {
    console.log('create jwt')
    const token = JWT.encode({ 
      id: id, 
      email: email, 
      iat: Date.now(),
      exp: new Date().getTime() + 3155695200 * 1000 // 100 ans
    }, 
    JWT_TOKEN, 
    { 
      algorithm: 'HS256' ,
    }); 
    console.log(token)
    setJwt(token);
  };

  /**
   * Permet de décoder un jwt
   */
  const decodeJwt = (token) => {
    token = token.replace(JWT_TOKEN, '')
    token = token.replace('"', '')
    token = parseInt(token)
    // console.log(token)
    return token;
  };

  return {
    createJwt,
    decodeJwt,
    jwt,
    haveJwt,
    jwtDecode,
    jwtExpired
  }
}