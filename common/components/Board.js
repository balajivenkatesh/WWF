import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Tile from './Tile';
import styles from './styles/allStyles';

class Board extends Component {
  render() {
    const t = new Array(11);
    this.props.board.map((x, i) => {
      const row = new Array(11);
      x.map((y, j) => row[j] = <Tile key={j} value={y}></Tile>);
      t[i] = <View key={i} style={styles.row}>{row}</View>;
    });

    // const t = new Array(11);
    // for (var i = 0; i < 11; i++) {
    //   const row = new Array(11);
    //   for (var j = 0; j < 11; j++) {
    //     row[j] = <Tile key={j} value={this.props.board[i][j]}></Tile>;
    //   }
    //   t[i] = <View key={i} style={{flexDirection: 'row'}}>{row}</View>;
    // }

    return (
      <View>{t}</View>
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