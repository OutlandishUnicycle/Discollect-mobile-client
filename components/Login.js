import React from 'react';
import { View, Text } from 'react-native';

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

const Login = () => {
  let username;
  let password;
  return (
    <View style={styles.sample}>
      <Text style={styles.text}>Login</Text>
      <FullTextInput
        title={'username'}
        callback={(text) => username = text}
        pw={false}
      />
      <FullTextInput
      title={'password'}
      callback={(text) => password = text}
        pw={true}
      />
      <Button
        caption={'submit'}
        callback={() => console.log(username, password)} />
    </View>
  );
};

export default Login;
