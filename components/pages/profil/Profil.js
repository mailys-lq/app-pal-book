import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import ListBook from '../../book/ListBook';
import NumberUser from '../../NumberUser';
import Header from '../../UX/header/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Profil = () => {
  const navigation = useNavigation()
  const [book, setBook] = useState([])
  const [roman, setRoman] = useState([])
  const [manga, setManga] = useState([])
  const [bd, setBd] = useState([])
  const [user, setUser] = useState([])
  const [countBook, setCountBook] = useState(0)
  const [countPage, setCountPage] = useState(0)
  const [apiKey, setApiKey] = useState('AIzaSyCxBFNJzM2OegkkQ1QWnSD0go-u1SdA6Ck')
  
  useEffect(() => {
    lastRead();
    countBookAndPage()
    favoriesList()

    axios.get("https://api-pal.herokuapp.com/api/user/1")
    .then((res) => {
      setUser(res.data)
    })
    .catch((error) => {
      console.log(error)
    })

  }, [])

  const lastRead =  () => {
      let book_push = [];
      axios.get("https://api-pal.herokuapp.com/api/reading_list")
      .then((res) => {
        res.data.forEach(function(book) {
          axios.get("https://www.googleapis.com/books/v1/volumes/"+book.id_book+"?key="+apiKey)
          .then(data => {
            book_push.push(data.data);
            setBook(book_push)
          })
        });
      })
      .catch((error) => {
        console.log(error)
      })
    }

    const favoriesList = async (gender) => {
      let roman = [];
      let bd = [];
      let manga = [];

      axios.get("https://api-pal.herokuapp.com/api/favorite")
      .then((res) => {
        res.data.forEach(async function(book) {
          await axios.get("https://www.googleapis.com/books/v1/volumes/"+book.id_book+"?key="+apiKey)
          .then(data => {
            if(book.gender == 'roman') {
              roman.push(data.data);
              setRoman(roman)
            } else if(book.gender == 'manga') {
              manga.push(data.data);
              setManga(manga)
            } else if (book.gender == 'bd') {
              bd.push(data.data);
              setBd(bd)
            }
          })
        });
      })
      .catch((error) => {
        console.log(error)
      })
    }
    
    const countBookAndPage = () => {
      axios.get("https://api-pal.herokuapp.com/api/reading_list")
      .then((res) => {
        setCountBook(res.data.length);
        res.data.forEach(reading_list => {
            if(reading_list.user_id == 1) {
              axios.get("https://www.googleapis.com/books/v1/volumes/"+reading_list.id_book+"?key="+apiKey)
              .then(data => {
                if(data.pageCount) {
                  console.log(data.pageCount);
                  setCountPage(countPage + data.pageCount); 
                }
              })
            }
          });
      })
      .catch((error) => {
        console.log(error)
      })
    }
    const handleEditProfil = async () => {
        navigation.navigate( 'EditProfil', {user: user, manga: manga, roman: roman, bd: bd});
    }
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
      <Header update={true} handleEditProfil={handleEditProfil} logout={true}/>
      <View style={styles.containeStartProfil}>
        {/* <Image style={styles.icon} source={{uri: user.url_image_profil}} /> */}
        <Image style={[styles.icon, {borderRadius: 50}]} source={{uri: user.url_image_profil == undefined ? "https://cdn.vectorstock.com/i/preview-1x/48/06/image-preview-icon-picture-placeholder-vector-31284806.webp" : user.url_image_profil}}/>

        <Text style={[styles.textRead, styles.textReadPages]}>{countPage} pages lu</Text>
        <Text style={[styles.textRead, styles.textReadBook]}>{countBook} livres lu</Text>
        <Text style={[styles.nameProfil]}>{user.firstname} {user.lastname}</Text>
      </View>
      <ListBook nameList="Vos dernières lectures" edit={false} book={book}/>   
      <ListBook nameList="Vos romans favories" edit={true} gender="roman" book={roman}/>   
      <ListBook nameList="Vos manga favories" edit={true} gender="manga" book={manga}/>   
      <ListBook nameList="Vos BD favories" edit={true} gender="bd" book={bd}/>   
      <ListBook nameList="Les éditeurs que vous suivez"/>   
      <NumberUser/>
    </ScrollView>
  );
}

export default Profil

const styles = StyleSheet.create({
  containeStartProfil: {
    position: 'relative', 
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    zIndex: 210, 
    top: -80, 
    height: 150

  }, 
  container: {
    paddingTop: 10,
    width : "100%",
    height: "100%",
    backgroundColor: '#fff',
  },
  icon: {
    width: 100,
    height: 100, 
    zIndex:10,
  }, 
  textRead: {
    fontSize: 25, 
    textAlign: 'center',
    paddingHorizontal: 15, 
    marginVertical: 30, 
    backgroundColor: "#7DC996", 
    height: 75, 
    width: 170,
    textAlign: 'center',
    textAlignVertical: 'center', 
    position: 'absolute', 
    top: 50,
  }, 
  textReadPages: {
    left: 0,
  }, 
  textReadBook: {
    right: 0,
  },
  nameProfil: {
    marginTop: 70, 
    fontSize: 22,
  }, 
});
