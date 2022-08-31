import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const ButtonRound = ({content,  pressButton, position}) => {

  return (
    
      <TouchableOpacity
        onPress={pressButton}
        style={[styles.button, position == 1 ? {backgroundColor: '#14AE5C', marginRight: -1}: position == 2 ? {backgroundColor: '#7DC996', marginLeft: -1} : {backgroundColor: '#AFF4C6', marginTop: -25}]}
      >
        <Text style={styles.textButton}>{content}</Text>
      </TouchableOpacity>      
  );
}

export default ButtonRound

const styles = StyleSheet.create({
  button: {
    borderRadius: 150,
    width: 125,
    height: 125,
    backgroundColor: 'grey', 
    position: 'relative', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    margin: 5
  }, 
  textButton: {
    // width: 125,
    // position: 'absolute', 
    // textAlign: 'center',
    // display: 'flex',
    // height: '100%',
    // justifyContent: 'center',
    // alignItems: 'center'

    // right: '50%',
  }
});
