import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';

import AppBase from './common/components/AppBase';
import configureStore from './common/store/configureStore';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <AppBase />
  </Provider>
);

AppRegistry.registerComponent('WWF', () => App);
