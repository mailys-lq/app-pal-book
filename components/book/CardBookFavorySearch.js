import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import { useState } from 'react';

const CardBookFavorySearch = ({item, gender}) => {
  const [bookFavorite, setBookFavorite] = useState(0)
  const addToFavorites = async () => {
        let user_id; 
        await AsyncStorage.getItem('US48')
        .then((res_async) => {
            user_id = decodeJwt(res_async); 
        })
        .catch((err) => {
            // console.log(err)
        })


        await axios.get("https://api-pal.herokuapp.com/api/favorite")
        .then((res) => {
            res.data.some(element => {
                if(element.id_book == item.id) {
                    setBookFavorite(element.book_read_number);
                } else {
                    return false;
                }
            });
        })
        .catch((error) => {
            console.log(error)
        })

        if(bookFavorite == 0 || bookFavorite == undefined) { 
            await axios.post('https://api-pal.herokuapp.com/api/favorite', {
                "id_book": item.id,
                "user_id": 1, //id récupérer en local storage 
                "title": item.volumeInfo.title, 
                "page_number": item.volumeInfo.pageCount, 
                "gender": gender, 
                "img_book": item.volumeInfo.thumbnail,
            })
            .then((res) => {
                console.log(res.data)
            })
            .catch((error) => {
                console.error('coucou error')
                console.error(error)
            })
        } else {            

            await axios.delete(`https://api-pal.herokuapp.com/api/favorite/${item.id}`)
            .then((res) => {
                console.log(res.data)
            })
            .catch((error) => {
                console.error('coucou error')
                console.error(error)
            })
        }
  }
  return (
    
      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%'}}>
          <Image 
            resizeMode="cover"
            style={[styles.itemImage, {width: 75, height: 75}]} 
            source={{
              uri: item.volumeInfo.imageLinks == undefined ? "https://cdn.vectorstock.com/i/preview-1x/48/06/image-preview-icon-picture-placeholder-vector-31284806.webp" : item.volumeInfo.imageLinks.thumbnail,
            }}
          />        
          <Text style={{marginLeft: 10, width: '80%'}}>{item.volumeInfo.title}</Text>
        <TouchableOpacity onPress={addToFavorites} style={{position: 'absolute', right: 15}}><Image style={{width: 30, height: 30}} source={require('../../assets/hearth.png')}/></TouchableOpacity>
      </View>      
  );
}

export default CardBookFavorySearch

const styles = StyleSheet.create({
    icon: {
        width: 105,
        height: 170, 
        margin: 5, 
        marginHorizontal: 10,
      }, 
});
