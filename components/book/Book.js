

import { Image, StyleSheet, Text, View } from 'react-native';

const Book = ({book}) => {
  
  return (
    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginVertical: 15}}>
        <Image style={{width: 105, height: 170}} source={{
          uri: book.volumeInfo.imageLinks == undefined ? "https://cdn.vectorstock.com/i/preview-1x/48/06/image-preview-icon-picture-placeholder-vector-31284806.webp" : book.volumeInfo.imageLinks.thumbnail,
        }}/>
        <View style={{marginHorizontal: 15, width: 200}}>
            <Text>{book.volumeInfo.title}</Text>
            <Text>{book.volumeInfo.pageCount} pages</Text>
            <Text>24 personnes on lu ce livre</Text>
        </View>
    </View>    
  );
}

export default Book

const styles = StyleSheet.create({
  
});
