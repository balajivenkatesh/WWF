import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Alert } from 'react-native';
import { connect } from 'react-redux';

import { onTileSelected } from '../actions/keyboardActions';
import styles from './styles/allStyles';

class Tile extends Component {
  render() {
    return (
      <Text
        style={[styles.tile, this.props.double ? styles.doubleTile : null]}
        onPress={() => this.props.onTileSelected(this.props.tileLocation, this.props.x, this.props.y)}
      >
        {this.props.value}
      </Text>
    );
  }
}

Tile.propTypes = {

}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTileSelected: (tileLocation, x, y) => dispatch(onTileSelected(tileLocation, x, y))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tile);