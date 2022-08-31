import React, { useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const ListBook = ({nameList, edit, book}) => {
    
    const navigation = useNavigation()


    const openFavoriesList = async () => {
      navigation.navigate( 'FavoriesList' );
    }
    
  const showBook = (id_book, key) => {
    // console.log(id_book)
    navigation.navigate('Book', {id_book: id_book});
  }
    const ListItem = ({ item }) => {
        return (
          <View style={styles.item}>
            <TouchableOpacity  id_book={item.id} onPress={() => showBook(item.id)}>
              <Image 
                resizeMode="cover"
                style={styles.itemImage} 
                source={{
                  uri: item.volumeInfo.imageLinks == undefined ? "https://cdn.vectorstock.com/i/preview-1x/48/06/image-preview-icon-picture-placeholder-vector-31284806.webp" : item.volumeInfo.imageLinks.thumbnail,
                }}
              />
            </TouchableOpacity>
            
          </View>
        );
      };

    
    return (
        <View style={styles.containerListBook}>
          <Text style={{marginLeft: 10}}>{nameList}</Text>
          <TouchableOpacity onPress={openFavoriesList} style={[styles.containerIconImageEdit,  edit == true ? {display: 'flex', position: 'absolute', right: 30} : {display: 'none'}]}>
            <Image source={require('../../assets/edit-icon.png')}  style={[styles.iconImageEdit ]} />             
          </TouchableOpacity>
          <FlatList
              horizontal
              data={book}
              renderItem={({ item }) => <ListItem item={item} />}
              showsHorizontalScrollIndicator={false}
          />
        </View>
    )
}

export default ListBook

  const styles = StyleSheet.create({
    containerListBook: {
      marginTop: 15,
      height: 170,
      position: 'relative'
    },
    item: {
      margin: 10,
      height: 170
    },
    itemImage: {
      width: 105,
      height: 170,
    },
    itemText: {
      color: 'rgba(255, 255, 255, 0.5)',
      marginTop: 5,
    },
    containerIconImageEdit: {
      width: 32, 
      height: 32, 
      backgroundColor: '#7DC996', 
      borderRadius: 50, 
      display: 'none', 
      color: 'white',
      justifyContent: 'center', 
      alignItems: 'center',
      top: -5
    }, 
    iconImageEdit: {
      width: 20, 
      height: 20, 
      textAlign: 'center',
      margin: 'auto',
    }
  });