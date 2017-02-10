import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Tile from './Tile';
import styles from './styles/allStyles';

import { onTileSelected } from '../actions/boardActions';
import { locationsEnum } from '../constants/boardConst';

class Board extends Component {
  render() {
    console.log('rendering Board..........');// + this.props.board);
    const grid = new Array(11);
    this.props.board[this.props.currBoard].map((x, i) => {
      const row = new Array(11);
      x.map((y, j) => row[j] = 
        <Tile
          key={11*i+j}
          value={y}
          onPressAction={() => this.props.onTileSelected(locationsEnum.grid, i, j)}
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
    board: state.boardReducer.board,
    currBoard: state.boardReducer.currBoard,
    numBoard: state.boardReducer.numBoard
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTileSelected: (tileLocation, x, y) => dispatch(onTileSelected(tileLocation, x, y))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);