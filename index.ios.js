import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// --- redux add-ons --- //
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducer from './reducers/indexReducer';

import itemActions from './actions/itemsActions.js';

const middleware = [thunk, logger()];
const store = createStore(reducer, applyMiddleware(...middleware));

store.dispatch(itemActions.getLatestListings());

const mobileDiscollect = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

AppRegistry.registerComponent('mobileDiscollect', () => mobileDiscollect);
