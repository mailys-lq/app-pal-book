import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import ListBook from '../book/ListBook';
import NumberUser from '../NumberUser';
import Header from '../UX/header/Header';
import axios from 'axios';
import HTMLView from 'react-native-htmlview';


const ShowBook = ({route}) => {
    const [apiKey, setApiKey] = useState('AIzaSyCxBFNJzM2OegkkQ1QWnSD0go-u1SdA6Ck')
    const [book, setBook] = useState([])
    // console.log()
    console.log(route.params.id_book);
    useEffect(() => {
        axios.get("https://www.googleapis.com/books/v1/volumes/"+route.params.id_book+"?key="+apiKey)
        .then(data => {
          setBook(data.data.volumeInfo); 
        })
    }, [])

  return (  
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
        <Header title={book.title} add={true} returnBack={true} style={{zIndex: 10, position: 'relative'}}/>
        <View style={[{position: 'relative', zIndex: 4}]}>
            <Image source={{uri: book.imageLinks == undefined ? "https://cdn.vectorstock.com/i/preview-1x/48/06/image-preview-icon-picture-placeholder-vector-31284806.webp" : book.imageLinks.thumbnail}} style={styles.imageBookCenter}/>
            <Image source={{uri: book.imageLinks == undefined ? "https://cdn.vectorstock.com/i/preview-1x/48/06/image-preview-icon-picture-placeholder-vector-31284806.webp" : book.imageLinks.smallThumbnail}} style={[styles.imageBook, styles.imageBookLeft]}/>
            <Image source={{uri: book.imageLinks == undefined ? "https://cdn.vectorstock.com/i/preview-1x/48/06/image-preview-icon-picture-placeholder-vector-31284806.webp" : book.imageLinks.smallThumbnail}} style={[styles.imageBook, styles.imageBookRight]}/>
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

        <Text style={[styles.labelItemBook, { marginTop: 15, display: 'flex', width: '100%', alignItems: 'flex-start'}]}>Description : </Text>
        <Text style={{marginHorizontal: 5, marginTop: 10, padding: 50}}>
            <HTMLView value={book.description} />
        </Text>

        <ListBook nameList='Les autres tomes de la séries'/>
        <ListBook nameList='Où trouver ce livre'/>
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
