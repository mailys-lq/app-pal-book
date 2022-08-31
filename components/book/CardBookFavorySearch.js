import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CardBookFavorySearch = ({}) => {

  return (
    
      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%'}}>
        <Image style={[styles.icon, {width: 75, height: 75}]} source={require('../../assets/books/vurginie-grimaldi-livre.png')} />
        <Text>Nom du livre</Text>
        <TouchableOpacity style={{position: 'absolute', right: 15}}><Image style={{width: 30, height: 30}} source={require('../../assets/hearth.png')}/></TouchableOpacity>
      </View>      
  );
}

export default CardBookFavorySearch

const styles = StyleSheet.create({
    icon: {
        width: 105,
        height: 170, 
        margin: 5, 
        marginHorizontal: 10,
      }, 
});
