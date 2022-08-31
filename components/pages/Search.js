import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, TextInput, TouchableOpacity, Text } from 'react-native';
import axios from 'axios';

import NumberUser from '../NumberUser'
import Book from '../book/Book';

const HomeBefore = () => {
  const [bookSearch, setBookSearch] = useState();

  
  const [book, setBook] = useState('')
  const [result, setResult] = useState([])
  const [apiKey, setApiKey] = useState('AIzaSyCxBFNJzM2OegkkQ1QWnSD0go-u1SdA6Ck')

  
  const navigation = useNavigation()

  const showBook = (id_book, key) => {
    // console.log(id_book)
    navigation.navigate('Book', {id_book: id_book});
  }

  useEffect(() => {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=subject:fiction&key="+apiKey)
    .then(data => {
      setResult(data.data.items)
    }); 
  }, []); 

  const handleSubmit = () => {

    axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey)
    .then(data => {
      setResult(data.data.items)
    })
  }
  return (  
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, alignItems: 'center', marginTop: 30 }}>
      <TextInput
        style={styles.inputSearch}
        onChangeText={setBook}
        value={book}
        placeholder="Votre recherche ... " 
        keyboardType="text"
        onKeyPress={handleSubmit}
      />
      
      {result.map((bookInfo, i) => (
        <TouchableOpacity  key={i} id_book={bookInfo.id} onPress={() => showBook(bookInfo.id)}>
          <Book book={bookInfo}/>
        </TouchableOpacity>
      ))}
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
  inputSearch: {
    marginTop: 30,
    width: '90%',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: '#aff4c66b',
     
    textAlign: 'left'
  }
});
