import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Alert } from 'react-native';

import styles from './styles/allStyles';

class Tile extends Component {
  render() {
    return (
      <Text style={[styles.tile, this.props.double ? styles.doubleTile : null]}> {this.props.value} </Text>
    );
  }
}

export default Tile;