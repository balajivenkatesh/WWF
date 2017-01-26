import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';

import AppBase from './common/components/AppBase';

const App = () => {
  <Provider >
    <AppBase />
  </Provider>
}

AppRegistry.registerComponent('WWF', () => AppBase);
