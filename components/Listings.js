import React from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';

import ListingItem from './ListingItem';

const img = './sample.png'

const styles = {
  topLevel: {
    flex: 1,
  },
  listing: {
    height: 120,
    fontSize: 18,
    margin: 6,
  }
};


const Listings = ({listings}) => {
  let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  let dataSource = ds.cloneWithRows(listings);
  return (
    <View style={styles.topLevel}>
      <View style={{flex: 0.1}} />
      <ListView
        style={{flex: 0.9}}
        enableEmptySections={true}
        dataSource={dataSource}
        renderRow={(rowData) => <ListingItem item={rowData} />}
        />
    </View>
  )
};

const mapStateToProps = (state) => (
  {
    listings: state.items,
  }
)

export default connect(mapStateToProps, null)(Listings);
