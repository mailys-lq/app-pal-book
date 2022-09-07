import { StyleSheet, View, ScrollView, TextInput, FlatList } from 'react-native';
import NumberUser from '../../NumberUser';
import CardBookFavorySearch from '../../book/CardBookFavorySearch';
import Header from '../../UX/header/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';


const FavoriesListAdd = ({route}) => {
  const [bookSearch, setBookSearch] = useState();
  const [book, setBook] = useState([])
  const [apiKey, setApiKey] = useState('AIzaSyCxBFNJzM2OegkkQ1QWnSD0go-u1SdA6Ck')

  useEffect(() => {
    let book_push = [];
    axios.get("https://api-pal.herokuapp.com/api/reading_list")
      .then((res) => {
        // console.log(res.data)

          res.data.some(async function(book) {
            axios.get("https://www.googleapis.com/books/v1/volumes/"+book.id_book+"?key="+apiKey)
            .then(data => {
              // console.log(data.data)
              book_push.push(data.data);
              // console.log(book_push)
              setBook(book_push)
            })
          });
        })
        .catch((error) => {
          console.log(error)
        })
        console.log(book_push)
  }, [])
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
        <Header add={true} title='Listes des favories' returnBack={true}/>
        <TextInput
          style={styles.inputSearch}
          onChangeText={setBookSearch}
          value={bookSearch}
          placeholder="Votre recherche ... " 
          keyboardType="text"
        />
        <View style={{display: 'flex', width: '100%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
          <FlatList
            
            data={book}
            renderItem={({ item }) => <CardBookFavorySearch item={item} gender={route.params.gender} />}
            showsHorizontalScrollIndicator={false}
          /> 
        </View>
        <NumberUser style={{marginHorizontal:'auto'}}/>
    </ScrollView>
  );
}

export default FavoriesListAdd

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    width : "100%",
    height: "100%",
    backgroundColor: '#fff',
  },
  inputSearch: {
    marginBottom: 30,
    width: '90%',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: '#aff4c66b',
     
    textAlign: 'left'
  }
});
