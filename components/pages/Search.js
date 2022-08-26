import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';

import NumberUser from '../NumberUser'
import Book from '../UX/Book';

const HomeBefore = () => {
  const [bookSearch, setBookSearch] = useState();
  const navigation = useNavigation()

  const showBook = () => {
    navigation.navigate( 'Book' );
  }
  return (  
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, alignItems: 'center', marginTop: 30 }}>
      <TextInput
        style={styles.inputSearch}
        onChangeText={setBookSearch}
        value={bookSearch}
        placeholder="Votre recherche ... " 
        keyboardType="text"
      />
      <Book/>
      <Book/>
      <TouchableOpacity onPress={showBook}>
        <Book/>
      </TouchableOpacity>
      <NumberUser nbUser={300} nbHomeEditions={4}/>
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
