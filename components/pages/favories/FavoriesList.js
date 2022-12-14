import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, View, ScrollView, FlatList, Text } from 'react-native';
import NumberUser from '../../NumberUser';
import CardBookImage from '../../book/CardBookImage';
import Header from '../../UX/header/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';


const FavoriesList = ({route}) => {
  const navigation = useNavigation()
  const [book, setBook] = useState([])
  const [apiKey, setApiKey] = useState('AIzaSyCxBFNJzM2OegkkQ1QWnSD0go-u1SdA6Ck')

  useEffect(() => {
    let book_push = [];
    axios.get("https://api-pal.herokuapp.com/api/favorite")
      .then((res) => {
          res.data.some(async function(book) {
            axios.get("https://www.googleapis.com/books/v1/volumes/"+book.id_book+"?key="+apiKey)
            .then(data => {
              book_push.push(data.data);
              setBook(book_push)
            })
          });
        })
        .catch((error) => {
          console.log(error)
        })
  }, [])
  const addBookFavory = () => {
    navigation.navigate( 'FavoriesListAdd', {gender: route.params.gender} );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Header add={true} addBookRead={addBookFavory} title='Listes des favories' returnBack={true}/>
        <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
          { book.length == 0 ?<Text>Pas de livres en favories</Text> : 
            <FlatList
              horizontal
              data={book}
              renderItem={({ item }) => <CardBookImage item={item} />}
              showsHorizontalScrollIndicator={false}
          /> 
          }
        </View>
        <NumberUser style={{marginHorizontal:'auto'}}/>
    </ScrollView>
  );
}

export default FavoriesList

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    width : "100%",
    height: "100%",
    backgroundColor: '#fff',
  },
  icon: {
    width: 105,
    height: 170, 
    margin: 5, 
    marginHorizontal: 10,
  }, 
  textHome: {
    fontSize: 25, 
    textAlign: 'center',
    paddingHorizontal: 15, 
    marginVertical: 30
  }, 
});
