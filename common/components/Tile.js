import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Alert } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles/allStyles';

class Tile extends Component {
  render() {
    return (
      <Text
        style={[styles.tile, this.props.double ? styles.doubleTile : null]}
        onPress={this.props.onPressAction}
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
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tile);