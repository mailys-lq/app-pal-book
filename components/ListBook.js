import React, { useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'

const ListBook = () => {
    const [DATA, setDATA] = useState([
        {
            key: '1',
            text: 'Item text 1',
            uri: 'https://picsum.photos/id/1/200',
        },
        {
            key: '2',
            text: 'Item text 2',
            uri: 'https://picsum.photos/id/10/200',
        },
    
        {
            key: '3',
            text: 'Item text 3',
            uri: 'https://picsum.photos/id/1002/200',
        },
        {
            key: '4',
            text: 'Item text 4',
            uri: 'https://picsum.photos/id/1006/200',
        },
        {
            key: '5',
            text: 'Item text 5',
            uri: 'https://picsum.photos/id/1008/200',
        },
    ]);
    

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
          </View>
        );
      };

    
    return (
        <View style={styles.containerListBook}>
        <Text>Nos suggestions du mois</Text>
        <FlatList
            horizontal
            data={DATA}
            renderItem={({ item }) => <ListItem item={item} />}
            showsHorizontalScrollIndicator={false}
        />
        </View>
    )
}

export default ListBook

  const styles = StyleSheet.create({
    containerListBook: {
        height: 170,
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
  });