import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import SignIn from "../auth/SignIn"
import SignUp from '../auth/SignUp';
import HomeBefore from '../pages/HomeBefore';
import TabNavigator from './TabNavigator';
import ShowBook from '../book/ShowBook';
import EditProfil from '../pages/profil/EditProfil';
import FavoriesList from '../pages/favories/FavoriesList';

import { StyleSheet } from 'react-native';
import FavoriesListAdd from '../pages/favories/FavoriesListAdd';

const Stack = createNativeStackNavigator();

const Navigation = () => {

    return (
        <Stack.Navigator initialRouteName="Home">  
            <Stack.Screen name="HomeBefore" component={HomeBefore} options={{ headerShown: false }}/>
            <Stack.Screen name="Inscription" component={SignUp} options={{ headerShown: true }}/>
            <Stack.Screen name="Connexion" component={SignIn} options={{ headerShown: true }}/>
            <Stack.Screen name="HomeBook" component={TabNavigator} options={{ headerShown: false }}/>
            <Stack.Screen name="Book" component={ShowBook} options={{ headerShown: false }}/>
            <Stack.Screen name="EditProfil" component={EditProfil} options={{ headerShown: false }}/>
            <Stack.Screen name="FavoriesList" component={FavoriesList} options={{ headerShown: false }}/>
            <Stack.Screen name="FavoriesListAdd" component={FavoriesListAdd} options={{ headerShown: false }}/>
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