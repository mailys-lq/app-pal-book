import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import ListBook from './ListBook';
import NumberUser from '../NumberUser';
import Header from '../UX/header/Header';
import axios from 'axios';
import HTMLView from 'react-native-htmlview';
import useJwt from '../auth/useJwt';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ShowBook = ({route}) => {
    
    const [apiKey, setApiKey] = useState('AIzaSyCxBFNJzM2OegkkQ1QWnSD0go-u1SdA6Ck');
    const [book, setBook] = useState([]);
    const [bookRead, setBookRead] = useState(0);
    const [idReadingList, setIdReadingList] = useState(0);
    const { decodeJwt } = useJwt();
    useEffect(() => {
        axios.get("https://www.googleapis.com/books/v1/volumes/"+route.params.id_book+"?key="+apiKey)
        .then(data => {
          setBook(data.data.volumeInfo); 
        })
        .catch((error) => {
            console.log(error);
        })

        axios.get("https://api-pal.herokuapp.com/api/reading_list")
        .then((res) => {
            res.data.some(element => {
                if(element.id_book == route.params.id_book) {
                    setBookRead(element.book_read);                    
                } else {
                    return false;
                }
            });
        })
        .catch((error) => {

        })

    }, [])

    addBookRead = async () => {
        let user_id; 
        await AsyncStorage.getItem('US48')
        .then((res_async) => {
            user_id = decodeJwt(res_async); 
        })
        .catch((err) => {
        })
        
        axios.get("https://api-pal.herokuapp.com/api/reading_list")
        .then((res) => {
            res.data.some(element => {
                if(element.id_book == route.params.id_book) {
                    setBookRead(element.book_read_number);
                    setIdReadingList(element.id);
                } else {
                    return false;
                }
            });
            alert('Votre livre à bien été ajouté');
        })
        .catch((error) => {
            console.log(error)
        })

        if(bookRead == 0 || bookRead == undefined) { 
            await axios.post('https://api-pal.herokuapp.com/api/reading_list', {
                "id_book": route.params.id_book,
                "user_id": 1, //id récupérer en local storage 
                "book_read_number": 1
            })
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.error('coucou error');
                console.error(error);
            })
        } else {            
            await axios.put(`https://api-pal.herokuapp.com/api/reading_list/${idReadingList}`, {
                "book_read_number": bookRead + 1
            })
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.error(error);
            })
        }
    }

  return (  
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
        <Header title={book.title} add={true} returnBack={true} addBookRead={addBookRead} style={{zIndex: 10, position: 'relative'}}/>
        <View style={[{position: 'relative', zIndex: 4}]}>
            <Image source={{uri: book.imageLinks == undefined ? "https://cdn.vectorstock.com/i/preview-1x/48/06/image-preview-icon-picture-placeholder-vector-31284806.webp" : book.imageLinks.thumbnail}} style={styles.imageBookCenter}/>
            <Image source={{uri: book.imageLinks == undefined ? "https://cdn.vectorstock.com/i/preview-1x/48/06/image-preview-icon-picture-placeholder-vector-31284806.webp" : book.imageLinks.smallThumbnail}} style={[styles.imageBook, styles.imageBookLeft, {opacity: 0.5}]}/>
            <Image source={{uri: book.imageLinks == undefined ? "https://cdn.vectorstock.com/i/preview-1x/48/06/image-preview-icon-picture-placeholder-vector-31284806.webp" : book.imageLinks.smallThumbnail}} style={[styles.imageBook, styles.imageBookRight, {opacity: 0.5}]}/>
        </View>
        <View style={[{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginTop: 40}, ]}>
            <Text style={styles.labelItemBook}>Auteur : </Text>
            <Text style={{fontSize: 15}}>{book.authors ?  book.authors.map((author) => ( author )): 'Nom d\'auteur inconnue'}</Text>
        </View>
        
        <View style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginTop: 40}}>
            <Text style={styles.labelItemBook}>Editeurs : </Text>
            <Text style={{fontSize: 15}}>{book.publisher ?  book.publisher : 'Editeur inconnu(e)'}</Text>
        </View>

        <View style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginTop: 40}}>
            <Text style={styles.labelItemBook}>Illustrateurs : </Text>
            <Text style={{fontSize: 15}}>nom de / des illustrateurs si il y en a plusieurs</Text>
        </View>
        
        <View style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginTop: 40}}>
            <Text style={styles.labelItemBook}>Date de publication : </Text>
            <Text style={{fontSize: 15}}>{book.publishedDate ?  book.publishedDate : 'inconnu(e)'}</Text>
        </View>

        <View style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginTop: 40}}>
            <Text style={styles.labelItemBook}>Genre : </Text>
            <Text style={{fontSize: 15,  marginLeft: 5}}>{book.categories ?  book.categories.map((category, i, arr) => ( i == arr.length - 1 ? category : category + ', ' )): 'Nom d\'auteur inconnue'}</Text>
        </View>

        <NumberUser/>
    </ScrollView>
  );
}

export default ShowBook

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        width : "100%",
        height: "100%",
        backgroundColor: '#fff',
    },
    imageBookCenter: {
        width: 180, 
        height: 300,
        position:'relative', 
        zIndex: 10
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
    },
    labelItemBook: {
        fontSize: 15,
        marginLeft: 5, 
        fontWeight: "600"
    }
  
});
