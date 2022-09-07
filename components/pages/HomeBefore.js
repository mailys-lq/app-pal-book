import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import ListBook from '../book/ListBook'
import NumberUser from '../NumberUser'
import ButtonGreen from '../UX/ButtonGreen';
import BackgroundBook from '../UX/BackgroundBook';

const HomeBefore = () => {
  const navigation = useNavigation(); 
  const [book, setBook] = useState([])

  useEffect(() => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=fiction&orderBy=newest&maxResults=10&key=AIzaSyCxBFNJzM2OegkkQ1QWnSD0go-u1SdA6Ck`)
    .then(data => {
      setBook(data.data.items)
    })
  }, [])
  const handleSignIn = () => {
    navigation.navigate( 'Connexion' );
  }
  const handleSignUp = () => {
    navigation.navigate( 'Inscription' );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
      <BackgroundBook/>
      <Image style={styles.icon} source={require('../../assets/icon.png')} />
      <Text style={styles.textHome}>Vous voulez mettre de l'ordre dans vos lectures ? {"\n"}Vous êtes au bon endroit !</Text>
      <ButtonGreen backgroundGreen={true} nameButton="Connexion" pressButton={handleSignIn}/>
      <TouchableOpacity
        onPress={handleSignUp}
        style={[styles.button, styles.buttonBorderGreen]}
      >
        <Text>Inscription</Text>
      </TouchableOpacity>   
      <ListBook nameList="Nos suggestions du mois" book={book} noClick={true}/>   
      <Text style={styles.textHome}>Un abonnement existe pour avoir accès à plus de fonctionnalités !</Text>
      <TouchableOpacity
        style={[styles.button, styles.buttonGreen]}
        onPress={handleSignIn}
      >
        <Text>Premium</Text>
      </TouchableOpacity>  
      {/* <ListBook nameList="Ils collaborent avec nous"/> */}
      <View style={{width: '100%'}}>
          <Text style={{marginLeft: 10, width: '100%'}}>Ils collaborent avec nous</Text>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Image source={require('../../assets/books/logo-memo.png')}  style={{width: 105,height: 105}} />                       
            <Image source={require('../../assets/books/maison-editions-verone.png')}  style={{width: 105,height: 105}} />                       
          </View>
        </View>
      <NumberUser/>
    </ScrollView>
  );
}

export default HomeBefore

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    width : "100%",
    height: "100%",
    backgroundColor: '#fff',
  },
  icon: {
    width: 200,
    height: 200, 
  }, 
  textHome: {
    fontSize: 25, 
    textAlign: 'center',
    paddingHorizontal: 15, 
    marginVertical: 30
  }, 
  button: {
    color: 'black', 
    width: 200, 
    height: 60,
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 5, 
    marginVertical: 5, 
    marginHorizontal: 5, 
  }, 
  buttonGreen: {
    backgroundColor: '#7DC996', 
  }, 
  buttonBorderGreen: {
    borderWidth: 2, 
    borderColor: '#7DC996', 
    borderStyle: 'solid'
  }
});
