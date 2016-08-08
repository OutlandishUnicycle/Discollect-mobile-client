import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import { connect } from 'react-redux';

const styles = {
  sample: {
    textAlign: 'center',
    fontSize: 24,
    top: 200,
  }
}

const test = ({ message }) => {
  return (
    <View>
      <Text style={styles.sample}>
        {message}
      </Text>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    message: state,
  }
}

export default connect(mapStateToProps, null)(test);
