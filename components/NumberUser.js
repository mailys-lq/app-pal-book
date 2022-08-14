import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NumberUser = ({nbUser, nbHomeEditions}) => {    
    return (
        <View style={styles.containerNumberUser}>
            <Text style={[styles.textGlobal, styles.user]}>{nbUser} utilisateurs</Text>
            <Text style={[styles.textGlobal, styles.homeEditions]}>{nbHomeEditions} maisons d'éditions</Text>
        </View>
    )
}

export default NumberUser

const styles = StyleSheet.create({
    containerNumberUser: {
        marginVertical: 30
    },
    textGlobal: {
        textAlign: 'center', 
        width: 225,
        paddingVertical: 5,
    },
    user: {
        backgroundColor: '#7DC996',
        marginRight: 100
    }, 
    homeEditions: {
        backgroundColor: '#AFF4C6', 
        marginLeft: 100
    }
});