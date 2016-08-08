import React, { Component } from 'react';
import { Text, View, NavigatorIOS } from 'react-native';
import { connect } from 'react-redux';

import Listings from './Listings';
import Search from './Search';
import Login from './Login';

const styles = {
  sample: {
    textAlign: 'center',
    fontSize: 24,
    top: 200,
  }
}


class App extends Component {
  _moveToLoginPage = () => {
    this.refs.nav.push({
      component: Login,
      title: 'login',
    });
  };

  _moveToSearchPage = () => {
    this.refs.nav.push({
      component: Search,
      title: 'search',
    });
  };


  render() {
    // navigator.geolocation.getCurrentPosition((pos) => {
    //   console.log(JSON.stringify(pos));
    // });
    return (
      <NavigatorIOS
        ref='nav'
        style={{flex: 1}}
        initialRoute={{
          leftButtonTitle: 'login',
          onLeftButtonPress: () => this._moveToLoginPage(),
          rightButtonTitle: 'search',
          onRightButtonPress: () => this._moveToSearchPage(),
          component: Listings,
          title: 'listings',
        }} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    message: state,
  }
}

export default connect(mapStateToProps, null)(App);
