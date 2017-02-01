import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { locationsEnum } from '../constants/boardConst';
import Tile from './Tile';
import styles from './styles/allStyles';

class Board extends Component {
  render() {
    const grid = new Array(11);
    this.props.board.map((x, i) => {
      const row = new Array(11);
      x.map((y, j) => row[j] = 
        <Tile
          key={11*i+j}
          value={y}
          tileLocation={locationsEnum.grid}
          x={i}
          y={j}
        />
      );
      grid[i] = <View key={i} style={styles.row}>{row}</View>;
    });

    return (
      <View>{grid}</View>
    );
  }
}

Board.propTypes = {
  // assert board is 11x11 array
}

function mapStateToProps(state) {
  return {
    board: state.boardReducer.board[state.boardReducer.currBoard]
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);