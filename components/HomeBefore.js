import { useNavigation } from '@react-navigation/native';
import { Button, Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import ListBook from './ListBook'
import NumberUser from './NumberUser'
import ButtonGreen from './UX/ButtonGreen';

const HomeBefore = () => {
  const navigation = useNavigation()

  const handleSignIn = () => {
    navigation.navigate( 'Connexion' );

    // navigation.replace("Connexion")
  }
  const handleSignUp = () => {
    navigation.navigate( 'Inscription' );
    // navigation.replace("Inscription")
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
      <Image style={styles.icon} source={require('../assets/icon.png')} />
      <Text style={styles.textHome}>Vous voulez mettre de l'ordre dans vos lectures ? {"\n"}Vous êtes au bon endroit !</Text>
      <ButtonGreen backgroundGreen={true} nameButton="Connexion" pressButton={handleSignIn}/>
      {/* <TouchableOpacity
        onPress={handleSignIn}
        style={[styles.button, styles.buttonGreen]}
      >
        <Text>Connexion</Text>
      </TouchableOpacity>       */}
      <TouchableOpacity
        onPress={handleSignUp}
        style={[styles.button, styles.buttonBorderGreen]}
      >
        <Text>Inscription</Text>
      </TouchableOpacity>   
      <ListBook/>   
      <Text style={styles.textHome}>Un abonnement existe pour avoir accès à plus de fonctionnalités !</Text>
      <TouchableOpacity
        style={[styles.button, styles.buttonGreen]}
      >
        <Text>Premium</Text>
      </TouchableOpacity>  
      <ListBook/>
      <NumberUser nbUser={300} nbHomeEditions={4}/>
    </ScrollView>
  );
}

export default HomeBefore

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    width : "100%",
    height: "100%",
    borderColor: 'red', 
    borderWidth: 2,
    borderBottomWidth: 0,
    backgroundColor: '#fff',
  },
  icon: {
    width: 200,
    height: 200, 
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
