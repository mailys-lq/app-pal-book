import { useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, Image, Button, Alert } from 'react-native';
import ListBook from '../book/ListBook';
import Header from '../UX/header/Header';
import {launchImageLibrary} from "react-native-image-picker"


const EditProfil = () => {
    const [fileResponse, setFileResponse] = useState([]);

    const openGallery = () => {
        let options = {
            
                mediaType: 'photo',
                quantity: 1, 
                includeBase64: true,
            }

        launchImageLibrary(options, response => {
            if(response.didCancel) {
                console.log('Canceled images selection'); 
            } else if (response.errorCode = 'permission') {
                console.log('Permissions not satisfied'); 
            } else if (response.errorCode = 'others') {
                console.log(response.errorMessage); 
            } else if (response.assets[0].fileSize > 2097152) {
                Alert.alert(
                    'Maximum image size exceded', 
                    'Please choose imagge under 2 MB', 
                    [{text: 'OK'}],
                )
            } else {
                
            }
        })
        
    };
  return (  
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
        <Header title='Editer votre profil' style={{zIndex: 10, position: 'relative'}}/>
        <View style={[{position: 'relative', zIndex: 4}]}>
            <Image source={require('../../assets/books/livre-musso-2.png')} style={styles.imageProfilUser}/>
            <Text>Photo</Text>
            {fileResponse.map((file, index) => (
        <Text
          key={index.toString()}
          style={styles.uri}
          numberOfLines={1}
          ellipsizeMode={'middle'}>
          {file?.uri}
        </Text>
      ))}
            <Button title="Select 📑" onPress={openGallery} />

        </View>
        <View style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginTop: 40}}>
            <Text style={{fontSize: 15, marginLeft: 5}}>Auteur : </Text>
            <Text style={{fontSize: 15}}>Guillaume Musso</Text>
        </View>
        
        <View style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginTop: 40}}>
            <Text style={{fontSize: 15, marginLeft: 5}}>Editeurs : </Text>
            <Text style={{fontSize: 15}}>nom de / des editeurs si il y en a plusieurs</Text>
        </View>

        <View style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginTop: 40}}>
            <Text style={{fontSize: 15, marginLeft: 5}}>Illustrateurs : </Text>
            <Text style={{fontSize: 15}}>nom de / des illustrateurs si il y en a plusieurs</Text>
        </View>
        
        <View style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginTop: 40}}>
            <Text style={{fontSize: 15, marginLeft: 5}}>Date de sortie : </Text>
            <Text style={{fontSize: 15}}>21 mars 2010</Text>
        </View>

        <View style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginTop: 40}}>
            <Text style={{fontSize: 15, marginLeft: 5}}>Genre : </Text>
            <Text style={{fontSize: 15}}>Bande déssinés / Romans graphique</Text>
        </View>

        <Text style={{marginLeft: 5, marginTop: 10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>

        <ListBook nameList='Les autres tomes de la séries'/>
        <ListBook nameList='Où trouver ce livre'/>
    </ScrollView>
  );
}

export default EditProfil

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        width : "100%",
        height: "100%",
        backgroundColor: '#fff',
    },
    imageProfilUser: {
        width: 100, 
        height: 100,
        borderRadius: 50,
    },
    imageBook: {
        width: 110, 
        height: 180,
        position: 'absolute', 
        top: 150,
    },
    imageBookRight: {
        right: -80,
    },
    imageBookLeft: {
        left: -80,
    }
  
});
