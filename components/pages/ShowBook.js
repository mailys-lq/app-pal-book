import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, ScrollView, TextInput, View, Text, Image } from 'react-native';
import Header from '../UX/header/Header';


const ShowBook = () => {
  
  return (  
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, alignItems: 'center', marginTop: 50  }}>
        <Header title='titre' add={true} style={{zIndex: 10, position: 'relative'}}/>
        <View style={[{position: 'relative', zIndex: 4}]}>
            <Image source={require('../../assets/books/livre-musso-2.png')} style={styles.imageBookCenter}/>
            <Image source={require('../../assets/books/livre-musso-2.png')} style={[styles.imageBook, styles.imageBookLeft]}/>
            <Image source={require('../../assets/books/livre-musso-2.png')} style={[styles.imageBook, styles.imageBookRight]}/>
        </View>
        <Text style={{fontWeight: 600}}>Auteur :<Text style={{fontWeight: 100}}>Guillaume Musso</Text></Text>
    </ScrollView>
  );
}

export default ShowBook

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        width : "100%",
        height: "100%",
        backgroundColor: '#fff',
    },
    imageBookCenter: {
        width: 180, 
        height: 300,
        position:'relative', 
        zIndex: 10
    },
    imageBook: {
        width: 110, 
        height: 180,
        position: 'absolute', 
        top: 150,
    },
    imageBookRight: {
        right: -80,
    },
    imageBookLeft: {
        left: -80,
    }
  
});
