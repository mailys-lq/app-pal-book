import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import Header from '../../UX/header/Header';
import * as ImagePicker from 'expo-image-picker';
import ListBookUpdate from '../../book/ListBookUpdate';
import NumberUser from '../../NumberUser';
import axios from 'axios';
import ButtonGreen from '../../UX/ButtonGreen';


const EditProfil = ({route}) => {
    const [imageUser, setImageUser] = useState();
    const [imageCover, setImageCover] = useState();
    const [userFirstname, setUserFirstname] = useState('');
    const [userLastname, setUserLastname] = useState('');
    const [userEmail, setUserEmail] = useState('');

    
    const [roman, setRoman] = useState([])
    const [manga, setManga] = useState([])
    const [bd, setBd] = useState([])

    useEffect(() => {
      setUserFirstname(route.params.user.firstname)
      setUserLastname(route.params.user.lastname)
      setUserEmail(route.params.user.email)
      axios.get("http://api-pal.herokuapp.com/api/favorite")
      .then(data => {
        
        let roman = [];
        let bd = [];
        let manga = [];
        data.data.forEach(element => {
          if(element.gender == 'roman') {
            roman.push(element)
            setRoman(element)
          } else if(element.gender == 'manga') {
            manga.push(element)
            setRoman(element)
          } else if(element.gender == 'bd') {
            bd.push(element)
            setRoman(element)  
          }
        });
        if(data.data) {
          console.log(data.pageCount);
          setCountPage(countPage + data.pageCount); 
        }
      })
    }, [])
    const pickImageUser = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        if (!result.cancelled) {
          setImageUser(result.uri.toString());
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
        
        if (!result.cancelled) {
          setImageCover(result.uri.toString());
        }
      };

    const updateProfil = async() => {
      await axios.put(`https://api-pal.herokuapp.com/api/user/1`, {
        "firstname": userFirstname, 
        "lastname": userLastname, 
        "email": userEmail,
        "url_image_profil": imageUser,
        "url_image_couverture": imageCover
      })
      .then((res) => {
          console.log(res.data)
      })
      .catch((error) => {
          console.error(error)
      })
    }
    
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
            <Text style={{fontSize: 15, marginTop: 3}}>Prénom</Text>
            <TextInput style={{fontSize: 15, marginLeft: 5}} placeholder='Mailys' value={userFirstname} onChangeText={setUserFirstname}/>
        </View>
        
        <View style={styles.inputText}>
            <Text style={{fontSize: 15, marginTop: 3}}>Nom</Text>
            <TextInput style={{fontSize: 15, marginLeft: 5}} placeholder='Mailys' value={userLastname} onChangeText={setUserLastname}/>
        </View>
        <View style={[styles.inputText, {marginBottom: 15}]}>
            <Text style={{fontSize: 15, marginTop: 3}}>Email</Text>
            <TextInput style={{fontSize: 15, marginLeft: 5}} placeholder='Mailys' value={userEmail} onChangeText={setUserEmail}/>
        </View>

        <ButtonGreen nameButton="Modifier le profil" onPress={updateProfil} backgroundGreen={true}/>

        <ListBookUpdate style={{marginTop: 30}} nameList='Mangas favories' />
        <ListBookUpdate nameList='Romans favories'/>
        <ListBookUpdate nameList='BD favories' />
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
