import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Tile from './Tile';
import styles from './styles/allStyles';

import { onLetterSelected } from '../actions/keyboardActions';
import { onTileSelected } from '../actions/boardActions';
import { locationsEnum } from '../constants/boardConst';

class LetterKeyBoard extends Component {
  render() {
    let alph = 65;
    const grid = new Array(3);
    for (let i = 0; i < 3; i++) {
      const row = new Array(11);
      for (let j = 0; j < 11 && alph < 91; j++, alph++) {
        let ph = alph;
        row[j] =
          <Tile key={ph} value={String.fromCharCode(ph)}
            onPressAction={
              () => {
                this.props.onTileSelected(locationsEnum.keyboard, i, j),
                this.props.onLetterSelected(this.props.x, this.props.y, String.fromCharCode(ph))
              }
            }
          />;
      }
      if (i == 2) {
        let j = 4;
        let splKeyValue = [];
        let splKeys = [];
        switch (this.props.tileLocation) {
          case locationsEnum.grid:
            splKeyValue = ['_'];
            splKeys = ['Clear'];
          break;
          case locationsEnum.hand:
            splKeyValue = ['*', '_'];
            splKeys = ['Wild', 'Clear'];
        }
        splKeys.map( (splKey, k) => {
          row[j] = 
            <Tile key={splKey} value={splKey} double={true}
              onPressAction={
                () => {
                  this.props.onTileSelected(locationsEnum.keyboard, i, j),
                  this.props.onLetterSelected(this.props.x, this.props.y, splKeyValue[k])
                }
              }
            />;
          j++;
        });
        row[j] = 
          <Tile key='Close' value='Close' double={true}
            onPressAction={() => this.props.onTileSelected(locationsEnum.keyboard, i, j)}
          />;
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
    tileLocation: state.keyboardReducer.tileLocation,
    x: state.keyboardReducer.x,
    y: state.keyboardReducer.y
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLetterSelected: (x, y, letter) => dispatch(onLetterSelected(x, y, letter)),
    onTileSelected: (tileLocation, x, y) => dispatch(onTileSelected(tileLocation, x, y))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LetterKeyBoard);