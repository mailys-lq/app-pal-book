import React, { useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ListBookUpdate = ({nameList, book}) => {

    const ListItem = ({ item }) => {
        return (
          <View style={styles.item}>
            <Image
              source={{
                uri: item.uri,
              }}
              style={styles.itemImage}
              resizeMode="cover"
            />
                    
            <TouchableOpacity style={styles.buttonDeleteBook}><Text>X</Text></TouchableOpacity>

          </View>
        );
      };

    
    return (
        <View style={styles.containerListBook}>
          <Text style={{marginLeft: 10, marginBottom: 5}}>{nameList}</Text>
          <FlatList
              horizontal
              data={book}
              
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => <ListItem key={index} item={item} />}
              showsHorizontalScrollIndicator={false}
          /> 
        </View>
    )
}

export default ListBookUpdate

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
      width: 25, 
      height: 25, 
      backgroundColor: '#7DC996', 
      borderRadius: 50, 
      display: 'none', 
      color: 'white',
      justifyContent: 'center', 
      alignItems: 'center',
    }, 
    iconImageEdit: {
      width: 20, 
      height: 20, 
      textAlign: 'center',
      margin: 'auto',
      backgroundColor: '#7DC996', 
      borderRadius: 50, 
      color: 'white'
    },
    buttonDeleteBook: {
      position: 'absolute', 
      backgroundColor: '#7DC996', 
      width: 20, 
      height: 20, 
      borderRadius: 25, 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      top: -10,
      right: -10,
    }
  });