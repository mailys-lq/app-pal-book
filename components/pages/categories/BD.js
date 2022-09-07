import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, View, ScrollView, FlatList, TouchableOpacity, Text } from 'react-native';

import NumberUser from '../../NumberUser'
import axios from 'axios';

const Library = () => {
  const navigation = useNavigation()

  const [result, setResult] = useState([])
  const [apiKey, setApiKey] = useState('AIzaSyCxBFNJzM2OegkkQ1QWnSD0go-u1SdA6Ck')

  useEffect(() => {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=subject:comic&key="+apiKey)
    .then(data => {
      setResult(data.data.items)
    }); 
  }, []);

  
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
      <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
        {result.map((bookInfo, i) => (
          <TouchableOpacity  key={i} id_book={bookInfo.id} onPress={() => showBook(bookInfo.id)}>
            <Image 
              resizeMode="cover"
              style={styles.icon} 
              source={{
                uri: bookInfo.volumeInfo.imageLinks == undefined ? "https://cdn.vectorstock.com/i/preview-1x/48/06/image-preview-icon-picture-placeholder-vector-31284806.webp" : bookInfo.volumeInfo.imageLinks.thumbnail,
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
      <NumberUser/>
    </ScrollView>
  );
}

export default Library

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
  
});
