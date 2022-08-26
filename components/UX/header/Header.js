
import { Image, StyleSheet, Text, View } from 'react-native';

const Header = ({title, update, add}) => {

  return (
    
    <View style={{backgroundColor: 'pink',height: 90, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200}}>
        <View style={[styles.losange]}></View>
        <View style={[styles.blockHeaderRadius, {left: 0, }]}></View>
        <View style={[styles.blockHeaderRadius, {right: 0}]}></View>
        <Text>{title}</Text>
        <View  style={[{top: 70, right: 15, position: 'absolute', backgroundColor: 'red', width: 35, height: 35, borderRadius: 50, justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}, add == true ? {display: 'flex'} : {display: 'none'}]}>
            <Text style={{position: 'absolute', fontSize: 25}}>+</Text>
        </View>
        <View  style={[{top: 70, right: 15, position: 'absolute', backgroundColor: 'red', width: 35, height: 35, borderRadius: 50, justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}, update == true ? {display: 'flex'} : {display: 'none'}]}>
            <Image source={require('../../../assets/edit-icon.png')}  style={[styles.iconImageEdit ]} resizeMode="cover"/>             
        </View>
    </View>
          
  );
}

export default Header

const styles = StyleSheet.create({
    blockHeaderRadius: {
        backgroundColor: 'pink', 
        width: '35%', 
        height: 90,
        position: 'absolute', 
        borderBottomColor: 'green', 
        borderBottomWidth: 5,
    }, 
    losange: {
        width: 100, 
        height: 100, 
        backgroundColor: 'pink', 
        borderColor: 'green', 
        borderBottomWidth: 5,
        borderRightWidth: 5,
        transform: [{rotate: '45deg'}], 
        position: 'absolute',
        top: 30,
    }
});
