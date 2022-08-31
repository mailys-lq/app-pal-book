
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';

const Header = ({title, update, add, handleEditProfil, addBookFavory, returnBack}) => {
    const navigation = useNavigation()

    const handleReturnBack = async () => {
        navigation.goBack();  
    }
    
    return (
        <ImageBackground source={require('../../../assets/header.png')} resizeMode="cover" style={{height: 180, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200, position: 'relative', top: -30}}>
            <Text style={{width: 200, textAlign: 'center'}}>{title}</Text>
            <TouchableOpacity onPress={addBookFavory} style={[styles.buttonAdd, add == true ? {display: 'flex'} : {display: 'none'}]}>
                <Text style={{position: 'absolute', fontSize: 30}}>+</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[{padding: 10, position: 'absolute', left: 0}, returnBack == true ? {display: 'flex'} : {display: 'none'}]} onPress={handleReturnBack}><Image style={{width: 30, height: 30}} source={require('../../../assets/return-back.png')}/></TouchableOpacity>
            <TouchableOpacity onPress={handleEditProfil} style={[styles.buttonEdit, update == true ? {display: 'flex'} : {display: 'none'}]}>
                <Image source={require('../../../assets/edit-icon.png')}  style={[styles.iconImageEdit, {width: 20, height: 20} ]} resizeMode="cover"/>             
            </TouchableOpacity>
        </ImageBackground>
            
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
    buttonAdd: {
        top: 150, 
        position: 'absolute', 
        backgroundColor: '#7DC996', 
        width: 50, 
        height: 50, 
        borderRadius: 50, 
        justifyContent: 'center', 
        flexDirection: 'row', 
        alignItems: 'center'
    }, 
    buttonEdit: {
        top: 70, 
        right: 15, 
        position: 'absolute', 
        backgroundColor: '#7DC996',
        width: 35,
        height: 35, 
        borderRadius: 50, 
        justifyContent: 'center', 
        flexDirection: 'row', 
        alignItems: 'center'
    },
    image: {
        flex: 1,
        justifyContent: "center"
      },
});
