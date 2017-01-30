import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Tile from './Tile';
import styles from './styles/allStyles';

class LetterKeyBoard extends Component {
  render() {

    let alph = 65;
    const grid = new Array(3);
    for (var i = 0; i < 3; i++) {
      const row = new Array(11);
      var j = 0;
      for (; j < 11 && alph < 91; j++) {
        row[j] = <Tile key={j} value={String.fromCharCode(alph)}></Tile>;
        alph++;
      }
      if (i == 2) {
        ['Wild', 'Clear', 'Close'].map( x => {
          row[j] = <Tile key={j} value={x} double={true}></Tile>;
          j++;
        });
      }
      grid[i] = <View key={i} style={styles.row}>{row}</View>;
    }

    return (
      <View>{grid}</View>
    );
  }
}

LetterKeyBoard.propTypes = {
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LetterKeyBoard);