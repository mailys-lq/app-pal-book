import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import ListBook from '../ListBook'
import NumberUser from '../NumberUser'

const Profil = () => {
  const navigation = useNavigation()

  const handleSignIn = () => {
    navigation.navigate( 'Connexion' );
  }
  const handleSignUp = () => {
    navigation.navigate( 'Inscription' );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
      <View style={styles.containeStartProfil}>
        <Image style={styles.icon} source={require('../../assets/image-profil.png')} />
        <Text style={[styles.textRead, styles.textReadPages]}>234 pages lu</Text>
        <Text style={[styles.textRead, styles.textReadBook]}>34 livres lu</Text>
        <Text style={[styles.nameProfil]}>Maïlys Le Quintrec</Text>
      </View>
      <ListBook nameList="Vos dernières lectures" edit={false}/>   
      <ListBook nameList="Vos romans favories" edit={true}/>   
      <ListBook nameList="Vos manga favories" edit={true}/>   
      <ListBook nameList="Vos BD favories" edit={true}/>   
      <ListBook nameList="Les éditeurs que vous suivez"/>   
      <NumberUser nbUser={300} nbHomeEditions={4}/>
    </ScrollView>
  );
}

export default Profil

const styles = StyleSheet.create({
  containeStartProfil: {
    position: 'relative', 
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',

  }, 
  container: {
    paddingTop: 10,
    width : "100%",
    height: "100%",
    backgroundColor: '#fff',
  },
  icon: {
    width: 100,
    height: 100, 
    zIndex:10,
  }, 
  textRead: {
    fontSize: 25, 
    textAlign: 'center',
    paddingHorizontal: 15, 
    marginVertical: 30, 
    backgroundColor: "#7DC996", 
    height: 75, 
    width: 170,
    textAlign: 'center',
    textAlignVertical: 'center', 
    position: 'absolute', 
    top: 50,
  }, 
  textReadPages: {
    left: 0,
  }, 
  textReadBook: {
    right: 0,
  },
  nameProfil: {
    marginTop: 70, 
    fontSize: 22,
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
