import { Image, StyleSheet, View } from 'react-native';

const CardBookImage = ({}) => {

  return (
    
      <View style={styles.icon}>
        <Image style={styles.icon} source={require('../../assets/books/vurginie-grimaldi-livre.png')} />
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
