import { useNavigation } from '@react-navigation/native';
import { Button, Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import CarrouselBook from '../CarrouselBook'
import ListBook from '../ListBook'
import NumberUser from '../NumberUser'
import BottomBar from '../BottomBar'
import ButtonRound from '../UX/ButtonRound';

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
        <Image style={styles.icon} source={require('../../assets/icon.png')} />
        <CarrouselBook/>
        <ListBook nameList="Romans"/>   
        
        <ListBook nameList="Les éditeurs favoris du moment" round={true} />

        <View>
          <Text>Genre recherché</Text>
          <View style={styles.containerButtonsCategory}>
            <ButtonRound style={styles.buttonRound} content="BD" position={1}/>
            <ButtonRound style={styles.buttonRound} content="Manga" position={2}/>
            <ButtonRound style={styles.buttonRound} content="Romans" position={3}/>
          </View>
        </View>
        <ListBook nameList="Manga"/>
        <ListBook nameList="Bandes déssinés"/>
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
  },
  containerButtonsCategory: {
    display: 'flex', 
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'center'
  }, 
  buttonRound: {
    width: 125,
  }
});
