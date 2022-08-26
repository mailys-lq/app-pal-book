import React, { useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'

const ListBook = ({nameList, edit}) => {
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
          <Text style={{marginBottom: 5}}>{nameList}</Text>
          <View style={[styles.containerIconImageEdit,  edit == true ? {display: 'flex', position: 'absolute', right: 30} : {display: 'none'}]}>
            <Image source={require('../assets/edit-icon.png')}  style={[styles.iconImageEdit ]} resizeMode="cover"/>             
          </View>
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
    }
  });