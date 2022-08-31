import { useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import Header from '../../UX/header/Header';
import * as ImagePicker from 'expo-image-picker';
import ListBookUpdate from '../../book/ListBookUpdate';
import NumberUser from '../../NumberUser';


const EditProfil = () => {
    const [imageUser, setImageUser] = useState(null);
    const [imageCover, setImageCover] = useState(null);

    const pickImageUser = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        // console.log(result);
    
        if (!result.cancelled) {
          setImageUser(result.uri);
        }
      };

      const pickImageCover = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        // console.log(result);
    
        if (!result.cancelled) {
          setImageCover(result.uri);
        }
      };
  return (  
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
        <Header returnBack={true} title='Editer votre profil' style={{zIndex: 10, position: 'relative'}}/>
        <TouchableOpacity onPress={pickImageUser} style={[styles.inputFileImage]}>
            {imageUser && <Image source={{ uri: imageUser }} style={styles.imageProfilUser} />}
            <Text style={{marginLeft: 10}}>Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={pickImageCover} style={[styles.inputFileImage]}>
            {imageCover && <Image source={{ uri: imageCover }} style={styles.imageProfilCover} />}
            <Text style={{marginLeft: 10}}>Photo</Text>
        </TouchableOpacity>
        <View style={styles.inputText}>
            <Text style={{fontSize: 15, marginTop: 3}}>Nom</Text>
            <TextInput style={{fontSize: 15, marginLeft: 5}} placeholder='Mailys'/>
        </View>
        
        <View style={styles.inputText}>
            <Text style={{fontSize: 15, marginTop: 3}}>Nom</Text>
            <TextInput style={{fontSize: 15, marginLeft: 5}} placeholder='Mailys'/>
        </View>


        <ListBookUpdate style={{marginTop: 30}}nameList='Mangas favories'/>
        <ListBookUpdate nameList='Romans favories'/>
        <ListBookUpdate nameList='BD favories'/>
        <NumberUser/>
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
        width: 50, 
        height: 50,
        borderRadius: 50,
    },
    imageProfilCover: {
        width: 80, 
        height: 50,
    },
    inputFileImage: {
      position: 'relative', 
      zIndex: 4, 
      display: 'flex', 
      flexDirection: 'row', 
      alignItems: 'center', 
      width: '90%', 
      backgroundColor: 'white',
      shadowColor: "#14AE5C",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      
      elevation: 4,
      padding: 5,
      margin: 10
    }, 
    inputText: {
      width: '90%', 
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'flex-start', 
      alignContent: 'center', 
      marginTop: 40,
      padding: 5, 
      borderBottomColor: '#14ae5c38', 
      borderBottomWidth: 1
    }

  
});
