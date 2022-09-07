
import { Image, StyleSheet, View } from 'react-native';

const BackgroundBook = () => {

  return (
    <View style={{width: '100%', position: 'absolute', opacity: 0.3, filter: 'blur'}}>
        <Image style={[styles.image, {top: -5, right: 30}]} source={require('../../assets/books/livre-musso-2.png')} />
        <Image style={[styles.image,{top: 205, right: 300}]} source={require('../../assets/books/livre-musso-2.png')} />
        <Image style={[styles.image,{top: 40, left: 60}]} source={require('../../assets/books/musso-livre-1.png')} />
        <Image style={[styles.image,{top: 300, left: 170}]} source={require('../../assets/books/musso-livre-1.png')} />
        <Image style={[styles.image,{top: 120, right: 200}]} source={require('../../assets/books/mbougar-sar-livre.png')} />
        <Image style={[styles.image,{top: 120, right: 200}]} source={require('../../assets/books/mbougar-sar-livre.png')} />
        <Image style={[styles.image,{top: 5, right: 30}]} source={require('../../assets/books/vurginie-grimaldi-livre.png')} />
        <Image style={[styles.image,{top: 250, right: 50}]} source={require('../../assets/books/vurginie-grimaldi-livre.png')} />
    </View>
       
  );
}

export default BackgroundBook

const styles = StyleSheet.create({
  image: {
    width: 50, 
    height: 90, 
    position: 'absolute'
  }
});
