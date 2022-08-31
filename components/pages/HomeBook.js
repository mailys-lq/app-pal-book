import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import CarrouselBook from '../book/CarrouselBook'
import ListBook from '../book/ListBook'
import NumberUser from '../NumberUser'
import ButtonRound from '../UX/ButtonRound';
import axios from 'axios';

const HomeBefore = () => {
  const [book, setBook] = useState([])
  const [bd, setBd] = useState([])
  const [manga, setManga] = useState([])
  const [apiKey, setApiKey] = useState('AIzaSyCxBFNJzM2OegkkQ1QWnSD0go-u1SdA6Ck')
  const navigation = useNavigation()

 
  useEffect(() => {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=subject:fiction&key="+apiKey)
    .then(data => {
      setBook(data.data.items)
    })

    axios.get("https://www.googleapis.com/books/v1/volumes?q=subject:manga&key="+apiKey)
    .then(data => {
      setManga(data.data.items)
    })

    axios.get("https://www.googleapis.com/books/v1/volumes?q=subject:comic&key="+apiKey)
    .then(data => {
      setBd(data.data.items)
    })
  }, []);
  const showLibraryBD = () => {
    navigation.navigate( 'BD' );
  }

  const showLibraryRomans = () => {
    navigation.navigate( 'Romans' );
  }
  const showLibraryManga = () => {
    navigation.navigate( 'Manga' );
  }
  
  return (

      <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
        <Image style={styles.icon} source={require('../../assets/icon.png')} />
        <CarrouselBook/>
        <ListBook nameList="Romans" book={book}/>   
        
        <ListBook nameList="Les éditeurs favoris du moment" round={true} />

        <View>
          <Text style={{marginLeft: 10, marginTop: 10}}>Genre recherché</Text>
          <View style={styles.containerButtonsCategory}>
            <ButtonRound style={styles.buttonRound} content="BD" position={1} pressButton={showLibraryBD}/>
            <ButtonRound style={styles.buttonRound} content="Manga" position={2} pressButton={showLibraryManga}/>
            <ButtonRound style={styles.buttonRound} content="Romans" position={3} pressButton={showLibraryRomans}/>
          </View>
        </View>
        <ListBook nameList="Manga" book={manga}/>
        <ListBook nameList="Bandes déssinés" book={bd}/>
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
  },
  containerButtonsCategory: {
    display: 'flex', 
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'center'
  }, 
  buttonRound: {
    width: 125,
  }
});
