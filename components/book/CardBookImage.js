import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

const CardBookImage = ({item}) => {
  return (    
      <View style={styles.icon}>
        <TouchableOpacity id_book={item.id_book} onPress={() => showBook(item.id_book)}>
          <Image 
            resizeMode="cover"
            style={styles.itemImage} 
            source={{
              uri: item.volumeInfo.imageLinks == undefined ? "https://cdn.vectorstock.com/i/preview-1x/48/06/image-preview-icon-picture-placeholder-vector-31284806.webp" : item.volumeInfo.imageLinks.thumbnail,
            }}
            />
        </TouchableOpacity>
      </View>      
  );
}

export default CardBookImage

const styles = StyleSheet.create({
    icon: {
        width: 105,
        height: 170, 
        margin: 5, 
        marginHorizontal: 10,
      }, 
});
