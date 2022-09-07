import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios';

const NumberUser = ({}) => {  
    const [userNumber, setUserNumber] = useState('')
    const [editorNumber, setEditorNumber] = useState(0)
    useEffect(() => {
        axios.get("https://api-pal.herokuapp.com/api/user")
        .then((res) => {
            setUserNumber(res.data.length)
            let number = 0; 
            array.forEach(user => {
                if(user.editor_or_reader == 'editor') {
                   number++; 
                }
            });
            console.log(number)
            setEditorNumber(number) 
        })
        .catch((error) => {
    
        })
    }, [])
    return (
        <View style={styles.containerNumberUser}>
            <Text style={[styles.textGlobal, styles.user]}> {userNumber} utilisateurs</Text>
            <Text style={[styles.textGlobal, styles.homeEditions]}>{editorNumber} maisons d'éditions</Text>
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