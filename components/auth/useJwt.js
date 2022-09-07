
import JWT from 'expo-jwt';
import { useState } from "react";

export default function useJwt() {

  const [jwt, setJwt] = useState('');
  const JWT_TOKEN = process.env['JWT_TOKEN'];
  
  const createJwt = (email, id) => {
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
    setJwt(token);
  };

  const decodeJwt = (token) => {
    token = token.replace(JWT_TOKEN, '')
    token = token.replace('"', '')
    token = parseInt(token)
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