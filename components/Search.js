import React from 'react';
import { View, Text, Picker } from 'react-native';

import FullTextInput from './FullTextInput';
import Button from './Button';

const styles = {
  sample: {
    top: 75,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
  }
}

const Search = () => {
  let keywords;
  let zip;
  let category;
  return  (
    <View style={styles.sample}>
      <Text style={styles.text}>Search!</Text>
      <FullTextInput
        title={''}
        callback={(text) => keywords = text}
        pw={false}
      />
    <Picker
      mode="dialog"
      onValueChange={(item) => category = item} >
        <Picker.Item label="all-categories" value="all-categories" />
        <Picker.Item label="appliances" value="appliances" />
        <Picker.Item label="fashion" value="fashion" />
        <Picker.Item label="books" value="books" />
        <Picker.Item label="electronics" value="electronics" />
        <Picker.Item label="tools" value="tools" />
      </Picker>
      <FullTextInput
        title={''}
        callback={(text) => zip = text}
        pw={false}
      />
      <Button
        caption={'submit'}
        callback={() => console.log(keywords, category,zip)} />
    </View>
  );
};

export default Search;
