import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, View, ScrollView } from 'react-native';

import NumberUser from '../../NumberUser'

const Library = () => {
  const navigation = useNavigation()

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
      <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
        <Image style={styles.icon} source={require('../../../assets/books/livre-musso-2.png')} />
        <Image style={styles.icon} source={require('../../../assets/books/livre-musso-2.png')} />
        <Image style={styles.icon} source={require('../../../assets/books/livre-musso-2.png')} />
        <Image style={styles.icon} source={require('../../../assets/books/livre-musso-2.png')} />
        <Image style={styles.icon} source={require('../../../assets/books/livre-musso-2.png')} />
        <Image style={styles.icon} source={require('../../../assets/books/livre-musso-2.png')} />
        <Image style={styles.icon} source={require('../../../assets/books/livre-musso-2.png')} />
        <Image style={styles.icon} source={require('../../../assets/books/livre-musso-2.png')} />
        <Image style={styles.icon} source={require('../../../assets/books/livre-musso-2.png')} />
        <Image style={styles.icon} source={require('../../../assets/books/livre-musso-2.png')} />
        <Image style={styles.icon} source={require('../../../assets/books/livre-musso-2.png')} />
        <Image style={styles.icon} source={require('../../../assets/books/livre-musso-2.png')} />
        <Image style={styles.icon} source={require('../../../assets/books/livre-musso-2.png')} />
        <Image style={styles.icon} source={require('../../../assets/books/livre-musso-2.png')} />
        <Image style={styles.icon} source={require('../../../assets/books/livre-musso-2.png')} />
      </View>
      <NumberUser nbUser={300} nbHomeEditions={4}/>
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
