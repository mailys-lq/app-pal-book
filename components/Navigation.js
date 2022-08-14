import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import SignIn from "./auth/SignIn"
import SignUp from './auth/SignUp';
import HomeBefore from './HomeBefore';

import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

const Navigation = () => {

    return (
        <Stack.Navigator initialRouteName="Home">  
            <Stack.Screen name="Home" component={HomeBefore} options={{ headerShown: false }}/>
            <Stack.Screen name="Inscription" component={SignUp} options={{ headerShown: true }}/>
            <Stack.Screen name="Connexion" component={SignIn} options={{ headerShown: true }}/>
        </Stack.Navigator>
    )
}

export default Navigation

const styles = StyleSheet.create({
    navigation: {
        display: 'flex',
        flexDirection: 'row'
    }, 
    header: {
        width: '100%', 
    }
})