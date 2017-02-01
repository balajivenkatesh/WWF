import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Board from './Board';
import LetterKeyBoard from './LetterKeyBoard';

import { showEnum, locationsEnum } from '../constants/boardConst';

class AppBase extends Component {
  showKeyboard() {
    if (this.props.show === showEnum.keyboard) {
      return (
        <LetterKeyBoard/>
      );
    }
  }

  render() {
    return (
      <View style={{alignItems:'center'}}>
        <Board/>
        {this.showKeyboard()}
      </View>
    );
  }
}

AppBase.propTypes = {

}

function mapStateToProps(state) {
  return {
    board: state.boardReducer.board[state.boardReducer.currBoard],
    show: state.keyboardReducer.show
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBase);