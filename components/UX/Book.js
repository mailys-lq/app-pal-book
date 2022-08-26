

import { Image, StyleSheet, Text, View } from 'react-native';

const Book = ({book}) => {

  return (
    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginVertical: 15}}>
        <Image style={{width: 105, height: 170}} source={require('../../assets/books/livre-musso-2.png')}/>
        <View style={{marginHorizontal: 15}}>
            <Text>Titre du livre</Text>
            <Text>567 pages</Text>
            <Text>24 personnes on lu ce livre</Text>
        </View>
    </View>    
  );
}

export default Book

const styles = StyleSheet.create({
  
});
