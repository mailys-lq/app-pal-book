import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, View, ScrollView } from 'react-native';
import NumberUser from '../../NumberUser';
import CardBookImage from '../../book/CardBookImage';
import Header from '../../UX/header/Header';


const FavoriesList = () => {
  const navigation = useNavigation()

  const addBookFavory = () => {
    navigation.navigate( 'FavoriesListAdd' );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Header add={true} addBookFavory={addBookFavory} title='Listes des favories' returnBack={true}/>
        <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
            <CardBookImage/>
            <CardBookImage/>
            <CardBookImage/>
            <CardBookImage/>
            <CardBookImage/>
            <CardBookImage/>
            <CardBookImage/>
            <CardBookImage/>
            <CardBookImage/>
            <CardBookImage/>
            <CardBookImage/>
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
