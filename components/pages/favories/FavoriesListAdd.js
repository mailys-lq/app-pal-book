import { StyleSheet, View, ScrollView, TextInput } from 'react-native';
import NumberUser from '../../NumberUser';
import CardBookFavorySearch from '../../book/CardBookFavorySearch';
import Header from '../../UX/header/Header';
import { useState } from 'react';


const FavoriesListAdd = () => {
  const [bookSearch, setBookSearch] = useState();

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
            <CardBookFavorySearch/>
            <CardBookFavorySearch/>
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
