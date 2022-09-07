import React, { useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'

const ListBook = ({book}) => {

    const ListItem = ({ item }) => {
        return (
          <View style={styles.item}>
            <Image
              source={{
                uri: item.volumeInfo.imageLinks == undefined ? "https://cdn.vectorstock.com/i/preview-1x/48/06/image-preview-icon-picture-placeholder-vector-31284806.webp" : item.volumeInfo.imageLinks.smallThumbnail,
              }}
              style={styles.itemImage}
              resizeMode="cover"
            />
          </View>
        );
      };

    
    return (
        <View style={styles.containerListBook}>
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
        height: 200,
    },
    item: {
      margin: 10,
      height: 600,
      // width: "100%"
    },
    itemImage: {
      width: 200,
      height: 600,
    },
    itemText: {
      color: 'rgba(255, 255, 255, 0.5)',
      marginTop: 5,
    },
  });