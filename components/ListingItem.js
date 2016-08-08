import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';

const styles = {
  wholeListing: {
    padding: 12,
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
    color: '#333',
  },
  giver: {
    fontSize: 18,
    lineHeight: 22,
    color: '#333',
  },
  info: {
    paddingLeft: 24,
  },
  image: {
    height: 100,
    width: 100,
  }
}
// <Image source={{uri: item.img}} style={styles.image}/>

const ListingItem = ({ item }) => (
  <TouchableHighlight onPress={() => console.log(item)}>
    <View style={styles.wholeListing}>
      <Image source={{uri: 'https://placeholdit.imgix.net/~text?txtsize=28&txt=300%C3%97300&w=300&h=300'}}
           style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.giver}>{item.category}</Text>
      </View>
    </View>
  </TouchableHighlight>
);

export default ListingItem;
