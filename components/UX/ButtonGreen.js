import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const ButtonGreen = ({backgroundGreen, nameButton, pressButton}) => {

  return (
    
      <TouchableOpacity
        onPress={pressButton}
        style={[backgroundGreen === true ? styles.buttonGreen : styles.buttonBorderGreen, styles.button]}
      >
        <Text>{nameButton}</Text>
      </TouchableOpacity>      
  );
}

export default ButtonGreen

const styles = StyleSheet.create({
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
